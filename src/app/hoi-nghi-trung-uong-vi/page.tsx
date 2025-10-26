"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function HoiNghi6Page() {
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
            src="/hoi-nghi-1939.jpg"
            alt="Hội nghị Trung ương VI"
            fill
            className="object-cover brightness-[0.45]"
            priority
          />
        </motion.div>

        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-color-red-rev from-[var(--color-brown-earth)]/60 via-transparent to-transparent" />

        {/* Title Content */}
        <div className="relative text-center z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg"
          >
            Hội nghị Trung ương VI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 mt-3"
          >
            (11/1939) – Bà Điểm, Hóc Môn, Gia Định
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 italic text-white/85 max-w-2xl mx-auto border-l-4 border-[var(--color-red-rev)]/60 pl-4 text-base md:text-lg leading-relaxed"
          >
            “Hoàn cảnh Đông Dương sẽ tiến bước đến vấn đề giải phóng dân tộc.”
          </motion.blockquote>
        </div>
      </section>

      {/* === MAIN CONTENT === */}
      <section className="max-w-6xl mx-auto py-10 px-6 md:px-12 space-y-6 relative">
        {/* Decorative timeline marker */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-red-rev)]/30 via-transparent to-transparent" />

        {/* Introduction paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg leading-relaxed relative"
        >
          Diễn ra trong bối cảnh Chiến tranh thế giới thứ hai bùng nổ, chính
          quyền Pháp siết chặt đàn áp, Hội nghị Trung ương VI của Đảng họp bí
          mật tại Bà Điểm nhằm định hướng lại chiến lược cách mạng.
        </motion.p>

        {/* Key Points */}
        <div className="space-y-6 relative">
          {[
            "Đảng nhận định rằng 'Hoàn cảnh Đông Dương sẽ tiến bước đến vấn đề giải phóng dân tộc'.",
            "Chuyển hướng chiến lược: từ đấu tranh giai cấp sang đấu tranh dân tộc.",
            "Rút vào hoạt động bí mật, chuyển trọng tâm về nông thôn nhưng vẫn chú trọng thành thị.",
            "Đặt quyền lợi dân tộc lên trên hết, coi độc lập tự do là mục tiêu tối cao.",
            "Chủ trương thành lập Mặt trận Dân tộc thống nhất phản đế Đông Dương.",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="text-[var(--color-red-rev)] mt-[2px] text-xl font-semibold">
                •
              </span>
              <p className="flex-1 leading-relaxed text-[17px]">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mt-16 p-8 bg-white/90 border-l-[6px] border-[var(--color-red-rev)]
                     rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] backdrop-blur-sm"
        >
          <Quote
            size={46}
            className="absolute top-5 left-5 text-[var(--color-red-rev)]/20"
          />
          <p className="relative z-10 italic text-lg leading-relaxed text-[var(--color-gray-text)]">
            “Đặt quyền lợi dân tộc lên trên hết, coi độc lập tự do là vấn đề
            sống còn của toàn thể nhân dân Đông Dương.”
          </p>
          <p className="relative z-10 mt-5 text-sm text-[var(--color-brown-earth)] font-medium text-right">
            — Trích Nghị quyết Hội nghị Trung ương VI, 1939
          </p>
        </motion.div>

        {/* === NAVIGATION === */}
        <div className="flex justify-between items-center pt-12 border-t border-[var(--color-brown-earth)]/20">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/#boi-canh"
              className="group flex items-center gap-2 text-[var(--color-red-rev)] hover:text-[var(--color-red-rev-hover)] transition-colors"
            >
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
              <span>Quay lại trang chính</span>
            </Link>
          </motion.div>

          {/* Next */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/hoi-nghi-trung-uong-viii"
              className="group flex items-center gap-2 text-[var(--color-red-rev)] hover:text-[var(--color-red-rev-hover)] transition-colors"
            >
              <span>Hội nghị VIII</span>
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
