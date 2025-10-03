

import React, {useState,} from "react";
import { Link ,  useLocation} from "react-router-dom";
// import Navbar from '../mainnavbar.jsx';
export default function Mainnavbar() {

    const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

const getLinkClass = (path) =>
  location.pathname === path
    ? "text-[#FF8B19] "
    : "hover:text-[#ED09EE]";
  return (
    <>
    <div className="relative w-full ">
    
  {/* Navbar */}


     <div className="relative sm:hidden sm:w-full z-10 3xl:px-[150px] 3xl:h-[120px] bg-red-00  3xl:py-[60px]  h-[100px] px-[150px]  flex justify-between items-center">
     
    <img src="/download 2.png" alt="AirAI"  className="h-10 sm:hidden  3xl:h-[52px]"/>
     
     
         <ul className="hidden md:flex gap-8  3xl:gap-[60px] 3xl:text-[20px] text-white">
          <li>
            <Link to="/" className={`hover:text-orange-500 ${getLinkClass("/")}`}>Home</Link>
          </li>
       
        <li>
              <Link to="/about" className={`hover:text-orange-500 ${getLinkClass("/about")}`}>About Us</Link>
            </li>
          <li>
            <Link to="/services" className={`hover:text-orange-500 ${getLinkClass("/services")}`}>Services</Link>
          </li>
          <li>
            <Link to="/whychooseus" className={`hover:text-orange-500 ${getLinkClass("/whychooseus")}`}>Why Choose Us</Link>
           </li>
           
         </ul>

    
  <button className="bg-gradient-to-r 3xl:px-[50px] sm:hidden  3xl:py-[12px] from-pink-500 to-orange-500 px-12 py-[12px] rounded-md text-white font-medium"
         style={{ 
     background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)" 
   }}
  >
       
      <Link to="/ContactUs" className=" 3xl:text-[20px] hover:text-white ">Contact Us</Link>
          
       </button>


       </div> 









{/*             
     <div className="relative z-10 justify-between pl-[374px] py-1 mt-[-65px]  flex   items-center">  
          <img src="/download 2.png" alt="AirAI" className="h-10  3xl:h-[52px]"/> 
                  <button 
                  className="md:hidden text-white overflow-x-hidden"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? "✖" : "☰"}
                </button>
          </div>   */}

{/* 
  <div className="md:hidden flex justify-center items-center w-full  relative z-10">

  <img src="/download 2.png" alt="AirAI" className="h-10 3xl:h-[52px]" />
  

  <div className="flex-1"></div>
  
 
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-white text-2xl focus:outline-none"
  >
    {menuOpen ? "✖" : "☰"}
  </button>
</div>
    
                 {menuOpen && (
                <div className="md:hidden overflow-x-hidden relative z-10 bg-black/80 flex flex-col gap-8 px-12 py-4">
                  <Link to="/" className="hover:text-[#ED09EE] ">Home</Link>
                  <Link to="/about" className="hover:text-[#ED09EE] ">About Us</Link>
                  <Link to="/services" className="hover:text-[#ED09EE]" >Services</Link>
                  <Link to="/whychooseus" className="hover:text-[#ED09EE] ">Why Choose Us</Link>
                    <button className="bg-gradient-to-r 3xl:px-[50px]  3xl:py-[12px] from-pink-500 to-orange-500 px-12 py-[12px] rounded-md text-white font-medium"
         style={{ 
     background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)" 
   }}
  >
       
      <Link to="/ContactUs" className=" 3xl:text-[20px] hover:text-white ">Contact Us</Link>
          
                    </button>
                </div>
              )}  */}


{/* Mobile Logo + Hamburger */}
<div className="md:hidden flex bg-green-00 justify-between items-center w-full px-6 py-4 relative z-10">
  {/* Logo */}
<img src="/download 2.png" alt="AirAI" className="h-10 sm:h-[38px] 3xl:h-[52px]"/>

  {/* Hamburger */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-white text-2xl height-[12px] width-[18px] focus:outline-none"
  >
    {menuOpen ? "✖" : "☰"}
  </button>

</div>

{/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden absolute top- left-0 w-full bg-black/80 flex flex-col gap-4 px-6 py-6 text-white z-20">
    <Link to="/" className="hover:text-[#ED09EE]" onClick={() => setMenuOpen(false)}>
      Home
    </Link>
    <Link to="/about" className="hover:text-[#ED09EE]" onClick={() => setMenuOpen(false)}>
      About Us
    </Link>
    <Link to="/services" className="hover:text-[#ED09EE]" onClick={() => setMenuOpen(false)}>
      Services
    </Link>
    <Link to="/whychooseus" className="hover:text-[#ED09EE]" onClick={() => setMenuOpen(false)}>
      Why Choose Us
    </Link>
    <Link
      to="/ContactUs"
      className="bg-gradient-to-r from-pink-500 to-orange-500 px-12 py-3 rounded-md text-white font-medium text-center"
      style={{
        background:
          "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)",
      }}
      onClick={() => setMenuOpen(false)}
    >
      Contact Us
    </Link>
  </div>
)}

      

       {/* {menuOpen && (
                <div className="md:hidden overflow-x-hidden relative z-10 bg-black/80 flex flex-col gap-8 px-12 py-4">
                  <Link to="/" className="hover:text-[#ED09EE] ">Home</Link>
                  <Link to="/about" className="hover:text-[#ED09EE] ">About Us</Link>
                  <Link to="/services" className="hover:text-[#ED09EE]" >Services</Link>
                  <Link to="/whychooseus" className="hover:text-[#ED09EE] ">Why Choose Us</Link>
                    <button className="bg-gradient-to-r 3xl:px-[50px]  3xl:py-[12px] from-pink-500 to-orange-500 px-12 py-[12px] rounded-md text-white font-medium"
         style={{ 
     background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)" 
   }}
  >
       
      <Link to="/ContactUs" className=" 3xl:text-[20px] hover:text-white ">Contact Us</Link>
          
                    </button>
                </div>
              )}   */}




    </div>
  










 </>
  );
}





