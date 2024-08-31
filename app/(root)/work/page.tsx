import Hero from "@/components/Hero";
import React from "react";
import Portfolio from "@/components/Portifolio";

const heroData = {
  heading: "Where Artistry Is Appreciated",
  message:
    '🎤 Welcome to "Music In The Hood" - your go-to destination for discovering the next big stars in the music industry. Join us on a journey to uncover raw talent and shape the future of music. 🌟',
};

const Page: React.FC = () => {
  return (
    <div>
      <Hero heading={heroData.heading} message={heroData.message} />
      <Portfolio />
    </div>
  );
};

export default Page;
