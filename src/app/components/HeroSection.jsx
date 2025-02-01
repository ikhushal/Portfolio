"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 relative flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Khushal Khan",
                1000,
                "Computer Engineer",
                1000,
                "Data Engineer",
                1000,
                "Data Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Data whisperer by day, bug hunter by night.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 text-white 
              transition duration-300 hover:shadow-[0_0_20px_rgba(94,114,228,0.8)] hover:scale-105"
            >
              Hire Me
            </Link>
            <Link
              href="/cv.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 text-white mt-3 
              transition duration-300 hover:shadow-[0_0_20px_rgba(94,114,228,0.8)] hover:scale-105"
            >
              <span className="block bg-[#121212] rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

      

      {/* Image with Glow Effect */}
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 relative"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            {/* Glowing Background */}
            <div className="absolute w-full h-full rounded-full animate-pulse
              before:content-[''] before:absolute before:w-[120%] before:h-[120%]
              before:rounded-full before:bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500
              before:blur-3xl before:opacity-50 before:z-[-1]"
            ></div>

            {/* Profile Image */}
            <div className="relative w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full"
              width={900}
              height={900}
            />
          </div>
          </div>
        </motion.div>      
        
      </div>
    </section>
  );
};

export default HeroSection;