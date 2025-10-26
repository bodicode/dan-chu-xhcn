"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedHeroBackground from "./animate-blob";
import { LinkIcon, Info } from "lucide-react";

export default function Section2Relation() {
  return (
    <section
      id="moi-quan-he"
      className="relative w-full py-12 px-6 bg-white text-gray-800 overflow-hidden"
    >
      <AnimatedHeroBackground
        showParticles={false}
        className="absolute left-[-120px] bottom-[-100px] opacity-30 scale-[0.7] md:scale-100"
        colorStops={["#f87171", "#fb923c", "#ef4444"]}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 auto-rows-fr gap-10 items-stretch relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full min-h-full p-2 md:p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.1)]"
          >
            <Image
              src="/moi-quan-he.jpg"
              alt="Minh họa: Tự do và pháp luật"
              width={600}
              height={400}
              className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-xl border border-red-100 shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-red-600" />
              <h4 className="font-semibold text-red-600 text-lg m-0">
                Biện chứng là gì?
              </h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-medium text-red-500">Biện chứng</span> là
              cách nhìn nhận sự vật, hiện tượng trong mối liên hệ, tác động qua
              lại và phát triển không ngừng giữa các mặt đối lập. Mỗi yếu tố vừa
              thống nhất, vừa mâu thuẫn với nhau, tạo nên sự vận động và biến
              đổi của toàn thể.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full min-h-full bg-neutral-50 border border-gray-200 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
        >
          <div className="flex-grow space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-snug">
              Mối quan hệ giữa quyền tự do cá nhân và lợi ích cộng đồng
            </h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-[#fff9f9] to-[#fffefd] border-l-4 border-red-600 rounded-xl p-5 shadow-sm"
            >
              <span className="absolute -top-1 left-3 text-red-600 text-4xl leading-none opacity-60 select-none">
                “
              </span>

              <p className="text-gray-800 italic text-base font-medium leading-relaxed pl-3 pr-2">
                Trong nền dân chủ xã hội chủ nghĩa có sự kết hợp hài hòa về lợi
                ích giữa cá nhân, tập thể và lợi ích của toàn xã hội. Nền dân
                chủ xã hội chủ nghĩa ra sức động viên, thu hút mọi tiềm năng
                sáng tạo, tính tích cực xã hội của nhân dân trong sự nghiệp xây
                dựng xã hội mới.
              </p>

              <span className="absolute -bottom-1 right-3 text-red-600 text-3xl leading-none opacity-60 select-none">
                ”
              </span>

              <footer className="mt-3 text-right text-red-600 font-medium text-sm pr-2">
                — Trích Giáo trình Chủ nghĩa xã hội khoa học
              </footer>
            </motion.blockquote>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shadow-sm">
                <LinkIcon className="text-red-600 w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold m-0">
                Tính biện chứng giữa quyền cá nhân và lợi ích chung
              </h3>
            </div>

            <ul className="space-y-4 text-gray-800 text-base leading-relaxed">
              <li className="border-l-4 border-red-500 pl-4 bg-red-50/40 rounded-r-md py-2 hover:bg-red-50 transition-colors">
                <span className="font-semibold text-red-600">
                  Tự do cá nhân
                </span>{" "}
                là động lực sáng tạo, thúc đẩy sự phát triển của xã hội.
              </li>
              <li className="border-l-4 border-orange-500 pl-4 bg-orange-50/40 rounded-r-md py-2 hover:bg-orange-50 transition-colors">
                <span className="font-semibold text-orange-600">
                  Lợi ích cộng đồng
                </span>{" "}
                là nền tảng và điều kiện để cá nhân được sống, cống hiến và phát
                huy quyền tự do của mình.
              </li>
            </ul>
          </div>

          <div className="h-[3px] w-24 bg-gradient-to-r from-red-600 to-orange-400 rounded-full mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
