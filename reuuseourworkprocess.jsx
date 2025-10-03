

import React, { useRef, useEffect, useState } from "react";

export default function ReuseOurWorkProcess() {



  const steps = [
  { 
    title: "Scope Analysis", 
    desc: "We carefully study the project requirements to understand goals and expectations. Our team ensures every detail is documented clearly for better clarity. This step helps us define a solid foundation and avoid scope creep later." ,
     image: "scopeandanalysis.png" 
  },

  { 
    title: "Discuss & Planning", 
    desc: "We believe great ideas start with meaningful discussions, so we involve all stakeholders in this phase. Together, we plan timelines, resources, and milestones effectively. This ensures everyone is aligned before moving to execution." ,
    image:"discusandplanning.png"
  },
  { 
    title: "Functional Design", 
    desc: "Our designers create detailed wireframes and prototypes to visualize the final solution. This stage allows us to refine user flows, layouts, and interactions early on. The goal is to create a clear blueprint before development begins." ,
     image:"funcdesign.png"
  },
  { 
    title: "Testing", 
    desc: "Quality is our priority, so we conduct multiple levels of testing throughout the project. From functional and usability testing to performance and security checks, we cover all areas. This helps us deliver a stable and bug-free product." ,
      image:"Testing.png"
  },
  { 
    title: "Deployment & Launch", 
    desc: "Once everything is tested and approved, we move to deployment on live environments. Our team ensures a smooth transition with minimal downtime. The launch marks the beginning of real-world usage and user adoption." ,
      image:"deploymentlaunch.png"
  },
  { 
    title: "Support & Maintenance", 
    desc: "We don’t stop at launch — continuous support is part of our process. Our team provides updates, bug fixes, and performance improvements regularly. This ensures the solution evolves with user needs and remains future-ready." ,
      image:" testing (2).png"
  },
];


  const rightContentRef = useRef(null);
  const [rightHeight, setRightHeight] = useState('auto');
  const [activeStep, setActiveStep] = useState(null); // currently open step

  useEffect(() => {
    if (rightContentRef.current) {
      setRightHeight(rightContentRef.current.offsetHeight);
    }
  }, []);

  const handleClick = (idx) => {
    
    setActiveStep(activeStep === idx ? null : idx);
  };

  return (
  <section className="bg-black 3xl:flex 3xl:flex-col 3xl:justify-center px-[150px] pb-[150px] sm:overflow-x-hidden relative sm:px-[1px] sm:pb-0 ">
      {/* Upper Section */}
      <div className="max-w-4xl sm:mb-[220px] mx-auto text-center">
        <h2 className="text-white sm:text-[42px] sm:px-8 font-cabin font-bold text-[62px] font-cabin mb-3 space-x-6  leading-none  ">
          Our Work <span className="relative inline-block sm:mt-[10px] sm:h-[50px] h-[65px] bg-[#0f0f0f] leading-none left-[1px] text-white px-2   ">
         Process
    <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
    <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
    <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
    <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>
  </span>
        </h2>


        <p className="text-white sm:px-[20px]  text-[16px] sm:px-2 sm:mt-[18px]  3xl:text-[18px] font-cabin opacity-90 mt-[16px] leading-relaxed">

          Our streamlined work process ensures efficiency and quality at every stage. From brainstorming ideas and designing concepts to development, testing, and deployment, we follow a structured approach to deliver exceptional results.
        </p>

      </div>

      {/* Lower Section */}
      <div className="w-full mx-auto md:mt-[42px] sm:mt-[32px]  3xl:flex  3xl:justify-center  flex bg-yellow-00 flex-col md:flex-row items-start gap-[54px] sm:gap-1 sm:px-2">
        {/* Left Image */}
        <div className="h-[560px] sm:hidden sm:ml-[25px] 3xl:w-[700px] object-contain bg-cover bg-yellow-00 leading-none">
          <img
            src="image.png" 
            alt="Work Process Illustration"
            className=" h-[530px] 3xl:h-[530px] sm:h-[300px]  3xl:w-[700px] bg-yellow-800 rounded-2xl "
            // style={{ height: rightHeight }}
          />
        </div>

        {/* Right Steps */}
    <div ref={rightContentRef} className="w-[731px] sm:mt-[-190px] sm:pr-[50px] sm:pl-2  sm:center sm:w-[390px] 3xl:mt-[-20px] flex flex-col gap-[24px] sm:px-1 ">
        {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                className={`flex items-start p-1 py-4  rounded-[7px] border-l-2 border-[#ED09EE] hover:bg-[#ED09EE] duration-100  transition-colors duration-900 items-start ${
                  isActive ? 'bg-[#ED09EE] text-white' : 'bg-[#0f0f0f] text-white'
                }`}
                 onClick={() => handleClick(idx)}
              >
 
                {/* Number with click */}
                <div
                  className="mr-4 cursor-pointer "
                  // onClick={() => handleClick(idx)}
                >
                  <span className={`font-bold text-[32px] sm:text-[27px] leading-none flex-shrink-0 w-12 text-right font-cabin -mr-2 border-[#ED09EE] ml-5`}>
                    {idx + 1}.
                  </span>
                </div>
                <div>
                  <h4 className="text-[32px] ml- font-cabin leading-none sm:text-[25px]  font-semibold mb-1">
                    {step.title}
                  </h4>
                  {isActive && (
                    <p className="text-[16px] sm:mt-3 sm:pr-2 font-cabin text-start -ml-7 w-[581px] bg-red-00 sm:w-[300px]  sm:text-[12x]  text-start leading-[150%] mb- mt-1 s">
                      {step.desc}
          <div className="h-[560px] sm:pr-3 lg:hidden sm:mt-[24px] h-fit 3xl:w-[700px] object-contain bg-cover bg-yellow-00 leading-none">
          <img
            src={step.image} 
            alt="Work Process Illustration"
            className=" h-[530px] 3xl:h-[530px]  sm:h-[305px]  3xl:w-[700px] bg-yellow-800 rounded-2xl"
            // style={{ height: rightHeight }}
          />
        </div>
                    </p>
                    
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>






  {/* <span
    className="absolute  w-[240px] h-[140px] pointer-events-none rounded-none"
    style={{
      // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
       background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(150px)",
      opacity: 0.8,
      transform: "translate(-595%, -255%)",
    }}
  ></span> */}



    {/* <span
    className="absolute left  w-[200px] h-[450px] rounded-none pointer-events-none"
    style={{
      // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
            background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(190px)",
      opacity: 0.9,
      transform: "translate(-175%, -245%)",
    }}
  ></span> */}
    </section>
  );
}