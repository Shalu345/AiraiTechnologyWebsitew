
import React, { useState } from "react";

export default function WhyWorkWithUs() {
  const [activeCard, setActiveCard] = useState(null);

  // const expertise = [
  //   {
  //     icon: "teams.png",
  //     title: "Expert Team",
  //     desc: "Our skilled designers, developers, and artists bring creativity and technical excellence to every project.",
  //   },
  //   {
  //     icon: "technology.png",
  //     title: "Cutting-Edge\nTechnology",
  //     desc: "We use the latest tools and engines to build high-performance, visually stunning games.",
  //   },
  //   {
  //     icon: "team2.png",
  //     title: "Customized\nSolutions",
  //     desc: "Every game we create is tailored to meet unique client needs and player expectations.",
  //   },
  //   {
  //     icon: "team3.png",
  //     title: "End-to-End\nDevelopment",
  //     desc: "From concept to launch, we handle the entire game development process with precision.",
  //   },
  //   {
  //     icon: "team4.png",
  //     title: "Proven Track\nRecord",
  //     desc: "We have successfully delivered engaging and high-quality games across multiple platforms.",
  //     highlight: true,
  //   },
  // ];



  const expertise = [
  {
    icon: "teams.png",
    title: "Expert Team",
    desc: "Our team of talented designers, developers and creative artists collaborate to deliver games that blend innovation with quality Each member brings. "
  },
  {
    icon: "technology.png",
    title: "Cutting-Edge\nTechnology",
    desc: "We harness the latest tools, engines and frameworks to create games that offer smooth performance, realistic. "
  },
  {
    icon: "team2.png",
    title: "Customized\nSolutions",
    desc: "We craft personalized gaming solutions designed around client goals and market needs. Every project is unique, so we adapt."
  },
  {
    icon: "team3.png",
    title: "End-to-End\nDevelopment",
    desc: "From concept and design to development, testing and final launch, we manage the full game creation cycle Our structured."
  },
  {
    icon: "team4.png",
    title: "Proven Track\nRecord",
    desc: "With a strong portfolio of successful projects, we have consistently delivered engaging games across platforms.",
    highlight: true,
  },
];


  return (
    <section className="bg-black pt-[150px] overflow-x-hidden sm:pt-[80px]  pb-[150px] sm:pb-[10px] font-cabin -mt-[20px] px-[150px] sm:px-[15px] text-white relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto ">
        <h2 className="text-4xl md:text-5xl font-bold ">
          Why{" "}
          <span className="relative bg-[#0f0f0f] px-2 inline-block h-[60px] pt-2 leading-none">
            Work
            <span className="absolute top-[-2px] left-[-7px] w-3 h-3 bg-orange-500"></span>
            <span className="absolute top-[-2px] right-[-7px] w-3 h-3 bg-pink-500"></span>
            <span className="absolute bottom-[-2px] left-[-7px] w-3 h-3 bg-purple-700"></span>
            <span className="absolute bottom-[-2px] right-[-7px] w-3 h-3 bg-blue-500"></span>
          </span>{" "}
          <span className="inline-block  relative top-1">With</span> Us?
        </h2>
        <p className="text-white opacity-90  mt-[9px] font-cabin text-center text-[16px]  max-w-19xl mx-auto">
          At [Your Company Name], we are committed to delivering top-tier game
          design and development solutions. Our team of experts combines
          creativity, technology, and innovation to craft engaging and immersive
          gaming experiences..
        </p>
      </div>

      {/* Cards */}
      <div className="flex sm:mx-[115px]   flex-wrap justify-center mt-[36px] gap-8 max-w-8xl   mx-auto">
        {expertise.map((item, idx) => (
          <div
            key={idx}
            className={`group hover:bg-[#ED09EE] width:[363px] sm:w-[330px] relative p-[36px] rounded-2xl shadow-lg text-center border-b-4 border-[#ED09EE]
              transition-all duration-300 hover:scale-105 cursor-pointer
              ${item.highlight ? "bg-[#0f0f0f]" : "bg-[#0f0f0f] text-white"}
            `}
            style={{
              // width: "363px",
              height:"341px" ,
               height: "auto",// Fixed width for desktop
            }}
          >
            {/* Icon */}
            <div className="w-20 h-20 mb-4 mx-auto flex items-center justify-center rounded-full bg-transparent transition-all duration-300 group-hover:bg-white">
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain transition-all duration-300"
              />
            </div>

            {/* Title */}
            <h4 className="text-[32px] h-[px]   leading-none font-semibold mb- whitespace-pre-line">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-[16px] mt-[10px] sm:pr-[35px] text-white w-[291px] p">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile Adjustments */}
      {/* <style>
        {`
          @media (max-width: 468px) {
            section div.flex {
              justify-content: center;
              gap: 2px;
            }
            section div.flex > div {
              width: 100% ;
              max-width: 320px;
            }
          }
        `}
      </style> */}


    <span
    className="absolute sm:hidden bottom-[px] left-[-60px]  w-[170px] h-[450px] 3xl:h-[200px] rounded-none pointer-events-none"
    style={{
      // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
         background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(190px)",
      opacity: 1,
      transform: "translate(-65%, -225%)",
        ...(typeof window !== "undefined" && window.innerWidth >= 1920 ? { filter: "blur(100px)", right: "" } : {}),
    }}
  ></span>


    </section>
  );
}
