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
        // SCROLLING DOWN: Hide it completely
        gsap.to(navRef.current, {
          yPercent: -150,
          duration: 0.4,
          ease: "power2.inOut",
        });
      } else {
        // SCROLLING UP: Show it
        // If we are at the very top (scrollY === 0), move it back to top: 40px (top-10)
        // If we are anywhere else, dock it to top: 0px
        const isAtTop = currentScrollY <= 12;

        gsap.to(navRef.current, {
          yPercent: 0,
          top: isAtTop ? "48px" : "0px", // 40px is the equivalent of top-10
          borderRadius: isAtTop ? "1.5rem" : "0px", // Optional: flatten corners when docked
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
        className="flex justify-between items-center px-6 py-5 rounded-3xl fixed top-10 z-10 w-full text-white  bg-black/10 backdrop-blur-md"
      >
        <img src={logo} alt="" className="logo w-45" />
        <ul className="nav-menu flex items-center gap-8 font-semibold">
          <li>Services +</li>
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
