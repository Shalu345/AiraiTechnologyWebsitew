




import React from "react";

export default function OurStorySection() {
  return (
    <section className="relative  text-white pt-[150px] sm:pt-[80px] pb-[150px] sm:pb-[0px] px-[150px] sm:px-[20px]  bg-black"
   style={{
    backgroundImage: "linear-gradient(166.18deg, rgba(0, 0, 0, 0) 8.4%, #000000 69.06%)",
   
  }}
 >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[50px]  items-center">
        
        {/* Left Side Images */}
        <div className="relative flex justify-center   corner-rounded">
          <div className="relative -ml-[70px] sm:ml-1 w-full max-w-lg">
            {/* Top Image */}
            <img
              src="/overlapimageg.png" // 👈 yahan apna image path lagao
              alt="Game Over"
              className="rounded-2xl shadow-2xl w-[402px] h-[435px] object-cover"
            />
            {/* Overlap Image */}
            <img
              src="/image 1.png" // 👈 yahan apna image path lagao
              alt="Gamer"
              className="absolute -bottom-3  right-[-70px] sm:right-1 rounded-2xl shadow-2xl w-[263px] h-[290px] object-cover border-4 border-[#0a0a0a]"
            />
          </div>
        </div>

        {/* Right Side Text */}
        <div>
          <h2 className="text-4xl sm:pl-3  md:text-5xl font-bold leading-snug">
            {/* <span className="text-white">Our Story</span>{" "} */}
          
            <span className="relative bg-[#0f0f0f] inline-block h-[60px]   left-[-8px] text-white px-2 py-">
                    Our Story
  
    <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-orange-500"></span>
  {/* Top-right corner */}
  <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-pink-500"></span>
  {/* Bottom-left corner */}
  <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-purple-700"></span>
  {/* Bottom-right corner */}
  <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-blue-500"></span>
  </span>

           <span className="text-white ">Passion</span>  <br />
            for Game Design & Development
          </h2>

          <p className="mt-[16px]  opacity-90 text-white font-cabin text-[16px] leading-relaxed">
            Our journey began with a vision to create immersive and engaging
            gaming experiences. Fueled by creativity and innovation, we blend
            storytelling, design, and technology to craft games that captivate
            players. Every project we undertake reflects our passion for pushing
            the boundaries of game development.
          </p>

          {/* Stats */}
          {/* <div className="mt-5 grid grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[#FF9834]">500+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#FF9834]">98%</h3>
              <p className="text-gray-300">On-Time Delivery</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#FF9834]">50%</h3>
              <p className="text-gray-700">Team of Experts</p>
            </div>
          </div> */}
   <div className="mt-[32px]  grid grid-cols-3 text-center relative">
  {/* Divider 1 */}
  <div className="absolute left-1/3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/90 to-transparent"></div>

  {/* Divider 2 */}
  <div className="absolute left-2/3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/90 to-transparent"></div>

  {/* Stats */}
  <div className="px-4 sm:px-1 font-cabin">
    <h3 className="text-4xl sm:text-[36px] font-cabin font-bold text-[#FF9834]">500+</h3>
    <p className="text-gray-300 text-[22px] sm:text-[14px] sm:w-full ">Happy Clients</p>
  </div>
  <div className="px-4 sm:px-1">
    <h3 className="text-4xl sm:text-[36px] font-bold text-[#FF9834]">98%</h3>
    <p className="text-gray-300 text-[20px] sm:text-[12px]">On-Time Delivery</p>
  </div>
  <div className="px-4 sm:px-0">
    <h3 className="text-4xl sm:text-[36px] font-bold text-[#FF9834]">50%</h3>
    <p className="text-gray-300 text-[22px] sm:text-[12px]">Team of Experts</p>
  </div>
</div>




        </div>
      </div>






       <span
    className="absolute sm:hidden  top-[0px] left-[0px]  w-[200px] h-[250px] rounded-none pointer-events-none"
    style={{
      // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
         background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(150px)",
      opacity: 0.9,
      transform: "translate(-94%, 70%)",
    }}
  ></span>

  {/* Bottom-right blur */}
  {/* <span
    className="absolute bottom-[710px] right-[-100px] w-[550px] h-[440px] pointer-events-none rounded-none"
    style={{
      background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 20%, #ED09EE 50%, #ED09EE 70%, #1091F8 90%, transparent 100%)",
      filter: "blur(150px)",
      opacity: 0.8,
      transform: "translate(75%, 105%)", 
    }}
  ></span> */}
    </section>
  );
}
