'use client'

import React,{useState,useEffect} from "react";
import Aboutme from "./components/AboutMe";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Services from "./components/Services";


export default function HomePage() {
  const [isMobile,setIsMobile] = useState(window.innerWidth < 768);

  useEffect(()=>{
    const handleResize =()=>{
      setIsMobile(window.innerWidth < 768)
      
    };
    window.addEventListener('resize',handleResize)
    return()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[])
  return (
    <div>
      <div>
        {isMobile ? (
          <Sidebar />
        ) : (
          <Navbar  />
        )}
      </div>
      <Banner />
      <Aboutme />
      <Services />
      <Contact />
    </div>
  );
}
