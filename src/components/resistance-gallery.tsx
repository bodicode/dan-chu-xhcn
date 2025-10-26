"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useMemo } from "react";

export default function ResistanceGallery() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
    });

    const x = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

    const images = useMemo(
        () => [
            { src: "/khang-chien-nhat-1.jpg", alt: "Phong trào kháng Nhật" },
            { src: "/khang-chien-nhat-2.jpg", alt: "Nhân dân đấu tranh" },
            { src: "/khang-chien-nhat-3.jpg", alt: "Khởi nghĩa Ba Tơ" },
            { src: "/khang-chien-nhat-4.jpg", alt: "Huấn luyện vũ trang" },
            { src: "/khang-chien-nhat-5.jpg", alt: "Việt Minh tuyên truyền" },
        ],
        []
    );

    const loopImages = [...images, ...images];

    return (
        <section
            ref={ref}
            className="relative py-3 bg-white overflow-hidden flex flex-col items-center justify-center"
        >
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
                <svg
                    className="relative block w-full h-[100px]"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19
                 c-82.06-17.28-168.06-16.14-250.45,1.14C404,32,320.24,72,240.27,89.63
                 c-84.93,19-173.23,13.12-240.27-7.4V120H1200V95.8
                 C1132.19,118.92,1045.4,110.47,985.66,92.83Z"
                        className="fill-[#f6f0e7]"
                    />
                </svg>
            </div>

            <div className="w mx-auto px-8 flex flex-col items-center space-y-20">

                <div className="relative w-full overflow-hidden">
                    <motion.div
                        style={{ x }}
                        className="flex items-center gap-10 md:gap-14"
                    >
                        {loopImages.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: i * 0.05,
                                    duration: 0.6,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                className="relative w-[340px] md:w-[420px] aspect-[4/3] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 group"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5 text-white text-base font-serif">
                                    <p>{img.alt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
