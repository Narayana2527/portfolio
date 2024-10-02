'use client';

import React, { useState, useEffect } from "react";
import Aboutme from "./components/AboutMe";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Services from "./components/Services";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const handleResize = () => {
      setIsMobile(mobileQuery.matches);
    };

    // Set initial value
    handleResize();

    // Add event listener for screen size changes
    mobileQuery.addListener(handleResize);

    return () => {
      mobileQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <div>
      <div>
        {isMobile ? <Sidebar /> : <Navbar />}
      </div>
      <Banner />
      <Aboutme />
      <Services />
      <Contact />
    </div>
  );
}
