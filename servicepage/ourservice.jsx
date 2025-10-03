
// import React from "react";

// export default function ServicesSection() {
//   const expertise = [
//     { icon: "/9398974 1 (traced) (1).png", title: "UI/UX Design", desc: "Designing engaging and intuitive user interfaces that delight users." },
//     { icon: "/9398974 1 (traced) (2).png", title: "Game Development", desc: "Creating interactive and fun games across platforms with immersive experiences." },
//     { icon: "/9398974 1 (traced) (3).png", title: "Web Development", desc: "Building responsive and scalable websites with modern technologies." },
//     { icon: "/9398974 1 (traced) (4).png", title: "Mobile Apps", desc: "Developing smooth and user-friendly mobile applications for Android and iOS." },
//     { icon: "/9398974 1 (traced).png", title: "3D Modeling", desc: "Crafting realistic 3D models to enhance digital projects and presentations." },
//     { icon: "/9398974 1 (traced).png", title: "Branding", desc: "Creating strong brand identities that communicate your vision effectively." },
//   ];

//   return (
//     <section className="bg-black py-20 px-6 md:px-16 text-white">
//       {/* Heading & Paragraph */}
//       <div className="text-center max-w-3xl mx-auto mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold">
//           <span className="text-pink-500">our servces</span>
//         </h2>
//         <p className="mt-4 text-gray-400 text-lg">
//           We help brands create impactful digital experiences. 
//           Our expertise spans multiple domains to deliver high-quality solutions.
//         </p>
//       </div>

//       {/* Grid without card container */}
//       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {expertise.map((item, idx) => (
//           <div key={idx} className="text-center">
//             {/* Icon */}
//             <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
//               <img src={item.icon} alt={item.title} className="w-10 h-10" />
//             </div>

//             {/* Title */}
//             <h4 className="text-xl font-semibold mb-4">{item.title}</h4>

//             {/* Description with underline */}
//             <p className="text-gray-400 text-sm border-b-2 border-pink-500 pb-3 w-3/4 mx-auto">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// ReuseOurWorkProcess

import React, { useState } from "react";
export default function OurExpertiseSection() {
  const [activeCard, setActiveCard] = useState(null);
  


const expertise = [
  {
    icon: "card1.png",
    title: "User Experience and\nInterface Design",
    desc: "We design user-focused interfaces that are simple, intuitive, and visually appealing. By combining creativity with functionality, we enhance usability. Our approach ensures .",
  },
  {
    icon: "card2.png",
    title: "Game Design &\nDevelopment",
    desc: "From ideation to launch, we build immersive and interactive games. Our process covers concept creation, engaging mechanics, and fluid design. With a focus .",
  },
  {
    icon: "cardd3.png",
    title: "3D\nModelling",
    desc: "Our team develops precise and detailed 3D assets for games and apps. We bring characters, environments, and objects to life. Every model is crafted with artistic.",
  },
  {
    icon: "card3.png",
    title: "Backend Services",
    desc: "We deliver secure, scalable, and high-performing backend solutions. Our systems are designed to handle complex processes with ease. With optimized databases and .",
  },
  {
    icon: "card52.png",
    title: "Web Design &\nDevelopment",
    desc: "We create modern, responsive, and visually appealing websites. Each project is optimized for performance and user experience. Our design adapts seamlessly .",
    highlight: true,
  },
  {
    icon: "card6.png",
    title: "Android App Design \n&Development",
    desc: "We craft innovative Android apps with smooth and intuitive design. Every application is tailored to meet unique business goals. Our focus lies in .",
  },
];

  return (
    <section className="bg-black sm:h-[2510x] sm:pb-3 font-cabin pb-[150px] sm:pb-[0px] sm:pt-[87px] pt-[150px] -mt-[20px]  px-[150px] sm:px-[20px]  text-white relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto sm:px-[10px] ">
        <h2 className="text-[62px]    sm:text-[42px] sm:-ml-10 leading-none font-cabin font-bold ">
          {/* Our <span className="text-white-500 bg-[#0f0f0f] p-2 rounded-sm ">Expertise</span> */}
          Our{''}
          <span className="relative sm:h-[57px] sm:pt-1  bg-[#0f0f0f] leading-none left-[20px] inline-block h-[70px] pt-0.1 text-white px-2  ">
              Service
   
    <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-orange-500"></span>
  {/* Top-right corner */}
  <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-pink-500"></span>
  {/* Bottom-left corner */}
  <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-purple-700"></span>
  {/* Bottom-right corner */}
  <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-blue-500"></span>
  </span>
        </h2>
        <p className="text-white sm:text-[16px]  mt-[16px] font-cabin text-center opacity-90 text-1xl font-cabin weight-400 md:text-1xl leading-relaxed  max-w-full mx-auto">
          At Airai Game Development Pvt. Ltd., we excel in crafting immersive gameplay, 
          stunning  and engaging narratives. Our expertise spans game design, 
          With creativity and innovation at our core, we bring ideas to life that captivate 
          players worldwide.
        </p>
      </div>

      {/* Cards */}
  {/* <div className="grid gap-8 sm:grid-cols-2 bg-yellow-00 mt-[42px] font-cabin md:grid-cols-3 max-w-[1212px] mx-auto ">
        {expertise.map((item, idx) => (
        
      <div
  key={idx}
  className={`group hover:bg-[#ED09EE] relative p-6 pt-3 rounded-2xl h-full shadow-lg text-center border-b-4 border-[#ED09EE]
    transition-all duration-300 hover:scale-105   cursor-pointer
    ${item.highlight ? "bg-[#FFFFFF05] " : "bg-[#FFFFFF05] text-white"}
  `}
  style={{
    opacity: 1,
    height: "300px",
    position: "relative",
    gap: "26px",
    text:"white"
  }}
>


  <div className="w-20 h-20 mb-2 text-[16px] mx-auto flex items-center justify-center rounded-full bg-transparent transition-all duration-300 group-hover:bg-white">
    <img
      src={item.icon}
      alt={item.title}
      className="w-16 h-16 object-contain transition-all duration-300  group-hover:bg-white]"
    />
  </div>


       
            <h4 className=" text-[25px] font-cabin font-semibold mb-2 line-height-120% whitespace-pre-line">
              {item.title}
            </h4>

   
            <p className="text-[16px] text-white mb-16 opacity-90 font-cabin">{item.desc}</p>
          </div> 
        ))}
      </div> */}

     <div className="grid  sm:px-[10px] gap-8 sm:grid-cols-1 bg-yellow-00 mt-[42px] font-cabin md:grid-cols-3 max-w-[1219px]  3xl:max-w-[1859px]  mx-auto ">
        {expertise.map((item, idx) => (
        
      <div
  key={idx}
  className={`group h-[300px] sm:h-[330px]   hover:bg-[#ED09EE] relative p-6 3xl:h-[320px] 3xl:p-12 pt-3 3xl:pt-[30px] 3xl:pb-[0px] rounded-2xl h-full shadow-lg text-center border-b-4 border-[#ED09EE]
    transition-all duration-300 hover:scale-105   cursor-pointer
    ${item.highlight ? "bg-[#FFFFFF05] " : "bg-[#FFFFFF05] text-white"}
  `}
  style={{
    opacity: 1,
    //  height: "300px",
    position: "relative",
    gap: "26px",
    text:"white"
  }}
>
            {/* Icon */}
            {/* <div className="w-26 h-20 mb-4 mx-auto flex  items-center justify-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-26 h-16 object-contain hover:bg-white rounded-full"
              />
            </div> */}


  <div className="w-20 h-20 mb-2 text-[16px] mx-auto flex items-center justify-center rounded-full bg-transparent transition-all duration-300 group-hover:bg-white">
    <img
      src={item.icon}
      alt={item.title}
      className="w-16 h-16 object-contain transition-all duration-300  group-hover:bg-white]"
    />
  </div>


            {/* Title */}
            <h4 className=" text-[25px] 3xl:text-[30px] 3xl:max-  font-cabin font-normal mb-2 line-height-120% whitespace-pre-line">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-[16px] 3xl:text-[20px]  text-white mb-16 opacity-90 font-cabin">{item.desc}</p>
          </div> 
        ))}
      </div>
    <span
    className="absolute top-[0px] sm:hidden w-[300px] h-[400px] rounded-none pointer-events-none"
    style={{
      // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
     background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(190px)",
      opacity: 0.9,
      transform: "translate(-125%, 15%)",
    }}
  ></span>


    {/* <span
    className="absolute  w-[250px] h-[300px] pointer-events-none rounded-none"
    style={{
       background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(150px)",
      opacity: 0.8,
      transform: "translate(565%, -135%)", 
    }}
  ></span> */}

    </section>
  );
}



