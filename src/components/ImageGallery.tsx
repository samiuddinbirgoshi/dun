"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageGallery() {
  const [hasMounted, setHasMounted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    // { src: "/25.jpg", alt: "Building exterior" },
    { src: "/26.jpg", alt: "Lobby area" },
    { src: "/27.jpg", alt: "Apartment interior" },
    { src: "/11.jpg", alt: "Amenities" },
    { src: "/12.jpg", alt: "Neighborhood" },
    { src: "/13.jpg", alt: "River view" },
    { src: "/14.jpg", alt: "Kitchen detail" },
    { src: "/15.jpg", alt: "Bedroom" },
    { src: "/16.jpg", alt: "Bathroom" },
    { src: "/17.jpg", alt: "Balcony view" },
    { src: "/18.jpg", alt: "Gym facility" },
    // { src: "/19.jpg", alt: "Swimming pool" },
    { src: "/20.jpg", alt: "Neighborhood" },
    { src: "/21.jpg", alt: "River view" },
    { src: "/22.jpg", alt: "Kitchen detail" },
    { src: "/23.jpg", alt: "Bedroom" },
    { src: "/24.jpg", alt: "Bathroom" },
    { src: "/25.jpg", alt: "Balcony view" },
    { src: "/9.jpg", alt: "Gym facility" },
    { src: "/8.jpg", alt: "Swimming pool" },
  ];

  // Set hasMounted to true on first client render
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Auto-advance images when not hovered
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveImage((prev) => (prev + 1) % images.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  // Prevent hydration mismatch
  if (!hasMounted) return null;

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Property Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our beautifully designed spaces and amenities
          </p>
        </div>

        {/* Main Image */}
        <div
          className="relative mb-4 rounded-lg overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={images[activeImage].src}
            alt={images[activeImage].alt}
            width={1200}
            height={800}
            className="w-full h-auto object-cover aspect-video"
            // Removed dynamic priority for consistency
            loading="eager"
          />
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 mb-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border border-gray-700 ${
                activeImage === index
                  ? "bg-gray-900 scale-125 border-gray-900"
                  : "bg-transparent hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Gallery */}
        <div className="flex overflow-x-auto scrollbar-hide gap-4 py-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`flex-shrink-0 rounded-lg overflow-hidden transition-all border-2 ${
                activeImage === index
                  ? "border-blue-500 scale-105"
                  : "border-transparent hover:border-gray-300"
              }`}
              aria-label={`View image ${index + 1}: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={120}
                height={90}
                className="w-30 h-20 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
