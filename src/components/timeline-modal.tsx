"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface TimelineModalData {
  title: string;
  image: string;
  content: React.ReactNode;
}

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: TimelineModalData | null;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number | null;
  totalItems: number;
}

export function TimelineModal({
  isOpen,
  onClose,
  data,
  onNext,
  onPrev,
  currentIndex,
  totalItems,
}: TimelineModalProps) {
  if (!isOpen || !data || currentIndex === null) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-[90vw] max-w-3xl max-h-[90vh]
                       bg-[var(--color-beige-light)] rounded-2xl shadow-2xl z-50 
                       flex flex-col overflow-hidden border border-[var(--color-brown-earth)]/10"
          >
            <button
              title="close"
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 p-2 bg-white/60 hover:bg-white/80 
                         rounded-full text-[var(--color-brown-earth)] z-50 transition"
            >
              <X size={20} />
            </button>

            {currentIndex > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 
                           bg-white/70 hover:bg-white/90 rounded-full 
                           text-[var(--color-brown-earth)] z-50 shadow-md"
              >
                <ChevronLeft size={26} />
              </motion.button>
            )}

            {currentIndex < totalItems - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 
                           bg-white/70 hover:bg-white/90 rounded-full 
                           text-[var(--color-brown-earth)] z-50 shadow-md"
              >
                <ChevronRight size={26} />
              </motion.button>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col h-full"
              >
                <div className="relative w-full h-60 md:h-72 flex-shrink-0">
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-5 md:p-8 overflow-y-auto">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-red-rev">
                    {data.title}
                  </h3>
                  <div className="prose prose-base md:prose-lg leading-relaxed text-[var(--color-gray-text)]">
                    {data.content}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
