"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { UserX, Scale, Users } from "lucide-react";

const SLIDES = [
  {
    key: "individual",
    icon: <UserX className="w-6 h-6 text-red-600" />,
    title: "Tuyệt đối hóa cá nhân",
    subtitle: "Lệch về “tự do tuyệt đối”",
    color: "#ef4444",
    image: "/lech-ca-nhan.png",
    points: [
      "Đề cao tự do cá nhân một cách cực đoan, xem nhẹ kỷ luật – kỷ cương – pháp luật, dẫn đến rối loạn trật tự và xâm phạm quyền, lợi ích hợp pháp của người khác.",
      "Lợi dụng danh nghĩa “tự do ngôn luận” để bôi nhọ, xuyên tạc, phát tán thông tin sai lệch, gây tổn hại đến lợi ích chung và niềm tin xã hội.",
      "Đi ngược lại nguyên tắc hài hòa lợi ích giữa cá nhân – tập thể – toàn xã hội mà dân chủ xã hội chủ nghĩa hướng tới.",
    ],
    balanceTips: [
      "Tôn trọng pháp luật và chuẩn mực xã hội.",
      "Phê bình hành vi thay vì công kích cá nhân.",
      "Kiểm chứng thông tin trước khi chia sẻ, tránh lan truyền sai lệch.",
    ],
  },
  {
    key: "harmony",
    icon: <Scale className="w-6 h-6 text-yellow-500" />,
    title: "Hài hòa quyền & lợi ích",
    subtitle: "Trạng thái lý tưởng",
    color: "#facc15",
    image: "/hai-hoa.png",
    points: [
      "Tự do cá nhân được bảo vệ trong khuôn khổ pháp luật, luôn gắn với trách nhiệm xã hội.",
      "Kết hợp hài hòa lợi ích cá nhân – tập thể – toàn xã hội; khuyến khích sáng tạo, phát huy tính tích cực của mỗi người.",
      "Pháp luật phân định rõ quyền và nghĩa vụ, đảm bảo trật tự, công bằng và ổn định xã hội.",
      "Cộng đồng được hưởng lợi: lòng tin xã hội được củng cố, đối thoại xây dựng, môi trường an toàn và công bằng.",
    ],
    balanceTips: [
      "💡 Đây là trạng thái lý tưởng của dân chủ xã hội chủ nghĩa:",
      "“Tự do phải gắn với kỷ luật, kỷ cương và được pháp luật bảo đảm.”",
    ],
  },
  {
    key: "collective",
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "Tuyệt đối hóa tập thể",
    subtitle: "Lệch về “đồng nhất hóa”",
    color: "#22c55e",
    image: "/lech-tap-the.png",
    points: [
      "Quá đề cao lợi ích chung, lu mờ nhu cầu và tiếng nói của cá nhân, dễ dẫn đến áp đặt “đồng thuận” hình thức.",
      "Làm giảm sáng tạo, mất động lực phát triển; dễ phát sinh tình trạng lạm quyền, quan liêu, hình thức chủ nghĩa.",
      "Làm yếu đi cơ chế giám sát và phản biện xã hội, khiến sai phạm khó được phát hiện và khắc phục kịp thời.",
    ],
    balanceTips: [
      "Tôn trọng và bảo vệ quyền con người, quyền thiểu số.",
      "Tăng cường phản biện xã hội, minh bạch và trách nhiệm giải trình.",
      "Thực thi pháp luật nghiêm minh, bảo đảm mọi cá nhân và tổ chức đều bình đẳng trước pháp luật.",
    ],
  },
];

export default function Section3Balance() {
  const [value, setValue] = useState(50);

  const snapToClosest = (v: number) => {
    if (v < 20) return 0;
    if (v > 80) return 100;
    return 50;
  };

  const getIndex = (v: number) => (v === 0 ? 0 : v === 100 ? 2 : 1);
  const index = getIndex(value);
  const slide = SLIDES[index];

  const getGradient = (v: number) => {
    const gray = "#e5e7eb";
    const red = "#ef4444";
    const green = "#22c55e";

    if (v === 50) {
      return `linear-gradient(90deg, ${gray} 0%, ${gray} 100%)`;
    }

    if (v < 50) {
      return `linear-gradient(
        90deg,
        ${gray} 0%,
        ${gray} ${v}%,
        ${red} ${v}%,
        ${red} 50%,
        ${gray} 50%,
        ${gray} 100%
      )`;
    }

    return `linear-gradient(
      90deg,
      ${gray} 0%,
      ${gray} 50%,
      ${green} 50%,
      ${green} ${v}%,
      ${gray} ${v}%,
      ${gray} 100%
    )`;
  };

  const handleRelease = (e: React.MouseEvent | React.TouchEvent) => {
    const input = e.target as HTMLInputElement;
    const snapped = snapToClosest(Number(input.value));
    setValue(snapped);
  };

  return (
    <section
      id="can-bang-quyen-loi-ich"
      className="relative w-full py-12 px-6 bg-beige-light text-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-2">
        <div className="text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
            Cân bằng giữa quyền tự do cá nhân và lợi ích cộng đồng
          </h2>
          <p className="max-w-5xl mx-auto text-gray-600">
            Kéo thanh trượt để khám phá ba trạng thái: khi cá nhân bị tuyệt đối
            hóa, khi đạt sự hài hòa, và khi tập thể bị tuyệt đối hóa.
          </p>
        </div>

        <div className="relative w-full max-w-4xl flex flex-col items-center mt-4 mb-8">
          <input
            type="range"
            min="0"
            max="100"
            placeholder="50"
            step="1"
            value={value}
            onChange={(e) => setValue(Number(e.currentTarget.value))}
            onMouseUp={handleRelease}
            onTouchEnd={handleRelease}
            className="w-full h-2 appearance-none rounded-full outline-none cursor-pointer"
            style={{
              background: getGradient(value),
              transition: "background 0.35s ease-in-out, all 0.3s ease",
            }}
          />

          <style jsx>{`
            input[type="range"] {
              transition: all 0.35s ease-in-out;
            }
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 24px;
              height: 24px;
              background-color: ${slide.color};
              border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 0 10px ${slide.color}60,
                0 0 4px ${slide.color}40 inset;
              transition: all 0.3s ease-in-out;
            }
            input[type="range"]::-webkit-slider-thumb:hover {
              transform: scale(1.2);
              box-shadow: 0 0 16px ${slide.color}80;
            }
            input[type="range"]::-webkit-slider-thumb:active {
              transform: scale(1.25);
              box-shadow: 0 0 20px ${slide.color}a0;
            }
            input[type="range"]::-moz-range-thumb {
              width: 24px;
              height: 24px;
              background-color: ${slide.color};
              border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 0 10px ${slide.color}60,
                0 0 4px ${slide.color}40 inset;
              transition: all 0.3s ease-in-out;
            }
            input[type="range"]::-moz-range-thumb:hover {
              transform: scale(1.2);
              box-shadow: 0 0 16px ${slide.color}80;
            }
            input[type="range"]::-moz-range-thumb:active {
              transform: scale(1.25);
              box-shadow: 0 0 20px ${slide.color}a0;
            }
          `}</style>

          <div className="flex justify-between text-sm text-gray-600 w-full mt-3 select-none">
            <span className="flex items-center gap-1 text-red-600">
              <UserX className="w-4 h-4" /> Cá nhân
            </span>
            <span className="flex items-center gap-1 text-yellow-500">
              <Scale className="w-4 h-4" /> Hài hòa
            </span>
            <span className="flex items-center gap-1 text-green-600">
              <Users className="w-4 h-4" /> Tập thể
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.key}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col justify-between h-full bg-white border border-gray-200 rounded-3xl p-8 shadow-[0_8px_25px_rgba(0,0,0,0.05)]"
            >
              <div className="flex-grow space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-full">
                    {slide.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">
                    {slide.title}
                  </h3>
                </div>
                <p className="text-gray-600 italic font-medium">
                  {slide.subtitle}
                </p>
                <ul className="space-y-3 text-gray-800 leading-relaxed">
                  {slide.points.map((p, i) => (
                    <li
                      key={i}
                      className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-500"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-xl">
                <h4 className="text-red-600 font-semibold mb-2">
                  Cách cân bằng:
                </h4>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  {slide.balanceTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex h-full"
            >
              <div className="flex-grow overflow-hidden flex">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={700}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
