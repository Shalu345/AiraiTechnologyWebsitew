



import React from "react";
import { Link, useLocation } from "react-router-dom";
import  Mainnavbar from '../mainnavbar.jsx';
export default function Service() {
    const location = useLocation();

const getLinkClass = (path) =>
  location.pathname === path
    ? "text-orange-500 font-bold"                 
    : "hover:text-[#ED09EE]";
  const techs = [
    { icon: "/ai.png", name: "Photoshop" },
    { icon: "/c++.png", name: "Illustrator" },
    { icon: "/preview.png", name: "Figma" },
    { icon: "/PS.png", name: "Unity" },
  
    { icon: "/game1.png", name: "Unity"},
      { icon: "/node (2).png", name: "Unity"},
  ];

  return (
    <>
    <div
      className="relative bg-cover h-screen bg-center h-[600px] flex flex-col"
      style={{ backgroundImage: "url('/heroimage.JPG')" }} // 👈 apna bg image
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 background: linear-gradient(88.76deg, rgba(0, 0, 0, 0) 1.06%, rgba(0, 0, 0, 0.85) 45.83%, rgba(0, 0, 0, 0.85) 95.21%);
"></div> */}
<div
  className="absolute inset-0"
  style={{
    background: "linear-gradient(88.76deg, rgba(0, 0, 0, 0.85) 5.21%, rgba(0, 0, 0, 0.85) 48.83%, rgba(135, 35, 35, 0) 95.06%)",
      // "linear-gradient(88.76deg, rgba(0, 0, 0, 0) 95.06%, rgba(0, 0, 0, 0.85) 48.83%, rgba(0, 0, 0, 0.85) 5.21%)"
  }}
></div>

      {/* Navbar */}
      {/* <div className="relative z-10 flex justify-between items-center px-26 md:px-24 py-4">
  
        <img src="/download 2.png" alt="AirAI" className="h-10" />

      
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><Link to="/" className="hover:text-[#ED09EE]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#ED09EE]">About Us</Link></li>
         
             <li>
                        <Link to="/services" className={`hover:text-[#ED09EE] ${getLinkClass("/services")}`}>Services</Link>
                      </li>
          <li><Link to="/whychooseus" className="hover:text-[#ED09EE]">Why Choose Us</Link></li>
          
        </ul>


       
       
       
       <button className="bg-gradient-to-r from-pink-500 to-orange-500 px-12 py-3 rounded-md text-white font-medium"
        style={{ 
    background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)" 
  }}
        >
          Contact Us
        </button>
      </div> */}
       < Mainnavbar/>

      {/* Hero Content */}
      {/* <div className="relative z-1 -mt-[100x] flex-1  flex items-center px-[150px]"> */}
       <div className="absolute top-1/2 mx-[150px] px-[12px] sm:mx-1  font-cabin  transform -translate-y-1/2  w-fit ">
        <div className="max-w-3xl sm:px-3">
          <h1 className="text-[72px] sm:text-[42px] 3xl:text-[79px] leading-[120%] font-cabin font-bold text-white leading-none">
            Expert <span className="text-white">Game Design </span> <br />
            Development 
            <span className="relative inline-block pb-2 pt-[px] sm:ml-[-10px]  leading-none mt-2 left-[20px] top-[11px] bg-[#FFFFFF0F]  10% text-orange-500 px-3 translate-y-[-2px] font-semibold">
Service
  {/* Top-left corner */}
  <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
  {/* Top-right corner */}
<span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
  {/* Bottom-left corner */}
  <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
  {/* Bottom-right corner */}
  <span className="absolute bottom-[-7PX] right-[-2PX] w-3 h-3 bg-[#3F74F6]"></span>
    <span className="absolute bottom- right- w-3 h-3 bg-#3F74F6"></span>
</span>
          </h1>
          <p className="mt-[16px] sm:mt-[36px]  3xl:text-[20px] sm:text-[16px]  text-white opacity-90 font-cabin text-lg leading-relaxed">
           We provide comprehensive game design and development services, transforming creative<br/> ideas into engaging digital experiences. From concept design and UI/UX development to<br/> coding, animation, and deployment, our team ensures high-quality results across multiple<br/> platforms. Whether it’s mobile, PC, console, or AR/VR gaming, we deliver innovative and<br/> immersive solutions tailored to your needs.
          </p>

          <button className="mt-[42px] bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-3 rounded-lg font-medium text-white shadow-lg 3xl:px-[50px] 3xl:mt-[52px] 3xl:text-[20px]   3xl:py-[14px] hover:scale-105 transition-transform"
           style={{ 
    background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)" 
  }}
          >
            Book a Free Event
          </button>

        </div>
      </div>

      {/* Tech Icons */}
  
    </div>



<div className="relative z-20 bg-[#ED09EE] py-7  -top-5 overflow-hidden">
  <div className="flex w-max animate-scroll">
    {[...techs, ...techs, ...techs].map((tech, idx) => (
      <div key={idx} className="flex flex-col items-center justify-center px-[82px]">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-15 h-20 object-contain"
        />
      </div>
    ))}
  </div>

  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-33.333%);
      }
    }
    .animate-scroll {
      animation: scroll 12s linear infinite;
    }
  `}</style>
</div>



    </>
  );
}
