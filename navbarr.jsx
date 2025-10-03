     {/* Navbar */}
         <div className="relative z-10 px-24 py-4 flex justify-between items-center">
        <img src="/download 2.png" alt="Airai" className="h-10"/>

      
<ul className="hidden md:flex gap-6">
  <li>
    <Link to="/" className={`hover:text-[#ED09EE]  ${getLinkClass("/")}`}>Home</Link>
  </li>
  <li>
    <Link to="/about" className={`hover:text-[#ED09EE] ${getLinkClass("/about")}`}>About Us</Link>
  </li>
  <li>
    <Link to="/services" className={`hover:text-[#ED09EE] ${getLinkClass("/services")}`}>Services</Link>
  </li>
  <li>
    <Link to="/whychooseus" className={`hover:text-[#ED09EE] ${getLinkClass("/whychooseus")}`}>Why Choose Us</Link>
  </li>
  <li>
    <Link to="/contactus" className={`hover:text-[#ED09EE] ${getLinkClass("/contactus")}`}>Contact Us</Link>
  </li>
</ul>
  
<button
  className="mt-2 px-11 py-3 rounded-md font-medium text-white"
  style={{
    background: "linear-gradient(270.16deg, #FF9F0D 0.6%,  #FF4E3D 37.98%, #ED09EE 75.9%, #1091F8 180%)"
  }}
>
  Contact Us
</button>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-white overflow-x-hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden overflow-x-hidden relative z-10 bg-black/80 flex flex-col gap-8 px-12 py-4">
            <Link to="/" className="hover:text-[#ED09EE] ">Home</Link>
            <Link to="/about" className="hover:text-[#ED09EE] ">About Us</Link>
            <Link to="/services" className="hover:text-[#ED09EE]" >Services</Link>
            <Link to="/whychooseus" className="hover:text-[#ED09EE] ">Why Choose Us</Link>
           
          </div>
        )}