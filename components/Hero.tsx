"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  heading: string;
  message: string;
}

const Hero: React.FC<HeroProps> = ({ heading, message }) => {
  return (
    <div className="relative flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      {/* Content */}
      <motion.div
        className="relative z-[2] p-5 text-center text-white max-w-[700px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          className="text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {heading}
        </motion.h2>
        <motion.p
          className="py-5 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {message}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Button variant="outline" size="lg" className="mt-5 bg-text-black">
            Explore
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
