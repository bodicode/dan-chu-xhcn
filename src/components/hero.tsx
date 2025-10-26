"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative mt-20 flex h-screen items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-50 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero1.jpg"
          alt="Dân chủ Việt Nam"
          className="w-full h-full object-cover opacity-40 scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-xl"
        >
          Dân chủ ở Việt Nam có phải là{" "}
          <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            “tự do tuyệt đối”
          </span>
          ?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-100 mt-6 mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          Khám phá cách dân chủ xã hội chủ nghĩa kết hợp hài hòa giữa quyền tự
          do cá nhân và lợi ích cộng đồng trong khuôn khổ pháp luật, kỷ luật và
          kỷ cương.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/30 rounded-full blur-3xl opacity-40 animate-pulse" />
    </section>
  );
}
