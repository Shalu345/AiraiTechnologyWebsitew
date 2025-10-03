import React from "react";
import { Link, useLocation } from "react-router-dom";
import  Mainnavbar from '../mainnavbar.jsx';
export default function Whychoseservice() {

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
    { icon: "/node.png", name: "Unity"},
  ];

  return (
    <>
    <div
      className="relative bg-cover  h-screen bg-center h-[600px] sm:overflow-x-hidden flex flex-col"
      style={{ backgroundImage: "url('herosection (2).png')" }} // 👈 apna bg image
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/0"></div> */}
        <div
  className="absolute inset-0"
  style={{
     background: "linear-gradient(-88.76deg, rgba(0, 0, 0, 0) 1.06%, rgba(0, 0, 0, 0.85) 45.83%, rgba(0, 0, 0, 0.85) 95.21%)"
  
// background: "linear-gradient(88.76deg, rgba(0, 0, 0, 0) 99.06%, rgba(0, 0, 0, 0.85) 99.78%, rgba(0, 0, 0, 0.85) 95.21%)",
  // background: "linear-gradient(rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0) 48%, rgba(0, 0, 0, 0) 100%)",

  }}
></div>

      {/* Navbar */}
      {/* <div className="relative z-10 flex justify-between items-center px-24 md:px-24 py-4">
   
        <img src="/download 2.png" alt="AirAI" className="h-10" />

   
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><Link to="/" className="hover:text-[#ED09EE]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#ED09EE]">About Us</Link></li>
          <li><Link to="/services" className="hover:text-[#ED09EE]">Services</Link></li>
        
          
        <li>
          <Link to="/whychooseus" className={`hover:text-[#ED09EE] ${getLinkClass("/whychooseus")}`}>Why Choose Us</Link>
        </li>
         <li><Link to="/contactus" className="hover:text-[#ED09EE]">Contact Us</Link></li> 
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
      <div className="relative z-1 flex-1 font-cabin -mt-[30px] flex items-center px-[150px] sm:px-2">
        <div className="max-w-3xl sm:mt-[17px] sm:px-4 3xl:max-w-full">
          <h1 className="text-[72px] sm:text-[42px] font-bold text-white leading-none 3xl:text-[95px] ">


            Creating  Next-Level<br className="sm:hidden"/> 


  <span className="relative  sm:text-[48px] sm:h-[60px] sm:ml-3 sm:mb-3  inline-block h-[85px] 3xl:h-[115px] mt-4 bg-[#FFFFFF0F] 3xl:leading-none   text-orange-500 px-3  font-semibold">
Gaming
  {/* Top-left corner */}
  <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
  {/* Top-right corner */}
<span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
  {/* Bottom-left corner */}
  <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
  {/* Bottom-right corner */}
  <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>
    <span className="absolute bottom- right- w-3 h-3 bg-#3F74F6"></span>
</span>  Experiences
          </h1>


          <p className="mt-[16px] sm:text-[16px]  3xl:text-[24px] text-white opacity-90 font-cabin text-[18px] leading-relaxed">
          At Airai, we blend creativity, innovation, and technical expertise to deliver outstanding<br/> game development and design solutions. Our team is dedicated to crafting immersive<br/> experiences with high-quality graphics, engaging gameplay, and seamless performance.<br/> With a passion for gaming and a commitment to excellence, we ensure every project<br/> exceeds expectations. Choose us to turn your vision into reality.
          </p>

          <button className="mt-[42px] sm:text-[16px] bg-gradient-to-r from-pink-500 to-orange-500 px-10 py-3 rounded-lg font-medium text-white 3xl:px-[50px] 3xl:mt-[52px]  3xl:py-[14px] 3xl:text-[22px] shadow-lg hover:scale-105 transition-transform"
             style={{ 
    background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)" 
  }}
          >
            Work With Us
          </button>
        </div>
      </div>

      {/* Tech Icons */}

<div
  className="w-full h-14 mt-[70px] relative  shadow-[0px_6px_0px_rgba(0,0,0,1)] -top-5"
  style={{
    background: "linear-gradient(to bottom,  rgba(1, 1, 1, 0) 0%, #000000 100%)",
    // background: "linear-gradient(166.18deg, rgba(0, 0, 0, 0) 8.4%, #000000 69.06%)",
    border: "none",
    margin: "0",
    padding: "0",
//  WebkitBackdropFilter: "blur(666px)",
//  boxShadow: "880 28px 0px rgba(0, 0, 0, 1)",
  }}
></div>
    </div>

   
    </>
  );
}
