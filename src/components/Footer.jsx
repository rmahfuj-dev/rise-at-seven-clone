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
    svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: "X",
    svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.988l4.26 5.632 4.746-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
  },
  {
    label: "LinkedIn",
    svg: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "YouTube",
    svg: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </>
    ),
  },
  {
    label: "TikTok",
    svg: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />,
  },
  {
    label: "Instagram",
    svg: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" fill="white" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
      </>
    ),
  },
];

const NavCol = ({ items }) => (
  <div className="border-l border-white/20 pl-4 md:pl-6" data-fade>
    <ul className="flex flex-col gap-1.5 md:gap-3">
      {items.map((item) => (
        <li key={item} className="overflow-hidden">
          <a
            href="#"
            className="text-white/70 text-[10px] sm:text-base md:text-2xl flex items-center gap-1 group relative"
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
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-[#EFEEEC] px-2 md:px-6 pb-4 md:pb-6 pt-4 font-sans">
      <div className="bg-black rounded-[2.5rem] md:rounded-[3.5rem] text-white px-5 md:px-12 py-10 md:py-16">
        
        {/* Row 1: Newsletter and Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-6">
          
          {/* Newsletter (Left) */}
          <div className="flex flex-col gap-6 lg:max-w-md w-full" data-fade>
            <p className="text-white font-semibold text-xl md:text-3xl leading-tight">
              Stay updated with Rise news
            </p>

            <div className="flex items-center bg-white/10 rounded-full pl-6 pr-2 py-2 gap-2 w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent flex-1 text-sm md:text-lg text-white placeholder:text-white/40 outline-none"
              />
              <button
                onMouseEnter={() => setHoverArrow(true)}
                onMouseLeave={() => setHoverArrow(false)}
                className="rounded-full p-3.5 md:p-5 transition-all duration-300 flex items-center justify-center shrink-0"
                style={{ backgroundColor: hoverArrow ? "#ffffff" : "#B2F6E3" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2.5"
                  className="transition-transform duration-300"
                  style={{ transform: hoverArrow ? "rotate(90deg)" : "rotate(0deg)" }}
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {SOCIALS.map(({ svg, label }) => (
                <a
                  key={label}
                  href="#"
                  className="bg-white text-black flex items-center gap-2 px-3 py-1.5 transition-all"
                  style={{ borderRadius: "9999px" }}
                  onMouseEnter={(e) => gsap.to(e.currentTarget, { borderRadius: "10px", duration: 0.2 })}
                  onMouseLeave={(e) => gsap.to(e.currentTarget, { borderRadius: "9999px", duration: 0.3 })}
                >
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="currentColor">
                    {svg}
                  </svg>
                  <FiArrowUpRight size={14} strokeWidth={3} />
                </a>
              ))}
            </div>
          </div>

          {/* Page Links (Right) - Forced 3 columns even on mobile */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:w-1/2">
            <NavCol items={COL2} />
            <NavCol items={COL3} />
            <NavCol items={COL4} />
          </div>
        </div>

        {/* Big Text (The '1 row' styled brand name) */}
        <div className="overflow-hidden mt-20 md:mt-32" data-fade>
          <h2 className="text-[14.5vw] leading-[0.8] font-bold text-center text-white whitespace-nowrap uppercase tracking-tighter select-none">
            Rise at Seven
          </h2>
        </div>

        {/* Bottom Bar Info */}
        <div className="mt-10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10" data-fade>
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
            {[
              "© 2025 Rise at Seven Ltd.",
              "Company Number 11955187",
              "VAT GB 322402945",
            ].map((t, i) => (
              <p key={t} className="text-white/30 text-[9px] md:text-xs flex items-center gap-2">
                {i > 0 && <span className="hidden md:inline w-1 h-1 rounded-full bg-white/20" />}
                {t}
              </p>
            ))}
          </div>
          
          <div className="flex gap-6">
            {["Privacy Policy", "Terms & conditions"].map((l) => (
              <a key={l} href="#" className="text-white/30 text-[9px] md:text-xs hover:text-white transition-colors">
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