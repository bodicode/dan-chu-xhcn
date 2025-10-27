"use client";

import { motion } from "framer-motion";
import { Scale, Users, ScrollText, Lightbulb, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutProjectPage() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      {/* === HERO SECTION === */}
      <section className="relative py-32 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-red-rev)]/20 via-transparent to-[var(--color-brown-earth)]/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            <span className="text-[var(--color-gray-text)]">
              Chủ đề chuyên đề học thuật:
            </span>
            <br />
            <span className=" bg-gradient-to-r from-[var(--color-red-rev)] via-red-500 to-orange-500 bg-clip-text text-transparent">
              “Dân chủ ở Việt Nam có phải là tự do tuyệt đối?”
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-[var(--color-gray-text)] mb-8"
          >
            Một dự án học tập kết hợp lý luận chính trị và công nghệ trình bày
            trực quan — giúp sinh viên hiểu rõ mối quan hệ giữa quyền tự do cá
            nhân và lợi ích cộng đồng trong nền dân chủ xã hội chủ nghĩa Việt
            Nam.
          </motion.p>

          <motion.button
            onClick={() => router.push("/")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(200, 16, 46, 0.3)",
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-red-rev)] to-red-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Khám Phá <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* === GIỚI THIỆU CHUNG === */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {[
            {
              icon: "🎯",
              title: "Mục Đích",
              desc: "Phân tích lý luận về dân chủ xã hội chủ nghĩa và vận dụng vào thực tiễn đời sống, giúp sinh viên hiểu rõ giới hạn của 'tự do tuyệt đối'.",
              color: "from-red-500 to-orange-500",
            },
            {
              icon: "💻",
              title: "Hình Thức Thể Hiện",
              desc: "Ứng dụng công nghệ web hiện đại (Next.js, React, Framer Motion) để trình bày bài học sinh động, trực quan và tương tác.",
              color: "from-blue-500 to-cyan-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200/50 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
              <div className="relative z-10">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[var(--color-red-rev)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--color-gray-text)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* === MỤC TIÊU HỌC TẬP === */}
      <section className="py-24 px-6 bg-gradient-to-b from-[var(--color-beige-light)] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-[var(--color-red-rev)]">
              Mục Tiêu Học Tập
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-red-rev)] to-orange-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Lightbulb,
                title: "Hiểu Bản Chất Dân Chủ",
                desc: "Nắm vững khái niệm dân chủ xã hội chủ nghĩa và mối liên hệ giữa tự do cá nhân – lợi ích cộng đồng.",
              },
              {
                icon: Scale,
                title: "Biết Cân Bằng Quyền Lợi",
                desc: "Nhận thức được ranh giới giữa dân chủ chân chính và việc lợi dụng dân chủ trong đời sống thực tế.",
              },
              {
                icon: ScrollText,
                title: "Vận Dụng Vào Thực Tiễn",
                desc: "Phân tích tình huống xã hội, mạng xã hội; nhận diện hành vi đúng – sai theo tinh thần pháp luật.",
              },
            ].map((goal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -12 }}
                className="relative bg-white rounded-2xl p-8 border-2 border-transparent hover:border-[var(--color-red-rev)] shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[var(--color-red-rev)] transition-all duration-300" />
                <goal.icon className="w-14 h-14 text-[var(--color-red-rev)] mb-4" />
                <h3 className="text-xl font-bold text-[var(--color-red-rev)] mb-3">
                  {goal.title}
                </h3>
                <p className="text-[var(--color-gray-text)] leading-relaxed">
                  {goal.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === TUYÊN BỐ HỌC THUẬT === */}
      <section className="py-24 px-6 bg-gradient-to-b from-yellow-50 to-[var(--color-beige-light)]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-center mb-4 text-yellow-700"
          >
            📜 Tuyên Bố Học Thuật
          </motion.h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-16" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: "📚",
                title: "Nguồn Tài Liệu",
                content:
                  "Nội dung được biên soạn dựa trên giáo trình 'Chủ nghĩa xã hội khoa học' và các bài viết chính thống từ Bộ Công an, Mặt trận Tổ quốc Việt Nam.",
              },
              {
                icon: "🤖",
                title: "Công Nghệ Hỗ Trợ",
                content:
                  "Các công cụ AI (ChatGPT, Claude) được dùng để tối ưu nội dung, biên soạn câu hỏi dựa trên giáo trình và trình bày giao diện — không thay thế việc tư duy, phân tích của sinh viên.",
              },
              {
                icon: "🎯",
                title: "Mục Đích Dự Án",
                content:
                  "Ứng dụng công nghệ hiện đại để lan tỏa kiến thức chính trị – xã hội, giúp sinh viên học tập chủ động, trực quan, có tư duy phản biện.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-l-4 border-yellow-500 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg text-yellow-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-gray-text)]">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === THÀNH VIÊN THỰC HIỆN === */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-[var(--color-red-rev)]">
              👥 Nhóm Thực Hiện Dự Án
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-red-rev)] to-orange-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-5 gap-6"
          >
            {[
              {
                name: "Nguyễn Khánh Như",
                color: "from-red-400 to-red-600",
                role: "SE183971",
              },
              {
                name: "Nguyễn Hoàng Điền",
                color: "from-blue-400 to-blue-600",
                role: "SE183112",
              },
              {
                name: "Nguyễn Thị Nhật Linh",
                color: "from-green-400 to-green-600",
                role: "SE184002",
              },
              {
                name: "Phạm Thị Thảo Nguyên",
                color: "from-purple-400 to-purple-600",
                role: "SS170580",
              },
              {
                name: "Huỳnh Lê Nhật Hoàng",
                color: "from-yellow-400 to-yellow-600",
                role: "SE172474",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-all`}
                >
                  <Users className="w-12 h-12 text-white" />
                </motion.div>
                <h4 className="font-bold text-lg text-[var(--color-red-rev)] mb-1">
                  {member.name}
                </h4>
                <p className="text-sm text-[var(--color-gray-text)] font-medium">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
