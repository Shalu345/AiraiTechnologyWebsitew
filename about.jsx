

import React, {useState,} from "react";
import { Link ,  useLocation} from "react-router-dom";
import  Mainnavbar from '../mainnavbar.jsx';
export default function About() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div
      className="relative bg-cover bg-black  bg-center sm:px- sm:px-[2px]  sm:text-start min-h-screen "
     
      style={{ backgroundImage: "url('/HERO2.jpg')" }} 
     
    >
      <div
  className="absolute inset-0"
  style={{

    background: "linear-gradient(90deg, rgba(0, 0, 0, 0.9) 40%, rgba(192, 185, 185, 0.1) 100%,  rgba(192, 185, 185, 0) 18%,  white 360%)"

  }}
></div>

       < Mainnavbar/>

      <div className="relative z-1 leading-none px-[20px] flex-1  py-10 flex items-center mx-[150px] sm:mx-[9px]  sm:text-start">
        <div className="max-w-3xl sm:mt-8  sm:w-full">
          <h1 className="text-[72px]  sm:item-start sm:text-[42px] 3xl:text-[77px] font-cabin font-bold text-white leading-none">
            Passion for
            <span className="relative inline-flex sm:mt-[5px] sm:mb-[8px] sm:h-[60px] sm:pt-1 sm:text-[48px] items-start px-2 leading-none pb-[16px] pt-  py- m bg-[#FFFFFF0F] text-orange-500 ml-4 sm:ml-2">
            Gaming
 
    {/* Top-left corner */}
    <span className="absolute top-[-4px] left-[-7px] w-3 h-3 bg-[#FF5A39]"></span>
    {/* Top-right corner */}
    <span className="absolute top-[-4px] right-[-7px] w-3 h-3 bg-[#F015CE]"></span>
    {/* Bottom-left corner */}
    <span className="absolute bottom-[-4px] left-[-7px] w-3 h-3 bg-[#6F24F0]"></span>
    {/* Bottom-right corner */}
    <span className="absolute bottom-[-4px] right-[-7px] w-3 h-3 bg-[#3F74F6]"></span>
  </span><br className="sm:hidden"/>
       <span className="lg:hidden ml-1">Design </span> 
   <span className="hidden sm:block">  & Development</span>
  <span className="block sm:hidden"> & Development</span>
        
 </h1>

  <p className="mt-[16px] sm:text-[16px] sm:text-start text-white sm:px-1 3xl:text-[24px] font-weight: regular opacity-90 text-[18px] leading-none font-cabin leading-relaxed">
      {/* At Airai , we are passionate about creating engaging and immersive gaming,<br/> experiences. As a leading game design and development company, we<br/> specialize in crafting interactive worlds that captivate players. Our team of<br/> skilled designers, developers, and storytellers work together to push the<br/> boundaries of creativity and technology. Whether it’s mobile, PC, or<br/> console gaming, we bring ideas to life with innovation and excellence. */}
      At Airai, we are passionate about creating engaging and immersive gaming,
  <br className=" sm:hidden" />
  experiences. As a leading game design and development company, we
  <br className=" sm:hibben" />
  specialize in crafting interactive worlds that captivate players. Our team of
  <br className=" sm:hidden" />
  skilled designers, developers, and storytellers work together to push the
  <br className="sm:hidden" />
  boundaries of creativity and technology. Whether it’s mobile, PC, or
  <br className=" sm:hidden" />
  console gaming, we bring ideas to life with innovation and excellence.
   </p>
          <button
            className="mt-[42px] px-6 py-4 3xl:px-[50px] 3xl:mt-[52px]  3xl:py-[19px] 3xl:text-[20px] rounded-md text-[px] font-medium text-white"
            style={{
              background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)"
            }}
          >
           Book a Free Event
          </button>
        </div>
      </div>
    
            <div
  className="w-full h-14 absolute bottom-0 left-0"
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
