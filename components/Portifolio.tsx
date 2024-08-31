import Image from "next/image";
import React from "react";
import { SliderData } from "./SliderData"; // Adjust the path as necessary

// Define TypeScript types for the image data
interface ImageData {
  image: string;
  collection?: string;
}

const Portfolio: React.FC = () => {
  // Assuming SliderData is an array of image objects
  const images: ImageData[] = SliderData;

  return (
    <section className="max-w-[1240px] mx-auto py-16 px-4">
      <h1 className="font-bold text-3xl md:text-4xl text-gray-900 mb-8 text-center">
        Artistic Showcase
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="relative col-span-1 md:col-span-3 row-span-2">
          <Image
            src={images[0]?.image || "https://via.placeholder.com/677x451"} // Fallback image
            alt="Main Artwork"
            layout="responsive"
            width={677}
            height={451}
            className="object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
        {images.slice(1, 5).map((imageData, index) => (
          <div
            key={index}
            className="relative h-[200px] md:h-[217px] rounded-lg overflow-hidden"
          >
            <Image
              src={imageData.image}
              alt={`Artwork ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
