


// import React from "react";

// export default function ContactSection() {
//   return (
//     <section className="bg-black py-0 pt-[100px] px-6 md:px-16 text-white">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Top Heading + Paragraph */}
//         <div className="text-center item-center justify-center max-w-5xl mx-auto mb-16">
//           <h2 className="text-4xl md:text-5xl left-12 font-bold mb-4">
//             Get in       <span className="relative inline-block h-[60px] pb-3 bg-[#0f0f0f] mt-3 left-[4px] text-white px-2 py- ">
//             Touch
//   {/* Top-left corner */}
//   <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
//   {/* Top-right corner */}
// <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
//   {/* Bottom-left corner */}
//   <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
//   {/* Bottom-right corner */}
//   <span className="absolute bottom-[-7PX] right-[-2PX] w-3 h-3 bg-[#3F74F6]"></span>
//     <span className="absolute bottom- right- w-3 h-3 bg-#3F74F6"></span>
// </span> with Us
//           </h2>
//           <p className="text-gray-400 leading-relaxed w-[1000px]  text-center text-lg">
//             Let’s build a game idea or need expert design and development assistance? 
//             Feel free to reach our team! We are ready to collaborate, blending your vision 
//             with creativity and cutting-edge technology. Reach out to us today, and let’s 
//             make something extraordinary together.
//           </p>
//         </div>

//         {/* Bottom Grid (Left info + Right form) */}
//         <div className="grid   bg-b lg:grid-cols-2 gap-12">
          
//           {/* Left Content */}
//           <div>
//             <h3 className="text-2xl font-semibold mb-4">Let’s talk with us</h3>
//             <p className="text-gray-400 mb-6 overflow-x-hidden ">
//               Contact our experts via phone, email or simply fill in the form and we’ll be in touch shortly.
//             </p>

//             <ul className="space-y-4">
//               <li className="text-gray-300">
//                 📍 F-177, 2nd floor, Kalash Tower, Phase-6b, Industrial Area, Sector 74, Mohali, 160038, India
//               </li>
//               <li className="text-gray-300">📞 +91 98771-50016</li>
//               <li className="text-gray-300">✉️ hrmanager@airai.games</li>
//             </ul>
//           </div>

//           {/* Right Form */}
//           <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-lg border border-gray-800">
//             <form className="space-y-6">
//               <div className="grid bg-[#1a1a1a]/180 grid-cols-1 md:grid-cols-2 gap-4 ">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   className="w-full px-4 py-3 rounded-lg bg-[#828282] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   className="w-full px-4 py-3 rounded-lg bg-[#828282] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
//                 />
//               </div>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-3 rounded-lg bg-[#828282] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full px-4 py-3 rounded-lg bg-[#828282] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
//               />
//               <textarea
//                 placeholder="Message"
//                 rows="4"
//                 className="w-full px-4 py-3 rounded-lg bg-[#828282] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="w-full py-2 rounded-lg  text-2xl font-semibold shadow-lg hover:opacity-90 transition"
//                   style={{ 
//     background: "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)" 
//   }}
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-black px-[150px] sm:overflow-x-hidden sm:px-[10px] sm:pb-[80px]  sm:pt-[60px] pt-[150px] pb-[150px] font-cabin  text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading + Paragraph */}
        <div className="text-center max-w-4xl sm:overflow-x-hidden sm:px-[10px] mx-auto  px-2">
          <h2 className="text-[72px] sm:px-5 sm:text-[42px] font-bold  leading-none">
            Get in{" "}
            <span className="relative sm:text-[48px] sm:h-[59px] sm:mb-[18px] sm:pt-[2px] inline-block h-[80px] leading-none bg-[#0f0f0f] px-3 py- mt-2">
              Touch
              {/* Corner accents */}
              <span className="absolute top-[-2px] left-[-7px] w-3 h-3 bg-[#FF5A39]"></span>
              <span className="absolute top-[-2px] right-[-7px] w-3 h-3 bg-[#F015CE]"></span>
              <span className="absolute bottom-[-2px] left-[-7px] w-3 h-3 bg-[#6F24F0]"></span>
              <span className="absolute bottom-[-2px] right-[-7px] w-3 h-3 bg-[#3F74F6]"></span>
            </span>{" "}
            with Us
          </h2>
          <p className="text-white mt-[16px] opacity-90  leading-relaxed text-[16px] px-2 sm:px-0">
            Have a game idea or need expert assistance? We are ready to
            collaborate, blending your vision with creativity and cutting-edge
            technology. Let's build something extraordinary together.
          </p>
        </div>

        {/* Bottom Grid (Left Info + Right Form) */}
        <div className="grid grid-cols-1 mt-[42px] sm:overflow-x-hidden lg:grid-cols-2 gap-10">
          {/* Left Content */}

          {/* <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let’s talk with us</h3>
            <p className="text-white opacity-90 ">
              Contact our experts via phone, email, or simply fill out the form
              — we’ll be in touch shortly.
            </p>
            <ul className="space-y-4 text-[16px]">
              <li className="text-white opacity-90">
                📍 F-177, 2nd floor, Kalash Tower, Phase-6b, Industrial Area,
                Sector 74, Mohali, 160038, India
              </li>
              <li className="text-white">📞 +91 98771-50016</li>
              <li className="text-white opacity-90">✉️ hrmanager@airai.games</li>
            </ul>
          </div> */}


          <div className="space-y-6  sm:px-[20px] font-cabin">
  <h3 className="text-[45px] sm:text-[42px] font-semibold bg-yellow-00">Let’s talk with us</h3>
  <p className="text-white text-[19px] sm:text-[16px] font-cabin opacity-90">
   Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
  </p>
  <ul className="space-y-4 sm:text-[16px]  text-[19px]">
    <li className="flex items-start sm:text-[16px] gap-3 text-white opacity-90">
      <img src="/Frame 3879 (1).png" alt="Location" className="w-6 h-6" />
      F-177, 2nd floor, Kalash Tower, Phase-6b, Industrial Area,
      Sector 74, Mohali, 160038, India
    </li>
    <li className="flex items-start gap-3 text-white">
      <img src="/Phone.png " alt="Phone" className="w-6 h-6" />
      +91 98771-50016
    </li>
    <li className="flex items-start gap-3 text-white opacity-90">
      <img src="/noun_Email.png" alt="Email" className="w-6 h-6" />
      hrmanager@airai.games
    </li>
  </ul>
</div>


          {/* Right Form */}
          <div className="bg-[#FFFFFF0A] p-6 sm:p-8 rounded-2xl border-b-4 border-b-[#ED09EE] shadow-lg border border-gray-800">
            <form className="space-y-6">
              {/* Name Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#2c2c2c] border border-gray-700 text-white opacity-90 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-[#ED09EE]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#2c2c2c] border border-gray-700 text-white focus:bg-white focus:text-black opacity-90 focus:outline-none focus:ring-2 focus:ring-[#ED09EE]"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-[#2c2c2c] border border-gray-700 text-white focus:bg-white focus:text-black opacity-90 focus:outline-none focus:ring-2 focus:ring-[#ED09EE]"
              />

              {/* Phone */}
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-[#2c2c2c] border border-gray-700 text-white focus:bg-white focus:text-black opacity- focus:outline-none focus:ring-2 focus:ring-[#ED09EE]"
              />

              {/* Message */}
              <textarea
                placeholder="Message"
                rows="4"
                // className="w-full px-4 py-3 rounded-lg bg-[#2c2c2c] border border-gray-700 text-white opacity- focus:outline-none focus:ring-2 focus:ring-[#ED09EE] "></textarea>
                  className="w-full px-4 py-3 rounded-lg bg-[#2c2c2c] border border-gray-700 text-white focus:bg-white focus:text-black opacity-90 focus:outline-none focus:ring-2 focus:ring-[#ED09EE] resize-none"></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 text-white opacity- rounded-lg text-lg font-semibold shadow-lg hover:opacity-90 transition"
                style={{
                  background:
                    "linear-gradient(270.16deg, #FF9F0D 0.16%, #FF4E3D 27.98%, #ED09EE 75.9%, #1091F8 180%)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>



 <span
    className="absolute top-[px] left-[px] sm:hidden w-[160px] h-[400px] rounded-none pointer-events-none"
    style={{
    
    background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(130px)",
      opacity: 0.9,
      transform: "translate(-185%, -48rem)",
    }}
  ></span>
  {/* Bottom-right blur */}
  <span
    className="absolute top-[px] sm:hidden right-[-150px] w-[150px] h-[140px] pointer-events-none rounded-none"
    style={{
      // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
       background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 20%, #ED09EE 50%, #ED09EE 70%, #1091F8 90%, transparent 100%)",
      filter: "blur(10px)",
      opacity: 0.8,
      transform: "translate(5%, -96%)",
    }}
  ></span>
    </section>
  );
}


