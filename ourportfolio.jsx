









// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export default function OurPortfolio() {
//   // const projects = [
//   //   { image: "/Frame 30 (1).png", title: "Mobile App Designing", desc: "We specialize in creating intuitive, user-friendly, and visually appealing mobile app designs. Our designs focus on enhancing user experience, ensuring seamless navigation and engaging interfaces for all types of applications.." },
//   //   { image: "/Frame 30 (3).png", title: "Website Designing", desc: "Lorem ipsum dolor sit amet consectetur. Egestas vulputate pellentesque phasellus ultrices amet adipiscing. Cras pellentesque risus turpis suspendisse fermentum ipsum. Varius augue vestibulum lorem id.." },
//   //   { image: "/Frame 30.png", title: "Website Development", desc: "Lorem ipsum dolor sit amet consectetur. Egestas vulputate pellentesque phasellus ultrices amet adipiscing. Cras pellentesque risus turpis suspendisse fermentum ipsum. Varius augue vestibulum lorem id.." },
//   //   { image: "/Frame 30 (1).png", title: "Mobile App Designing", desc: "We specialize in creating intuitive, user-friendly, and visually appealing mobile applications that ensure seamless experiences across platforms for all types of applications." },
//   //   { image: "/Frame 30 (3).png", title: "Website Designing", desc: "Lorem ipsum dolor sit amet consectetur. Egestas vulputate pellentesque platea ultrices enim mi adipiscing." },
//   //   { image: "/Frame 30.png", title: "Website Development", desc: "Lorem ipsum dolor sit amet consectetur. Egestas vulputate pellentesque platea ultrices enim mi adipiscing." },
//   // ];
// // const projects = [
// //   { 
// //     image: "/Frame 30 (1).png", 
// //     title: "Mobile App Designing", 
// //     desc: "We craft visually stunning and user-centric mobile app designs that prioritize usability and engagement. Each element is carefully placed to enhance navigation and create a seamless " 
// //   },
// //   { 
// //     image: "/Frame 30 (3).png", 
// //     title: "Website Designing", 
// //     desc: "Our team designs modern, responsive websites that combine aesthetics with functionality. We ensure clean layouts and intuitive user flows for an engaging browsing experience." 
// //   },
// //   { 
// //     image: "/Frame 30.png", 
// //     title: "Website Development", 
// //     desc: "We build robust and fully functional websites tailored to client needs. Modern technologies are used to ensure fast performance, security, and responsive design across devices." 
// //   },
// //   { 
// //     image: "/Frame 30 (1).png", 
// //     title: "UI/UX Research", 
// //     desc: "We conduct in-depth user research to understand behaviors and preferences. Insights from research guide design decisions to create user-friendly and engaging interfaces." 
// //   },
// //   { 
// //     image: "/Frame 30 (3).png", 
// //     title: "E-Commerce Solutions", 
// //     desc: "We develop secure and scalable e-commerce platforms for smooth shopping experiences. All solutions are integrated with modern tools for payments, inventory, and analytics." 
// //   },
// //   { 
// //     image: "/Frame 30.png", 
// //     title: "Mobile Development", 
// //     desc: "Our development team transforms designs into high-performance mobile applications. We ensure smooth functionality and seamless experiences across platforms for end users." 
// //   },
// // ];

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
//     image: "/Frame 30 (3).png", 
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
//   const itemsPerSlide = 3;
//   const totalSlides = Math.ceil(projects.length / itemsPerSlide);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
//   };

// //   const prevSlide = () => {
// //   setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
// // };

// // const nextSlide = () => {
// //   setCurrentIndex((prev) => (prev === totalSlides - 1 ? totalSlides - 1 : prev + 1));
// // };



//   return (
//     <section className="bg-black pt-[0px] pb-[150px] font-cabin px-[150px] relative ">
//       {/* Heading */}
//       <div className="text-center mb">


//         <h2 className="text-white text-[62px] font-cabin font-bold leading-none">
//           Our <span className="relative bg-[#0f0f0f] inline-block leading-none h-[67px] pb-  left-[10px] text-white px-2 py-">
//   Portfolio
   
//    <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
//   {/* Top-right corner */}
// <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
//   {/* Bottom-left corner */}
//   <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
//   {/* Bottom-right corner */}
//   <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>
//   </span>
//         </h2>


//         <p className="text-white mt-[16px] opacity-90 font-cabin  max-w-4xl font-cabin mx-auto">
//          Explore our diverse portfolio of innovative games, each designed to deliver engaging gameplay, rich narratives, and stunning visuals. From action-packed adventures to immersive storytelling experiences, our creations captivate players worldwide.
//         </p>


//       </div>

//       {/* Carousel */}
//       <div className="relative max-w-9xl mx-auto overflow-x-hidden mt-[42px]">
//         <div
//           className="flex transition-transform duration-700  ease-in-out"
//           style={{
//             transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
//             width: `${totalSlides * 100}%`,
//           }}
//         >
//           {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//             <div key={slideIndex} className="w-full grid grid-cols-1 md:grid-cols-3 pt-4 pb-6 gap-8 px-4">
//               {projects
//                 .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
//                 .map((project, idx) => (
//                   // <div
//                   //   key={idx}
//                   //   className="bg-[#0f0f0f]  border border-[#ED09EE] rounded-2xl p-6 shadow-xl  hover:scale-105 transition-transform duration-100 rounded-2xl   hover:bg-[#ED09EE] group"
//                   // >
//                   <div
//   key={idx}
//  className="bg-[#0f0f0f] border border-[#ED09EE] rounded-2xl  px-4 pt-4 pb-6 shadow-xl 
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
//   className={`absolute top-[390px] left-[110px] transform -translate-y-1/2 p-3 rounded-full text-white transition z-10 ${
//     currentIndex === 0 ? "bg-[#ED09EE]" : "bg-[#ED09EE]/80  hover:bg-[#ED09Ef]"
//   }`}
// >
//   <FaChevronLeft />
// </button>
// <button
//   onClick={nextSlide}
//   className={`absolute top-[390px] right-[110px] transform -translate-y-1/2 p-3 rounded-full text-white transition z-10 ${
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


//                    {/* Bottom-left blur */}   


//       <span
//     className="absolute bottom-[990px] right-[-120px] w-[450px] h-[440px] pointer-events-none rounded-none"
//     style={{
//       // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
//       //  background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 20%, #ED09EE 50%, #ED09EE 70%, #1091F8 90%, transparent 100%)",
//      background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
//       filter: "blur(190px)",
//       opacity: 0.9,
//       transform: "translate(69%, 60%)",
//     }}
//   ></span>  


//   <span
//     className="absolute bottom-[34px] left-[-100px]  w-[200px] h-[450px] rounded-none pointer-events-none"
//     style={{
//       // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
//   background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
//       filter: "blur(167px)",
//       opacity: 0.8,
//       transform: "translate(-55%, -45%)",
//     }}
//   ></span>

//     </section>
//   );
// }





















import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReuseOurPortfolio from "./reuseportfolio";
export default function OurPortfolio() {

  return (
    <section  className="sm:pt-[80px] sm:pb-[0px] bg-yellow-    bg-black">
      
      <ReuseOurPortfolio/>

{/* Dots */}




                   {/* Bottom-left blur */}   


    <span
    className="absolute sm:border-none sm:hidden w-[150px] h-[770px] 3xl: h-[1010px] pointer-events-none rounded-none"
    style={{
      // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
      //  background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 20%, #ED09EE 50%, #ED09EE 70%, #1091F8 90%, transparent 100%)",
    //  background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
       background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(120px)",
      filter: "blur(190px)",
              ...(typeof window !== "undefined" && window.innerWidth >= 1920 ? { filter: "blur(300px)", left: "1150px" } : {}),
      opacity: 0.9,
      transform: "translate(999%, -190%)",
    }}
  ></span>  


  <span
    className="absolute sm:hidden  w-[170px] h-[450px] rounded-none pointer-events-none"
    style={{
      // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
  // background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
     background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
     
      filter: "blur(160px)",
      opacity: 0.8,
      transform: "translate(-85%, -180%)",
    }}
  ></span>

    </section>
  );
}