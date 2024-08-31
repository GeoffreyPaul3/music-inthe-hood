"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

interface SliderProps {
  slides: { image: string; collection?: string }[];
  collections?: string[];
  autoplay?: boolean; // Autoplay prop
  autoplayInterval?: number; // Autoplay interval prop
}

const Slider: React.FC<SliderProps> = ({
  slides,
  collections,
  autoplay = false,
  autoplayInterval = 3000,
}) => {
  const [current, setCurrent] = useState(0);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    null
  );
  const [isHovering, setIsHovering] = useState(false); // Track if the slider is being hovered
  const [autoplayActive, setAutoplayActive] = useState(autoplay); // Track if autoplay is active
  const length = slides.length;

  // Filter slides based on the selected collection
  const filteredSlides = selectedCollection
    ? slides.filter((slide) => slide.collection === selectedCollection)
    : slides;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === filteredSlides.length - 1 ? 0 : prev + 1));
  }, [filteredSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? filteredSlides.length - 1 : prev - 1));
  }, [filteredSlides.length]);

  // Set autoplay interval
  useEffect(() => {
    if (autoplayActive && filteredSlides.length > 0 && !isHovering) {
      const timer = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(timer); // Clean up the interval on component unmount
    }
  }, [
    autoplayActive,
    autoplayInterval,
    filteredSlides.length,
    isHovering,
    nextSlide,
  ]);

  return (
    <div
      id="gallery"
      className="relative max-w-screen-xl mx-auto my-8 px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>

      {/* Collection Selector */}
      {collections && collections.length > 0 && (
        <div className="text-center mb-6">
          {collections.map((collection) => (
            <button
              key={collection}
              onClick={() => setSelectedCollection(collection)}
              className={`px-4 py-2 mx-2 rounded ${
                selectedCollection === collection
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {collection}
            </button>
          ))}
          <button
            onClick={() => setSelectedCollection(null)}
            className={`px-4 py-2 mx-2 rounded ${
              !selectedCollection
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            All
          </button>
        </div>
      )}

      <div className="relative flex items-center justify-center overflow-hidden h-[600px]">
        {/* Left Arrow */}
        <ArrowLeftCircle
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 cursor-pointer select-none z-10 hover:text-white hover:scale-110 transition-transform duration-300"
          size={50}
        />

        {/* Image Slides */}
        {filteredSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {index === current && (
              <Image
                src={slide.image}
                alt={`Slide ${index}`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg"
                priority
              />
            )}
          </div>
        ))}

        {/* Right Arrow */}
        <ArrowRightCircle
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 cursor-pointer select-none z-10 hover:text-white hover:scale-110 transition-transform duration-300"
          size={50}
        />
      </div>
    </div>
  );
};

export default Slider;
