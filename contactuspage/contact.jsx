// Have a Project in Mind?  Contact Us!


import React from "react";
import { Link, useLocation } from "react-router-dom";
import  Mainnavbar from '../mainnavbar.jsx';
export default function Contactus() {
   const location = useLocation();

const getLinkClass = (path) =>
  location.pathname === path
    ? "text-orange-500 [#ED09EE] font-bold"
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
      className="relative bg-cover h-screen bg-center h-[600px] flex flex-col"
      style={{ backgroundImage: "url('herosection (4).png')" }} // 👈 apna bg image
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/70">
      </div> */}


            <div
  className="absolute inset-0"
  style={{
      //background: "linear-gradient(rgba(0, 0, 0, 0.374) 1.06%, rgba(0, 0, 0, 0.85) 1.83%, rgba(0, 0, 0, 1.85)"
   

    // background: "linear-gradient(90deg, rgba(0, 0, 0, 0.9) 40%, rgba(192, 185, 185, 0.1) 60%,  rgba(192, 185, 185, 0) 178%,  white 360%)"
          background: "linear-gradient(-88.76deg, rgba(0, 0, 0, 0) 1.06%, rgba(0, 0, 0, 0.85) 40.78%, rgba(0, 0, 0, 0.85) 95.21%)"

  }}
></div>

          < Mainnavbar/>

      {/* Hero Content */}
      <div className="relative z-1  flex-1 font-cabin -mt-[45px]  flex items-center px-[150px] sm:px-[10px]">
        <div className="max-w-3xl sm:mt-[50px] sm:px-[10px]">
          <h1 className="text-[72px] sm:text-[42px] 3xl:text-[95px] font-cabin font-bold text-white leading-none">
            Have a Project in <br /> Mind? 
           <span className="relative sm:ml-1 inline-block h-[px] sm:text-[48px] text-orange-500 px-2 pb-1 bg-[#FFFFFF0F]  mt-3 3xl:mt- left-[10px]  sm:left-[0px] ">
             Contact us!
  {/* Top-left corner */}
  <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
  {/* Top-right corner */}
<span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
  {/* Bottom-left corner */}
  <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
  {/* Bottom-right corner */}
  <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>
    <span className="absolute bottom-[-2px] right-[-7px] w-3 h-3 bg-#3F74F6"></span>
</span>
          </h1>
          <p className="mt-[16px] mt-3 text-gray-300 text-lg 3xl:text-[20px] font-cabin leading-relaxed  ">
{/* At Airai, we blend creativity, innovation, and technical expertise to deliver outstanding<br/> game development and design solutions. Our team is dedicated to crafting immersive<br/> experiences with high-quality graphics, engaging gameplay, and seamless performance.<br/> With a passion for gaming and a commitment to excellence, we ensure every project<br/> exceeds expectations. Choose us to turn your vision into reality. */}
<p className="mt-1 text-[18px]   3xl:text-[24px] font-normal text-gray-200 sm:text-[17px] sm:mt-[26px] max-w-7xl">
  At Airai, we blend creativity, innovation, and technical expertise to deliver outstanding
  <span className="hidden sm:hidden"><br /></span>
  game development and design solutions. Our team is dedicated to crafting immersive
  <span className="hidden sm:hidden"><br /></span>
  experiences with high-quality graphics, engaging gameplay, and seamless performance.
  <span className="hidden sm:hidden"><br /></span>
  With a passion for gaming and a commitment to excellence, we ensure every project
  <span className="hidden sm:hidden"><br /></span>
  exceeds expectations. Choose us to turn your vision into reality.
</p>

          </p>
          <button className="mt-[42px] sm:mt-[62px]  3xl:px-[50px] 3xl:mt-[52px]  3xl:py-[12px] bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-3 rounded-lg font-medium text-white shadow-lg hover:scale-105 transition-transform  3xl:text-[20px]"
            style={{ 
    background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)" 
  }}
          >
            Book a Free Event
          </button>
        </div>
      </div>

      {/* Tech Icons */}
         <div
  className="w-full h-14 relative"
  style={{
    background: "linear-gradient(to bottom,  rgba(1, 1, 1, 0) 0%, #000000 100%)",
    border: "none",
    margin: "0",
    padding: "0",
  }}
></div>
    </div>

</>
  );
}