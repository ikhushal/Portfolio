import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section id="contact" className="text-white text-center py-12">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
        Contact Me
      </h2>
      
      <div className="flex flex-col items-center space-y-4">
        {/* Email */}
        <div className="flex items-center space-x-3">
          <EnvelopeIcon className="h-6 w-6 text-red-500" />
          <a href="mailto:your-email@example.com" className="text-lg text-white hover:text-orange-500 transition duration-300">
            kkhushal83@gmail.com
          </a>
        </div>

        {/* Phone Number */}
        <div className="flex items-center space-x-3">
          <PhoneIcon className="h-6 w-6 text-red-500" />
          <a href="tel:+923078168866" className="text-lg text-white hover:text-orange-500 transition duration-300">
            +923078168866
          </a>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-3">
          <MapPinIcon className="h-6 w-6 text-red-500" />
          <p className="text-lg text-white">Islamabad, Pakistan</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;