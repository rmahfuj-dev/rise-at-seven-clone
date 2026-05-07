import { useEffect, useState } from "react";

import globalsearch from "../../../assets/images/hero/global-search.png";
import contentaward from "../../../assets/images/hero/content-award.png";
import thedrum from "../../../assets/images/hero/the-drum.png";
import uksocial from "../../../assets/images/hero/uk-social.png";

const images = [
  "https://cdn.flyonui.com/fy-assets/components/carousel/image-21.png",
  "https://cdn.flyonui.com/fy-assets/components/carousel/image-14.png",
  "https://cdn.flyonui.com/fy-assets/components/carousel/image-7.png",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* 🔵 Blurry Background */}
      <img
        src={images[index]}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl transition-all duration-700"
      />

      {/* ⚫ Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🟢 Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="flex w-full max-w-7xl flex-col items-center gap-10 text-center">

          {/* TOP LOGOS */}
          <div className="flex flex-col items-center gap-5">
            <p className="text-sm md:text-base font-medium tracking-widest">
              #MOST RECOMMENDED <br />
              CONTENT MARKETING AGENCY
            </p>

            <div className="flex items-center gap-8">
              <img className="w-24 object-contain" src={globalsearch} alt="" />
              <img className="w-14 object-contain" src={thedrum} alt="" />
              <img className="w-24 object-contain" src={uksocial} alt="" />
            </div>
          </div>

          {/* HERO TITLE */}
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
              We Create
              <br />

              <span className="inline-flex items-center gap-3 md:gap-6">
                Category

                {/* 🔥 FIXED IMAGE */}
                <img
                  src={images[index]}
                  alt="slider"
                  className="w-12 h-10 md:w-20 md:h-16 flex-none object-cover rounded-xl shadow-2xl transition-all duration-700"
                />

                Leaders
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80">
              On every searchable platform
            </p>
          </div>

          {/* BOTTOM TEXTS */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full pt-10 text-sm md:text-base">
            <p className="text-white/80 text-center md:text-left">
              Organic media planners creating, distributing & optimising
              <br />
              search-first content for SEO, Social, PR, Ai and LLM search
            </p>

            <p className="text-white/80 text-center md:text-right">
              4 Global Offices serving
              <br />
              UK, USA (New York) & EU
            </p>
          </div>

        </div>
      </div>

      {/* 🔘 Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}