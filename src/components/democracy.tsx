"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Landmark, Users, Gavel, Scale, Vote } from "lucide-react";

export default function Democracy() {
  return (
    <section
      id="ly-thuyet"
      className="relative w-full pt-20 pb-10 px-6 bg-beige-light text-gray-800"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Dân chủ Xã hội Chủ nghĩa (XHCN) Việt Nam
            </h2>

            <p className="leading-relaxed text-gray-700">
              Dân chủ XHCN ở Việt Nam là một quá trình phát triển, bắt đầu từ
              sau{" "}
              <span className="font-semibold text-red-600">
                Cách mạng Tháng Tám 1945
              </span>{" "}
              (với hình thức dân chủ nhân dân). Đến Đại hội VI (1986), Đảng ta
              nhấn mạnh quan điểm{" "}
              <span className="italic text-red-500">“lấy dân làm gốc”</span>.
            </p>

            <p className="leading-relaxed text-gray-700">
              Mục tiêu tổng quát của cách mạng Việt Nam là{" "}
              <span className="font-semibold">
                “Dân giàu, nước mạnh, dân chủ, công bằng, văn minh”
              </span>
              , trong đó{" "}
              <span className="text-red-600 font-medium">
                “do nhân dân làm chủ”
              </span>{" "}
              là một trong những đặc trưng cốt lõi của chủ nghĩa xã hội ở Việt
              Nam.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="rounded-2xl overflow-hidden border border-orange-100 bg-white/80 shadow-lg backdrop-blur">
              <Image
                src="/ly-thuyet.png"
                alt="Timeline phát triển dân chủ XHCN Việt Nam"
                width={800}
                height={400}
                className="object-cover"
              />
              <p className="text-sm text-gray-600 italic text-center py-3 bg-white/60">
                Sự ra đời và phát triển của nền dân chủ XHCN ở Việt Nam
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-semibold text-center">
            Bản chất của Dân chủ XHCN Việt Nam
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Scale className="w-10 h-10 text-red-500" />,
                title: "Về mục tiêu",
                desc: "Hướng tới dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
              },
              {
                icon: <Users className="w-10 h-10 text-orange-500" />,
                title: "Về bản chất cốt lõi",
                desc: "Chế độ do nhân dân làm chủ, quyền lực thuộc về nhân dân.",
              },
              {
                icon: <Landmark className="w-10 h-10 text-yellow-500" />,
                title: "Về động lực",
                desc: "Phát huy sức mạnh toàn dân để xây dựng chủ nghĩa xã hội.",
              },
              {
                icon: <Gavel className="w-10 h-10 text-green-500" />,
                title: "Về pháp lý",
                desc: "Dân chủ gắn liền với kỷ luật, kỷ cương và được bảo đảm bằng pháp luật.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white/80 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {item.icon}
                  <h4 className="font-semibold text-lg text-red-700">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-semibold text-center">
            Cơ chế và Thiết chế thực hiện
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Vote className="w-6 h-6" /> Dân chủ gián tiếp
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Nhân dân bầu ra Quốc hội – cơ quan quyền lực nhà nước cao nhất,
                đại diện cho nhân dân, hoạt động theo nhiệm kỳ 5 năm.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold mb-4 flex items-center justify-end gap-2">
                Dân chủ trực tiếp
                <Users className="w-6 h-6" />
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Nhân dân được thông tin, tham gia bàn bạc, giám sát và kiểm tra
                hoạt động của cơ quan nhà nước – từ trung ương đến cơ sở.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 leading-relaxed max-w-6xl mx-auto italic">
              Dân chủ XHCN ở Việt Nam được đặt dưới sự lãnh đạo của Đảng Cộng
              sản Việt Nam, thực hiện thông qua Nhà nước và toàn bộ hệ thống
              chính trị, bảo đảm quyền làm chủ thực sự của nhân dân.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
