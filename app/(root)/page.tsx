import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";

interface HeroProps {
  heading: string;
  message: string;
}

const Home: React.FC = () => {
  const heroData: HeroProps = {
    heading: "Where Artistry Is Appreciated",
    message:
      '🎤 Welcome to "Music In The Hood" - your go-to destination for discovering the next big stars in the music industry. Join us on a journey to uncover raw talent and shape the future of music. 🌟',
  };

  return (
    <>
      <Hero heading={heroData.heading} message={heroData.message} />
      <Slider slides={SliderData} />
    </>
  );
};

export default Home;
