"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

export default function ChatBox() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages([...messages, userMsg]);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, userMsg] }),
    });
    const data = await res.json();
    setMessages([
      ...messages,
      userMsg,
      { role: "assistant", content: data.reply },
    ]);
    setLoading(false);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-[var(--color-red-rev)] text-white p-4 rounded-full shadow-lg hover:bg-[var(--color-red-rev-hover)] transition z-50"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-[340px] sm:w-[380px] h-[520px] bg-[var(--color-beige-light)] border border-[var(--color-brown-earth)] rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            <div className="flex justify-between items-center px-5 py-3 bg-[var(--color-red-rev)] text-white">
              <div className="flex items-center gap-2">
                <span className="text-xl">🤖</span>
                <h3 className="font-semibold text-base text-white m-0">
                  Trợ lý Giải Phóng AI
                </h3>
              </div>
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="hover:text-yellow-300 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div
              ref={chatRef}
              className="flex-1 px-5 py-4 overflow-y-auto bg-gradient-to-b from-white/60 to-[var(--color-beige-light)] space-y-3"
            >
              {messages.length === 0 && (
                <div className="text-center text-sm text-gray-500 mt-10 italic">
                  💬 Hỏi tôi về lịch sử Việt Nam 1939–1945...
                </div>
              )}

              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      m.role === "user"
                        ? "bg-[var(--color-red-rev)] text-white rounded-br-none"
                        : "bg-white text-[var(--color-gray-text)] border border-[var(--color-brown-earth)] rounded-bl-none"
                    }`}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <p className="text-xs italic text-gray-400 text-center">
                  Đang soạn trả lời...
                </p>
              )}
            </div>

            <div className="p-4 border-t border-[var(--color-brown-earth)] bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Hỏi về lịch sử 1939–1945..."
                  className="flex-1 border border-gray-300 rounded-2xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-red-rev)] transition"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className="bg-[var(--color-red-rev)] text-white px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-[var(--color-red-rev-hover)] transition disabled:opacity-50"
                >
                  Gửi
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
