import { useEffect, useState } from "react";

import globalsearch from "../../../assets/images/hero/global-search.png";
import contentaward from "../../../assets/images/hero/content-award.png";
import thedrum from "../../../assets/images/hero/the-drum.png";
import uksocial from "../../../assets/images/hero/uk-social.png";
import redbull from "../../../assets/images/hero/redbull.png";
import emirates from "../../../assets/images/hero/emirates.webp";
import austornot from "../../../assets/images/hero/austornot.png";
import Container from "../../../components/Container";
import TopBanner from "../../../components/TopBanner";
import google from "../../../assets/images/hero/google.png";
import pinterest from "../../../assets/images/hero/pinterest.png";
import reddit from "../../../assets/images/hero/reddit.png";
import giphy from "../../../assets/images/hero/giphy.png";
import tiktok from "../../../assets/images/hero/tiktok.png";
import gemini from "../../../assets/images/hero/gemini.png";
import chatgpt from "../../../assets/images/hero/chatgpt.png";
import youtube from "../../../assets/images/hero/youtube.png";
import amazon from "../../../assets/images/hero/amazon.png";
const images = [redbull, emirates, redbull, austornot];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <Container>
        <div className="relative w-full min-h-screen overflow-hidden text-white rounded-3xl ">
          <img
            src={images[index]}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-lg transition-all duration-700"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
            <div className="flex flex-col items-center gap-10 text-center max-w-7xl w-full">
              <div className="flex flex-col items-center gap-5">
                <p className="text-xs md:text-base font-medium tracking-widest">
                  #MOST RECOMMENDED <br />
                  CONTENT MARKETING AGENCY
                </p>

                <div className="flex items-center gap-6">
                  <img
                    className="w-13 object-contain"
                    src={globalsearch}
                    alt=""
                  />

                  <img className="w-9 object-contain" src={thedrum} alt="" />

                  <img className="w-14 object-contain" src={uksocial} alt="" />
                  <img
                    className="w-12 hidden lg:block object-contain"
                    src={contentaward}
                    alt=""
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
                  We Create
                  <br />
                  <span className="inline-flex items-center gap-6">
                    Category
                    <img
                      src={images[index]}
                      alt="slider"
                      className="w-15 md:w-28 h-15 md:h-28 object-cover rounded-2xl shadow-2xl transition-all duration-700"
                    />
                    Leaders
                  </span>
                </h1>

                <p className="text-lg md:text-xl lg:text-3xl text-white/80 font-semibold">
                  On every searchable platform
                </p>
                <div className="2xl:flex items-center justify-center gap-8 border hidden">
                  <img
                    className="w-[67.2px] h-[30.24px] object-contain"
                    src={google}
                    alt=""
                  />
                  <img
                    className="w-[67.2px] h-[30.24px object-contain"
                    src={chatgpt}
                    alt=""
                  />
                  <img
                    className="w-[67.2px] h-[30.24px] object-contain "
                    src={gemini}
                    alt=""
                  />
                  <img
                    className="w-[67.2px] h-[30.24px] object-contain"
                    src={tiktok}
                    alt=""
                  />
                  <img
                    className="w-[67.2px] h-[30.24px] object-contain"
                    src={pinterest}
                    alt=""
                  />
                  <img
                    className="w-[67.2px] h-[30.24px] object-contain"
                    src={giphy}
                    alt=""
                  />
                  <img
                    className="w-[67.2px] h-[30.24px] object-contain"
                    src={reddit}
                    alt=""
                  />
                  <img
                    className="w-[67.2px] h-[30.24px] object-contain"
                    src={youtube}
                    alt=""
                  />
                  <img
                    className="w-[67.2px] h-[30.24px] object-contain"
                    src={amazon}
                    alt=""
                  />
                </div>
              </div>

              <div className="needed-class absolute bottom-8 left-0 w-full px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-sm md:text-base">
                <p className="text-white/80 text-center md:text-left hidden md:block">
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

          {/* <div className="absolute bottom-6 w-full flex justify-center gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white w-8" : "bg-white/40"
            }`}
          />
        ))}
      </div> */}
        </div>
      </Container>
    </section>
  );
}
