import React, { useState } from "react";
import image from "../assets/mkashaf.png";
import { Mail } from "lucide-react";
import { motion } from 'motion/react'

const Home = () => {
  const [isContacting, setIsContacting] = useState(false);

  const handleContactClick = () => {
    setIsContacting(true);
    setTimeout(() => setIsContacting(false), 1000);
    // Add your contact logic here if needed
  };

  // Gradient border classes
  const gradientBorder =
    "group relative p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] transition-all duration-300 hover:from-blue-500 hover:via-pink-500 hover:to-purple-500";
  const buttonInner =
    "flex items-center justify-center font-bold text-xl md:text-2xl bg-green-100/10 rounded-full px-6 py-2 text-white w-full h-full";

  return (
    <motion.div className="flex flex-col items-center h-screen"
     initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-center pt-28  mb-6">
        <motion.div className="relative group"
         initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
        >
          <motion.div className="glow-ring absolute inset-0 rounded-full animate-glow z-0"
           initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
          ></motion.div>
          <img
            src={image}
            alt="image_kashaf"
            className="w-[280px] rounded-full relative z-10"
          />
        </motion.div>
      </div>

      <div className="">
        <div className="text-center ">
          <div className="text-white flex flex-col items-center gap-4">
            <motion.h1 className="text-4xl font-bold"
             initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >Hi! I'm Muhammad Kashaf</motion.h1>
            <motion.p className=" sm:text-[15px] md:text-[18px] lg:text-[20px]"
              initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
            >
              I'm a Mern Stack Developer with a passion for building web
              applications. I'm a quick learner and I'm always looking to
              improve my skills.
            </motion.p>
          </div>
        </div>
      </div>

     <div className="mt-8">
        <div className={gradientBorder}>
          <button onClick={handleContactClick} className={buttonInner}>
            Contact Me
            <Mail className={`inline ml-2 transition-transform ${isContacting ? 'animate-spin' : ''}`} size={24} />
          </button>
        </div>
      </div>

    </motion.div>
  );
};

export default Home;
