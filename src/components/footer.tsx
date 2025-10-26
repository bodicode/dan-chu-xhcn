"use client";

import { motion } from "framer-motion";
import { Scale, BookOpen } from "lucide-react";

export default function FooterSummary() {
  return (
    <footer
      id="footer-summary"
      className="relative w-full pt-16 pb-6 px-6 bg-gradient-to-b from-white via-rose-50/60 to-red-100 text-gray-800 border-t border-red-200"
    >
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* ===== Tiêu đề ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex justify-center mb-3">
            <Scale className="w-10 h-10 text-red-600 drop-shadow-sm" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug max-w-5xl mx-auto">
            <span className="italic ">
              “Dân chủ ở Việt Nam có phải là tự do tuyệt đối?”
            </span>
          </h2>
        </motion.div>

        {/* ===== Nội dung chính ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center space-y-6  max-w-7xl mx-auto backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center mb-2"
          >
            - <BookOpen className="w-8 h-8 text-red-600 mx-4" /> -
          </motion.div>

          <p className="leading-relaxed text-gray-700">
            Dân chủ ở Việt Nam{" "}
            <span className="font-semibold">
              không phải là “tự do tuyệt đối”
            </span>
            , mà là{" "}
            <span className="font-semibold">
              tự do trong khuôn khổ pháp luật
            </span>
            , gắn liền với kỷ luật, kỷ cương và trách nhiệm xã hội.
          </p>

          <p className="leading-relaxed text-gray-700">
            Mỗi công dân được quyền nói, quyền làm, nhưng{" "}
            <span className="font-semibold text-red-600">
              phải chịu trách nhiệm với lời nói và hành động của mình
            </span>
            . Chính sự kết hợp giữa tự do và trách nhiệm ấy tạo nên một nền dân
            chủ thực chất, bền vững – nơi tự do của mỗi người được bảo vệ bởi
            trật tự chung của toàn xã hội.
          </p>
        </motion.div>

        {/* ===== Dòng cuối ===== */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 pt-6"
        >
          © 2025 – Học liệu tương tác | Chủ nghĩa xã hội khoa học
        </motion.p>
      </div>
    </footer>
  );
}
