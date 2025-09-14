"use client";

import React, { useEffect, useState } from "react";

const images = [
  "/images/gothic1.jpeg",
  "/images/gothic2.jpeg",
  "/images/gothic3.webp"
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow relative w-full h-[500px] overflow-hidden">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Gothic slide ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay Title */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold gothic-title text-[#7a003c] drop-shadow-lg">
          Gothic Dreams
        </h2>
        <p className="text-gray-300 mt-2 gothic-link">
          A touch of darkness, elegance, and timeless beauty
        </p>
      </div>
    </div>
  );
}
