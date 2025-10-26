"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Brain } from "lucide-react";
import AnimatedHeroBackground from "./animate-blob";

export default function Section1Theory() {
  return (
    <section
      id="co-so-ly-luan"
      className="relative w-full py-8 px-6 bg-neutral-50 text-gray-800"
    >
      <AnimatedHeroBackground
        showParticles={false}
        className="absolute right-[380px] top-[180px] opacity-40 scale-[0.6] md:scale-75"
        colorStops={["#ef4444", "#f97316", "#dc2626"]}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-full justify-center items-center flex flex-col bg-white border border-gray-200 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
        >
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Cơ sở lý luận
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
                Dân chủ xã hội chủ nghĩa là nền dân chủ mà ở đó, mọi quyền lực
                thuộc về nhân dân, dân là chủ và dân làm chủ; dân chủ và pháp
                luật nằm trong sự thống nhất biện chứng; được thực hiện bằng nhà
                nước pháp quyền xã hội chủ nghĩa, đặt dưới sự lãnh đạo của Đảng
                Cộng sản.
              </p>

              <span className="absolute -bottom-1 right-3 text-red-600 text-3xl leading-none opacity-60 select-none">
                ”
              </span>

              <footer className="mt-3 text-right text-red-600 font-medium text-sm pr-2">
                — Trích Giáo trình Chủ nghĩa xã hội khoa học
              </footer>
            </motion.blockquote>

            <p className="text-base leading-relaxed text-gray-700">
              Nền dân chủ này được hình thành từ thực tiễn cách mạng, nhằm bảo
              đảm quyền lực thật sự thuộc về nhân dân. Tuy nhiên, dân chủ trong
              chủ nghĩa xã hội không phải là dân chủ vô giới hạn.
            </p>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-[#fff9f9] to-[#fffefd] border-l-4 border-red-600 rounded-xl p-5 shadow-sm"
            >
              <span className="absolute -top-1 left-3 text-red-600 text-4xl leading-none opacity-60 select-none">
                “
              </span>

              <p className="text-gray-800 italic text-base font-medium leading-relaxed pl-3 pr-2">
                Dân chủ xã hội chủ nghĩa gắn liền với kỷ luật, kỷ cương và pháp
                luật; quyền làm chủ của nhân dân luôn gắn liền với trách nhiệm,
                nghĩa vụ công dân và lợi ích của cộng đồng.
              </p>

              <span className="absolute -bottom-1 right-3 text-red-600 text-3xl leading-none opacity-60 select-none">
                ”
              </span>

              <footer className="mt-3 text-right text-red-600 font-medium text-sm pr-2">
                (Trích Giáo trình Chủ nghĩa xã hội khoa học)
              </footer>
            </motion.blockquote>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full flex flex-col justify-between"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg border border-gray-200"
          >
            <Image
              src="/co-so-ly-luan.jpg"
              alt="Minh họa: Tự do và pháp luật"
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          <div className="space-y-6 mt-8 flex flex-col justify-end">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 rounded-full bg-red-100 flex items-center justify-center shadow-sm">
                <Brain className="text-red-600 w-5 h-5" />
              </div>
              <span className="text-xl md:text-2xl font-semibold text-red-600 tracking-wide">
                Kết luận
              </span>
            </div>

            <p className="leading-relaxed text-gray-800">
              Tự do cá nhân trong xã hội xã hội chủ nghĩa{" "}
              <span className="text-red-600 font-semibold">
                không phải là tự do tuyệt đối
              </span>
              , mà là tự do{" "}
              <span className="bg-red-600 text-white px-2 py-0.5 rounded-md">
                trong khuôn khổ pháp luật
              </span>
              , được điều chỉnh nhằm bảo đảm{" "}
              <span className="font-semibold text-red-500">
                trật tự, công bằng và lợi ích chung
              </span>
              .
            </p>

            <div className="h-[3px] w-24 bg-gradient-to-r from-red-600 to-orange-400 rounded-full mt-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
