"use client";

import { motion, Variants } from "framer-motion";

const LUAN_DIEM = [
  {
    num: 1,
    color: "from-red-600/90 to-red-400/80",
    title: "Cơ sở lý luận",
    text: "Dân chủ XHCN gắn liền với pháp luật, kỷ luật và quyền làm chủ của nhân dân.",
    targetId: "co-so-ly-luan",
  },
  {
    num: 2,
    color: "from-orange-500/90 to-yellow-400/80",
    title: "Mối quan hệ",
    text: "Tự do cá nhân và lợi ích cộng đồng bổ sung, thúc đẩy lẫn nhau trong một thể thống nhất.",
    targetId: "moi-quan-he",
  },
  {
    num: 3,
    color: "from-green-600/90 to-green-400/80",
    title: "Cân bằng quyền & lợi ích",
    text: "Tự do phải trong khuôn khổ pháp luật, tránh cực đoan cá nhân hay tập thể.",
    targetId: "can-bang-quyen-loi-ich",
  },
  {
    num: 4,
    color: "from-blue-600/90 to-blue-400/80",
    title: "Vai trò Nhà nước pháp quyền",
    text: "Nhà nước XHCN thể chế hóa ý chí nhân dân, phân định quyền – trách nhiệm và bảo vệ dân chủ.",
    targetId: "vai-tro-nha-nuoc-phap-quyen",
  },
  {
    num: 5,
    color: "from-purple-600/90 to-purple-400/80",
    title: "Kết luận",
    text: "Tự do cá nhân và lợi ích cộng đồng là hai mặt thống nhất của dân chủ XHCN.",
    targetId: "ket-luan",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function LuanDiemSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="van-dung"
      className="relative min-h-screen flex items-center justify-center py-24 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/ca-nhan-va-cong-dong.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-14 text-white"
        >
          Mối quan hệ giữa quyền tự do cá nhân và lợi ích cộng đồng
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
          {LUAN_DIEM.map((item, i) => (
            <motion.button
              key={item.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onClick={() => handleScrollTo(item.targetId)}
              className={`relative w-full h-full py-6 px-3 rounded-3xl bg-gradient-to-br ${item.color}
                shadow-[0_8px_30px_rgb(0,0,0,0.25)]
                flex flex-col justify-between text-left cursor-pointer
                border border-white/20 hover:scale-105 hover:shadow-[0_8px_40px_rgba(255,255,255,0.3)]
                transition-all duration-300 backdrop-blur-lg focus:outline-none
              `}
            >
              <div className="absolute -top-5 left-6 bg-white/20 backdrop-blur-md text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full border border-white/40 shadow-md">
                {item.num}
              </div>

              <div className="mt-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3 leading-tight text-white h-12">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
