import React from "react";
import YoutubeVidz from "./YoutubeVidz";

const YoutubeSection: React.FC = () => {
  const videos = [
    {
      thumbnail: "https://img.youtube.com/vi/6UpLVir_j5s/hqdefault.jpg",
      link: "https://youtu.be/6UpLVir_j5s?si=SVy2G2XBLTATz3-U",
    },
    {
      thumbnail: "https://img.youtube.com/vi/R5fqy-l0t_c/hqdefault.jpg",
      link: "https://youtu.be/R5fqy-l0t_c?si=QaKCVHCL7D8xpHmN",
    },
    {
      thumbnail: "https://img.youtube.com/vi/Ss4QZnkQzqQ/hqdefault.jpg",
      link: "https://youtu.be/Ss4QZnkQzqQ?si=My1d1nFoEqyvtltA",
    },
    {
      thumbnail: "https://img.youtube.com/vi/WPkFfzI0hEI/hqdefault.jpg",
      link: "https://youtu.be/WPkFfzI0hEI?si=wfc59jGy9Pm_TYnp",
    },
    {
      thumbnail: "https://img.youtube.com/vi/8fXo-_cIuOM/hqdefault.jpg",
      link: "https://youtu.be/8fXo-_cIuOM?si=KSpFfQ85aIEIKd5a",
    },
    {
      thumbnail: "https://img.youtube.com/vi/e9MfAE5wkp4/hqdefault.jpg",
      link: "https://youtu.be/e9MfAE5wkp4?si=dB2iZoEL4LMV6-qV",
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-3xl font-bold">Subscribe to Music In The Hood</p>
      <p className="pb-4">Watch our latest videos on YouTube</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
        {videos.map((video, index) => (
          <YoutubeVidz
            key={index}
            videoThumbnail={video.thumbnail}
            videoLink={video.link}
          />
        ))}
      </div>
    </div>
  );
};

export default YoutubeSection;
