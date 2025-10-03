



// import React, { useState } from "react";

// // const faqs = [
// //   {
// //     question: "What is your refund policy?",
// //     answer:
// //       "We offer a full refund within 30 days of purchase if you are not satisfied.",
// //   },
// //   {
// //     question: "Can I change my subscription plan?",
// //     answer:
// //       "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
// //   },
// //   {
// //     question: "Do you offer customer support?",
// //     answer:
// //       "Absolutely! Our support team is available 24/7 via chat and email.",
// //   },
// //   {
// //     question: "Is there a free trial available?",
// //     answer: "Yes, we provide a 7-day free trial for all new users.",
// //   },
// //    {
// //     question: "Is there a free trial available?",
// //     answer: "Yes, we provide a 7-day free trial for all new users.",
// //   },
// // ];
// const faqs = [
//   {
//     question: "What is your refund policy?",
//     answer:
//       "We offer a full refund within 30 days of purchase if you are not satisfied with our services.Refunds are processed back to your original payment method within 5–7 business days.Our goal is to make the refund process smooth and hassle-free for every customer.",
//   },
//   {
//     question: "Can I change my subscription plan?",
//     answer:
//       "Yes, you can upgrade or downgrade your plan anytime directly from your account settings.Billing is automatically adjusted so you only pay for the features you actually use.This ensures flexibility and convenience as your requirements evolve over time.",
//   },
//   {
//     question: "Do you offer customer support?",
//     answer:
//       "Absolutely! Our dedicated support team is available 24/7 via live chat and email.We strive to respond to all queries within just a few hours, no matter the concern.Your satisfaction is our top priority, and we’re always ready to assist you promptly.",
//   },
//   {
//     question: "Is there a free trial available?",
//     answer:
//       "Yes, we provide a 7-day free trial for all new users to fully explore our platform.During this period, you’ll have unrestricted access to all premium features offered.You can cancel anytime before the trial ends to avoid being charged.",
//   },
//   {
//     question: "How secure is my payment information?",
//     answer:
//       "All transactions are encrypted with advanced industry-standard SSL technology.We do not store your credit card details on our servers for added protection.Payments are handled only through trusted, verified, and secure gateways.",
//   },
// ];
// export default function FaqSection() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-black   px-[150px]  pb-[150px] mx-auto bg-yellow- relative">
//       {/* Heading + Description */}
//       <div className="text-center  bg-orange- ">
//         <h2 className="text-[62px]  fonr-cabin font-bold text-white leading-none relative inline-block">
//           Frequently Asked{" "}
//           <span className="relative px-2 pb-3 leading-none inline-block h-[px] bg-[#1a1a1a]">
//             Question
//             <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
//             <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
//             <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
//           < span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>
//           </span> 

      
//         </h2>
//         <p className="text-white  max-w-4xl opacity-90 mt-[10px]  mx-auto text-[16px]">
//        Have questions about our services, processes, or projects? Our FAQ section provides clear answers to common queries, <br/>helping you understand how we work and what to expect when partnering with us.
//         </p>
//       </div>

//       {/* FAQ List */}
//        {/* <div className="max-w-3xl mx-auto  space-y-5 line-height-1">
//         {faqs.map((faq, index) => {
//           const isOpen = openIndex === index;
//           return (
//             <div
//               key={index}
//               className={`rounded-lg overflow-hidden  leading-snug shadow-md transition-all duration-300 ${
//                 isOpen ? "bg-[#ED09EE]   text-white" : "bg-[#1a1a1a] text-white" 
//               }`}
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full text-left border-b-4 border-[#ED09EE]  h-[65px] focus:outline-none relative"
//               >
//                 <div className="w-full px-6    relative  flex items-center justify-between">
//                   <span className="font-semibold text-lg  ">{faq.question}</span>
//                   <span className="text-2xl -bottom-6 ">{isOpen ? "−" : "+"}</span>
//                   {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ED09EE]"></span> */}
//                 {/* </div>
//               </button>

//               {isOpen && (
//                 <div className="px-6 overflow-hidden pb- relative -top-6 -bottom-6 bg-yellow- text-xl text-white ">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>  */} 



//       <div className="w-[978px] mx-auto  mt-[32px] space-y-5 font-cabin">
//   {faqs.map((faq, index) => {
//     const isOpen = openIndex === index;
//     return (
//       <div
//         key={index}
//         onClick={() => toggleFAQ(index)}
//         className={`cursor-pointer rounded-lg shadow-md transition-all duration-300 overflow-hidden ${
//           isOpen ? "bg-[#ED09EE] text-white" : "bg-[#1a1a1a] text-white"
//         }`}
//       >
//         {/* Parent Row (Question + Icon) */}
//         <div className="flex  justify-between bg-[#FFFFFF05] items-center px-8 border-b-4 border-[#ED09EE] py-4">
//           {/* Question Parent */}
//           <div className="question flex flex-col leading-none place-item-center gap-2 justify-start text-center items-center">
//             <div className="text-[24px] text-start font-cabin leading-none bg-red-  w-full">{faq.question}</div>

//                 {/* Answer (toggle open/close) */}
//         {isOpen && (
//           <div className=" w-[878px]  ">
//             <p className="text-[16px] opacity-100 text-start leading-relaxed  whitespace-pre-line">
//               {faq.answer}
//             </p>
//           </div>
//         )}
             
//           </div>
       
           
//           {/* Icon Parent */}
//           <div className="ml-6 text-3xl font-cabin">
//             {isOpen ? "−" : "+"}
//           </div>

//         </div>

       
//       </div>
//     );
//   })}
// </div>



//     <span
//     className="absolute bottom-[-990px] right-[-500px]  w-[170px] h-[450px] rounded-none pointer-events-none"
//     style={{
//       background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
//       filter: "blur(140px)",
//       opacity: 1,
//       transform: "translate(-195%, -245%)",
//     }}
//   ></span>

//     <span
//     className="absolute bottom-[px] left-[100px]  w-[170px] h-[450px] rounded-none pointer-events-none"
//     style={{
//       background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
//       filter: "blur(150px)",
//       opacity: 1,
//       transform: "translate(-185%, -245%)",
//     }}
//   ></span>

//     </section>
//   );
// }















import React, { useState } from "react";

import ReuseFAQSection from "../reusefaq";
import ReuseOurPortfolio from "../reuseportfolio";
export default function FaqSection() {
  

  return (
    <section className="sm:pt-[-130px]  bg-black  ">
    

    <ReuseFAQSection/>
          <div className="sm:pt-[80px] sm:pb-[-390px]">
 <ReuseOurPortfolio />
          </div>
       

   



    <span
    className="absolute sm:hidden bottom-[-990px] right-[-500px]  w-[170px] h-[450px] rounded-none pointer-events-none"
    style={{
      background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(150px)",
      opacity: 1,
      transform: "translate(-195%, 375%)",
    }}
  ></span>

    <span
    className="absolute sm:hidden bottom-[px] left-[100px]  w-[190px] h-[450px] rounded-none pointer-events-none"
    style={{
      background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(190px)",
      opacity: 1,
      transform: "translate(-145%, -245%)",
    }}
  ></span>

    </section>
  );
}