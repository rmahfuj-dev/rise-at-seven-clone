import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const COL2 = ["Services", "Work", "About", "Culture", "Meet the Risers"];
const COL3 = ["Testimonials", "Blog", "Webinars", "Careers"];
const COL4 = ["Sheffield", "Manchester", "London", "New York", "Contact"];

const SOCIALS = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.988l4.26 5.632 4.746-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    customSvg: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

const NavCol = ({ items }) => (
  <div className="border-l border-white/20 pl-4 md:pl-6" data-fade>
    <ul className="flex flex-col gap-2 md:gap-3">
      {items.map((item) => (
        <li key={item} className="overflow-hidden">
          <a
            href="#"
            className="text-white/70 text-lg md:text-xl lg:text-2xl flex items-center gap-1 group relative"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
              {item}
            </span>
            <span className="absolute left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[#B2F6E3]">
              {item}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const [hoverArrow, setHoverArrow] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-fade]",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#EFEEEC] px-2 sm:px-4 md:px-6 pb-4 sm:pb-6 pt-4 font-sans"
    >
      <div className="bg-black rounded-[2rem] md:rounded-[3rem] text-white px-6 md:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Newsletter Section - Full width on mobile/tablet, 2 cols on desktop */}
          <div
            className="flex flex-col gap-6 sm:col-span-2 lg:col-span-2"
            data-fade
          >
            <p className="text-white font-semibold text-xl md:text-2xl leading-tight max-w-sm">
              Stay updated with Rise news
            </p>

            <div className="flex items-center bg-white/10 rounded-full pl-6 pr-2 py-2 gap-2 w-full max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent flex-1 text-base md:text-lg text-white placeholder:text-white/40 outline-none w-full"
              />
              <button
                onMouseEnter={() => setHoverArrow(true)}
                onMouseLeave={() => setHoverArrow(false)}
                className="rounded-full p-4 md:p-5 transition-all duration-300 flex items-center justify-center shrink-0"
                style={{ backgroundColor: hoverArrow ? "#ffffff" : "#B2F6E3" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300"
                  style={{
                    transform: hoverArrow ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              {SOCIALS.map(({ path, customSvg, label }) => (
                <a
                  key={label}
                  href="#"
                  className="bg-white text-black flex items-center gap-2 px-4 py-2 transition-all"
                  style={{ borderRadius: "9999px" }}
                  onMouseEnter={(e) =>
                    gsap.to(e.currentTarget, {
                      borderRadius: "12px",
                      duration: 0.2,
                    })
                  }
                  onMouseLeave={(e) =>
                    gsap.to(e.currentTarget, {
                      borderRadius: "9999px",
                      duration: 0.3,
                    })
                  }
                >
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {customSvg ? customSvg : <path d={path} />}
                  </svg>
                  <FiArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <NavCol items={COL2} />
          <NavCol items={COL3} />
          <NavCol items={COL4} />
        </div>

        {/* Big Branding Text - Optimized for responsiveness */}
        <div className="overflow-hidden mt-16 md:mt-24" data-fade>
          <h2 className="text-[14vw] leading-[0.85] font-bold text-center text-white whitespace-nowrap uppercase tracking-tighter">
            Rise at Seven
          </h2>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-8 pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-t border-white/10"
          data-fade
        >
          <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
            {[
              "© 2025 Rise at Seven Ltd.",
              "Company Number 11955187",
              "VAT GB 322402945",
            ].map((t, i) => (
              <p
                key={t}
                className="text-white/40 text-xs md:text-sm flex items-center gap-2"
              >
                {i > 0 && (
                  <span className="hidden md:inline w-1 h-1 rounded-full bg-white/20" />
                )}
                {t}
              </p>
            ))}
          </div>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms & conditions"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-white/40 text-xs md:text-sm hover:text-[#B2F6E3] transition-colors underline underline-offset-4 decoration-white/10"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
