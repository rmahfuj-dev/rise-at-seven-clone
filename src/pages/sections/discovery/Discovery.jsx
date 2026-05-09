import React from "react";
import { GoArrowUpRight } from "react-icons/go";

import axa from "../../../assets/images/discovery/axa.svg";
import capitalone from "../../../assets/images/discovery/capitalone.svg";
import hubspot from "../../../assets/images/discovery/hubspot.svg";
import jd from "../../../assets/images/discovery/jd.svg";
import kroger from "../../../assets/images/discovery/kroger.png";
import redbull from "../../../assets/images/discovery/redbull-logo.png";
import rev from "../../../assets/images/discovery/rev.svg";
import sharkninja from "../../../assets/images/discovery/sharkninja.webp";
import sixt from "../../../assets/images/discovery/sixt.svg";
import xbox from "../../../assets/images/discovery/xbox.svg";

import MarqueeData from "react-fast-marquee";
import Container from "../../../components/Container";

const Marquee = MarqueeData.default;

const Discovery = () => {
  const brands = [
    axa,
    redbull,
    hubspot,
    jd,
    kroger,
    rev,
    sharkninja,
    sixt,
    xbox,
  ];

  return (
    <section className="py-16 overflow-hidden ">
      <Container className="grid grid-cols-1  gap-25">
        <div className="flex items-center gap-10">
          <p className="shrink-0 text-sm font-medium">The agency behind...</p>

          {/* marquee wrapper */}
          <div className="relative flex-1 overflow-hidden">
            {/* left blur */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 backdrop-blur-sm bg-gradient-to-r from-white/90 to-transparent" />

            {/* right blur */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 backdrop-blur-sm bg-gradient-to-l from-white/90 to-transparent" />

            <Marquee speed={50} pauseOnHover={true}>
              <div className="flex items-center gap-35">
                {brands.concat(brands).map((brand, index) => (
                  <div key={index} className="shrink-0">
                    <img
                      className="
                        w-20
                        sm:w-24
                        md:w-28
                        lg:w-32
                        h-10
                        object-contain
                      "
                      src={brand}
                      alt="brand"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
        <div className="flex border justify-between flex-col-reverse md:flex-row gap-4">
          <p className="text-lg xl:text-2xl font-medium pt-2">
            A global team of search-first content marketers <br />
            engineering semantic relevancy & category
            <br />
            signals for both the internet and people
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-[50px] lg:text-[75-x] 2xl:text-[90px] font-semibold">
              Driving Demand & <br /> Discovery
            </h2>
            <div className="flex gap-6 flex-col md:flex-row items-center w">
              <div className="btn bg-white px-6 py-3 rounded-3xl flex items-center gap-2 w-full md:w-fit justify-center">
                Our Story{" "}
                <span>
                  <GoArrowUpRight />
                </span>
              </div>
              <div className="btn flex items-center gap-2">
                Our Services{" "}
                <span>
                  <GoArrowUpRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Discovery;
