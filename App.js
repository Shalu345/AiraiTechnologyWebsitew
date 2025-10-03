





import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Homepage from "./component/navbar.jsx";
import Hero from "./component/navbar.jsx";
import AboutSections from "./component/Expertise.jsx";
import OurExpertiseSection from './component/ourexpertise.jsx';
import OurWorkProcess from "./component/ourworkprocess.jsx";
import OurPortfolio from "./component/ourportfolio.jsx";
import WhyWeChooseUs from "./component/whywechooseus.jsx";
import FAQSection from "./component/faq.jsx";
import AirAISection from "./component/airaisection.jsx";
import About from "./component/aboutuspage/about.jsx";
import OurStory from "./component/aboutuspage/ourstory.jsx";
import ValuesSection from "./component/aboutuspage/aboutarai.jsx";
import Service from "./component/servicepage/service.jsx";
import { Import } from 'lucide-react';
import ServicesSection from "./component/servicepage/ourservice.jsx";
import Whychoseservice from "./component/whychosseuspage/whychooseus.jsx";
import  WhyWorkWithUs from "./component/whychosseuspage/whyworkwithus.jsx";
import  Contactus from "./component/contactuspage/contact.jsx";
import ContactSection from "./component/contactuspage/getintouchwithus.jsx";
import ServiceOurWorkProcess from "./component/servicepage/Ourworkprocess.jsx";
import FaqSection from './component/servicepage/faqq.jsx';
import Servicefaq from './component/aboutuspage/aboutfaq.jsx';
import Navbar from './component/mainnavbar.jsx';
import WhyChoose from './component/whychosseuspage/whychosee.jsx';
import Portfolio from './component/whychosseuspage/portfolio.jsx';
import FAQQuestion from './component/contactuspage/Faquestion.jsx';

// import Combine from './component/pageg/combinesection';
function App() {
  return (
    <Router>
      {/* ✅ Navbar hamesha dikhana hai */}
       {/* <Hero/>   */}
      {/* <Homepage /> */}

      {/* ✅ Routes */}
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <div>
              <Homepage />
              <AboutSections />
              <OurExpertiseSection />
              <OurWorkProcess />
              <OurPortfolio />
              <WhyWeChooseUs />
              <FAQSection />
              <AirAISection />
            </div>
          }
        />

        {/* About page */}
       


        <Route
        path="/about"
        element={
          <>
            {/* <Navbar/>  */}
             <About />
            <OurStory />
            {/* <Combine/> */}
            <ValuesSection/>
              {/* <OurPortfolio /> */}
           < Servicefaq/>
            <AirAISection />
           
          </>
        }
      />




      

       <Route
        path="/services"
        element={
          <>
          
          <Service  />
           <ServicesSection/>
           <ServiceOurWorkProcess/>
            {/* <OurWorkProcess /> */}
               < FaqSection/>
            <AirAISection />
         

          </>
        }
      />



      <Route
        path="/whychooseus"
        element={
          <>
      <Whychoseservice/>
        
      <WhyWorkWithUs/>
   
       <WhyChoose/>
       <Portfolio/>
    
        < FAQSection/>
          <AirAISection /> 
          </>
        }
      />



        <Route
        path="/contactus"
        element={
          <>
       <Contactus/>
       <ContactSection/>
       <FAQQuestion/>
        {/* <FAQSection /> */}
              <AirAISection />
          
          </>
        }
      />

 
      </Routes>
    </Router>
  );
}

export default App;
