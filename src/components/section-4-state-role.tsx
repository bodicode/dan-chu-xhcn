"use client";

import { motion } from "framer-motion";
import { Scale, ShieldCheck, Users2 } from "lucide-react";

const CARDS = [
  {
    color: "from-blue-500/10 to-blue-100/20 border-blue-200",
    icon: <Users2 className="w-8 h-8 text-blue-600" />,
    title: "1. Thể chế hóa ý chí nhân dân",
    content:
      "Nhà nước xã hội chủ nghĩa thể chế hóa ý chí, nguyện vọng của nhân dân thành các hành lang pháp lý. Đây là công cụ để nhân dân thực hiện quyền làm chủ của mình trong mọi lĩnh vực của đời sống xã hội.",
  },
  {
    color: "from-yellow-400/10 to-yellow-100/20 border-yellow-200",
    icon: <Scale className="w-8 h-8 text-yellow-500" />,
    title: "2. Phân định quyền và trách nhiệm",
    content:
      "Pháp luật do Nhà nước ban hành xác định rõ ràng quyền và trách nhiệm của mỗi công dân. Là cơ sở để người dân thực hiện quyền làm chủ của mình một cách thống nhất, công bằng và có trật tự.",
  },
  {
    color: "from-green-500/10 to-green-100/20 border-green-200",
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: "3. Bảo vệ quyền và lợi ích của nhân dân",
    content:
      "Nhà nước xã hội chủ nghĩa còn là công cụ bạo lực để ngăn chặn các hành vi xâm phạm đến quyền và lợi ích chính đáng của nhân dân, đồng thời bảo vệ nền dân chủ xã hội chủ nghĩa.",
  },
];

export default function Section4StateRole() {
  return (
    <section
      id="vai-tro-nha-nuoc-phap-quyen"
      className="relative w-full py-12 px-6 bg-neutral-50 text-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="text-center max-w-full space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Vai trò của Nhà nước pháp quyền xã hội chủ nghĩa
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-5xl mx-auto">
            Nhà nước pháp quyền XHCN vừa là công cụ thực hiện quyền làm chủ của
            nhân dân, vừa bảo đảm dân chủ được thực hiện có tổ chức, có kỷ cương
            và trong khuôn khổ pháp luật.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 w-full">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              className={`bg-gradient-to-br ${card.color} rounded-3xl border shadow-[0_8px_25px_rgba(0,0,0,0.05)] p-8 flex flex-col gap-5 hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-500`}
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/70 rounded-full shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
