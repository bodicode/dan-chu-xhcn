"use client";

import { motion } from "framer-motion";
import { Scale, BookOpen } from "lucide-react";

export default function FooterSummary() {
  return (
    <footer
      id="footer-summary"
      className="relative w-full pt-12 pb-2 px-6 bg-gradient-to-b from-white via-red-50 to-red-100 text-gray-800 border-t border-red-200"
    >
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex justify-center mb-3">
            <Scale className="w-10 h-10 text-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 leading-snug">
            Chủ đề: Dân chủ ở Việt Nam có phải là{" "}
            <span className="italic text-red-500">“tự do tuyệt đối”</span> muốn
            làm gì thì làm?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-12 space-y-4"
        >
          <div className="flex justify-center mb-3">
            <BookOpen className="w-8 h-8 text-red-600" />
          </div>
          <p className="text-gray-700 text-lg leading-relaxed max-w-6xl mx-auto">
            <span className="font-semibold text-red-600">Tổng kết:</span> Dân
            chủ ở Việt Nam là nền dân chủ{" "}
            <span className="italic">
              “của nhân dân, do nhân dân và vì nhân dân”
            </span>
            , trong đó quyền tự do cá nhân được bảo đảm bằng pháp luật, gắn liền
            với kỷ cương và trách nhiệm xã hội — hướng tới sự phát triển bền
            vững, công bằng và nhân văn.
          </p>
          <p className="text-sm text-gray-500 mt-12">
            © 2025 – Sưu tầm & trình bày học liệu: Chủ nghĩa xã hội khoa học
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
