const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const config = require('../config');

// Inizializza OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Memorizza le conversazioni (in produzione, usa un database o Redis)
const conversations = new Map();

// POST /api/chat - Invia un messaggio al chatbot
router.post('/', async (req, res) => {
  try {
    const { message, conversationId } = req.body;

    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Recupera o crea la conversazione
    let conversationHistory = conversations.get(conversationId) || [];

    // Aggiungi il messaggio dell'utente alla cronologia
    conversationHistory.push({
      role: 'user',
      content: message
    });

    // Prepara i messaggi per OpenAI
    const messages = [
      {
        role: 'system',
        content: config.chatbot.systemPrompt
      },
      ...conversationHistory
    ];

    // Chiama OpenAI
    const completion = await openai.chat.completions.create({
      model: config.openai.model,
      messages: messages,
      temperature: config.openai.temperature,
      max_tokens: config.openai.maxTokens
    });

    const assistantMessage = completion.choices[0].message.content;

    // Aggiungi la risposta alla cronologia
    conversationHistory.push({
      role: 'assistant',
      content: assistantMessage
    });

    // Salva la conversazione (limita a ultimi 10 messaggi per risparmiare token)
    if (conversationHistory.length > 20) {
      conversationHistory = conversationHistory.slice(-20);
    }
    conversations.set(conversationId, conversationHistory);

    // Rileva se il bot sta chiedendo informazioni di contatto (per attivare il form lead)
    const isAskingForContact = detectLeadIntent(assistantMessage);

    res.json({
      message: assistantMessage,
      conversationId,
      isAskingForContact,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat error:', error);

    if (error.code === 'insufficient_quota') {
      return res.status(503).json({
        error: 'Il servizio è temporaneamente non disponibile. Riprova più tardi.'
      });
    }

    res.status(500).json({
      error: 'Si è verificato un errore. Riprova più tardi.'
    });
  }
});

// Funzione per rilevare se il bot sta chiedendo dati di contatto
function detectLeadIntent(message) {
  const keywords = [
    'nome',
    'email',
    'telefono',
    'contatto',
    'ricontattare',
    'preventivo',
    'dati'
  ];

  const lowerMessage = message.toLowerCase();
  return keywords.some(keyword => lowerMessage.includes(keyword));
}

// GET /api/chat/config - Ottieni configurazione chatbot
router.get('/config', (req, res) => {
  res.json({
    name: config.chatbot.name,
    welcomeMessage: config.chatbot.welcomeMessage,
    quickReplies: config.chatbot.quickReplies
  });
});

module.exports = router;
