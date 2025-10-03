

// import React, { useRef, useEffect, useState } from "react";

// export default function ServiceOurWorkProcess() {
//   // const steps = [
//   //   { title: "Scope Analysis", desc: "We analyze project requirements to define scope." },
//   //   { 
//   //     title: "Discuss & Planning", 
//   //     desc: "We believe great ideas start with meaningful discussions. Our team ." 
//   //   },
//   //   { title: "Functional Design", desc: "Creating wireframes and prototypes to visualize the solution." },
//   //   { title: "Testing", desc: "Ensuring quality through rigorous testing processes." },
//   //   { title: "Deployment & Launch", desc: "Deploying the solution and launching it to users." },
//   //   { title: "Support & Maintenance", desc: "Providing ongoing support and updates post-launch." },
//   // ];


//          const steps = [
//   { 
//     title: "Scope Analysis", 
//     desc: "We carefully study the project requirements to understand goals and expectations. Our team ensures every detail is documented clearly for better clarity. This step helps us define a solid foundation and avoid scope creep later." 
//   },
//   { 
//     title: "Discuss & Planning", 
//     desc: "We believe great ideas start with meaningful discussions, so we involve all stakeholders in this phase. Together, we plan timelines, resources, and milestones effectively. This ensures everyone is aligned before moving to execution." 
//   },
//   { 
//     title: "Functional Design", 
//     desc: "Our designers create detailed wireframes and prototypes to visualize the final solution. This stage allows us to refine user flows, layouts, and interactions early on. The goal is to create a clear blueprint before development begins." 
//   },
//   { 
//     title: "Testing", 
//     desc: "Quality is our priority, so we conduct multiple levels of testing throughout the project. From functional and usability testing to performance and security checks, we cover all areas. This helps us deliver a stable and bug-free product." 
//   },
//   { 
//     title: "Deployment & Launch", 
//     desc: "Once everything is tested and approved, we move to deployment on live environments. Our team ensures a smooth transition with minimal downtime. The launch marks the beginning of real-world usage and user adoption." 
//   },
//   { 
//     title: "Support & Maintenance", 
//     desc: "We don’t stop at launch — continuous support is part of our process. Our team provides updates, bug fixes, and performance improvements regularly. This ensures the solution evolves with user needs and remains future-ready." 
//   },
// ];


//   const rightContentRef = useRef(null);
//   const [rightHeight, setRightHeight] = useState('auto');
//   const [activeStep, setActiveStep] = useState(null); // currently open step

//   useEffect(() => {
//     if (rightContentRef.current) {
//       setRightHeight(rightContentRef.current.offsetHeight);
//     }
//   }, []);

//   const handleClick = (idx) => {
    
//     setActiveStep(activeStep === idx ? null : idx);
//   };

//   return (
//     <section className="bg-black py-24 px-[150px] md:px-12 relative ">
//       {/* Upper Section */}
//       <div className="max-w-4xl mx-auto text-center mb-12 ">
//         <h2 className="text-white font-bold text-4xl md:text-5xl mb-3 space-x-6  leading-tight  ">
//           Our Work <span className="relative inline-block h-[62px] bg-[#0f0f0f]  left-[1px] text-white px-2 pl-1 py- ">
//    Process
//     <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
//     <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
//     <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
//     <span className="absolute bottom-[-7PX] right-[-2PX] w-3 h-3 bg-[#3F74F6]"></span>
//   </span>
//         </h2>
//         <p className="text-white text-base opacity-90 md:text-lg leading-relaxed">
//           Our streamlined work process ensures efficiency and quality at every stage. From brainstorming ideas and designing concepts to development, testing, and deployment, we follow a structured approach to deliver exceptional results.
//         </p>
//       </div>

//       {/* Lower Section */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap- md:gap-">
//         {/* Left Image */}
//         <div className="md:w-1/2">
//           <img
//             src="image.png" 
//             alt="Work Process Illustration"
//             className="w-full h-[400px] rounded-2xl object-contain"
//             style={{ height: rightHeight }}
//           />
//         </div>

//         {/* Right Steps */}
//         <div ref={rightContentRef} className="md:w-1/2 flex flex-col gap-6">
//           {steps.map((step, idx) => {
//             const isActive = activeStep === idx;
//             return (
//               <div
//                 key={idx}
//                 className={`flex p-3 rounded-[7px] border-l-2 border-[#ED09EE] hover:bg-[#ED09EE] duration-100  transition-colors duration-900 items-start ${
//                   isActive ? 'bg-[#ED09EE] text-white' : 'bg-[#0f0f0f] text-white'
//                 }`}
//                  onClick={() => handleClick(idx)}
//               >
 
//                 {/* Number with click */}
//                 <div
//                   className="mr-4 cursor-pointer"
//                   // onClick={() => handleClick(idx)}
//                 >
//                   <span className={`font-bold text-xl md:text-2xl -mr-2 border-[#ED09EE] pb-1`}>
//                     {idx + 1}.
//                   </span>
//                 </div>
//                 <div>
//                   <h4 className="text-lg md:text-2xl font-semibold mb-1">
//                     {step.title}
//                   </h4>
//                   {isActive && (
//                     <p className="text-sm md:text-base leading-relaxed mt-1">
//                       {step.desc}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>





//   <span
//     className="absolute  w-[240px] h-[440px] pointer-events-none rounded-none"
//     style={{
//       // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
//        background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
//       filter: "blur(155px)",
//       opacity: 0.8,
//       transform: "translate(585%, -215%)",
//     }}
//   ></span>



//     {/* <span
//     className="absolute left  w-[200px] h-[450px] rounded-none pointer-events-none"
//     style={{
//       // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
//             background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
//       filter: "blur(150px)",
//       opacity: 0.9,
//       transform: "translate(-155%, -245%)",
//     }}
//   ></span> */}
//     </section>
//   );
// }






// import React, { useRef, useEffect, useState } from "react";

// export default function OurWorkProcess() {
  // const steps = [
  //   { title: "Scope Analysis", desc: "We analyze project requirements to define scope." },
  //   { 
  //     title: "Discuss & Planning", 
  //     desc: "We believe great ideas start with meaningful discussions. Our team ." 
  //   },
  //   { title: "Functional Design", desc: "Creating wireframes and prototypes to visualize the solution." },
  //   { title: "Testing", desc: "Ensuring quality through rigorous testing processes." },
  //   { title: "Deployment & Launch", desc: "Deploying the solution and launching it to users." },
  //   { title: "Support & Maintenance", desc: "Providing ongoing support and updates post-launch." },
  // ];


//          const steps = [
//   { 
//     title: "Scope Analysis", 
//     desc: "We carefully study the project requirements to understand goals and expectations. Our team ensures every detail is documented clearly for better clarity. This step helps us define a solid foundation and avoid scope creep later." 
//   },
//   { 
//     title: "Discuss & Planning", 
//     desc: "We believe great ideas start with meaningful discussions, so we involve all stakeholders in this phase. Together, we plan timelines, resources, and milestones effectively. This ensures everyone is aligned before moving to execution." 
//   },
//   { 
//     title: "Functional Design", 
//     desc: "Our designers create detailed wireframes and prototypes to visualize the final solution. This stage allows us to refine user flows, layouts, and interactions early on. The goal is to create a clear blueprint before development begins." 
//   },
//   { 
//     title: "Testing", 
//     desc: "Quality is our priority, so we conduct multiple levels of testing throughout the project. From functional and usability testing to performance and security checks, we cover all areas. This helps us deliver a stable and bug-free product." 
//   },
//   { 
//     title: "Deployment & Launch", 
//     desc: "Once everything is tested and approved, we move to deployment on live environments. Our team ensures a smooth transition with minimal downtime. The launch marks the beginning of real-world usage and user adoption." 
//   },
//   { 
//     title: "Support & Maintenance", 
//     desc: "We don’t stop at launch — continuous support is part of our process. Our team provides updates, bug fixes, and performance improvements regularly. This ensures the solution evolves with user needs and remains future-ready." 
//   },
// ];


//   const rightContentRef = useRef(null);
//   const [rightHeight, setRightHeight] = useState('auto');
//   const [activeStep, setActiveStep] = useState(null); // currently open step

//   useEffect(() => {
//     if (rightContentRef.current) {
//       setRightHeight(rightContentRef.current.offsetHeight);
//     }
//   }, []);

//   const handleClick = (idx) => {
    
//     setActiveStep(activeStep === idx ? null : idx);
//   };

//   return (
//     <section className="bg-black  pb-[150px] px-[150px]  relative ">
//       {/* Upper Section */}
//       <div className="max-w-4xl mx-auto text-center  ">
//         <h2 className="text-white font-cabin font-bold text-[62px] font-cabin mb-3 space-x-6  leading-none  ">
//           Our Work <span className="relative inline-block h-[65px] bg-[#0f0f0f] leading-none left-[1px] text-white px-2   ">
//    Process
//     <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
//     <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
//     <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
//     <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>
//   </span>
//         </h2>


//         <p className="text-white text-[16px] font-cabin opacity-90 mt-[16px] leading-relaxed">
//           Our streamlined work process ensures efficiency and quality at every stage. From brainstorming ideas and designing concepts to development, testing, and deployment, we follow a structured approach to deliver exceptional results.
//         </p>

//       </div>

//       {/* Lower Section */}
//       <div className="w-full mx-auto mt-[42px] flex bg-yellow-00 flex-col md:flex-row items-start gap-[54px]">
//         {/* Left Image */}
//         <div className="w-">
//           <img
//             src="image.png" 
//             alt="Work Process Illustration"
//             className="w- h-[480px] rounded-2xl object-contain"
//             // style={{ height: rightHeight }}
//           />
//         </div>

//         {/* Right Steps */}
//         <div ref={rightContentRef} className="w-[731px] flex flex-col gap-[24px]">
//           {steps.map((step, idx) => {
//             const isActive = activeStep === idx;
//             return (
//               <div
//                 key={idx}
//                 className={`flex p-1 rounded-[7px] border-l-2 border-[#ED09EE] hover:bg-[#ED09EE] duration-100  transition-colors duration-900 items-start ${
//                   isActive ? 'bg-[#ED09EE] text-white' : 'bg-[#0f0f0f] text-white'
//                 }`}
//                  onClick={() => handleClick(idx)}
//               >
 
//                 {/* Number with click */}
//                 <div
//                   className="mr-4 cursor-pointer"
//                   // onClick={() => handleClick(idx)}
//                 >
//                   <span className={`font-bold text-[32px] font-cabin -mr-2 border-[#ED09EE] ml-5`}>
//                     {idx + 1}.
//                   </span>
//                 </div>
//                 <div>
//                   <h4 className="text-[32px] font-cabin  font-semibold mb-1">
//                     {step.title}
//                   </h4>
//                   {isActive && (
//                     <p className="text-[16px] font-cabin leading-relaxed mt-1">
//                       {step.desc}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>



//                    {/* Bottom-left blur */}   
//   {/* <span
//     className="absolute top-[] left-[]  w-[200px] h-[450px] rounded-none pointer-events-none"
//     style={{
//       background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
//       filter: "blur(100px)",
//       opacity: 0.8,
//       transform: "translate(-25%, -25%)",
//     }}
//   ></span> */}


//   {/* <span
//     className="absolute   w-[200px] h-[450px] rounded-none pointer-events-none"
//     style={{
//       // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
//         background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 20%, #ED09EE 50%, #ED09EE 70%, #1091F8 90%, transparent 100%)",
//       filter: "blur(10px)",
//       opacity: 0.9,
//       transform: "translate(-545%, -325%)",
//     }}
//   ></span> */}
//   {/* Bottom-right blur */}
//    {/* <span
//     className="absolute left  w-[200px] h-[450px] rounded-none pointer-events-none"
//     style={{
//       // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
//       background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
//       filter: "blur(150px)",
//       opacity: 0.9,
//       transform: "translate(725%, -120%)",
//     }}
//   ></span> */}

// {/* <span
//     className="absolute  w-[240px] h-[440px] pointer-events-none rounded-none"
//     style={{
//       // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
//        background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
//       filter: "blur(155px)",
//       opacity: 0.8,
//       transform: "translate(585%, -215%)",
//      }}
//   ></span> */}

//     </section>
//   );
// }





// import React, { useRef, useEffect, useState } from "react";

// export default function OurWorkProcess() {
//   // const steps = [
//   //   { title: "Scope Analysis", desc: "We analyze project requirements to define scope." },
//   //   { 
//   //     title: "Discuss & Planning", 
//   //     desc: "We believe great ideas start with meaningful discussions. Our team ." 
//   //   },
//   //   { title: "Functional Design", desc: "Creating wireframes and prototypes to visualize the solution." },
//   //   { title: "Testing", desc: "Ensuring quality through rigorous testing processes." },
//   //   { title: "Deployment & Launch", desc: "Deploying the solution and launching it to users." },
//   //   { title: "Support & Maintenance", desc: "Providing ongoing support and updates post-launch." },
//   // ];


//          const steps = [
//   { 
//     title: "Scope Analysis", 
//     desc: "We carefully study the project requirements to understand goals and expectations. Our team ensures every detail is documented clearly for better clarity. This step helps us define a solid foundation and avoid scope creep later." 
//   },
//   { 
//     title: "Discuss & Planning", 
//     desc: "We believe great ideas start with meaningful discussions, so we involve all stakeholders in this phase. Together, we plan timelines, resources, and milestones effectively. This ensures everyone is aligned before moving to execution." 
//   },
//   { 
//     title: "Functional Design", 
//     desc: "Our designers create detailed wireframes and prototypes to visualize the final solution. This stage allows us to refine user flows, layouts, and interactions early on. The goal is to create a clear blueprint before development begins." 
//   },
//   { 
//     title: "Testing", 
//     desc: "Quality is our priority, so we conduct multiple levels of testing throughout the project. From functional and usability testing to performance and security checks, we cover all areas. This helps us deliver a stable and bug-free product." 
//   },
//   { 
//     title: "Deployment & Launch", 
//     desc: "Once everything is tested and approved, we move to deployment on live environments. Our team ensures a smooth transition with minimal downtime. The launch marks the beginning of real-world usage and user adoption." 
//   },
//   { 
//     title: "Support & Maintenance", 
//     desc: "We don’t stop at launch — continuous support is part of our process. Our team provides updates, bug fixes, and performance improvements regularly. This ensures the solution evolves with user needs and remains future-ready." 
//   },
// ];


//   const rightContentRef = useRef(null);
//   const [rightHeight, setRightHeight] = useState('auto');
//   const [activeStep, setActiveStep] = useState(null); // currently open step

//   useEffect(() => {
//     if (rightContentRef.current) {
//       setRightHeight(rightContentRef.current.offsetHeight);
//     }
//   }, []);

//   const handleClick = (idx) => {
    
//     setActiveStep(activeStep === idx ? null : idx);
//   };

//   return (
//     <section className="bg-black  px-[150px] px-[10px] pb-[150px] relative ">
//       {/* Upper Section */}
//       <div className="max-w-4xl mx-auto text-center  ">
//         <h2 className="text-white font-cabin font-bold text-[62px] font-cabin mb-3 space-x-6  leading-none  ">
//           Our Work <span className="relative inline-block h-[65px] bg-[#0f0f0f] leading-none left-[1px] text-white px-2   ">
//    Process
//     <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
//     <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
//     <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
//     <span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>
//   </span>
//         </h2>


//         <p className="text-white text-[16px] 3xl:text-[18px] font-cabin opacity-90 mt-[16px] leading-relaxed">
          
//           Our streamlined work process ensures efficiency and quality at every stage. From brainstorming ideas and designing concepts to development, testing, and deployment, we follow a structured approach to deliver exceptional results.
//         </p>

//       </div>

//       {/* Lower Section */}
//       <div className="w-full mx-auto mt-[42px] flex bg-yellow-00 flex-col 3xl:flex 3xl:justify-center  md:flex-row items-start gap-[54px]">
//         {/* Left Image */}
//         <div className="w-">
//           <img
//             src="image.png" 
//             alt="Work Process Illustration"
//             className="w- h-[570px] 3xl: h-[530px] 3xl:w-[700px]  rounded-2xl  -mt-"
//             // style={{ height: rightHeight }}
//           />
//         </div>

//         {/* Right Steps */}
//         <div ref={rightContentRef} className="w-[731px] flex flex-col gap-[24px]">
//           {steps.map((step, idx) => {
//             const isActive = activeStep === idx;
//             return (
//               <div
//                 key={idx}
//                 className={`flex items-start p-1 py-4 rounded-[7px] border-l-2 border-[#ED09EE] hover:bg-[#ED09EE] duration-100  transition-colors duration-900 items-start ${
//                   isActive ? 'bg-[#ED09EE] text-white' : 'bg-[#0f0f0f] text-white'
//                 }`}
//                  onClick={() => handleClick(idx)}
//               >
 
//                 {/* Number with click */}
//                 <div
//                   className="mr-4 cursor-pointer "
//                   // onClick={() => handleClick(idx)}
//                 >
//                   <span className={`font-bold text-[32px] leading-none flex-shrink-0 w-12 text-right font-cabin -mr-2 border-[#ED09EE] ml-5`}>
//                     {idx + 1}.
//                   </span>
//                 </div>
//                 <div>
//                   <h4 className="text-[32px] font-cabin leading-none  font-semibold mb-1">
//                     {step.title}
//                   </h4>
//                   {isActive && (
//                     <p className="text-[16px] font-cabin text-start -ml-7 w-[581px] bg-red-00  text-start leading-[20px] mb- mt-1">
//                       {step.desc}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>







//   <span
//     className="absolute  w-[240px] h-[440px] pointer-events-none rounded-none"
//     style={{
//       // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
//        background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
//       filter: "blur(195px)",
//       opacity: 0.8,
//       transform: "translate(545%, -215%)",
//         ...(typeof window !== "undefined" && window.innerWidth >= 1920 ? { filter: "blur(200px)", left: "1090px" } : {}),
//      }}
//   ></span>
//     </section>
//   );
// }


import React, { useRef, useEffect, useState } from "react";
import   ReuseOurWorkProcess from '../reuuseourworkprocess'
export default function OurWorkProcess() {

  return (
    <section className="bg-black  px-[150px] sm:px-[10px] pb-[150px] sm:pb-[0px] sm:pt-[70px]  relative ">
   
  <ReuseOurWorkProcess/>

  <span
    className="absolute sm:hidden   w-[240px] h-[440px] pointer-events-none rounded-none"
    style={{
      // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
       background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(195px)",
      opacity: 0.8,
      transform: "translate(545%, -215%)",
        ...(typeof window !== "undefined" && window.innerWidth >= 1920 ? { filter: "blur(200px)", left: "1090px" } : {}),
     }}
  ></span>

    </section>
  );
}








// import React, { useRef, useEffect, useState } from "react";
// import ReuseOurWorkProcess from "../reuuseourworkprocess";

// export default function OurWorkProcess() {

//   return (
//     <section >
//      <ReuseOurWorkProcess />

//   <span
//     className="absolute  w-[240px] h-[440px] pointer-events-none rounded-none"
//     style={{
//       // background: "radial-gradient(circle, #FF9F0D 0%, #FF4E3D 50%, #ED09EE, #1091F8,  transparent 90%)",
//        background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
//       filter: "blur(150px)",
//       opacity: 0.8,
//       transform: "translate(625%, -255%)",
//      }}
//   ></span>
//     </section>
//   );
// }