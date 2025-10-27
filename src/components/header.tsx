"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const mainNav = [
    { name: "Lý thuyết", href: "#ly-thuyet" },
    { name: "Vận dụng", href: "#van-dung" },
    { name: "Ví dụ", href: "#vi-du" },
    { name: "Về dự án", href: "/ve-du-an" },
    { name: "Game", href: "/game" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 160) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScrollDirection);
    return () => window.removeEventListener("scroll", handleScrollDirection);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white/90 backdrop-blur-sm border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={36}
            height={36}
            className="object-contain rounded-sm"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg sm:text-xl font-bold text-red-600">
              DanChu
            </span>
            <span className="text-[10px] sm:text-[12px] tracking-wider text-gray-600 uppercase">
              Xã hội & Pháp luật
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-gray-800">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors duration-300 ${
                activeSection === item.href.replace("#", "")
                  ? "text-red-600 font-semibold"
                  : "hover:text-red-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 md:hidden hover:text-red-600 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-200 flex flex-col items-center py-4 space-y-3">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[15px] font-medium transition-colors ${
                activeSection === item.href.replace("#", "")
                  ? "text-red-600 font-semibold"
                  : "text-gray-800 hover:text-red-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
