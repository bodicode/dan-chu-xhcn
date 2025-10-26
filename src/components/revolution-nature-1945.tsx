"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AnimatedHeroBackground from "./animate-blob";

export default function RevolutionNatureModern() {
  const data = [
    {
      id: 1,
      title: "Tính giải phóng dân tộc",
      desc: "Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, huy động sức mạnh toàn dân trong Mặt trận Việt Minh.",
      slides: [
        {
          no: 1,
          title: "Mục tiêu: Giải phóng dân tộc",
          text: "Làm cho dân tộc Việt Nam thoát khỏi ách thống trị của đế quốc, giành độc lập, tự do.",
        },
        {
          no: 2,
          title: "Lực lượng cách mạng toàn dân",
          text: "Toàn dân đoàn kết dưới ngọn cờ Việt Minh, kết hợp các giai cấp, tầng lớp xã hội.",
        },
        {
          no: 3,
          title: "Nhiệm vụ hàng đầu",
          text: "Tập trung hoàn thành mục tiêu giành chính quyền, xây dựng nền độc lập dân tộc.",
        },
      ],
    },
    {
      id: 2,
      title: "Tính chất dân chủ mới",
      desc: "Mang tính chất dân chủ nhân dân, mở đường cho sự phát triển xã hội mới vì con người.",
      slides: [
        {
          no: 1,
          title: "Đem lại quyền lợi cho nhân dân",
          text: "Giải quyết một số quyền lợi cho nông dân, người lao động được hưởng tự do dân chủ.",
        },
        {
          no: 2,
          title: "Mở rộng tự do, bình đẳng",
          text: "Các tầng lớp nhân dân được tham gia xây dựng chính quyền và xã hội mới.",
        },
        {
          no: 3,
          title: "Chưa triệt để",
          text: "Tính dân chủ chưa toàn diện do chưa tiến hành cách mạng ruộng đất, chưa xóa bỏ phong kiến.",
        },
      ],
    },
  ];

  return (
    <section
      id="tinh-chat"
      className="relative py-14 sm:py-20 bg-[var(--background)] scroll-mt-24 overflow-hidden"
    >
      {/* ✅ Hiệu ứng nền blob + particles */}
      <AnimatedHeroBackground
        showParticles
        colorStops={["#e45b5b", "#f59e0b", "#ef4444"]}
        className="opacity-40"
      />

      {/* ===== Section Header ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center max-w-5xl mx-auto mb-16 px-6"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          style={{ color: "var(--color-red-rev)" }}
        >
          V. Tính chất của Cách mạng Tháng Tám 1945
        </h2>
        <p
          className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
          style={{ color: "var(--color-gray-text)" }}
        >
          Cách mạng Tháng Tám năm 1945 không chỉ là một cuộc khởi nghĩa giành
          độc lập, mà còn mở đường cho một xã hội dân chủ mới – nơi nhân dân trở
          thành người chủ đất nước.
        </p>
        <div
          className="mt-6 h-[2px] w-24 sm:w-32 mx-auto rounded-full"
          style={{ backgroundColor: "var(--color-red-rev)" }}
        />
      </motion.div>

      {/* ===== Section Body ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {data.map((section, idx) => (
          <div
            key={section.id}
            className={`flex flex-col ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-10 lg:gap-16 items-center lg:items-stretch`}
          >
            {/* LEFT CARD */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 1 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-xl bg-[var(--color-beige-light)] rounded-2xl shadow-md p-6 sm:p-8 flex flex-col justify-center"
            >
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-tight"
                style={{ color: "var(--color-red-rev)" }}
              >
                {idx + 1}. {section.title}
              </h3>
              <p
                className="text-sm sm:text-base md:text-[15px] leading-relaxed"
                style={{ color: "var(--color-gray-text)" }}
              >
                {section.desc}
              </p>
            </motion.div>

            {/* RIGHT SLIDER */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 1 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full max-w-xl"
            >
              <div className="relative rounded-2xl border border-[var(--color-brown-earth)] px-4 sm:px-6 pt-5 pb-6 bg-white/70 backdrop-blur-lg shadow-md">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 9000 }}
                  spaceBetween={24}
                  className="mySwiper"
                >
                  {section.slides.map((slide) => (
                    <SwiperSlide key={slide.no}>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="h-7 w-7 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
                            style={{ backgroundColor: "var(--color-red-rev)" }}
                          >
                            {slide.no}
                          </div>
                          <h4
                            className="text-base sm:text-lg font-semibold m-0 leading-tight"
                            style={{ color: "var(--color-red-rev)" }}
                          >
                            {slide.title}
                          </h4>
                        </div>
                        <p
                          className="text-sm sm:text-[15px] md:text-base leading-relaxed !mb-8"
                          style={{ color: "var(--color-gray-text)" }}
                        >
                          {slide.text}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
