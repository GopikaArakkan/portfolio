'use client';

import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden"
    >

      {/* LEFT SECTION */}
      <div className="z-40 xl:mb-0 mb-[20%]">

        {/* NAME ONLY */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.2,
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10"
        >
          Hi, I'am Gopika<br/> Full Stack Developer<br/>
          Welcome to my Portfolio!
        </motion.h1>

        {/* DOWNLOAD RESUME BUTTON */}
        <motion.a
          href="files/GopikaAcv.pdf"
          download
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 20,
            delay: 1.8,
          }}
          className="inline-block px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold tracking-wide shadow-lg"
        >
          Download Resume
        </motion.a>

      </div>

      {/* RIGHT SECTION (UNCHANGED) */}
      <Spline
        className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
        scene="https://prod.spline.design/JDdt49usoxHMM4X0/scene.splinecode"
      />

    </section>
  );
};

export default HeroSection;
