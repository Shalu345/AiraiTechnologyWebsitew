

import React from 'react';

const features = [
  { title: 'Comprehensive Services', position: 'bottom', offsetX: -30, offsetY: 120 },
  { title: 'Personalized Learning', position: 'top', offsetX: 0, offsetY: 50, },
  { title: 'Certification', position: 'bottom', offsetX: 0, offsetY: 90 },
  { title: 'Affordable Pricing', position: 'top', offsetX: 1, offsetY: 50 },
];

const featuress = [
  { title: 'Comprehensive Services', position: 'bottom', offsetX: -170, offsetY: 5 },
  { title: 'Personalized Learning', position: 'top', offsetX: 60, offsetY: 70, },
  { title: 'Certification', position: 'bottom', offsetX: -170, offsetY: 10 },
  { title: 'Affordable Pricing', position: 'top', offsetX: 70, offsetY: 70 },
];

// Pre-calculated points along wave curve
const points = [
  { x: 0, y: 80 },     // Point 1 (top)
  { x: 380, y: 230 },   // Point 2 (bottom)
  { x: 760, y: 70 },   // Point 3 (top)
  { x: 1137, y: 230 },  // Point 4 (bottom)
];


const pointss = [
  { x: 0, y: 140 },     // Point 1 (top)
  { x: 160, y: 133 },   // Point 2 (bottom)
  { x: 340, y: 110 },   // Point 3 (top)
  { x: 567, y: 140 },  // Point 4 (bottom)
];


 const steps = [
    { id: 1, title: "Comprehensive Services" },
    { id: 2, title: "Comprehensive Services" },
    { id: 3, title: "Comprehensive Services" },
    { id: 4, title: "Comprehensive Services" },
  ];




export default function ReuseWhyChooseUs() {
  return (
    <section className="bg-black font-cabin pb-[150px] sm:overflow-hidden  sm:h-[1050px] bg-yellow-00 sm:object-cover sm:pb-1 sm:overflow-x-hidden sm:overflow--hidden sm:h-full  px-[150px] mx-auto relative  sm:px-[1px] sm:pb-[1px]">
      <div className="text-center  bg-yellow-00 space-x-9">
        <h2 className="text-[62px] sm:text-[42px] sm:pl-[12px]   font-cabin font-bold text-white leading-none  sm:leading-[135%] space-x-9 right-10"> 
      Why <br className="block lg:hidden" />
 <span className="relative bg-[#0f0f0f] leading-none  sm:h-[50px] inline-block pb-7 h-[70px] left-[10px] right-[-60px]   text-white px-2 py-">
   Choose 
<span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
<span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
  <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
  <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>
  </span> <span className="inline-block relative pb-2 -left-[30px] top-1">Us</span></h2>
      </div>


          <div className="max-w-4xl sm:px-[20px]  3xl:text-[18px] sm:text-[16px]  sm:pl- mx-auto text-center mt-[16px] line-heigh-150">
        <p className="text-white opacity-90 sm:text-[16px] sm:mt-[22px]  font-cabin text[16px]">
        At Airai Game Development Pvt. Ltd., we combine creativity, technical expertise, and innovation to deliver outstanding results. Our dedicated team focuses on crafting unique gaming experiences, ensuring top-notch quality, timely delivery, and client satisfaction. With a passion for excellence, we turn ideas into immersive digital realities.
        </p>
      </div>


      <div className="relative mt-[142px] sm:w-full sm:hidden sm:h-full 3xl:mt-[70px] bg-blue-00 w-[1140px]    3xl:w-[40x]  bg-yellow-00 flex item-center  mx-auto h-[256px]"> 
        {/* Wave Curve */}
        <svg
          className="absolute inset-0 mt- w-full h-full"
          viewBox="0 0 1140 256"
          preserveAspectRatio="none"
          
        >
          {/* <path
            d="M0 0 
            C0 0, 180 200, 380 180
            C570 180, 570 36, 760 0 
            C800 0, 950 40, 1140 180"
            stroke="#b8a6a6ff"
            strokeWidth="4"
            strokeDasharray="12,12"
            fill="transparent"
          />
          
          */}

          <path
            d="M0 0 
            C2.5 33, 193 228, 344.5 217.5
            C531.5 203.5, 592.73 33, 776 33
            C937 33, 1140 217.5, 1140 217.5"
            stroke="#ffffffff"
            strokeWidth="3"
            strokeDasharray="12,12"
            fill="transparent"
          />
        </svg>

        {/* Features */}
        <div className="absolute inset-0 mt-1">
          {features.map((feature, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{
                 left: `${points[i].x}px`,
                 top: `${points[i].y}px`,
                 transform: `translate(-50%, ${
                  feature.position === 'top' ? '-95%' : '-73%'
                })`,
              }}
            >
              {feature.position === 'top'&& (
              
         <p
        className="text-white font-cabin text-[32px] leading-none text-center max-w-[220px] bg-yellow-00"
        style={{
          transform: `translate(${feature.offsetX || 0}px, ${
            (feature.offsetY || 0) - 70
          }px)`,
        }}
      >
        {feature.title}
      </p>
    )}
 <div className="w-50 h-50 md:w-16 md:h-16 text-4xl rounded-full bg-[#ED09EE] flex items-center justify-center text-white font-bold shadow-lg">
                {i + 1}
              </div>
           {feature.position === 'bottom'&& (
             
         <p
        className="text-white font-cabin text-[32px] text-center flex flex-col leading-none item-center max-w-[216px] bg-yellow-00"
        style={{
          transform: `translate(${feature.offsetX || 0}px, ${
            (feature.offsetY || 0) - 70
          }px)`,
        }}
      >
        {feature.title}
      </p>
      )}
    </div>
          ))}
    </div>
</div>





{/* //mobile view me hh  */}


  <div className="relative mt-[272px] px-4 pb-[-680px] lg:hidden origin-center ml-[-100px] mb-16 mt-[252px] transform rotate-90 flex item-center  text-start  px-1 bg-blue-00 w-[558px]   flex item-center  mx-auto h-[185px] ">
     
        <svg
          className="absolute inset-0 mt- w-full h-full text-start "
          viewBox="0 0 1140 256"
          preserveAspectRatio="none"
           
          
        >
       

          <path
            d="M0 0 
            C2.5 33, 193 228, 344.5 217.5
            C531.5 203.5, 592.73 33, 776 33
            C937 33, 1140 217.5, 1140 217.5"
            stroke="#ffffffff"
            strokeWidth="3"
            strokeDasharray="12,12"
            fill="transparent"
          />
        </svg>

     
        <div className="absolute inset-0 mt-1">
          {featuress.map((feature, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{
                 left: `${pointss[i].x}px`,
                 top: `${pointss[i].y}px`,
                 transform: `translate(-50%, ${
                  feature.position === 'top' ? '-60%' : '-149%'
                })`,
              }}
            >
              {feature.position === 'top'&& (
              
         <p
        className="text-white font-cabin text-[16px] sm:text-[28px]  leading-none text-center transform rotate-90 max-w-[150px] bg-yellow-00"
        style={{
          transform: `rotate(-90deg) translate(${feature.offsetX || -180}px, ${
            (feature.offsetY || -190) - 70
          }px)`,
        }}
      >
        {feature.title}
      </p>
    )}
 <div className="w-10 h-10 md:w-16 text-4xl  sm:text-[28px] transform -rotate-90 rounded-full bg-[#ED09EE] flex items-center justify-center text-white font-bold shadow-lg">
                {i + 1}
              </div>
           {feature.position === 'bottom'&& (
             
         <p
        className="text-white font-cabin text-[16px] sm:text-[28px]   text-center flex flex-row leading-none item-center max-w-[26px] bg-yellow-00"
        style={{
          
          transform: `rotate(-90deg) translate(${feature.offsetX || -150}px, ${
            (feature.offsetY || 70) - 10
          }px)`,
        }}
      >
        {feature.title}
      </p>
      )}
    </div>
          ))}
    </div>
</div>





                         {/* Bottom-left blur */}   

    {/* <span
    className="absolute bottom-[990px] right-[-120px] w-[450px] h-[440px] pointer-events-none rounded-none"
    style={{

        //  background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
           background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(190px)",
      opacity: 0.9,
      transform: "translate(69%, 145%)",
    }}
  ></span>         */}




    </section>
  );
}