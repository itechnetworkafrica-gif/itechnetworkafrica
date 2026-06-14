import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import gotecxLogo from "@assets/file_0000000069c471f4b1db489ae2ff9c8b_1781449096936.png";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hello! I'm the Gotecx AI Assistant. How can I help you today? I can answer questions about our products, services, solutions, or connect you with our team."
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = ["Gotecx POS", "Our Services", "Request Demo", "Contact Sales"];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let botResponse = "Thank you for reaching out to Gotecx! For detailed assistance, please contact us at itechnetworkafrica@gmail.com or call +231 776 836 689.";

      if (lowerText.includes("pos") || lowerText.includes("gotecx pos")) {
        botResponse = "Gotecx POS is our flagship point-of-sale and business management platform. It includes real-time inventory management, multi-location support, advanced analytics, and offline mode. Would you like to request a demo?";
      } else if (lowerText.includes("service")) {
        botResponse = "We offer a full range of technology services including software development, mobile apps, web development, cloud infrastructure, UI/UX design, cybersecurity, IT consulting, digital marketing, and AI integration.";
      } else if (lowerText.includes("demo")) {
        botResponse = "I'd love to set up a demo for you! Please visit our Contact page or call us at +231 776 836 689. Our team will schedule a personalized demonstration.";
      } else if (lowerText.includes("contact") || lowerText.includes("sales")) {
        botResponse = "You can reach us at: Phone: +231 776 836 689 | Email: itechnetworkafrica@gmail.com | WhatsApp: wa.me/231776836689";
      } else if (lowerText.includes("price") || lowerText.includes("pricing") || lowerText.includes("cost")) {
        botResponse = "Our pricing is customized based on your organization's specific needs. Please contact our sales team for a personalized quote.";
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(var(--primary),0.39)] hover:bg-primary/90 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute inset-0 rounded-full border border-primary animate-ping"></span>
        <span className="absolute right-full mr-4 bg-black/80 text-white text-xs font-semibold py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          AI Assistant
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-full max-w-[400px] h-[500px] bg-card border border-border rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="bg-[#0D1421] text-white p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
                  <img src={gotecxLogo} alt="Gotecx" className="w-full h-auto" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Gotecx AI Assistant</h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/70">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground p-4 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    <motion.div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-background border-t border-border">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {quickReplies.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(reply)}
                    className="whitespace-nowrap px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-xs font-medium transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex items-center gap-2 mt-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-muted border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
