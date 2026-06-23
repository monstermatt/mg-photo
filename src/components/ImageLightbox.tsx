"use client";

import {useEffect, useCallback } from "react";
import Image from "next/image";
import { Photos } from "@/types/gallery";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

interface ImageLightboxProps {
  photo: Photo;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageLightbox({
  photo,
  onClose,
  onNext,
  onPrev
}: ImageLightboxProps) {
  const handleKeyDown = useCallback ((event: KeyboardEvent) => {
    if (event.key === "Escape") onClose();
    if (event.key === "ArrowRight") onNext();
    if (event.key === "ArrowLeft") onPrev();
}, [onClose, onNext, onPrev]);

useEffect(() => {
  window.addEventListener("keydown", handleKeyDown);
  document.body.style.overflow ="hidden"; //prevent background scrolling

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "unset";
  }:
}, [handleKeyDown]);

return (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
    role="dialog"
    aria-model="true"
    >
    {/* Close Button*/}
    <button
      onClick={onClose}
      classname="absolute top-6 right-6 text-white text-4xl hover: text-gray-300 z-[60]"
      aria-label="Close"
      >
        <IoClose />
    </button>
    
      {/* nav buttons*/}
    <button
      onClick={onPrev}
      className="absolute left-4 text-white text-5xl hover:bg-white/10 rounded-full p-2 transition-colors z-[60]"
      aria-label="Previous"
      >
    <IoChevronBack />
    </button>

    <button 
      onClick={onNext}
      className="absolute right-4 text-white text-5xl hover:bg-white/10 rounded-full p-2 transition-colors z-[60]"
      aria-label="Next Image"
    >
      <IoChevronForward />
    </button>
    
      {/*Image Container */}
    <div className="relative w-full h-full max-w-6xl max-h-[85vh] px-4 flex flex-col items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          src = {photo.url}
          alt = {photo.altText}
          fill
          classname="object-contain"
          priority //loads immediately
          sizes = "100vw"
          />
        </div>
      {photo.catpion && (
        <div className="mt-4 text-white text-center italic font-light">
          {photo.caption}
        </div>
        )}
      </div>
    </div>
  );
}
