"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Section5Conclusion() {
  const items = [
    "Quyền tự do cá nhân và lợi ích cộng đồng là hai mặt thống nhất của nền dân chủ xã hội chủ nghĩa.",
    "Tự do của mỗi người chỉ có thể được bảo đảm khi gắn liền với trách nhiệm xã hội và tôn trọng lợi ích chung.",
    "Dân chủ ở Việt Nam vì thế không phải là “tự do tuyệt đối”, mà là tự do trong khuôn khổ pháp luật, có kỷ cương và định hướng xã hội chủ nghĩa.",
  ];

  return (
    <section
      id="ket-luan"
      className="relative w-full py-12 px-6 bg-gradient-to-b from-orange-50 via-white to-rose-50 text-gray-800"
    >
      <div className="max-w-7xl mx-auto text-center space-y-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold "
        >
          Kết luận
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto relative bg-white/80 backdrop-blur-md border border-orange-100 shadow-[0_8px_25px_rgba(0,0,0,0.05)] p-10 rounded-3xl text-left space-y-6"
        >
          {items.map((text, i) => (
            <li
              key={i}
              className="relative pl-6 leading-relaxed text-gray-700 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:rounded-full before:bg-red-500"
            >
              <span className={i === 0 ? "font-semibold text-gray-800" : ""}>
                {text}
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto max-w-7xl bg-gradient-to-br from-orange-100/70 to-rose-100/60 border border-orange-200 rounded-2xl p-8 italic text-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <Quote className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 text-orange-400 opacity-50" />
          <p className="md:text-xl leading-relaxed">
            “Dân chủ gắn liền với kỷ luật, kỷ cương và phải được thể chế hóa
            bằng pháp luật, được pháp luật bảo đảm.”
          </p>
          <footer className="text-right text-sm font-medium text-gray-600 mt-3">
            — Giáo trình Chủ nghĩa xã hội khoa học
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
