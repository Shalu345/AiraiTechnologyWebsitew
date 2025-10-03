



import React, { useState } from "react";



const faqs = [
  {
    question: "What is your refund policy?",
    answer:
      "We offer a full refund within 30 days of purchase if you are not satisfied with our services. Refunds are processed back to your original payment method within 5–7 business days. Our goal is to make the refund process smooth and hassle-free for every customer with consistency, trust and satisfaction.",
  },
  {
    question: "Can I change my subscription plan?",
    answer:
      "Yes, you can upgrade or downgrade your plan anytime directly from your account settings. Billing is automatically adjusted so you only pay for the features you actually use. This ensures flexibility and convenience as your requirements evolve over time.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Absolutely! Our dedicated support team is available 24/7 via live chat and email. We strive to respond to all queries within just a few hours, no matter the concern. Your satisfaction is our top priority, and we’re always ready to assist you promptly.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we provide a 7-day free trial for all new users to fully explore our platform. During this period, you’ll have unrestricted access to all premium features offered. You can cancel anytime before the trial ends to avoid being charged to avoid being.",
  },
  {
    question: "How secure is my payment information?",
    answer:
      "All transactions are encrypted with advanced industry-standard SSL technology. We do not store your credit card details on our servers for added protection. Payments are handled only through trusted, verified, and secure gateways.",
  },
];


export default function ReuseFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black pb-[150px] font-cabin sm:pt-[80px]  pt-[0px] px-[150px] relative sm:pb-[1px] sm:px-[1px]">
      {/* Heading + Description */}
      <div className="text-center ">
        <h2 className="text-[62px] sm:text-[42px] leading-none font-cabin font-bold text-white relative inline-block">
          Frequently Asked{" "}
          <span className="relative px-2 pb-2 sm:h-[50px] sm:mt-4 leading-none inline-block h-[70px] bg-[#1a1a1a]">
            Question
            <span className="absolute top-[-2PX] left-[-7PX] w-3 h-3 bg-[#FF5A39]"></span>
            <span className="absolute top-[-2PX] right-[-7PX] w-3 h-3 bg-[#F015CE]"></span>
            <span className="absolute bottom-[-2PX] left-[-7PX] w-3 h-3 bg-[#6F24F0]"></span>
          < span className="absolute bottom-[-2PX] right-[-7PX] w-3 h-3 bg-[#3F74F6]"></span>
          </span> 

      
        </h2>
        <p className="text-white sm:mt-4 sm:px-[30px]  max-w-4xl 3xl:max-w-5xl 3xl:text-[22px] opacity-100 mt-[6px] font-cabin mx-auto text-[16px]">
       Have questions about our services, processes, or projects? Our FAQ section provides clear answers to  <br className="hidden lg:block" />  common queries, helping you understand how we work and what to expect when partnering with us.
        </p>
      </div>




      {/* FAQ List */}
       {/* <div className="w-[978px] mx-auto  space-y-5 mt-[62px] mb- font-cabin line-height-1">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-lg overflow-hidden  leading-snug shadow-md transition-all duration-300 ${
                isOpen ? "bg-[#ED09EE]   text-white" : "bg-[#1a1a1a] text-white" 
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left border-b-4 border-[#ED09EE] bg-yellow-700  h-[65px] focus:outline-none relative"
              >
                <div className="w-full px-8  font-cabin  relative  flex items-center justify-between">
                  <span className="font-medium font-cabin text-[24px]
                    ">{faq.question}</span>
                  <span className="text-4xl  font-cabin -bottom-6 ">{isOpen ? "−" : "+"}</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ED09EE]"></span>
                </div>
              </button>

              {isOpen && (
                <div className="px-8 fon overflow-hidden pb- relative -top-4 -bottom-6 bg-yellow- text-[16px] text-white opacity-70 ">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>  */}



<div className="w-[978px] sm:w-full  mt-[32px] sm:px-[20px] mx-auto space-y-5 font-cabin">
  {faqs.map((faq, index) => {
    const isOpen = openIndex === index;
    return (
      <div
        key={index}
        onClick={() => toggleFAQ(index)}
        className={`cursor-pointer  rounded-lg shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "bg-[#ED09EE] text-white" : "bg-[#FFFFFF05] text-white"
        }`}
      >
        {/* Parent Row (Question + Icon) */}
        <div className="flex hover:bg-[#ED09EE]  justify-between bg-[#FFFFFF05] sm:bg-[#0f0f0f] items-center px-8 sm:px-2 border-b-4 border-[#ED09EE] py-4">
          {/* Question Parent */}
          <div className="question flex flex-col leading-none place-item-start gap-2 justify-start text-start items-start">

            <div className="text-[24px] sm:text-[20px] sm:pl-[14px]   text-start font-cabin leading-none bg-red-  w-full">{faq.question}</div>

 
                {/* Answer (toggle open/close) */}
        {isOpen && (
          <div className=" w-[878px] sm:w-[300px]">
            <p className="text-[16px] sm:text-[14px] sm:px-[14px] sm:mt-[6px]   sm:leading-[150%] opacity-100 text-start leading-relaxed  whitespace-pre-line">
              {faq.answer}
            </p>
          </div>
        )}
             
          </div>
       
           
          {/* Icon Parent */}
          <div className="ml-6 text-3xl sm:-ml-1 sm:text-[43px] sm:pr-6 font-cabin flex-shrink-0 flex items-center">
            {isOpen ? "−" : "+"}
          </div>

        </div>

       
      </div>
    );
  })}
</div>








    {/* <span
    className="absolute bottom-[px] left-[100px]  w-[170px] h-[450px] rounded-none pointer-events-none"
    style={{
      background: "radial-gradient(circle,rgba(255, 159, 13, 1),rgba(255, 78, 61, 1) , rgba(237, 9, 238, 1),rgba(16, 145, 248, 1))",
      filter: "blur(190px)",
      opacity: 1,
      transform: "translate(-165%, -135%)",
    }}
  ></span> */}

    </section>
  );
}