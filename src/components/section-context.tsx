"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";
import Link from "next/link";
import Image from "next/image";
import { BookOpenTextIcon } from "lucide-react";

export default function SectionContext() {
  const [muted, setMuted] = useState(true);

  const cards = [
    {
      id: 1,
      href: "/hoi-nghi-trung-uong-vi",
      img: "/hoi-nghi-1939.jpg",
      title: "Hội nghị Trung ương VI (11/1939) – Bà Điểm, Gia Định",
      detail:
        "Đảng nhận định hoàn cảnh Đông Dương tiến tới vấn đề giải phóng dân tộc; rút vào hoạt động bí mật và chuyển hướng đấu tranh. Hội nghị lần VI đánh dấu sự chuyển hướng chiến lược, đặt quyền lợi dân tộc lên trên hết, coi độc lập tự do là sống còn của toàn dân.",
      icon: <BookOpenTextIcon size={20} color="#000" />,
      offset: "mt-3",
    },
    {
      id: 2,
      href: "/hoi-nghi-trung-uong-viii",
      img: "/hoi-nghi-1941.jpg",
      title: "Hội nghị Trung ương VIII (5/1941) – Pác Bó, Cao Bằng",
      detail:
        "Nguyễn Ái Quốc chủ trì, xác định nhiệm vụ giải phóng dân tộc là tối cao, thành lập Mặt trận Việt Minh, chuẩn bị khởi nghĩa vũ trang. Hội nghị VIII đặt nhiệm vụ dân tộc giải phóng lên hàng đầu, đoàn kết toàn dân trong Mặt trận Việt Minh.",
      icon: <BookOpenTextIcon size={20} color="#000" />,
      offset: "mt-0 mb-3",
    },
  ];

  return (
    <section
      id="boi-canh"
      className="relative pt-20 md:pt-28 bg-beige-light overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/textures/paper-light.png')] opacity-20 pointer-events-none" />

      <div className="relative w-full mx-auto space-y-18">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <h2 className="text-[2.75rem] md:text-[3.5rem] font-serif font-bold">
            I. Bối Cảnh Lịch Sử & Chủ Trương Chiến Lược Mới
          </h2>
          <p className="text-gray-text text-base max-w-3xl mx-auto">
            Giai đoạn 1939–1945 đánh dấu bước chuyển chiến lược của Đảng Cộng
            sản Đông Dương: từ đấu tranh dân chủ sang nhiệm vụ hàng đầu là giải
            phóng dân tộc.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 lg:gap-16 md:px-10"
        >
          <div className="space-y-6">
            {/* Video Section — improved UI */}
            <div className="relative overflow-hidden rounded-lg shadow-[0_8px_25px_rgba(0,0,0,0.2)]">
              {/* YouTube video */}
              <YouTube
                videoId="KSr4gEqw9eo"
                opts={{
                  width: "100%",
                  height: "400",
                  playerVars: {
                    autoplay: 1,
                    mute: muted ? 1 : 0,
                    loop: 1,
                    playlist: "KSr4gEqw9eo",
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    fs: 0,
                    showinfo: 0,
                  },
                }}
                className="w-full h-[300px] md:h-[400px]"
              />

              {/* Overlay gradient for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />

              {/* Content overlay — giống ảnh mẫu */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-black/50 backdrop-blur-[2px]">
                <h3 className="text-white text-lg md:text-xl font-serif font-semibold tracking-wide">
                  DÂN CHỦ XÃ HỘI CHỦ NGHĨA
                </h3>
                <p className="text-white/80 italic text-sm md:text-base mt-1">
                  Bản chất chế độ ta, vừa mục tiêu vừa động lực phát triển thêm
                </p>
              </div>

              {/* Mute / unmute button */}
              <button
                onClick={() => setMuted((prev) => !prev)}
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white text-xs md:text-sm px-3 py-1.5 rounded-full z-20 backdrop-blur-md transition-all"
              >
                {muted ? "🔇 Bật âm thanh" : "🔊 Tắt âm thanh"}
              </button>
            </div>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-gray-text leading-relaxed my-auto">
            <li>
              <b>Thế giới:</b> Chiến tranh thế giới thứ hai bùng nổ vào tháng
              9/1939; chính phủ Pháp đầu hàng Đức (6/1940); Đức tấn công Liên Xô
              (6/1941). Cuộc chiến nhanh chóng lan rộng, làm thay đổi cục diện
              chính trị thế giới.
            </li>
            <li>
              <b>Đông Dương:</b> Sau khi chiến tranh nổ ra, thực dân Pháp (Chính
              phủ Daladier, sau đó là Chính phủ Pétain) tăng cường đàn áp phong
              trào dân chủ trong nước và các phong trào thuộc địa. Pháp cấm
              tuyên truyền cộng sản (28/9/1939), đặt Đảng Cộng sản Đông Dương ra
              ngoài vòng pháp luật, giải tán hội đoàn, phát xít hóa bộ máy cai
              trị và tăng cường vơ vét kinh tế. Đến tháng 9/1940, Toàn quyền
              Đông Dương Georges Catroux đầu hàng Nhật, từ đó Pháp và Nhật cùng
              nhau thống trị Đông Dương.
            </li>
            <li>
              <b>Kết quả:</b> Dân tộc ta bị kìm kẹp dưới hai tầng xiềng xích —
              thực dân Pháp và phát xít Nhật; đời sống nhân dân vô cùng cực khổ,
              phong trào đấu tranh đòi giải phóng dân tộc ngày càng dâng cao.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-0 lg:gap-0"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className={`group relative bg-white/95 overflow-hidden border border-brown-earth/10 transition-all duration-500 ${card.offset}`}
            >
              <div className="relative w-full h-[420px] overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-green-300 rounded-md p-2 z-10">
                  {card.icon}
                </div>
              </div>

              <div className="relative bg-white text-center px-6 py-8">
                <div className="space-y-2 transition-opacity duration-500 group-hover:opacity-0">
                  <p className="text-xs uppercase tracking-widest text-brown-earth/70 font-semibold">
                    .0{card.id}
                  </p>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-red-rev">
                    {card.title}
                  </h3>
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 bg-white 
                           flex flex-col justify-center items-center text-center 
                           px-6 py-8 
                           opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-[20px] 
                           transition-all duration-100 ease-in-out"
              >
                <p className="text-xs uppercase tracking-widest text-brown-earth/70 font-semibold mb-2">
                  .0{card.id}
                </p>
                <h3 className="text-lg md:text-xl font-serif font-bold text-brown-earth mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed mb-4">
                  {card.detail}
                </p>
                <Link
                  href={card.href}
                  className="text-red-rev font-medium text-sm hover:text-red-rev-hover transition-all"
                >
                  Xem chi tiết →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
