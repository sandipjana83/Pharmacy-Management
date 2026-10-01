import { useState } from "react";
import {
  BellPlus,
  Bot,
  ChevronRight,
  Clock3,
  FileText,
  Mic,
  Paperclip,
  Pill,
  Send,
  ShieldCheck,
} from "lucide-react";

import '../styles/chatbot.css';

const suggestedQuestions = [
  "Which medicines expire next month?",
  "Show low stock items",
  "What is the stock of Paracetamol 500mg?",
  "Generate an expiry report",
];



const expiryMedicines = [
  {
    name: "Omeprazole 20mg",
    batch: "OME-0924",
    days: "5 days left",
    value: "₹6,000",
    type: "danger",
  },
  {
    name: "Amoxicillin 250mg",
    batch: "AMX-0324",
    days: "22 days left",
    value: "₹4,000",
    type: "warning",
  },
  {
    name: "Cetirizine 10mg",
    batch: "CET-1023",
    days: "40 days left",
    value: "₹2,500",
    type: "success",
  },
];

function Chatbot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hello Dr. Rahul! I can help you check stock, expiry dates, batches, suppliers and reports.",
    },
  ]);

  const askQuestion = (question) => {
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: Date.now(), role: "user", text: question },
      {
        id: Date.now() + 1,
        role: "assistant",
        text: "3 medicines are due to expire in the next 30 days. Their estimated stock value is ₹12,500.",
        showSources: true,
      },
    ]);

    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!message.trim()) return;

    askQuestion(message.trim());
  };

  return (
    <div className="ai-page">

      <main className="ai-content">
        <section className="ai-heading">
          <div className="ai-title">
            <span className="ai-robot-icon">
              <Bot size={30} />
            </span>

            <div>
              <h1>Ask MediStock AI</h1>
              <p>Get instant answers from your pharmacy inventory.</p>
            </div>
          </div>

          <div className="ai-trust-card">
            <ShieldCheck size={25} />
            <div>
              <strong>Trusted by pharmacy professionals</strong>
              <span>Answers are based on your uploaded inventory data.</span>
            </div>
          </div>
        </section>

        <section className="ai-layout">
          <aside className="ai-sidebar">
            <div className="ai-side-section">
              <div className="ai-side-heading">
                <h2>💡 Suggested questions</h2>
                <button type="button">See all</button>
              </div>

              <div className="suggested-list">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => askQuestion(question)}
                    className="suggested-question"
                  >
                    <span>{question}</span>
                    <ChevronRight size={18} />
                  </button>
                ))}
              </div>
            </div>

            
          </aside>

          <section className="chat-panel">
            <div className="chat-messages">
              {messages.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat-message ${
                    chat.role === "user" ? "user-message" : "assistant-message"
                  }`}
                >
                  {chat.role === "assistant" && (
                    <span className="message-bot-icon">
                      <Bot size={22} />
                    </span>
                  )}

                  <div className="message-content">
                    <p>{chat.text}</p>

                    {chat.showSources && (
                      <>
                        <div className="medicine-source-list">
                          {expiryMedicines.map((medicine) => (
                            <button
                              key={medicine.batch}
                              type="button"
                              className="medicine-source-card"
                            >
                              <span className="medicine-icon">
                                <Pill size={20} />
                              </span>

                              <div>
                                <strong>{medicine.name}</strong>
                                <span>Batch: {medicine.batch}</span>
                                <small className={medicine.type}>
                                  {medicine.days}
                                </small>
                                <em>Est. stock value: {medicine.value}</em>
                              </div>

                              <ChevronRight size={19} />
                            </button>
                          ))}
                        </div>

                        <div className="answer-actions">
                          <button type="button" className="view-report-button">
                            <FileText size={17} />
                            View expiry report
                          </button>

                          <button type="button" className="create-alert-button">
                            <BellPlus size={17} />
                            Create alert
                          </button>
                        </div>
                      </>
                    )}

                    <time>10:13 AM</time>
                  </div>
                </div>
              ))}
            </div>

            <form className="chat-composer" onSubmit={handleSubmit}>
              <button type="button" className="composer-icon" aria-label="Attach file">
                <Paperclip size={21} />
              </button>

              <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Ask about medicines, batches, stock or expiry..."
              />

              <button type="button" className="composer-icon" aria-label="Voice input">
                <Mic size={21} />
              </button>

              <button className="send-button" type="submit" aria-label="Send message">
                <Send size={21} />
              </button>
            </form>

            <p className="data-note">
              ⓘ Answers are based on your uploaded inventory data.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Chatbot;