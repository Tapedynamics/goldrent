/**
 * Gold Rent Italia - AI Chatbot Widget
 *
 * Integrazione:
 * 1. Includi il CSS: <link rel="stylesheet" href="https://your-server.com/chatbot.css">
 * 2. Includi questo JS: <script src="https://your-server.com/chatbot.js"></script>
 * 3. Inizializza: <script>GoldRentChatbot.init({ apiUrl: 'https://your-server.com' });</script>
 */

(function() {
  'use strict';

  // Configurazione
  const GoldRentChatbot = {
    config: {
      apiUrl: 'http://localhost:3000', // Cambia in produzione
      conversationId: null,
      isOpen: false,
      quickRepliesShown: false
    },

    // Inizializza il chatbot
    init: function(options = {}) {
      this.config.apiUrl = options.apiUrl || this.config.apiUrl;
      this.config.conversationId = this.generateId();

      // Aspetta che il DOM sia pronto
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.render());
      } else {
        this.render();
      }
    },

    // Genera ID univoco per la conversazione
    generateId: function() {
      return 'conv_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },

    // Renderizza l'interfaccia
    render: function() {
      const container = document.createElement('div');
      container.id = 'goldrent-chatbot-container';
      container.innerHTML = `
        <!-- Pulsante floating -->
        <button id="goldrent-chatbot-button" aria-label="Apri chat">
          <svg viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
          </svg>
        </button>

        <!-- Finestra chat -->
        <div id="goldrent-chatbot-window">
          <!-- Header -->
          <div id="goldrent-chatbot-header">
            <h3>💬 Assistente Gold Rent</h3>
            <button id="goldrent-chatbot-close" aria-label="Chiudi chat">&times;</button>
          </div>

          <!-- Area messaggi -->
          <div id="goldrent-chatbot-messages"></div>

          <!-- Form lead -->
          <div id="goldrent-lead-form">
            <h4>📋 Lasciaci i tuoi dati</h4>
            <form id="goldrent-lead-form-element">
              <input type="text" id="goldrent-lead-name" placeholder="Nome e Cognome *" required>
              <input type="email" id="goldrent-lead-email" placeholder="Email *" required>
              <input type="tel" id="goldrent-lead-phone" placeholder="Telefono">
              <select id="goldrent-lead-interest">
                <option value="">Tipo di servizio</option>
                <option value="Noleggio breve termine">Noleggio breve termine</option>
                <option value="Noleggio lungo termine">Noleggio lungo termine</option>
                <option value="Noleggio con conducente">Noleggio con conducente</option>
                <option value="Preventivo personalizzato">Preventivo personalizzato</option>
                <option value="Altro">Altro</option>
              </select>
              <textarea id="goldrent-lead-message" placeholder="Note aggiuntive" rows="2"></textarea>
              <button type="submit">Invia richiesta</button>
            </form>
          </div>

          <!-- Input area -->
          <div id="goldrent-chatbot-input-area">
            <input
              type="text"
              id="goldrent-chatbot-input"
              placeholder="Scrivi un messaggio..."
              autocomplete="off"
            >
            <button id="goldrent-chatbot-send" aria-label="Invia messaggio">
              <svg viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(container);
      this.attachEventListeners();
      this.loadConfig();
    },

    // Carica configurazione dal server
    loadConfig: async function() {
      try {
        const response = await fetch(`${this.config.apiUrl}/api/chat/config`);
        const config = await response.json();

        // Mostra messaggio di benvenuto
        this.addMessage(config.welcomeMessage, 'bot');

        // Mostra quick replies
        // Quick replies disabilitati
        // if (config.quickReplies && config.quickReplies.length > 0) {
        //   this.showQuickReplies(config.quickReplies);
        // }
      } catch (error) {
        console.error('Errore caricamento config:', error);
        this.addMessage('Ciao! Come posso aiutarti oggi?', 'bot');
      }
    },

    // Attach event listeners
    attachEventListeners: function() {
      const button = document.getElementById('goldrent-chatbot-button');
      const close = document.getElementById('goldrent-chatbot-close');
      const input = document.getElementById('goldrent-chatbot-input');
      const send = document.getElementById('goldrent-chatbot-send');
      const leadForm = document.getElementById('goldrent-lead-form-element');

      button.addEventListener('click', () => this.toggleChat());
      close.addEventListener('click', () => this.toggleChat());
      send.addEventListener('click', () => this.sendMessage());
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.sendMessage();
      });
      leadForm.addEventListener('submit', (e) => this.submitLead(e));
    },

    // Toggle chat aperta/chiusa
    toggleChat: function() {
      const window = document.getElementById('goldrent-chatbot-window');
      const button = document.getElementById('goldrent-chatbot-button');

      this.config.isOpen = !this.config.isOpen;

      if (this.config.isOpen) {
        window.classList.add('open');
        button.style.display = 'none';
        document.getElementById('goldrent-chatbot-input').focus();
      } else {
        window.classList.remove('open');
        button.style.display = 'flex';
      }
    },

    // Mostra quick replies
    showQuickReplies: function(replies) {
      if (this.config.quickRepliesShown) return;

      const container = document.getElementById('goldrent-quick-replies');
      container.innerHTML = '';

      replies.forEach(reply => {
        const button = document.createElement('button');
        button.className = 'goldrent-quick-reply';
        button.textContent = reply;
        button.addEventListener('click', () => {
          this.sendMessage(reply);
          container.innerHTML = '';
        });
        container.appendChild(button);
      });

      this.config.quickRepliesShown = true;
    },

    // Invia messaggio
    sendMessage: async function(text = null) {
      const input = document.getElementById('goldrent-chatbot-input');
      const message = text || input.value.trim();

      if (!message) return;

      // Aggiungi messaggio utente
      this.addMessage(message, 'user');
      input.value = '';

      // Disabilita input durante l'invio
      const send = document.getElementById('goldrent-chatbot-send');
      send.disabled = true;
      input.disabled = true;

      // Mostra typing indicator
      this.showTyping();

      try {
        const response = await fetch(`${this.config.apiUrl}/api/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: message,
            conversationId: this.config.conversationId
          })
        });

        if (!response.ok) throw new Error('Errore nella risposta');

        const data = await response.json();

        // Rimuovi typing indicator
        this.hideTyping();

        // Aggiungi risposta bot
        this.addMessage(data.message, 'bot');

        // Se il bot sta chiedendo info di contatto, mostra il form
        if (data.isAskingForContact) {
          setTimeout(() => this.showLeadForm(), 1000);
        }

      } catch (error) {
        console.error('Errore invio messaggio:', error);
        this.hideTyping();
        this.addMessage('Mi dispiace, si è verificato un errore. Riprova più tardi.', 'bot');
      } finally {
        send.disabled = false;
        input.disabled = false;
        input.focus();
      }
    },

    // Aggiungi messaggio alla chat
    addMessage: function(text, sender) {
      const messagesContainer = document.getElementById('goldrent-chatbot-messages');
      const messageDiv = document.createElement('div');
      messageDiv.className = `goldrent-message ${sender}`;

      const avatar = sender === 'bot' ? '🚗' : '👤';
      const time = new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });

      messageDiv.innerHTML = `
        <div class="goldrent-message-avatar">${avatar}</div>
        <div>
          <div class="goldrent-message-content">${this.escapeHtml(text)}</div>
          <div class="goldrent-message-time">${time}</div>
        </div>
      `;

      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    },

    // Mostra typing indicator
    showTyping: function() {
      const messagesContainer = document.getElementById('goldrent-chatbot-messages');
      const typingDiv = document.createElement('div');
      typingDiv.className = 'goldrent-message bot';
      typingDiv.id = 'goldrent-typing-indicator';
      typingDiv.innerHTML = `
        <div class="goldrent-message-avatar">🚗</div>
        <div class="goldrent-typing">
          <span></span>
          <span></span>
          <span></span>
        </div>
      `;
      messagesContainer.appendChild(typingDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    },

    // Nascondi typing indicator
    hideTyping: function() {
      const typing = document.getElementById('goldrent-typing-indicator');
      if (typing) typing.remove();
    },

    // Mostra form lead inline nella conversazione
    showLeadForm: function() {
      // Aggiungi il form come messaggio nella conversazione
      const messagesContainer = document.getElementById('goldrent-chatbot-messages');

      // Controlla se il form è già presente
      if (document.getElementById('goldrent-inline-lead-form')) return;

      const formDiv = document.createElement('div');
      formDiv.className = 'goldrent-message bot';
      formDiv.id = 'goldrent-inline-lead-form';
      formDiv.innerHTML = `
        <div class="goldrent-message-content" style="width: 100%;">
          <form id="goldrent-inline-form-element" class="goldrent-form-inline">
            <div class="form-group">
              <label>Nome e Cognome *</label>
              <input type="text" id="goldrent-inline-name" required placeholder="Mario Rossi">
            </div>
            <div class="form-group">
              <label>Email *</label>
              <input type="email" id="goldrent-inline-email" required placeholder="mario.rossi@email.com">
            </div>
            <div class="form-group">
              <label>Telefono</label>
              <input type="tel" id="goldrent-inline-phone" placeholder="329 00 92 394">
            </div>
            <div class="form-group">
              <label>Tipo di veicolo desiderato (opzionale)</label>
              <input type="text" id="goldrent-inline-interest" placeholder="Es: SUV, Berlina, Commerciale">
            </div>
            <button type="submit" class="btn-submit">Invia Richiesta</button>
          </form>
        </div>
      `;

      messagesContainer.appendChild(formDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

      // Aggiungi event listener al form
      document.getElementById('goldrent-inline-form-element').addEventListener('submit', (e) => this.submitInlineLead(e));

      // Focus sul primo campo
      setTimeout(() => document.getElementById('goldrent-inline-name').focus(), 100);
    },

    // Nascondi form lead
    hideLeadForm: function() {
      const form = document.getElementById('goldrent-lead-form');
      const inputArea = document.getElementById('goldrent-chatbot-input-area');

      form.classList.remove('show');
      inputArea.style.display = 'flex';

      // Reset form
      document.getElementById('goldrent-lead-form-element').reset();
    },

    // Invia lead dal form inline
    submitInlineLead: async function(e) {
      e.preventDefault();

      const name = document.getElementById('goldrent-inline-name').value.trim();
      const email = document.getElementById('goldrent-inline-email').value.trim();
      const phone = document.getElementById('goldrent-inline-phone').value.trim();
      const interest = document.getElementById('goldrent-inline-interest').value.trim();

      if (!name || !email) {
        this.addMessage('Nome e email sono obbligatori', 'bot');
        return;
      }

      // Disabilita il form durante l'invio
      const submitBtn = document.querySelector('#goldrent-inline-form-element button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Invio in corso...';

      try {
        const response = await fetch(`${this.config.apiUrl}/api/leads`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            interest,
            message: 'Richiesta preventivo dal chatbot',
            conversationId: this.config.conversationId
          })
        });

        const data = await response.json();

        if (data.success) {
          // Rimuovi il form
          document.getElementById('goldrent-inline-lead-form').remove();

          // Aggiungi messaggio di conferma
          this.addMessage('✅ Grazie ' + name + '! Abbiamo ricevuto la tua richiesta. Sarai contattato al più presto da un nostro consulente.', 'bot');
        } else {
          throw new Error('Errore nel salvataggio');
        }
      } catch (error) {
        console.error('Errore invio lead:', error);
        this.addMessage('Si è verificato un errore. Per favore riprova o contattaci al 329 00 92 394', 'bot');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Invia Richiesta';
      }
    },

    // Invia lead
    submitLead: async function(e) {
      e.preventDefault();

      const name = document.getElementById('goldrent-lead-name').value.trim();
      const email = document.getElementById('goldrent-lead-email').value.trim();
      const phone = document.getElementById('goldrent-lead-phone').value.trim();
      const interest = document.getElementById('goldrent-lead-interest').value;
      const message = document.getElementById('goldrent-lead-message').value.trim();

      if (!name || !email) {
        alert('Nome e email sono obbligatori');
        return;
      }

      try {
        const response = await fetch(`${this.config.apiUrl}/api/leads`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            interest,
            message,
            conversationId: this.config.conversationId
          })
        });

        const data = await response.json();

        if (response.ok) {
          this.hideLeadForm();
          this.addMessage(data.message, 'bot');
          this.addMessage('C\'è altro che posso fare per te?', 'bot');
        } else {
          alert(data.error || 'Errore nell\'invio dei dati');
        }

      } catch (error) {
        console.error('Errore invio lead:', error);
        alert('Si è verificato un errore. Riprova più tardi.');
      }
    },

    // Escape HTML per sicurezza
    escapeHtml: function(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML.replace(/\n/g, '<br>');
    }
  };

  // Esponi globalmente
  window.GoldRentChatbot = GoldRentChatbot;

})();
