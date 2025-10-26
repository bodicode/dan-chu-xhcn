"use client";

import { motion } from "framer-motion";
import { useMemo, useEffect, useState } from "react";

/**
 * AnimatedHeroBackground
 * - Tạo blob chuyển động + particles nền nhẹ
 * - Có thể đặt vào bất kỳ section nào (absolute / fixed background)
 */
export default function AnimatedHeroBackground({
  showParticles = true,
  colorStops = ["#e45b5b", "#f59e0b", "#ef4444"],
  particleCount = 20,
  className = "",
}: {
  showParticles?: boolean;
  colorStops?: [string, string, string];
  particleCount?: number;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Generate particles once (client side only)
  const particles = useMemo(() => {
    if (!mounted) return [];
    const width = window.innerWidth;
    const height = window.innerHeight;

    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      animX: [
        Math.random() * width,
        Math.random() * width,
        Math.random() * width,
      ],
      animY: [
        Math.random() * height,
        Math.random() * height,
        Math.random() * height,
      ],
      duration: 15 + Math.random() * 10,
      delay: i * 0.2,
    }));
  }, [mounted, particleCount]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Blob animation */}
      <motion.svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -z-10 w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorStops[0]} />
            <stop offset="50%" stopColor={colorStops[1]} />
            <stop offset="100%" stopColor={colorStops[2]} />
          </linearGradient>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="gooey"
            />
          </filter>
        </defs>

        <motion.path
          d="M421.5,308Q392,366,325,377.5Q258,389,196,352Q134,315,137,247Q140,179,201,139Q262,99,322,128Q382,157,418.5,203.5Q455,250,421.5,308Z"
          fill="url(#blobGradient)"
          filter="url(#gooey)"
          animate={{
            d: [
              "M421.5,308Q392,366,325,377.5Q258,389,196,352Q134,315,137,247Q140,179,201,139Q262,99,322,128Q382,157,418.5,203.5Q455,250,421.5,308Z",
              "M408.5,295Q378,340,335,368Q292,396,238,377Q184,358,145,304Q106,250,134,189Q162,128,229,108Q296,88,352,121Q408,154,429,202Q450,250,408.5,295Z",
              "M445,310Q398,370,339,395Q280,420,220,395Q160,370,125,310Q90,250,125,190Q160,130,220,105Q280,80,339,105Q398,130,445,190Q492,250,445,310Z",
              "M421.5,308Q392,366,325,377.5Q258,389,196,352Q134,315,137,247Q140,179,201,139Q262,99,322,128Q382,157,418.5,203.5Q455,250,421.5,308Z",
            ],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.path
          d="M400,290Q370,330,330,350Q290,370,245,350Q200,330,180,290Q160,250,180,210Q200,170,245,150Q290,130,330,150Q370,170,400,210Q430,250,400,290Z"
          fill={colorStops[1]}
          opacity="0.4"
          filter="url(#gooey)"
          animate={{
            d: [
              "M400,290Q370,330,330,350Q290,370,245,350Q200,330,180,290Q160,250,180,210Q200,170,245,150Q290,130,330,150Q370,170,400,210Q430,250,400,290Z",
              "M420,300Q380,350,330,370Q280,390,230,370Q180,350,160,300Q140,250,160,200Q180,150,230,130Q280,110,330,130Q380,150,420,200Q460,250,420,300Z",
              "M390,280Q360,310,320,330Q280,350,235,330Q190,310,175,280Q160,250,175,220Q190,190,235,170Q280,150,320,170Q360,190,390,220Q420,250,390,280Z",
              "M400,290Q370,330,330,350Q290,370,245,350Q200,330,180,290Q160,250,180,210Q200,170,245,150Q290,130,330,150Q370,170,400,210Q430,250,400,290Z",
            ],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>

      {/* Floating particles */}
      {showParticles &&
        mounted &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-2 h-2 bg-red-rev/20 rounded-full"
            initial={{ x: p.x, y: p.y }}
            animate={{
              x: p.animX,
              y: p.animY,
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
    </div>
  );
}
