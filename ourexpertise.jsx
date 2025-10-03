
import React, { useState } from "react";
export default function OurExpertiseSection() {
  const [activeCard, setActiveCard] = useState(null);
  // const expertise = [
  //   {
  //     icon: "9398974 1 (traced) (1).png",
  //     title: "User Experience and\nInterface Design",
  //     desc: "Having a user-friendly and intuitive design is crucial for any mobile game. We leverage the latest methodologies to create a captivating and engaging user interface.",
  //   },
  //   {
  //     icon: "9398974 1 (traced) (2).png",
  //     title: "Game Design &\nDevelopment",
  //     desc: "Lorem ipsum dolor sit amet consectetur. Egestas vulputate pellentesque phasellus ultrices amet adipiscing. Cras pellentesque risus turpis suspendisse fermentum ipsum.",
  //   },
  //   {
  //     icon: "9398974 1 (traced) (4).png",
  //     title: "3D\nModelling",
  //     desc: "Lorem ipsum dolor sit amet consectetur. Egestas vulputate pellentesque phasellus ultrices amet adipiscing. Cras pellentesque risus turpis suspendisse fermentum ipsum.",
  //   },
  //   {
  //     icon: "9398974 1 (traced) (4).png",
  //     title: "Backend\nServices",
  //     desc: "Lorem ipsum dolor sit amet consectetur. Egestas vulputate pellentesque phasellus ultrices amet adipiscing. Cras pellentesque risus turpis suspendisse fermentum ipsum.",
  //   },
  //   {
  //     icon: "9398974 1 (traced) (4).png",
  //     title: "Web Design &\nDevelopment",
  //     desc: "Lorem ipsum dolor sit amet consectetur. Egestas vulputate pellentesque phasellus ultrices amet adipiscing. Cras pellentesque risus turpis suspendisse fermentum ipsum.",
  //     highlight: true,
  //   },
  //   {
  //     icon: "9398974 1 (traced) (4).png",
  //     title: "Android App Design &\nDevelopment",
  //     desc: "Lorem ipsum dolor sit amet consectetur. Egestas vulputate pellentesque phasellus ultrices amet adipiscing. Cras pellentesque risus turpis suspendisse fermentum ipsum.",
  //   },
  // ];

    const expertise = [
  {
    icon: "card1.png",
    title: "User Experience and\nInterface Design",
    desc: "Having a user-friendly and intuitive design is crucial for any mobile game. We leverage the latest methodologies to create a captivating and engaging user interface user.",
  },
  {
    icon: "card2.png",
    title: "Game Design &\nDevelopment",
    desc: "From concept to deployment, we build immersive and interactive games with seamless mechanics and visually stunning environments stunning.",
  },
  {
    icon: "cardd3.png",
    title: "3D\nModelling",
    desc: "Our team creates high-quality 3D models that bring characters, environments and objects to life with precision and creativity precision.",
  },
  {
    icon: "card3.png",
    title: "Backend Services",
    desc: "We develop secure, scalable and high-performance backend systems to support your applications and handle complex operations seamlessly with reliability and.",
  },
  {
    icon: "card52.png",
    title: "Web Design &\nDevelopment",
    desc: "We design responsive, modern websites with optimized performance, ensuring a seamless user experience across all devices across.",
    highlight: true,
  },
  {
    icon: "card6.png",
    title: "Android App Design &\nDevelopment",
    desc: "Our team delivers robust and innovative Android apps with intuitive interfaces and smooth performance to meet your business goals.",
  },
];

  return (
    <section className="bg-black sm:overflow-x-hidden sm:mb-[0px] sm:pb-0 sm:border-none sm:overflow-x-hidden  pb-[150px]  px-[150px] 3xl:pb-[180px] sm:px-[0px] sm:pt-[80px]  text-white relative">
      {/* Header */}
      <div className="text-center sm:overflow-x-hidden max-w-3xl 3xl:max-w-7xl mx-auto mb-6">
        <h2 className="text-[72px] sm:text-[42px]  leading-none font-cabin font-bold ">
    
          Our{''}
          <span className="relative inline-block leading-none  h-[87px] sm:h-[57px] sm:pt-1 bg-[#0f0f0f] left-[20px] text-white px-2  pb-2 ">
    Expertise
   
   <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-orange-500 "></span>
  {/* Top-right corner */}
  <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-pink-500"></span>
  {/* Bottom-left corner */}
  <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-purple-700"></span>
  {/* Bottom-right corner */}
  <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-blue-500"></span>
  </span>
        </h2>
        <p className="sm:px-[20px]  sm:mt-[16px] text-white opacity-90 mt-[16px] 3xl:text-[18px] 3xl:w-full text-center text-[16px] font-cabin weight-100   max-w-[960px] mx-auto">
          At Airai Game Development Pvt. Ltd., we excel in crafting immersive gameplay, 
          stunning  and engaging narratives. Our expertise spans game design, 
          With creativity and innovation at our core, we bring ideas to life that captivate 
          players entertain, and captivate worldwide .
        </p>
      </div>

      {/* Cards */}
      <div className="grid  gap-8 sm:w-full sm:px-[20px] sm:mt-[16px] bg-yellow-00  sm:py-4 sm:grid-col-1 bg-yellow-00 mt-[42px] font-cabin md:grid-cols-3 max-w-[1219px] sm:overflow-x-hidden sm:max-w-full 3xl:max-w-[1799px]  mx-auto ">
        {expertise.map((item, idx) => (
        
  <div
  key={idx}
  className={`group md:h-[300px] sm:h-[336px] sm:w-full  sm:pt-[28px] sm:pb-[28px] sm:w-[332px] hover:bg-[#ED09EE] relative p-6 3xl:h-[330px] 3xl:p-12 pt-3 3xl:pt-[30px] 3xl:pb-[0px] rounded-2xl h-full shadow-lg text-center border-b-4 border-[#ED09EE]
    transition-all duration-300  hover:sm:rounded-[26px]  hover:scale-105 h-[300px] sm:bg-[#0f0f0f]  cursor-pointer
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


  <div className="w-20 h-20 mb-2  text-[16px] mx-auto flex items-center justify-center rounded-full bg-transparent transition-all duration-300 group-hover:bg-white">
    <img
      src={item.icon}
      alt={item.title}
      className="w-16 h-16  sm:h-[80px] object-contain transition-all duration-300  group-hover:bg-white]"
    />
  </div>


            {/* Title */}
            <h4 className=" text-[25px] sm:text-[28px] sm:leadin-[120%] 3xl:text-[30px] 3xl:max-  font-cabin font-normal mb-2 sm:mb-0  line-height-120% whitespace-pre-line">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-[16px] sm:mt-[px]  sm:w-[280px] 3xl:text-[20px] text-white mb-16 sm:mb-0 opacity-90 font-cabin">{item.desc}</p>
          </div> 
        ))}
      </div>

    </section>
  );
}

