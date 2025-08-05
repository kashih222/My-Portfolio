import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import greenPot from "../assets/Green pot Nursary Home.png";
import Belugas from "../assets/Belugas web Home.png";
import FoodPanda from "../assets/FoodPanda.png";
import Amazon from "../assets/Amazon Home.png";
import { motion, scale } from "motion/react";

const projects = [
  {
    title: "Pot-Green-Nursary",
    tech: "MERN Stack",
    image: greenPot,
    link: "https://github.com/kashih222/Pot-Green-Nursery-Management-System-Plants-Recognition",
  },
  {
    title: "BELUGAS NFT",
    tech: "HTML, CSS, JS",
    image: Belugas,
    link: "https://cerulean-macaron-cd587f.netlify.app/"
  },
  {
    title: "Amazone Clone",
    tech: "HTML, CSS,",
    image: FoodPanda,
  },
  {
    title: "AI Chatbot",
    tech: "AI Chatting",
    image: Amazon,
  },
];

const Work = () => {
  return (
    <motion.section
      className="py-16 text-white text-center px-8"
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="text-lg font-medium mb-2"
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Portfolio
      </motion.h3>
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Latest Work
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-white mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in full stack development.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-0 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden group shadow-lg hover:scale-105 transition-all duration-300 bg-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-top-left"
            />
            {/* Overlay */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white text-black p-4 flex justify-between items-center">
              <div>
                <h4 className="font-bold">{project.title}</h4>
                <p className="text-sm text-gray-600">{project.tech}</p>
              </div>
              <div className="bg-black text-white p-2 rounded-full group-hover:bg-pink-500 transition-colors duration-300">
                <a href={project.link}><FaArrowRight /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          whileHover={{
            scale: 0.95, // scale down slightly
            boxShadow: "0 0 10px #ff00ff, 0 0 15px #ff00ff", 
            borderColor: "#ff00ff",
            color: "#ff00ff",
          }}
          href="https://github.com/kashih222"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 mx-auto my-20 dark:text-white dark:border-white duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show more
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Work;
