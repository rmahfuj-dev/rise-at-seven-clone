import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logos/logo.svg";
import Container from "./Container";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        gsap.to(navRef.current, {
          yPercent: -150,
          duration: 0.4,
          ease: "power2.inOut",
        });
      } else {
        const isAtTop = currentScrollY <= 12;

        gsap.to(navRef.current, {
          yPercent: 0,
          top: isAtTop ? "48px" : "0px",
          borderRadius: isAtTop ? "1.5rem" : "0px",
          duration: 0.4,
          ease: "power2.out",
        });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Container>
      <nav
        ref={navRef}
        className="flex justify-between items-center px-6 py-5 rounded-3xl fixed top-10 z-50 w-full text-white bg-black/10 backdrop-blur-md"
      >
        <img src={logo} alt="" className="logo w-45" />

        <ul className="nav-menu flex items-center gap-8 font-semibold">

          <li className="relative group">
            <span className="cursor-pointer">Services +</span>

            {/* MEGA MENU */}
            <div className="absolute left-0 top-full w-[700px] opacity-0 invisible 
                            group-hover:opacity-100 group-hover:visible 
                            transition-all duration-300 z-50">

              <div className="bg-white text-black shadow-xl border-t border-gray-200">

                <div className="grid grid-cols-3 gap-6 p-6">

                  <div>
                    <h3 className="font-bold text-blue-600 mb-3">Web Dev</h3>
                    <ul className="space-y-2">
                      <li className="hover:text-blue-500 cursor-pointer">Frontend</li>
                      <li className="hover:text-blue-500 cursor-pointer">Backend</li>
                      <li className="hover:text-blue-500 cursor-pointer">Fullstack</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-blue-600 mb-3">Design</h3>
                    <ul className="space-y-2">
                      <li className="hover:text-blue-500 cursor-pointer">UI/UX</li>
                      <li className="hover:text-blue-500 cursor-pointer">Branding</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Featured</h3>
                    <p className="text-sm text-gray-500 mb-3">
                      Modern scalable solutions for your business.
                    </p>
                    <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm">
                      Learn More
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </li>

          <li>International +</li>
          <li>About +</li>
          <li>Work</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Webiner</li>
        </ul>

        <div className="btn">Get In Touch</div>
      </nav>
    </Container>
  );
};

export default Navbar;