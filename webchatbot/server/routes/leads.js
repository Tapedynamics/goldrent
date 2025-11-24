const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const LEADS_FILE = path.join(__dirname, '../../data/leads.json');

// Assicurati che la cartella data esista
async function ensureDataDir() {
  const dataDir = path.join(__dirname, '../../data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Leggi i lead dal file
async function readLeads() {
  try {
    await ensureDataDir();
    const data = await fs.readFile(LEADS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

// Scrivi i lead nel file
async function writeLeads(leads) {
  await ensureDataDir();
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// POST /api/leads - Salva un nuovo lead
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, vatNumber, interest, message, conversationId } = req.body;

    // Validazione
    if (!name || !email) {
      return res.status(400).json({ error: 'Nome e email sono obbligatori' });
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email non valida' });
    }

    // Crea il lead
    const lead = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : null,
      vatNumber: vatNumber ? vatNumber.trim() : null,
      interest: interest || 'Non specificato',
      message: message || '',
      conversationId: conversationId || null,
      createdAt: new Date().toISOString(),
      source: 'chatbot'
    };

    // Leggi i lead esistenti
    const leads = await readLeads();

    // Controlla duplicati (stesso email nelle ultime 24h)
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const isDuplicate = leads.some(l =>
      l.email === lead.email &&
      l.createdAt > oneDayAgo
    );

    if (isDuplicate) {
      return res.status(409).json({
        error: 'Hai già inviato una richiesta recentemente. Ti contatteremo presto!'
      });
    }

    // Aggiungi il nuovo lead
    leads.push(lead);
    await writeLeads(leads);

    console.log(`✅ Nuovo lead salvato: ${lead.name} (${lead.email})`);

    res.status(201).json({
      success: true,
      message: 'Grazie! I tuoi dati sono stati salvati. Ti contatteremo presto!',
      leadId: lead.id
    });

  } catch (error) {
    console.error('Lead save error:', error);
    res.status(500).json({ error: 'Errore nel salvataggio dei dati' });
  }
});

// GET /api/leads - Recupera tutti i lead (protetto - solo per admin)
router.get('/', async (req, res) => {
  try {
    // IMPORTANTE: In produzione, aggiungi autenticazione!
    const adminKey = req.headers['x-admin-key'];
    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ error: 'Non autorizzato' });
    }

    const leads = await readLeads();

    res.json({
      total: leads.length,
      leads: leads.sort((a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
      )
    });

  } catch (error) {
    console.error('Leads retrieval error:', error);
    res.status(500).json({ error: 'Errore nel recupero dei lead' });
  }
});

// GET /api/leads/export - Esporta lead in CSV
router.get('/export', async (req, res) => {
  try {
    const adminKey = req.headers['x-admin-key'];
    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ error: 'Non autorizzato' });
    }

    const leads = await readLeads();

    // Crea CSV
    const headers = ['ID', 'Nome', 'Email', 'Telefono', 'Partita IVA', 'Interesse', 'Messaggio', 'Data'];
    const rows = leads.map(l => [
      l.id,
      l.name,
      l.email,
      l.phone || '',
      l.vatNumber || '',
      l.interest,
      l.message.replace(/"/g, '""'), // Escape virgolette
      l.createdAt
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=goldrent-leads.csv');
    res.send(csv);

  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({ error: 'Errore nell\'esportazione' });
  }
});

module.exports = router;
