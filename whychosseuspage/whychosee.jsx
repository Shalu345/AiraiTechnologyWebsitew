

// import React from 'react';

// const features = [
//   { title: 'Comprehensive Services', position: 'bottom' },
//   { title: 'Flexible Learning', position: 'top' },
//   { title: 'Certification', position: 'bottom' },
//   { title: 'Affordable Pricing', position: 'top' },
// ];

// // Pre-calculated points along wave curve
// const points = [
//   { x: 0, y: 80 },     // Point 1 (top)
//   { x: 380, y: 230 },   // Point 2 (bottom)
//   { x: 760, y: 70 },   // Point 3 (top)
//   { x: 1137, y: 230 },  // Point 4 (bottom)
// ];

// export default function WhyChoose() {
//   return (
//     <section className="bg-black font-cabin pb-[150px]  px-[150px] mx-auto relative ">
//       <div className="text-center bg-yellow-00 space-x-9">
//         <h2 className="text-[62px] font-cabin font-bold text-white leading-none space-x-9 right-10">Why 
//  <span className="relative bg-[#0f0f0f] leading-none inline-block pb-7 h-[70px] left-[10px] right-[-60px]   text-white px-2 py-">
//    Choose
// <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
// <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
//   <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
//   <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>
//   </span> <span className="inline-block relative pb-2 -left-[30px] top-1">Us</span></h2>
//       </div>


//           <div className="max-w-4xl  mx-auto text-center mt-[16px] line-heigh-150">
//         <p className="text-white opacity-90 font-cabin text[16px]">
//         At Airai Game Development Pvt. Ltd., we combine creativity, technical expertise, and innovation to deliver outstanding results. Our dedicated team focuses on crafting unique gaming experiences, ensuring top-notch quality, timely delivery, and client satisfaction. With a passion for excellence, we turn ideas into immersive digital realities.
//         </p>
//       </div>


//       <div className="relative mt-[32px] bg-blue-00 w-[1137px] bg-yellow-00 flex item-center  mx-auto h-[250px]">
//         {/* Wave Curve */}
//         <svg
//           className="absolute inset-0 mt- w-full h-full"
//           viewBox="0 0 1137 220"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0 100 
//             C190 0, 190 200, 380 180 
//             C570 160, 570 40, 760 100 
//             C950 160, 950 200, 1137 180"
//             stroke="#b8a6a6ff"
//             strokeWidth="4"
//             strokeDasharray="12,12"
//             fill="transparent"
//           />
//         </svg>

//         {/* Features */}
//         <div className="absolute inset-0 mt-1">
//           {features.map((feature, i) => (
//             <div
//               key={i}
//               className="absolute flex flex-col items-center"
//               style={{
//                 left: `${points[i].x}px`,
//                 top: `${points[i].y}px`,
//                 transform: `translate(-50%, ${
//                   feature.position === 'top' ? '-105%' : '10%'
//                 })`,
//               }}
//             >
//               {feature.position === 'top'&& (
//                 <p className="text-white font-cabin text-[32px]  text-center max-w-[180px]">
//                   {feature.title}
//                 </p>
//               )}

//               <div className="w-50 h-50 md:w-16 md:h-16 text-4xl rounded-full bg-[#ED09EE] flex items-center justify-center text-white font-bold shadow-lg">
//                 {i + 1}
//               </div>

//               {feature.position === 'bottom' && (
//                 <p className="text-white mt- font-cabin text-4xl md:text-3xl text-center max-w-[170px]">
//                   {feature.title}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>



//                          {/* Bottom-left blur */}   

//     <span
//     className="absolute bottom-[990px] right-[-120px] w-[450px] h-[440px] pointer-events-none rounded-none"
//     style={{

//          background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
//       filter: "blur(150px)",
//       opacity: 0.9,
//       transform: "translate(69%, 55%)",
//     }}
//   ></span>        


//     </section>
//   );
// }




import React from 'react';
import ReuseWhyChooseUs from '../reusewhychooseus.jsx';


const features = [
  { title: 'Comprehensive Services', position: 'bottom', offsetX: -60, offsetY: 110 },
  { title: 'Flexible Learning', position: 'top', offsetX: 0, offsetY: 50 },
  { title: 'Certification', position: 'bottom', offsetX: 0, offsetY: 90 },
  { title: 'Affordable Pricing', position: 'top', offsetX: 1, offsetY: 50 },
];

// Pre-calculated points along wave curve
const points = [
  { x: 0, y: 80 },     // Point 1 (top)
  { x: 380, y: 230 },   // Point 2 (bottom)
  { x: 760, y: 70 },   // Point 3 (top)
  { x: 1137, y: 230 },  // Point 4 (bottom)
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black font-cabin sm:px-1 sm:pt-[80px] sm:pb-[80px]  h-full  overflow-x-hidden ">
  


<ReuseWhyChooseUs/>
                         {/* Bottom-left blur */}   

   


 <span
 className="absolute sm:hidden  w-[450px] h-[440px] 3xl: h-[100px]  pointer-events-none rounded-none"
style={{

background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
filter: "blur(250px)",
opacity: 0.9,
 transform: "translate(319%, -255%)",
 ...(typeof window !== "undefined" && window.innerWidth >= 1920 ? { filter: "blur(200px)", left: "1220px",top:"2599px", } : {}),
    }}
  ></span> 

  
    </section>
  );
}