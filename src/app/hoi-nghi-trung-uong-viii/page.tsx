"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function HoiNghi8Page() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[var(--color-beige-light)] min-h-screen text-[var(--color-gray-text)]"
    >
      {/* === HERO SECTION === */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/hoi-nghi-1941.jpg"
            alt="Hội nghị Trung ương VIII - Pác Bó, Cao Bằng"
            fill
            className="object-cover brightness-[0.5]"
            priority
          />
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brown-earth)]/70 via-emerald-900/40 to-transparent" />

        {/* Hero text */}
        <div className="relative text-center z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg"
          >
            Hội nghị Trung ương VIII
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mt-3"
          >
            (5/1941) – Pác Bó, Cao Bằng
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 italic text-white/85 max-w-2xl mx-auto border-l-4 border-emerald-400/70 pl-4 leading-relaxed"
          >
            “Trong lúc này, quyền lợi của bộ phận, của giai cấp phải đặt dưới sự
            sinh tử, tồn vong của quốc gia, của dân tộc.”
          </motion.blockquote>
        </div>
      </section>

      {/* === MAIN CONTENT === */}
      <section className="max-w-6xl mx-auto py-10 px-6 md:px-12 space-y-6 relative">
        {/* Decorative vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-600/40 via-transparent to-transparent" />

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg leading-relaxed relative"
        >
          Hội nghị Trung ương VIII của Đảng Cộng sản Đông Dương diễn ra tại hang
          Pác Bó (Cao Bằng) từ ngày 10 đến 19 tháng 5 năm 1941 do Nguyễn Ái Quốc
          chủ trì. Đây là hội nghị đánh dấu bước ngoặt trọng đại trong đường lối
          cách mạng Việt Nam, chuyển hướng chiến lược sang nhiệm vụ hàng đầu:
          giải phóng dân tộc.
        </motion.p>

        {/* Bullet points */}
        <div className="space-y-6">
          {[
            "Xác định mâu thuẫn chủ yếu: giữa toàn thể dân tộc Việt Nam với đế quốc Pháp và phát xít Nhật.",
            "Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, coi đó là nhiệm vụ sống còn của toàn dân.",
            "Khẳng định: 'Trong lúc này quyền lợi của bộ phận, của giai cấp phải đặt dưới sự sinh tử, tồn vong của quốc gia, dân tộc'.",
            "Giải quyết vấn đề dân tộc theo nguyên tắc dân tộc tự quyết cho Việt Nam, Cao Miên, Ai Lao.",
            "Thành lập Mặt trận Việt Minh – quy tụ mọi tầng lớp nhân dân yêu nước.",
            "Xác định chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm của toàn Đảng, toàn dân.",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="text-emerald-600 text-lg font-semibold mt-[2px]">
                ◆
              </span>
              <p className="flex-1 leading-relaxed text-[17px]">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mt-16 p-8 bg-white/90 border-l-[6px] border-emerald-600 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] backdrop-blur-sm"
        >
          <Quote
            size={46}
            className="absolute top-5 left-5 text-emerald-600/20"
          />
          <p className="relative z-10 italic text-lg leading-relaxed text-[var(--color-gray-text)]">
            “Phải đặt lợi ích Tổ quốc lên trên hết, không phân biệt giai cấp,
            dân tộc nào cũng có quyền hưởng tự do, độc lập.”
          </p>
          <p className="relative z-10 mt-5 text-sm text-[var(--color-brown-earth)] font-medium text-right">
            — Nguyễn Ái Quốc, Hội nghị Trung ương VIII, 1941
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-12 border-t border-[var(--color-brown-earth)]/20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/hoi-nghi-trung-uong-vi"
              className="group flex items-center gap-2 text-[var(--color-red-rev)] hover:text-[var(--color-red-rev-hover)] transition-colors"
            >
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
              <span>Hội nghị VI</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/#boi-canh"
              className="group flex items-center gap-2 text-[var(--color-red-rev)] hover:text-[var(--color-red-rev-hover)] transition-colors"
            >
              <span>Trang chính</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
