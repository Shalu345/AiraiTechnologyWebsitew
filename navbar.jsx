


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"
import Mainnavbar from './mainnavbar.jsx';
export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-[#FF8B19] font-bold"
      : "hover:text-[#ED09EE]";

  return (
    <>
      {/* Hero Section */}





      <div
        className="relative bg-red-00  items-center sm:min-h-[calc(100vh-100px)] min-h-screen   bg-cover sm:border-none h-auto b-black sm:overflow-x-hidden  bg-center  bg-center text-white min-h-sceen"
        style={{ backgroundImage: "url('/human-hand-typing-1 (1) - Copy.png')" }}
      >
        <div
          className="absolute inset-0"
          style={{

            background: "linear-gradient(rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0) 48%, rgba(0, 0, 0, 0) 100%)",
          }}
        ></div>
        {/* flex items-center justify-center */}
        {/* top- pt-[460px] mx-[150px]  font-cabin  transform -translate-y-1/2 */}
        {/* top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 */}
        <div className="sm:hidden">
          <Mainnavbar />
        </div>

        <div className="w-fit sm:flex sm:flex-col sm:hidden  sm:overflow-x-hidden sm:min-h-screen  bg-yellow-00 sm:pb-[0px]  3xl:min-h-[calc(99vh-90px)] 3xl:mt-[-60px] flex sm:overflow-y-hidden place-items-center  items-center">


          <div className="sm:px-[27px]    sm:hidde bg-yellow-00 sm:overflow-x-hidden bg-red-00  mt-[40px] 3xl:mt-[-60px]  sm:mt-[1px] h-full  relative z-10 flex flex-col justify-center items-start  px-[150px] sm:px-[02px]  sm:text-start  w-fit "

          >

            <h1 className="   sm:text-[42px] text-[72px] 3xl:text-[95px] 3xl:leading-[112px] bg-blue-00 font-cabin leading-none font-bold leading-tight  max-w-7xl">
              Revolutionizing the{" "}
              <span className=" sm:hidden"><br /></span>
              Future of{" "}

              <span className="relative inline-flex sm:text-[48px] sm:h-[58px] items-start px-2 3xl:px-[20px] 3xl:py-[14px]  3xl:pb-[114px] 3xl:pt-[0px] 3xl:h-[100px] 3xl:leading-none leading-none pb-[20px] bg-[#FFFFFF0F] text-[#FF8B19] ml-3">
                Gaming

                {/* Top-left corner */}
                <span className="absolute top-[-4px] left-[-7px] w-3 h-3 bg-[#FF5A39]"></span>
                {/* Top-right corner */}
                <span className="absolute top-[-4px] right-[-7px] w-3 h-3 bg-[#F015CE]"></span>
                {/* Bottom-left corner */}
                <span className="absolute bottom-[-4px] left-[-7px] w-3 h-3 bg-[#6F24F0]"></span>
                {/* Bottom-right corner */}
                <span className="absolute bottom-[-4px] right-[-7px] w-3 h-3 bg-[#3F74F6]"></span>
              </span>

            </h1>

            <p className="mt-1 text-[18px]  sm:mt-4  3xl:text-[24px] font-normal 3xl:mt-[0px]  text-gray-200 max-w-[] w-fit  sm:text-[16px]    max-w-7xl sm:px-[1px]">
              {/* At Airai, we are dedicated to pushing the boundaries of what’s possible in<br/>the gaming world. Our team of visionary developers, artists, and<br/>storytellers work together to create immersive, innovative experiences<br/>that captivate players across the globe. With a focus on cutting-edge<br/>technology and creative excellence, we craft games that not only entertain<br/>but also inspire. */}
              At Airai, we are dedicated to pushing the boundaries of what’s possible in
              <span className="sm:hidden"><br /></span>
              the gaming world. Our team of visionary developers, artists, and
              <span className="sm:hidden"><br /></span>
              storytellers work together to create immersive, innovative experiences
              <span className="sm:hidden"><br /></span>
              that captivate players across the globe. With a focus on cutting-edge
              <span className="sm:hidden"><br /></span>
              technology and creative excellence, we craft games that not only entertain
              <span className="sm:hidden"><br /></span>
              but also inspire.



            </p>


            <div className="sm:flex sm:justify-center">
              <button className="bg-gradient-to-r sm:mt-[42px]  mt-[42Px] 3xl:px-[50px] 3xl:mt-[52px] sm:px-10 3xl:py-[12px] from-pink-500 to-orange-500 px-12 py-[17px] rounded-md text-white font-medium "
                style={{
                  background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)"
                }}
              >

                <Link to="/ContactUs" className=" 3xl:text-[20px] sm:text-[18px] hover:text-white "> Schedule Meeting</Link>

              </button>
            </div>



          </div>

        </div>







   <div className="w-fit sm:flex sm:flex-col lg:hidden sm:overflow-x-hidden sm:min-h-screen  bg-yellow-00 sm:pb-[0px]  3xl:min-h-[calc(99vh-90px)] 3xl:mt-[-60px] flex sm:overflow-y-hidden place-items-center  items-center">

            <Mainnavbar/>

          <div className="sm:px-[27px] sm:hidde bg-yellow-00 sm:min-h-[calc(99vh-140px)] sm:overflow-x-hidden bg-red-00  mt-[40px] 3xl:mt-[-60px]  sm:mt-[1px] h-full  relative z-10 flex flex-col justify-center items-start  px-[150px] sm:px-[02px]  sm:text-start  w-fit "

          >

            <h1 className="   sm:text-[42px] text-[72px] 3xl:text-[95px] 3xl:leading-[112px] bg-blue-00 font-cabin leading-none font-bold leading-tight  max-w-7xl">
              Revolutionizing the{" "}
              <span className=" sm:hidden"><br /></span>
              Future of{" "}

              <span className="relative inline-flex sm:text-[48px] sm:h-[58px] items-start px-2 3xl:px-[20px] 3xl:py-[14px]  3xl:pb-[114px] 3xl:pt-[0px] 3xl:h-[100px] 3xl:leading-none leading-none pb-[20px] bg-[#FFFFFF0F] text-[#FF8B19] ml-3">
                Gaming <br className="lg:hidden"/>

                {/* Top-left corner */}
                <span className="absolute top-[-4px] left-[-7px] w-3 h-3 bg-[#FF5A39]"></span>
                {/* Top-right corner */}
                <span className="absolute top-[-4px] right-[-7px] w-3 h-3 bg-[#F015CE]"></span>
                {/* Bottom-left corner */}
                <span className="absolute bottom-[-4px] left-[-7px] w-3 h-3 bg-[#6F24F0]"></span>
                {/* Bottom-right corner */}
                <span className="absolute bottom-[-4px] right-[-7px] w-3 h-3 bg-[#3F74F6]"></span>
              </span>

            </h1>

            <p className="mt-1 text-[18px]  sm:mt-4 sm:pr-[37px]  3xl:text-[24px] font-normal 3xl:mt-[0px]  text-gray-200 max-w-[] w-fit  sm:text-[16px]    max-w-7xl sm:px-[1px]">
              {/* At Airai, we are dedicated to pushing the boundaries of what’s possible in<br/>the gaming world. Our team of visionary developers, artists, and<br/>storytellers work together to create immersive, innovative experiences<br/>that captivate players across the globe. With a focus on cutting-edge<br/>technology and creative excellence, we craft games that not only entertain<br/>but also inspire. */}
              At Airai, we are dedicated to pushing the boundaries of what’s possible in
              <span className="sm:hidden"><br /></span>
              the gaming world. Our team of visionary developers, artists, and
              <span className="sm:hidden"><br /></span>
              storytellers work together to create immersive, innovative experiences
              <span className="sm:hidden"><br /></span>
              that captivate players across the globe. With a focus on cutting-edge
              <span className="sm:hidden"><br /></span>
              technology and creative excellence, we craft games that not only entertain
              <span className="sm:hidden"><br /></span>
              but also inspire.



            </p>


            <div className="sm:flex sm:justify-center">
              <button className="bg-gradient-to-r sm:mt-[42px]  mt-[42Px] 3xl:px-[50px] 3xl:mt-[52px] sm:px-10 3xl:py-[12px] from-pink-500 to-orange-500 px-12 py-[17px] rounded-md text-white font-medium "
                style={{
                  background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)"
                }}
              >

                <Link to="/ContactUs" className=" 3xl:text-[20px] sm:text-[18px] hover:text-white "> Schedule Meeting</Link>

              </button>
            </div>



          </div>

        </div>







     



         {/* sm:state section */}

        <div className="bg-black  lg:hidden  sm:overflow-x-hidden sm:border-b-0 sm:pb-[0px] ">


      
         

 

          <section className="lg:hidden sm:border-none flex-shrink-0 h-[94px] w-full bg-[#ED09EE] absolute inset-x-0 bottom-0   overflow-x-hidden">

            <div className="flex w-max sm:pt- animate-scroll items-center">
              {[...Array(3)].map((_, repeatIdx) => (
                <React.Fragment key={repeatIdx}>

                  <div className="relative flex flex-col items-center justify-center px-12 min-w-[200px]">
                    <h2 className="text-[36px] sm:text-[44px] font-bold text-white">500+</h2>
                    <p className="text-white text-[18px] sm:text-[16px] font-bold -mt-2">Happy Clients</p>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[90%] bg-gradient-to-b from-[#ED09EE]/80 via-white to-[#ED09EE]/80"></div>
                  </div>

                  <div className="relative flex flex-col items-center justify-center px-12 min-w-[200px]">
                    <h2 className="text-[36px] sm:text-[36px] font-bold text-white">300+</h2>
                    <p className="text-white text-[18px] sm:text-[16px] font-bold -mt-2">Products Delivered</p>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[90%] bg-gradient-to-b from-[#ED09EE]/80 via-white to-[#ED09EE]/80"></div>
                  </div>


                  <div className="relative flex flex-col items-center justify-center px-12 min-w-[200px]">
                    <h2 className="text-[36px] sm:text-[36px] font-bold text-white">98%</h2>
                    <p className="text-white text-[18px] sm:text-[16px] font-bold -mt-2">On-Time Delivery</p>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[90%] bg-gradient-to-b from-[#ED09EE]/80 via-white to-[#ED09EE]/80"></div>
                  </div>


                  <div className="relative flex flex-col items-center justify-center px-12 min-w-[200px]">
                    <h2 className="text-[36px] sm:text-[36px] font-bold text-white">50%</h2>
                    <p className="text-white text-[18px] sm:text-[16px] font-bold -mt-2">Returning Clients</p>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[90%] bg-gradient-to-b from-[#ED09EE]/80 via-white to-[#ED09EE]/80"></div>
                  </div>
                </React.Fragment>
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
      animation: scroll 20s linear infinite;
    }
  `}</style>
          </section>

        </div>


      </div>



      <div className="bg-black  sm:hidden   sm:overflow-x-hidden sm:border-b-0 sm:pb-[0px] ">


        {/* <section className="relative bg-[#ED09EE] grid grid-cols-4  gap-[px] text-center pt-3 pb-5 -top-5 sm:grid-cols-1">
       
<div className="absolute  left-[25%]  left-[24%] top-1/2 -translate-y-1/2 w-[2px] 3xl:w-[2px]  h-[70%] bg-gradient-to-b from-[#ED09EE]/90 via-white to-[#ED09EE]/90 blur-[px]"></div>


<div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-[2px] h-[70%] bg-gradient-to-b from-[#ED09EE] via-white to-[#ED09EE] blur-"></div>


<div className="absolute left-[75%] top-1/2  3xl:left-[76%]  -translate-y-1/2 w-[2px] h-[70%] bg-gradient-to-b from-[#ED09EE] via-white to-[#ED09EE] blur-"></div> 

     <div className="flex flex-col items-center   justify-center ">
      <h2 className="text-[52px] font-bold  text-white">500+</h2>
      <p className="text-white text-[32px] -mt-4">Happy Clients</p>
    </div>

    <div className="flex flex-col items-center   justify-center">
      <h2 className="text-[52px] text-white font-bold">300+</h2>
      <p className="text-white text-[32px] -mt-4"> Products Delivered </p>
    </div>

    <div className="flex flex-col items-center    justify-center text-center">
      <h2 className="text-[52px] text-white font-bold">98%</h2>
      <p className="text-white text-[32px] -mt-4">On-Time Delivery</p>
    </div>

    <div className="flex flex-col items-center  justify-center">
      <h2 className="text-[52px] text-white font-bold">50%</h2>
      <p className="text-white text-[32px] -mt-4">Happy Clients</p>
    </div>
  
  </section> */}


        <section className=" sm:hidden sm:px-1 relative bg-[#ED09EE]   grid  sm:overflow-x-auto   lg:grid-cols-4 gap-6 pb-2 text-center 3xl:pt-6 3xl:pb-10 -top-5">

          {/* Divider Lines - Sirf lg screens pe dikhana */}
          <div className=" lg:block absolute left-[25%] sm:left-[44%] top-1/2 -translate-y-1/2 w-[2px] h-[70%] bg-gradient-to-b from-[#ED09EE]/90 via-white to-[#ED09EE]/90"></div>

          <div className=" lg:block absolute left-[50%] sm:left-[99%] top-1/2 -translate-y-1/2 w-[2px] h-[70%] bg-gradient-to-b from-[#ED09EE] via-white to-[#ED09EE]"></div>

          <div className="  lg:block absolute left-[75%] sm:left-[153%] top-1/2 -translate-y-1/2 w-[2px] h-[70%] bg-gradient-to-b from-[#ED09EE] via-white to-[#ED09EE]"></div>

          {/* Item 1 */}
          <div className="flex flex-col items-center justify-center sm: min-w-[35%]">
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold sm:text-[36px]  text-white">500+</h2>
            <p className="text-white text-[20px]  lg:text-[32px] sm:text-[16px] -mt-2">Happy Clients</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center justify-center sm:min-w-[38%]">
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white">300+</h2>
            <p className="text-white text-[20px]  lg:text-[32px] sm:text-[16px]  -mt-3">Products Delivered</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center justify-center sm: min-w-[35%]">
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white">98%</h2>
            <p className="text-white text-[20px]  lg:text-[32px] sm:text-[16px] -mt-2">On-Time Delivery</p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center justify-center sm: min-w-[35%]">
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white">50%</h2>
            <p className="text-white text-[20px] lg:text-[32px] sm:text-[16px] -mt-2">Happy Clients</p>
          </div>

        </section>

        {/* <section className=" lg:hidden relative bg-[#ED09EE] py-6 -top-5 overflow-hidden">
  
  <div className="flex w-max animate-scroll">
    {[...Array(3)].map((_, repeatIdx) => (
      <React.Fragment key={repeatIdx}>
       
        <div className="flex flex-col items-center justify-center px-12 min-w-[200px]">
          <h2 className="text-[36px] sm:text:center sm:text-[44px] lg:text-[52px] font-bold text-white">500+</h2>
          <p className="text-white text-[20px] lg:text-[32px] sm:text-[19px] -mt-2">Happy Clients</p>
        </div>

       
        <div className="flex flex-col items-center justify-center px-12 min-w-[200px]">
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white">300+</h2>
          <p className="text-white text-[20px] lg:text-[32px] sm:text-[16px] -mt-3">Products Delivered</p>
        </div>

      
        <div className="flex flex-col items-center justify-center px-12 min-w-[200px]">
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white">98%</h2>
          <p className="text-white text-[20px] lg:text-[32px] sm:text-[16px] -mt-2">On-Time Delivery</p>
        </div>

       
        <div className="flex flex-col items-center justify-center px-12 min-w-[200px]">
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white">50%</h2>
          <p className="text-white text-[20px] lg:text-[32px] sm:text-[16px] -mt-2">Returning Clients</p>
        </div>
      </React.Fragment>
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
      animation: scroll 20s linear infinite;
    }
  `}</style>
 </section>  */}

        <section className="lg:hidden sm:border-none flex-shrink-0 h-[94px] w-full bg-[#ED09EE] absolute inset-x-0 bottom-0   overflow-x-hidden">

          <div className="flex w-max animate-scroll items-center">
            {[...Array(3)].map((_, repeatIdx) => (
              <React.Fragment key={repeatIdx}>

                <div className="relative flex flex-col items-center justify-center px-12 min-w-[200px]">
                  <h2 className="text-[36px] sm:text-[44px] font-bold text-white">500+</h2>
                  <p className="text-white text-[18px] sm:text-[16px] font-bold -mt-2">Happy Clients</p>

                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[90%] bg-gradient-to-b from-[#ED09EE]/80 via-white to-[#ED09EE]/80"></div>
                </div>

                <div className="relative flex flex-col items-center justify-center px-12 min-w-[200px]">
                  <h2 className="text-[36px] sm:text-[36px] font-bold text-white">300+</h2>
                  <p className="text-white text-[18px] sm:text-[16px] font-bold -mt-2">Products Delivered</p>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[90%] bg-gradient-to-b from-[#ED09EE]/80 via-white to-[#ED09EE]/80"></div>
                </div>


                <div className="relative flex flex-col items-center justify-center px-12 min-w-[200px]">
                  <h2 className="text-[36px] sm:text-[36px] font-bold text-white">98%</h2>
                  <p className="text-white text-[18px] sm:text-[16px] font-bold -mt-2">On-Time Delivery</p>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[90%] bg-gradient-to-b from-[#ED09EE]/80 via-white to-[#ED09EE]/80"></div>
                </div>


                <div className="relative flex flex-col items-center justify-center px-12 min-w-[200px]">
                  <h2 className="text-[36px] sm:text-[36px] font-bold text-white">50%</h2>
                  <p className="text-white text-[18px] sm:text-[16px] font-bold -mt-2">Returning Clients</p>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[90%] bg-gradient-to-b from-[#ED09EE]/80 via-white to-[#ED09EE]/80"></div>
                </div>
              </React.Fragment>
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
      animation: scroll 20s linear infinite;
    }
  `}</style>
        </section>

      </div>






    </>
  );
}








