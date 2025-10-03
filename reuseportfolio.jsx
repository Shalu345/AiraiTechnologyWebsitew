









// import React, { useState,  useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export default function ReuseOurPortfolio() {

// const projects = [
//   { 
//     image: "  /Frame 30.png", 
//     title: "Mobile App Designing", 
//     desc: "We craft visually stunning and user-centric mobile app designs that prioritize usability and engagement. Every design element is strategically placed to enhance navigation create intuitive interactions and provide a seamless experience." 
//   },
//   { 
//     image: "/Frame 30 (3).png", 
//     title: "Website Designing", 
//     desc: "Our team designs modern, responsive websites that combine aesthetics with functionality. We focus on clean layouts, intuitive user flows and attractive interfaces to ensure every visitor enjoys an engaging and seamless browsing experience." 
//   },
//   { 
//     image: "/Frame 30 (1).png", 
//     title: "Website Development", 
//     desc: "We build robust, scalable, and fully functional websites tailored to client needs. Using modern technologies, we ensure fast performance, secure architecture and responsive design that works perfectly across all devices." 
//   },
//   { 
//     image: "/Portfolio GiG 2.png", 
//     title: "UI/UX Research", 
//     desc: "Our team conducts in-depth user research to understand behaviors and preferences. We use insights to inform design decisions and create interfaces that are intuitive, engaging and user-friendly across all platforms." 
//   },
//   { 
//     image: "/game.png", 
//     title: "Game Development", 
//     desc: "We create immersive and feature-rich games that are engaging scalable and optimized for performance. Our solutions focus on delivering seamless gameplay experiences while integrating modern tools for graphics monetization." 
//   },
//   { 
//     image: "/Frame 30.png", 
//     title: "Logo Design", 
//     desc: "Our creative team designs intuitive interfaces that blend aesthetics with usability. We focus on smooth navigation user-friendly layouts and engaging experiences that connect    Every logo we craft tells a unique story  with your audience." 
//   },
// ];



//   const [currentIndex, setCurrentIndex] = useState(0);

//     // const [itemsPerSlide, setItemsPerSlide] = useState(1);
//   const itemsPerSlide = 3;
//   const totalSlides = Math.ceil(projects.length / itemsPerSlide);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
//   };


//   //   useEffect(() => {
//   //   const updateItems = () => {
//   //     if (window.innerWidth < 500) {
//   //       setItemsPerSlide(1); // sm → ek hi card
//   //     } else {
//   //       setItemsPerSlide(3); // tablet/desktop → 3 cards
//   //     }
//   //   };

//   //   updateItems(); // initial load pe call
//   //   window.addEventListener("resize", updateItems);

//   //   return () => window.removeEventListener("resize", updateItems);
//   // }, []);
// //   const prevSlide = () => {
// //   setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
// // };

// // const nextSlide = () => {
// //   setCurrentIndex((prev) => (prev === totalSlides - 1 ? totalSlides - 1 : prev + 1));
// // };



//   return (
//     <section className="bg-black pt-[0px] pb-[150px] font-cabin px-[150px] relative sm:pb-1 sm:pt-[81px]  sm:px-[1px]">
//       {/* Heading */}
//       <div className="text-center mb">


//         <h2 className="text-white text-[62px] font-cabin font-bold leading-none">
//           Our <span className="relative sm:text-[42px] sm:h-[57px] sm:pt-2 bg-[#0f0f0f] inline-block leading-none h-[67px] pb-  left-[10px] text-white px-2 py-">
//            Portfolio
   
//    <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
//   {/* Top-right corner */}
// <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
//   {/* Bottom-left corner */}
//   <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
//   {/* Bottom-right corner */}
//   <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>
//   </span>
//         </h2>


//         <p className="text-white mt-[16px] sm:px-3  3xl:text-[17px] opacity-100 font-cabin  max-w-4xl font-cabin mx-auto">
//          Explore our diverse portfolio of innovative games, each designed to deliver engaging gameplay, rich narratives, and stunning visuals. From action-packed adventures to immersive storytelling experiences, our creations captivate players worldwide.
//         </p>


//       </div>

//       {/* Carousel */}
//       <div className="relative max-w-9xl sm:max-w-10xl mx-auto overflow-x-hidden mt-[42px] 3xl:mt-[11px]">
//         <div
//           className="flex transition-transform duration-700  ease-in-out"
//           style={{
//             transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
//             width: `${totalSlides * 100}%`,
           
//                 // width: `${projects.length * (100 / itemsPerSlide)}%`,
           
//           }}
//         >
//           {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//             <div key={slideIndex} className="w-full   overflow-x-auto  sm:gap-8  grid grid-cols-1 md:grid-cols-3   pt-4 pb-6 gap-8 px-4">
//               {projects
//                 .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
//                 .map((project, idx) => (
//                   <div
//   key={idx}
//  className="bg-[#0f0f0f]   border border-[#ED09EE] rounded-2xl  px-4 pt-4 pb-6 shadow-xl 
//                hover:scale-105 transition-transform duration-300 ease-in-out
//                hover:bg-[#ED09EE] group relative z-10"
          
// >
//                     <div className="mb-1 flex justify-center">
//                       <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-52 object-cover rounded-lg"
//                       />
//                     </div>
//                     <h3 className="text-[#ED09EE] text-[32px]  font-bold font-cabin  text-center group-hover:text-white">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-300 text-[16px] h-[95px] leading-[20px]  font-cabin text-center mt- group-hover:text-white">
//                       {project.desc}
//                     </p>
//                   </div>
//                 ))}
//             </div>
//           ))}
//         </div>
//       </div>

 

// <button
//   onClick={prevSlide}
//   className={`absolute top-[390px] sm:hidden left-[100px] transform -translate-y-1/2 p-3 rounded-full text-white transition z-10 ${
//     currentIndex === 0 ? "bg-[#ED09EE]" : "bg-[#ED09EE]/80  hover:bg-[#ED09Ef]"
//   }`}
// >
//   <FaChevronLeft />
// </button>
// <button
//   onClick={nextSlide}
//   className={`absolute sm:hidden top-[390px] right-[100px] transform -translate-y-1/2 p-3 rounded-full text-white transition z-10 ${
//     currentIndex === totalSlides - 1 ? "bg-[#ED09EE]" : "bg-[#ED09EE]/80  hover:bg-bg-[#ED09EE]/80"
//   }`}
// >
//   <FaChevronRight />
// </button>

// {/* Dots */}

// <div className="flex justify-center mt- space-x-2">
//   {Array.from({ length: totalSlides }).map((_, idx) => {
//     const isCurrent = currentIndex === idx; // current slide
//     return (
//       <span
//         key={idx}
//         onClick={() => setCurrentIndex(idx)}
//         className={`cursor-pointer rounded-full transition-all duration-300 ${
//           isCurrent
//             ? "w-5 h-5 bg-[#ED09EE]" // current slide badi aur highlight
//             : "w-5 h-5 bg-[#ED09EE]/70" // rest normal
//         }`}
//       ></span>
//     );
//   })}
// </div>


//     </section>
//   );
// }













// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export default function MobilePortfolioCarousel() {
//   const projects = [
//     { image: "/Frame 30.png", title: "Mobile App Designing", desc: "We craft visually stunning and user-centric mobile app designs that prioritize usability and engagement." },
//     { image: "/Frame 30 (3).png", title: "Website Designing", desc: "We design modern, responsive websites with clean layouts and intuitive user flows." },
//     { image: "/Frame 30 (1).png", title: "Website Development", desc: "We build robust, scalable websites tailored to client needs with secure architecture." },
//     { image: "/Portfolio GiG 2.png", title: "UI/UX Research", desc: "We conduct in-depth user research to create intuitive and engaging interfaces." },
//     { image: "/game.png", title: "Game Development", desc: "We create immersive, feature-rich games optimized for performance and engagement." },
//     { image: "/Frame 30.png", title: "Logo Design", desc: "We craft logos that tell a unique story and connect with your audience." },
//   ];

//   const [currentIndexx, setCurrentIndexx] = useState(0);
//   const totalSlidess = projects.length;

//   const prevSlides = () => {
//     setCurrentIndexx((prev) => (prev === 0 ? totalSlidess - 1 : prev - 1));
//   };

//   const nextSlides = () => {
//     setCurrentIndexx((prev) => (prev === totalSlidess - 1 ? 0 : prev + 1));
//   };

//   const prevIndexx = currentIndexx === 0 ? totalSlidess - 1 : currentIndexx - 1;
//   const nextIndexx = currentIndexx === totalSlidess - 1 ? 0 : currentIndexx + 1;

//   return (
    // <div className="bg-black pt-4 pb-20 font-cabin px-4 block lg:hidden">
    //   <div className="relative lg:hidden overflow-hidden">
    //     <div
    //       className="flex lg:hidden transition-transform duration-100 ease-in-out"
    //       style={{
    //         transform: `translateX(-${currentIndexx * 100}%)`,
    //         width: `${totalSlidess * 100}%`,
    //       }}
    //     >
    //       {projects.map((project, idx) => (
    //         <div key={idx} className="w-full sm:px-4 flex-shrink-0 px-2">
    //           <div className="bg-[#0f0f0f] sm:w-[300px] border border-[#ED09EE] rounded-2xl px-4 pt-4 pb-6 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-[#ED09EE] group relative">
    //             <div className="mb-2 flex justify-center">
    //               <img
    //                 src={project.image}
    //                 alt={project.title}
    //                 className="w-full h-52 object-cover rounded-lg"
    //               />
    //             </div>
    //             <h3 className="text-[#ED09EE] text-2xl font-bold text-center group-hover:text-white mb-2">
    //               {project.title}
    //             </h3>
    //             <p className="text-gray-300 text-[16px] text-center group-hover:text-white">
    //               {project.desc}
    //             </p>
    //           </div>
    //         </div>
  
    //       ))}


    //     </div>

    //     {/* Only two dots: prev and next */}
    //     <div className="flex lg:hidden  justify-center mt-4 space-x-4">
    //       <span
    //         className="w-5 h-5 rounded-full bg-[#ED09EE] cursor-pointer"
    //         onClick={prevSlides}
    //         title={`Previous: ${projects[prevIndexx].title}`}
    //       ></span>
    //       <span
    //         className="w-5 h-5 rounded-full bg-[#ED09EE] cursor-pointer"
    //         onClick={nextSlides}
    //         title={`Next: ${projects[nextIndexx].title}`}
    //       ></span>
    //     </div>

    //   </div>
    // </div>
//   );
// }





import React, { useState,  useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ReuseOurPortfolio() {

const projects = [
  { 
    image: "  /Frame 30.png", 
    title: "Mobile App Designing", 
    desc: "We craft visually stunning and user-centric mobile app designs that prioritize usability and engagement. Every design element is strategically placed to enhance navigation create intuitive interactions and provide a seamless experience." 
  },
  {                                           
    image: "/Frame 30 (3).png", 
    title: "Website Designing", 
    desc: "Our team designs modern, responsive websites that combine aesthetics with functionality. We focus on clean layouts, intuitive user flows and attractive interfaces to ensure every visitor enjoys an engaging and seamless browsing experience." 
  },
  { 
    image: "/Frame 30 (1).png", 
    title: "Website Development", 
    desc: "We build robust, scalable, and fully functional websites tailored to client needs. Using modern technologies, we ensure fast performance, secure architecture and responsive design that works perfectly across all devices." 
  },
  { 
    image: "/Portfolio GiG 2.png", 
    title: "UI/UX Research", 
    desc: "Our team conducts in-depth user research to understand behaviors and preferences. We use insights to inform design decisions and create interfaces that are intuitive, engaging and user-friendly across all platforms." 
  },
  { 
    image: "/game.png", 
    title: "Game Development", 
    desc: "We create immersive and feature-rich games that are engaging scalable and optimized for performance. Our solutions focus on delivering seamless gameplay experiences while integrating modern tools for graphics monetization." 
  },
  { 
    image: "/Frame 30.png", 
    title: "Logo Design", 
    desc: "Our creative team designs intuitive interfaces that blend aesthetics with usability. We focus on smooth navigation user-friendly layouts and engaging experiences that connect    Every logo we craft tells a unique story  with your audience." 
  },
];

 const [currentIndexx, setCurrentIndexx] = useState(0);
  const totalSlidess = projects.length;

  const prevSlides = () => {
    setCurrentIndexx((prev) => (prev === 0 ? totalSlidess - 1 : prev - 1));
  };

  const nextSlides = () => {
    setCurrentIndexx((prev) => (prev === totalSlidess - 1 ? 0 : prev + 1));
  };

  const prevIndexx = currentIndexx === 0 ? totalSlidess - 1 : currentIndexx - 1;
  const nextIndexx = currentIndexx === totalSlidess - 1 ? 0 : currentIndexx + 1;


  const [currentIndex, setCurrentIndex] = useState(0);

    // const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };


  //   useEffect(() => {
  //   const updateItems = () => {
  //     if (window.innerWidth < 500) {
  //       setItemsPerSlide(1); // sm → ek hi card
  //     } else {
  //       setItemsPerSlide(3); // tablet/desktop → 3 cards
  //     }
  //   };

  //   updateItems(); // initial load pe call
  //   window.addEventListener("resize", updateItems);

  //   return () => window.removeEventListener("resize", updateItems);
  // }, []);
//   const prevSlide = () => {
//   setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
// };

// const nextSlide = () => {
//   setCurrentIndex((prev) => (prev === totalSlides - 1 ? totalSlides - 1 : prev + 1));
// };



  return (
    <section className="bg-black  sm:pb-[0px]    bg-yellow-0 pt-[0px] sm:overflow-x-hidden pb-[150px] font-cabin px-[150px] relative sm:pb-[0px] sm:pt-[0px]  sm:px-[1px]">
      {/* Heading */}
      <div className="text-center mb">


        <h2 className="text-white sm:text-[42px] text-[62px] font-cabin font-bold leading-none">
          Our <span className="relative sm:text-[42px] sm:h-[57px] sm:pt-2 bg-[#0f0f0f] inline-block leading-none h-[67px]   left-[10px] text-white px-2 py-">
           Portfolio
   
   <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
  {/* Top-right corner */}
<span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
  {/* Bottom-left corner */}
  <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
  {/* Bottom-right corner */}
  <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>
  </span>
        </h2>


        <p className="text-white mt-[16px] sm:px-3 sm:text-[16px] sm:px-[20px] 3xl:text-[17px] opacity-100 font-cabin  max-w-4xl font-cabin mx-auto">
         Explore our diverse portfolio of innovative games, each designed to deliver engaging gameplay, rich narratives, and stunning visuals. From action-packed adventures to immersive storytelling experiences, our creations captivate players worldwide inspiring lasting connections.
        </p>


      </div>

      {/* Carousel */}
      <div className="relative sm:hidden max-w-9xl sm:max-w-10xl mx-auto overflow-x-hidden mt-[42px] 3xl:mt-[11px]">
        <div
          className="flex transition-transform duration-700  ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            width: `${totalSlides * 100}%`,
           
                // width: `${projects.length * (100 / itemsPerSlide)}%`,
           
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full   overflow-x-auto  sm:gap-8  grid grid-cols-1 md:grid-cols-3   pt-4 pb-6 gap-8 px-4">
              {projects
                .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                .map((project, idx) => (
                  <div
  key={idx}
 className="bg-[#0f0f0f]   border border-[#ED09EE] rounded-2xl  px-4 pt-4 pb-6 shadow-xl 
               hover:scale-105 transition-transform duration-300 ease-in-out
               hover:bg-[#ED09EE] group relative z-10"
          
>
                    <div className="mb-1 flex justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-52 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-[#ED09EE] text-[32px]  font-bold font-cabin  text-center group-hover:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-[16px] h-[95px] leading-[20px]  font-cabin text-center mt- group-hover:text-white">
                      {project.desc}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>


{/* //mobile view me hh  } */}


     <div className="bg-black relative pt-4 sm:mt-[-6px]  bg-yellow-00 w-full  pb-0 bg-yellow-00 smfont-cabin px-4 block lg:hidden  ">

      <div className="relative lg:hidden sm:w-full  sm:py-5 bg-red-00 overflow-hidden">
        <div
          className="flex lg:hidden  bg-red-00  transition-transform duration-100 ease-in-out"
          style={{
            transform: `translateX(-${currentIndexx * 100}%)`,
            width: `${totalSlidess * 100}%`,
          }}
        >
          {projects.map((project, idx) => (
            <div key={idx} className=" bg-red-00 w-full sm:px-1 flex-shrink-0 px-2">
              <div className="bg-[#0f0f0f] sm:w-[px] sm:h-[370px] sm:w-[385px] border border-[#ED09EE] rounded-2xl px-4 pt-4 pb-6 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-[#ED09EE] group relative">
                <div className="mb-2 flex justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[164px]  object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-[#ED09EE] text-2xl font-bold text-center group-hover:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-[16px] text-center leading-[20px] group-hover:text-white">
                  {project.desc}
                </p>
              </div>
            </div>
  
          ))}


        </div>
                  
       


        {/* Mobile Carousel Arrows */}
<div className="flex lg:hidden sm:mt-[30px] w-full bg-yellow-00 justify-center mt-4 space-x-4">
  <button
    onClick={prevSlides}
    className="p-2 rounded-full bg-[#ED09EE]/80 hover:bg-[#ED09EE] text-white transition"
    title={`Previous: ${projects[prevIndexx].title}`}
  >
    <FaChevronLeft size={20} />
  </button>
  
  <button
    onClick={nextSlides}
    className="p-2 rounded-full bg-[#ED09EE]/80 hover:bg-[#ED09EE] text-white transition"
    title={`Next: ${projects[nextIndexx].title}`}
  >
    <FaChevronRight size={20} />
  </button>
</div>





 </div>

{/* <div className="absolute top-5 left-3 h-[480px] w-1 bg-[#ED09EE] border-l rounded-t-full rounded-b-full"></div>


<div className="absolute top-5 right-3 h-[480px]  w-1 bg-[#ED09EE] rounded-t-full rounded-b-full"></div> */}


{/* Left border like ] */}

<div className="absolute top-9 -right-5  w-7 h-[370px]  bg-[#0f0f0f] border-l-[2px]   border-[#ED09EE] rounded-2xl shadow-xl">

</div>

<div className="absolute top-9 -left-5  w-7 h-[370px]  bg-[#0f0f0f] border-r-[2px]   border-[#ED09EE] rounded-2xl shadow-xl">

</div>



    </div>



<button
  onClick={prevSlide}
  className={`absolute top-[390px] sm:hidden left-[100px] transform -translate-y-1/2 p-3 rounded-full text-white transition z-10 ${
    currentIndex === 0 ? "bg-[#ED09EE]" : "bg-[#ED09EE]/80  hover:bg-[#ED09Ef]"
  }`}
>
  <FaChevronLeft />
</button>


<button
  onClick={nextSlide}
  className={`absolute sm:hidden top-[390px] right-[100px] transform -translate-y-1/2 p-3 rounded-full text-white transition z-10 ${
    currentIndex === totalSlides - 1 ? "bg-[#ED09EE]" : "bg-[#ED09EE]/80  hover:bg-bg-[#ED09EE]/80"
  }`}
>
  <FaChevronRight />
</button>

{/* Dots */}

<div className="flex sm:hidden justify-center mt- space-x-2">
  {Array.from({ length: totalSlides }).map((_, idx) => {
    const isCurrent = currentIndex  === idx; // current slide
    return (
      <span
        key={idx}
        onClick={() => setCurrentIndex(idx)}
        className={`cursor-pointer rounded-full transition-all duration-300 ${
          isCurrent
            ? "w-5 h-5 bg-[#ED09EE]" // current slide badi aur highlight
            : "w-5 h-5 bg-[#ED09EE]/70" // rest normal
        }`}
      ></span>
    );
  })}
</div>



    </section>
  );
}




