"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Gavel,
  Users,
  Scale,
  Shield,
  BookOpen,
  ScrollText,
} from "lucide-react";

export default function Section2RuleOfLaw() {
  const features = [
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      title: "Nhà nước của dân, do dân, vì dân",
      desc: "Nhà nước do nhân dân lao động làm chủ; mọi hoạt động đều hướng đến phục vụ lợi ích của nhân dân.",
      color: "from-red-100 to-red-50",
    },
    {
      icon: <Gavel className="w-10 h-10 text-orange-500" />,
      title: "Thượng tôn pháp luật",
      desc: "Pháp luật giữ vị trí tối thượng; Nhà nước, tổ chức và cá nhân đều hoạt động trên cơ sở Hiến pháp và pháp luật.",
      color: "from-orange-100 to-yellow-50",
    },
    {
      icon: <Landmark className="w-10 h-10 text-yellow-500" />,
      title: "Quyền lực nhà nước thống nhất",
      desc: "Có sự phân công, phối hợp và kiểm soát rõ ràng giữa lập pháp, hành pháp và tư pháp.",
      color: "from-yellow-100 to-amber-50",
    },
    {
      icon: <ScrollText className="w-10 h-10 text-green-600" />,
      title: "Sự lãnh đạo của Đảng Cộng sản Việt Nam",
      desc: "Đây là đặc trưng thể hiện bản chất XHCN, phù hợp với Điều 4 Hiến pháp 2013.",
      color: "from-green-100 to-emerald-50",
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Tôn trọng quyền con người",
      desc: "Con người là chủ thể và trung tâm của sự phát triển; quyền dân chủ gắn với kỷ luật và pháp luật nghiêm minh.",
      color: "from-blue-100 to-indigo-50",
    },
    {
      icon: <Scale className="w-10 h-10 text-purple-600" />,
      title: "Nguyên tắc tập trung dân chủ",
      desc: "Bảo đảm quyền lực thống nhất, có sự phân cấp, phối hợp và giám sát trong bộ máy nhà nước.",
      color: "from-purple-100 to-pink-50",
    },
  ];

  return (
    <section
      id="nha-nuoc-phap-quyen"
      className="relative w-full py-24 px-6 bg-gradient-to-b from-white via-rose-50/50 to-white text-gray-800"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* ===== Hero Section ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            Nhà nước pháp quyền Xã hội chủ nghĩa Việt Nam
          </h2>
          <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
            Là hình thức tổ chức nhà nước tiến bộ, trong đó{" "}
            <span className="font-semibold text-red-600">
              pháp luật giữ vai trò tối thượng
            </span>
            , bảo đảm công bằng, dân chủ và nhân văn trong quản lý xã hội, hướng
            tới một xã hội “dân giàu, nước mạnh, dân chủ, công bằng, văn minh”.
          </p>
        </motion.div>

        {/* ===== Quan niệm & Chủ trương ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Left Text */}
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              <span className="font-semibold text-red-600">
                Quan niệm chung:
              </span>{" "}
              Nhà nước pháp quyền là nhà nước{" "}
              <span className="font-semibold">thượng tôn pháp luật</span>, hướng
              tới phúc lợi cho mọi người, và “tạo điều kiện cho cá nhân được tự
              do, bình đẳng, phát huy hết năng lực của chính mình”.
            </p>
            <p>
              <span className="font-semibold text-red-600">
                Chủ trương của Đảng:
              </span>{" "}
              Xây dựng Nhà nước pháp quyền Việt Nam{" "}
              <span className="italic text-red-500">
                “của dân, do dân, vì dân”
              </span>
              , đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam. Nhà nước quản
              lý xã hội bằng pháp luật; mọi tổ chức và cá nhân đều có nghĩa vụ
              tuân thủ Hiến pháp và pháp luật.
            </p>
            <p>
              <span className="font-semibold text-red-600">
                Về quyền lực nhà nước:
              </span>{" "}
              Quyền lực nhà nước là{" "}
              <span className="font-semibold">thống nhất</span>, nhưng có sự
              “phân công, phối hợp, kiểm soát” giữa ba quyền lập pháp, hành pháp
              và tư pháp.
            </p>
          </div>

          {/* Right Quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-3xl p-10 italic text-gray-700 shadow-lg"
          >
            <BookOpen className="absolute -top-5 -left-5 w-10 h-10 text-red-400 opacity-60" />
            <p className="leading-relaxed">
              “Nhà nước pháp quyền xã hội chủ nghĩa là Nhà nước của nhân dân, do
              nhân dân, vì nhân dân; mọi quyền lực nhà nước thuộc về nhân dân và
              phải được kiểm soát chặt chẽ.”
            </p>
            <footer className="text-right text-sm font-medium text-gray-600 mt-3">
              — Văn kiện Đại hội XIII của Đảng
            </footer>
          </motion.blockquote>
        </motion.div>

        {/* ===== Đặc điểm cơ bản ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h3 className="text-4xl font-bold text-center ">
            Các đặc điểm cơ bản
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${f.color} border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 text-center backdrop-blur`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-white/70 rounded-full shadow">
                    {f.icon}
                  </div>
                  <h4 className="font-semibold text-lg text-red-700">
                    {f.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mt-10"
          >
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto italic bg-white/80 border border-orange-100 shadow-md p-8 rounded-2xl">
              Về bản chất, Nhà nước pháp quyền XHCN Việt Nam mang bản chất giai
              cấp công nhân, mục tiêu là phục vụ lợi ích của nhân dân, là công
              cụ chủ yếu để Đảng định hướng xã hội đi lên chủ nghĩa xã hội.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
