

import React from "react";
import { Link, useLocation } from "react-router-dom"
export default function AboutSections() {
  const expertise = [
    { icon: "🎨", title: "UI/UX Design", desc: "Designing engaging and intuitive user experiences." },
    { icon: "🕹️", title: "Game Development", desc: "Creating immersive and fun digital games." },
    { icon: "💻", title: "Web Development", desc: "Building responsive and scalable web applications." },
    { icon: "📱", title: "Mobile Apps", desc: "Developing apps for Android and iOS platforms." },
    { icon: "🧩", title: "3D Modeling", desc: "Crafting realistic 3D models for digital projects." },
    { icon: "🚀", title: "Branding", desc: "Creating strong brand identities for businesses." },
  ];
// relative w-full px-[150px] mx-auto    bg-black  text-white

  return (
    <>
    <div className="relative w-full  sm:pt-[80px] sm:h-[1000px] sm:pb-0 border-b-7  border-black bg-black px-[150px] mx-auto bg-black 3xl:pt-[50px] 3xl:pb-[50px] text-white sm:px-[1px] sm:h-full sm:pb-[0px]  sm:pt-[80px]">
      {/* Top-left gradient glow for page */}
      <div
  // className="absolute  top-0 left-[-170px] pt- pointer-events-none -z-10"
  // style={{
  //   width: "500px",
  //   height: "500px",
  //   background: "radial-gradient(circle,  #ED09EE 120%, #1091F8 50%,  transparent 80%)",
  //   opacity: 1,
  //   borderRadius: "50%",
  //   transform: "translate(0%, 0%)",
  // }}
></div>

      {/* Bottom-right gradient glow for page */}
      <div
        className="absolute bottom-0  right-0 w-72 h-72 pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, #ED09EE 120%, #1091F8 50%, transparent 80%)",
          opacity: 0.9,
          transform: "translate(25%, 25%)",
          borderRadius: "50%",
        }}
      ></div>

     
      <section className="  font-cabin bg-green-0   mx-auto content-center item-center w-full py-[88px] sm:py-1  relative place-items-center  z-10">
    <div className="grid grid-cols-2 sm:grid-cols-1 sm:text-right order-1  3xl:gap-[120px] 3xl:flex 3xl:flex-row  3xl:justify-start  bg-red-0  justify-center items-center content-center h-fit bg-red-00  ">
          
          <div className=" sm:hidden  sm:justify-end sm:order-2 bg-orange-00 3xl:w-[850px] bg-green-00 relative  z-10 3xl:bg-red-00 3xl:w-fit">
            <img
              src="/Group3.png"
              alt="Who We Are"
              className="rounded-3xl shadow-2xl  3xl:w-[550px] 3xl:h-auto  object-cover"
            />
          </div>

                  
  <div className="  sm:items-start order-1  3xl:bg-yellow-00 sp text-left relative items-start sm:items-center 3xl:mt-[-50px] bg-yellow-00 content-center  flex flex-col  h-full   z-10 w-fit sm:text-center  bg-yellow-0">
              
           
<h2 className="text-[75px]  sm:text-[42px] sm:leading-none 3xl:text-[95px] items-center font-bold  w-fit  3xl:leading-none sm:h-full sm:px-[1px]">
     Who We{''} <span className=" relative pb-1 font-cabin mb- items-center  inline-flex sm:h-[49px] 3xl:h-[105px] 3xl:leading-none 3xl:pt-[-28px] 3xl:px-[20px] 3xl:py-[80x]  justify-center h-[75px] leading-[75px]   px-3  text-orange-500 sm:left-[9px] ">
       Are
       {/* bg-[#FFFFFF0F] */}
   <span className="absolute top-[-2PX] left-[-9PX] w-3 h-3 bg-[#FF5A39] "></span>
  <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
  <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
  <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>

  </span>
            </h2> 


            <p className="sm:px-[20px] sm:mt-[16px] sm:text-[16px]  sm:mb-[-20px] text-lg text-white mt-[16p-x]  3xl:mt-1 3xl:text-[24px]  3xl:leading-[35px]  font-cabin text-[18px] max-w-[680px] 3xl:max-w-[950px]  3xl:bg-yellow-00  3xl:font-normal opacity-90 ">
              Welcome to AIRAI, where creativity meets innovation in the world of game design and development.
              We create beyond the box immersive digital experiences. In the constantly changing game industry, 
              we are driven by our passion, innovation, and dedication to quality. We are a group of creative minds 
              with a simple yet ambitious goal: to redefine the gaming industry. Our goal is to provide participants 
              with truly memorable experiences.
            </p> 

        <div className=" lg:hidden sm:px-4 sm:mt-12 sm:justify-end sm:order-2 bg-orange-00 3xl:w-[850px] bg-green-00 relative  z-10 3xl:bg-red-00 3xl:w-fit">
            <img
              src="/Group3.png"
              alt="Who We Are"
              className="rounded-3xl sm:h-[258px] shadow-2xl  3xl:w-[550px] 3xl:h-auto  object-cover"
            />
          </div>
            {/* Learn More Button with Top-left & Bottom-right Pink Blur */}
            <button
              className=" sm:hidden  sm:order-3 top-9 3xl:top-[50px] px-12 py-3 sm:px-12 3xl:py-3 sm:py-8 3xl:px-[60px] rounded-[5px] font-semibold text-white relative overflow-hidden sm:leading-none"
              style={{ 
  background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 170%)"
}}
  >
           
             <span className="relative z-10 text-[20px] ">Learn More</span> 
           </button> 



          <button className=" lg:hidden sm:order-3 bg-gradient-to-r mt-[42px] 3xl:px-[50px] 3xl:mt-[52px] sm:px-10 3xl:py-[12px] from-pink-500 to-orange-500 px-12 py-[17px] rounded-md text-white font-medium   "
         style={{ 
     background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)" 
   }}
         >
       
      <Link to="/ContactUs" className=" 3xl:text-[20px] sm:text-[18px] hover:text-white ">Learn More </Link>
          
    </button>       
      
 
       
  <span
    className="absolute sm:hidden top-[0px] left-[-690px]  w-[200px] h-[450px] rounded-none pointer-events-none
     sm:w -[25vw] sm:h-[50vh]
    md:w-[18vw] md:h-[55vh]
    lg:w-[15vw] lg:h-[50vh]"
    style={{
     
      background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(180px)",
         ...(typeof window !== "undefined" && window.innerWidth >= 1920 ? { filter: "blur(300px)", left: "-1150px" } : {}),
      opacity: 0.9,
      transform: "translate(-112%, -20%)",
    }}
  ></span>


  <span
    className="absolute sm:hidden bottom-[0px] 3xl:right-[-850px] 3xl:blur-[890px] right-[-250px] w-[550px] h-[440px] pointer-events-none rounded-none
  
    md:w-[18vw] md:h-[55vh]
    lg:w-[15vw] lg:h-[50vh]"
    style={{
      
      background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(190px)",
       background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(190px)",
   ...(typeof window !== "undefined" && window.innerWidth >= 1920 ? { filter: "blur(300px)", right: "-850px" } : {}),
      opacity: 0.9,
      transform: "translate(6%, 49%)", 
    }}
  ></span>







            </div>






        </div>


      </section>
    </div>






</>
        


  );
}












