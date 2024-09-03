import React from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

interface YoutubeVidzProps {
  videoThumbnail: string;
  videoLink: string;
}

const YoutubeVidz: React.FC<YoutubeVidzProps> = ({
  videoThumbnail,
  videoLink,
}) => {
  return (
    <div className="relative group cursor-pointer">
      <Image
        src={videoThumbnail}
        alt="YouTube Video Thumbnail"
        layout="responsive"
        width={300}
        height={200}
        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 rounded-lg shadow-lg"
      />
      {/* Overlay with CTA */}
      <a
        href={videoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
      >
        <FaYoutube size={40} className="text-red-600" />
        <p className="text-white text-lg font-semibold mt-2">
          Watch & Subscribe
        </p>
      </a>
    </div>
  );
};

export default YoutubeVidz;
