import React from "react";

export default function Herooo() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="relative">
          <img
            src="../../public/Group3.png" // yahan tum apna image daalna
            alt="Who We Are"
            className="rounded-2xl shadow-lg w-full"
          />
          <div className="absolute -bottom-6 -left-6 bg-pink-600 text-white px-6 py-4 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold">10+ Years</h3>
            <p className="text-sm">Of Experience</p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a dynamic team committed to delivering cutting-edge solutions
            in technology and innovation. Our goal is to help businesses grow
            with the right digital strategies and tools.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800">Our Vision</h4>
              <p className="text-gray-600 text-sm mt-2">
                To become global leaders in technology-driven solutions.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800">Our Mission</h4>
              <p className="text-gray-600 text-sm mt-2">
                Empower businesses with innovative digital strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

