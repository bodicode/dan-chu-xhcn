"use client";

import { motion, Variants } from "framer-motion";
import AnimatedHeroBackground from "./animate-blob";

export default function ResistanceSectionModern() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="khang-nhat"
      className="relative py-10 bg-white text-[var(--color-gray-text)] overflow-hidden"
    >
      {/* ✅ Hiệu ứng nền động blob + particles */}
      <AnimatedHeroBackground
        showParticles
        colorStops={["#e45b5b", "#f59e0b", "#ef4444"]}
        className="opacity-35"
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-serif text-[2.75rem] md:text-[3.5rem] font-bold text-[var(--color-red-rev)] tracking-wide leading-tight mb-20 uppercase"
        >
          III. Cao trào kháng Nhật cứu nước
          <br />
          <span className="block text-[1.5rem] md:text-[1.75rem] font-normal normal-case italic opacity-80 mt-2">
            (Sau 3/1945)
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-left md:text-justify leading-relaxed">
          {/* === Nhật đảo chính Pháp === */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-[var(--color-brown-earth)] uppercase tracking-wide border-b border-[var(--color-brown-earth)]/20 pb-2">
              Nhật đảo chính Pháp
            </h3>
            <ul className="list-disc text-sm pl-5 space-y-2 marker:text-[var(--color-brown-earth)]">
              <li>
                Ngày 9/3/1945, Nhật đảo chính Pháp để độc chiếm Đông Dương, lật
                đổ bộ máy cai trị thực dân.
              </li>
              <li>
                Chính quyền Pháp sụp đổ, tạo ra khoảng trống quyền lực và thời
                cơ cách mạng mới.
              </li>
            </ul>
          </motion.div>

          {/* === Chỉ thị 12/3/1945 === */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="md:mt-12 font-serif text-xl md:text-2xl font-semibold text-[var(--color-brown-earth)] uppercase tracking-wide border-b border-[var(--color-brown-earth)]/20 pb-2">
              Chỉ thị 12/3/1945
            </h3>
            <ul className="list-disc text-sm pl-5 space-y-2 marker:text-[var(--color-brown-earth)]">
              <li>
                Ban Thường vụ Trung ương họp tại Đình Bảng (Bắc Ninh), ra chỉ
                thị <i>“Nhật – Pháp bắn nhau và hành động của chúng ta”.</i>
              </li>
              <li>
                Xác định kẻ thù duy nhất là phát xít Nhật; đổi khẩu hiệu thành
                <b> “Đánh đuổi phát xít Nhật”.</b>
              </li>
              <li>
                Phát động cao trào kháng Nhật cứu nước, chuẩn bị Tổng khởi nghĩa
                khi thời cơ đến.
              </li>
            </ul>
          </motion.div>

          {/* === Cao trào đấu tranh === */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-[var(--color-brown-earth)] uppercase tracking-wide border-b border-[var(--color-brown-earth)]/20 pb-2">
              Cao trào đấu tranh
            </h3>
            <ul className="list-disc text-sm pl-5 space-y-2 marker:text-[var(--color-brown-earth)]">
              <li>
                Đảng phát động phong trào{" "}
                <b>“Phá kho thóc, giải quyết nạn đói”</b> lan rộng khắp nơi.
              </li>
              <li>
                Nổ ra <b>Khởi nghĩa Ba Tơ</b> (Quảng Ngãi), mở đầu phong trào vũ
                trang kháng Nhật.
              </li>
              <li>
                Tổng bộ Việt Minh ra chỉ thị tổ chức Ủy ban Giải phóng Việt Nam
                (16/4/1945) và lập 7 chiến khu trên cả nước.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
