"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Section6Examples() {
  const [hovered, setHovered] = useState(false);

  const right = {
    title: "Dân chủ chân chính",
    color: "from-blue-500/10 to-blue-100/20 border-blue-200",
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    concept:
      "Thực hiện quyền tự do ngôn luận trong khuôn khổ pháp luật, có trách nhiệm, tôn trọng người khác.",
    example:
      "Người dân cả nước tích cực góp ý Dự thảo Luật Đất đai (sửa đổi), với gần 1,4 triệu lượt ý kiến gửi qua mạng và báo chí — thể hiện tinh thần dân chủ, trách nhiệm.",
    image: undefined,
    source: {
      label: "🔗 Nguồn: mattran.org.vn, 15/3/2023",
      url: "https://mattran.org.vn/hoat-dong/ket-qua-lay-y-kien-nhan-dan-doi-voi-du-thao-luat-dat-dai-sua-doi-gan-14-trieu-luot-gop-y-kien-vao-noi-dung-du-thao-49639.html",
    },
    behaviors: [
      "Ngôn ngữ tôn trọng, dựa trên sự thật.",
      "Đóng góp ý kiến xây dựng.",
    ],
    results: [
      "Góp phần hoàn thiện chính sách.",
      "Được khuyến khích, lan tỏa tích cực.",
    ],
    message: "Dân chủ thật sự = Tự do + Trách nhiệm + Tôn trọng.",
  };

  const left = {
    title: "Lợi dụng dân chủ",
    color: "from-red-500/10 to-red-100/20 border-red-200",
    icon: <XCircle className="w-8 h-8 text-red-600" />,
    concept:
      "Biến quyền tự do thành công cụ tung tin sai, xúc phạm, hoặc chống phá.",
    example:
      "Tại Yên Bái (2/2025), một cá nhân đăng tin giả sáp nhập các tỉnh, thành trên Facebook, gây hoang mang dư luận, bị phạt 5 triệu đồng.",
    image: "/example.webp", // ảnh minh họa
    source: {
      label: "🔗 Nguồn: bocongan.gov.vn, 27/2/2025",
      url: "https://bocongan.gov.vn/bai-viet/canh-giac-voi-thong-tin-sai-su-that-tren-mang-xa-hoi-d22-t43773",
    },
    behaviors: [
      "Ngôn từ xúc phạm, suy diễn, bịa đặt.",
      "Mục đích câu view, kích động.",
    ],
    results: [
      "Bị xử lý theo pháp luật.",
      "Ảnh hưởng uy tín, gây mất niềm tin xã hội.",
    ],
    message: "Lợi dụng dân chủ = Tự do vô kỷ luật + Vi phạm pháp luật.",
  };

  return (
    <section
      id="vi-du"
      className="relative w-full py-12 px-6 bg-neutral-50 text-gray-800"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ví dụ: Phân biệt Dân chủ chân chính và Lợi dụng dân chủ
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto"
          >
            Trong đời sống hiện nay, đặc biệt là trên mạng xã hội, có thể thấy
            rõ ranh giới giữa dân chủ chân chính và việc lợi dụng dân chủ qua
            nhiều hiện tượng cụ thể.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[left, right].map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.7, ease: "easeOut" }}
              className={`relative bg-gradient-to-br ${col.color} border rounded-3xl p-8 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-500`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/70 rounded-full shadow-sm">
                  {col.icon}
                </div>
                <h3 className="text-2xl font-semibold m-0">{col.title}</h3>
              </div>

              <div className="space-y-1 mb-4">
                <p className="font-semibold text-gray-800">Khái niệm:</p>
                <p className="text-gray-700">{col.concept}</p>
              </div>

              <div
                className="relative space-y-2 mb-4"
                onMouseEnter={() => idx === 0 && setHovered(true)}
                onMouseLeave={() => idx === 0 && setHovered(false)}
              >
                <p className="font-semibold text-gray-800">Ví dụ thực tế:</p>
                <div className="flex items-center gap-2">
                  <p className="text-gray-700 relative z-10 ">
                    {col.example}
                    {idx === 0 && (
                      <span className="inline-block text-sm italic text-gray-500 ml-1">
                        (Di chuột để xem hình)
                      </span>
                    )}
                  </p>
                </div>

                {idx === 0 && hovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-16 right-0 z-20 w-[320px] rounded-xl overflow-hidden border border-red-200 shadow-lg"
                  >
                    <Image
                      src={col.image || ""}
                      alt="Ảnh minh họa tin giả"
                      width={400}
                      height={250}
                      className="object-cover w-full h-auto"
                    />
                  </motion.div>
                )}

                <a
                  href={col.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                >
                  {col.source.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="space-y-1 mb-4">
                <p className="font-semibold text-gray-800">Cách thể hiện:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  {col.behaviors.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1 mb-4">
                <p className="font-semibold text-gray-800">Kết quả:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  {col.results.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div
                className={`mt-6 p-4 rounded-xl text-center font-semibold ${
                  idx === 0
                    ? "bg-blue-100 text-blue-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {col.message}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
