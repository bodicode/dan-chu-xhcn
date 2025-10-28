"use client";

import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';

export const TTSFloatingButton: FC<{ audioSrc: string }> = ({ audioSrc }) => {
  const [speaking, setSpeaking] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audioRef.current = audio;

    const handleEnded = () => setSpeaking(false);
    const handleError = () => {
      console.error("Audio playback error");
      setSpeaking(false);
      notification.error({
        message: "Lỗi Phát Âm Thanh",
        description: "Không thể tải hoặc phát file âm thanh. Vui lòng kiểm tra file MP3.",
        placement: "bottomRight"
      } as NotificationArgsProps);
    };

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("ended", handleEnded);
        audioRef.current.removeEventListener("error", handleError);
      }
    };
  }, [audioSrc]);

  const stopAll = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setSpeaking(false);
  }, []);

  const speak = useCallback(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    void audioRef.current.play().then(() => {
      setSpeaking(true);
    }).catch((error: Error) => {
      console.error("Error attempting to play audio:", error);
      setSpeaking(false);
    });
  }, []);

  const handleClick = useCallback(() => {
    if (speaking) {
      stopAll();
    } else {
      speak();
    }
  }, [speaking, stopAll, speak]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={speaking ? "Dừng đọc" : "Phát âm thanh"}
      title={speaking ? "Dừng đọc" : "Phát âm thanh"}
      className="fixed right-5 bottom-5 z-50 w-14 h-14 rounded-full border-none bg-blue-500 hover:bg-blue-600 text-white shadow-lg cursor-pointer flex items-center justify-center text-2xl leading-none transition-colors"
      style={{
        background: speaking ? "#ff4d4f" : "#1890ff"
      }}
    >
      <span role="img" aria-hidden="true">
        {speaking ? "🔇" : "🔊"}
      </span>
    </button>
  );
};