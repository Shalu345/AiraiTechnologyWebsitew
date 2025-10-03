




          





// import './App.css';
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



// import About from "./component/aboutuspage/about.jsx";
// import OurStory from "./component/aboutuspage/ourstory.jsx";

// function combine() {
//   return (
//     <div className='bg-black'>
//     <Router >
   
//       <Routes>

//         <Route
//         path="/about"
//         element={
//           <>
//             {/* <Navbar/> */}
//             <About />
//             <OurStory />
          
           
//           </>
//         }
//       />

//       </Routes>
//     </Router>
//     </div>
//   );
// }

// export default combine;


import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./component/aboutuspage/about.jsx";
import OurStory from "./component/aboutuspage/ourstory.jsx";

function Combine() {
  return (
    <div className='bg-black min-h-screen'>
      <Router>
        <Routes>
          <Route
            path="/about"
            element={
              <div className="bg-black">
                <About />
                <OurStory />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Combine;
