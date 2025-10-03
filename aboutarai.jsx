
import React from "react";
export default function OurExpertiseSection() {
  const expertise = [
    {
      icon: " misson .png ",
      title: "Our Goals",
      desc: `Innovation: Constantly push the boundaries of creativity and technology in digital experiences.
Client Satisfaction: Ensure client success through transparent communication and collaborative partnership Quality: Deliver exceptional quality in game development and advanced digital solutions.`,
    },
    {
      icon: "vision.png",
      title: " Our Vision",
      desc: `Crafting Immersive Experiences: To create games and digital solutions that transport users into captivating realms.Tech-Driven Excellence: Embrace cutting-edge technology to stay at the forefront of the industry.
Client Empowerment: Empower clients by translating their visions into digital realities.`,
    },
    {
      icon: "goal.png",
      title: "Our mission",
      desc: `Industry Leadership: To be recognised as leaders in innovative game design and development.Global Impact: Extend our reach globally, leaving a mark on the digital landscape.
Diverse Portfolio: Build a diverse portfolio that caters to various industries and technological advancements.`,
    },
  ];

  return (
    <section className="bg-black pb-[150px] sm:pb-[0px] sm:pt-[80px]  px-[150px] sm:px-[20px] text-white relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto ">
        <h2 className="text-[62px] font-cabin leading-none font-bold ">
          About
    <span className="relative bg-[#0f0f0f] left-[10px] inline-block h-[75px] leading-none text-white px-2 py-">
           Airai
     <span className="absolute top-[-2px] left-[-7px] w-3 h-3 bg-orange-500"></span>
      <span className="absolute top-[-2px] right-[-7px] w-3 h-3 bg-pink-500"></span>
      <span className="absolute bottom-[-2px] left-[-7px] w-3 h-3 bg-purple-700"></span>
      <span className="absolute bottom-[-2px] right-[-7px] w-3 h-3 bg-blue-500"></span>
    </span>
        </h2>
        <p className="text-white text-center mt-[16px] font-cabin  opacity-90 text-[16px]   max-w-9xl mx-auto">
          AirAI Game Development is a cutting-edge gaming company dedicated to
          creating immersive, high-quality gaming experiences powered by
          artificial intelligence. Our mission is to push the boundaries of game
          design, combining AI-driven technology with engaging storytelling,
          stunning visuals, and seamless gameplay.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 mt-[42px] sm:grid-cols-1  sm:grid-cols-1 md:grid-cols-3  max-w-[1200px] mx-auto">
        {expertise.map((item, idx) => (
          <div
            key={idx}
            className="group h-[px] relative flex  sm:pl-[10px] sm:pr-[10px] flex-col items-center justify-start p-1 rounded-2xl shadow-lg text-center border-b-4 border-[#ED09EE] transition-all duration-300 hover:scale-105 cursor-pointer bg-[#0f0f0f] text-white hover:bg-[#ED09EE]"
            style={{
              height: "px",
              overflow: "hidden",
            }}
          >
            {/* Icon */}
            <div className="w-30 h-30 p-2   flex items-center bg-transparent justify-center rounded-full  transition-all duration-300 group-hover:bg-white">
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain transition-all duration-300"
              />
            </div>

            {/* Title */}
            <h4 className="text-[32px] mt-[5px] -mb-4 font-cabin leading-none font-semibold  text-center">{item.title}</h4>

            {/* Description */}
            <p className="text-white opacity-90 w-[351px] sm:w-full -mb-5 sm:mb-0 text-center p-7 sm:py-5 sm:px-1  bg-red-0 font-cabin group-hover:text-white text-[16px]  text-center  mx-auto">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

       <span
    className="absolute sm:hidden  bottom-[710px] right-[-100px] w-[550px] h-[440px] pointer-events-none rounded-none"
    style={{
       background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(195px)",
      opacity: 0.8,
      transform: "translate(75%, 45%)", 
    }}
  ></span>

    </section>
  );
}
