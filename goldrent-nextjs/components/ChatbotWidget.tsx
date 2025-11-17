"use client";

import { useState, useEffect, useRef } from "react";

// Tipi TypeScript
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatResponse {
  message: string;
  conversationId: string;
  isAskingForContact?: boolean;
  timestamp: string;
}

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
}

const API_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URL || "http://localhost:3000";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string>("");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormData, setLeadFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Inizializza conversazione
  useEffect(() => {
    // Genera conversation ID univoco
    const storedId = localStorage.getItem("goldrent_conversation_id");
    if (storedId) {
      setConversationId(storedId);
    } else {
      const newId = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setConversationId(newId);
      localStorage.setItem("goldrent_conversation_id", newId);
    }

    // Messaggio di benvenuto
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content:
            "Ciao! 👋 Sono l'assistente virtuale di Gold Rent Italia. Come posso aiutarti oggi?",
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  // Auto-scroll ai nuovi messaggi
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input quando chat si apre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Invia messaggio
  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: `msg_${Date.now()}`,
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          conversationId: conversationId,
        }),
      });

      if (!response.ok) {
        throw new Error("Errore nella risposta del server");
      }

      const data: ChatResponse = await response.json();

      // Controlla se il messaggio contiene [SHOW_LEAD_FORM]
      const shouldShowForm = data.message.includes("[SHOW_LEAD_FORM]");
      const cleanMessage = data.message.replace("[SHOW_LEAD_FORM]", "").trim();

      const assistantMessage: Message = {
        id: `msg_${Date.now()}_assistant`,
        role: "assistant",
        content: cleanMessage,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (shouldShowForm) {
        setShowLeadForm(true);
      }
    } catch (error) {
      console.error("Errore invio messaggio:", error);

      const errorMessage: Message = {
        id: `msg_${Date.now()}_error`,
        role: "assistant",
        content:
          "Mi dispiace, si è verificato un errore. Riprova o contattaci al 329 00 92 394.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Submit form lead
  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLead(true);

    try {
      const response = await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: leadFormData.name,
          email: leadFormData.email,
          phone: leadFormData.phone,
          interest: leadFormData.interest,
          conversationId: conversationId,
        }),
      });

      if (!response.ok) {
        throw new Error("Errore nell'invio dei dati");
      }

      const data = await response.json();

      // Conferma nel chat
      const confirmMessage: Message = {
        id: `msg_${Date.now()}_confirm`,
        role: "assistant",
        content:
          "✅ Perfetto! I tuoi dati sono stati salvati. Ti contatteremo presto per fornirti tutte le informazioni! Nel frattempo, posso aiutarti con altro?",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, confirmMessage]);
      setShowLeadForm(false);
      setLeadFormData({ name: "", email: "", phone: "", interest: "" });
    } catch (error) {
      console.error("Errore invio lead:", error);
      alert("Si è verificato un errore. Riprova o contattaci direttamente.");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // Handler tastiera
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Pulsante Chat Flottante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-accent-cyan hover:bg-accent-teal text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent-cyan/50"
          aria-label="Apri chat"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Finestra Chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-dark via-primary-gray to-primary-dark text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent-cyan rounded-full flex items-center justify-center text-lg font-bold">
                GR
              </div>
              <div>
                <h3 className="font-semibold text-sm">
                  Assistente Gold Rent
                </h3>
                <p className="text-xs text-gray-300">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Chiudi chat"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messaggi */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === "user"
                      ? "bg-accent-cyan text-white rounded-br-sm"
                      : "bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.role === "user" ? "text-cyan-100" : "text-gray-400"
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString("it-IT", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* Form Lead */}
            {showLeadForm && (
              <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-accent-cyan">
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                  📋 Compila per ricevere un preventivo
                </h4>
                <form onSubmit={submitLead} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Nome e cognome *"
                    required
                    value={leadFormData.name}
                    onChange={(e) =>
                      setLeadFormData({ ...leadFormData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={leadFormData.email}
                    onChange={(e) =>
                      setLeadFormData({
                        ...leadFormData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Telefono"
                    value={leadFormData.phone}
                    onChange={(e) =>
                      setLeadFormData({
                        ...leadFormData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Tipo di veicolo (opzionale)"
                    value={leadFormData.interest}
                    onChange={(e) =>
                      setLeadFormData({
                        ...leadFormData,
                        interest: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={isSubmittingLead}
                    className="w-full bg-accent-cyan hover:bg-accent-teal text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm disabled:opacity-50"
                  >
                    {isSubmittingLead ? "Invio..." : "Invia Richiesta"}
                  </button>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Scrivi un messaggio..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent text-sm disabled:bg-gray-100"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-accent-cyan hover:bg-accent-teal text-white rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Invia messaggio"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
