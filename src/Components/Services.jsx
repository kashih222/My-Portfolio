import React from "react";
import { FaGlobe, FaDatabase, FaCodeBranch, FaPlug } from "react-icons/fa";
import { motion } from "motion/react";

const services = [
  {
    icon: <FaGlobe className="text-blue-500/70 text-4xl" />,
    title: "Web design",
    description:
      "Web design is the process of planning, conceptualizing, and arranging content online. It combines aesthetics with functionality and better UI.",
  },
  {
    icon: <FaDatabase className="text-orange-500 text-4xl" />,
    title: "Backend Development",
    description:
      "Backend development focuses on server-side logic, databases, and APIs to ensure seamless communication between the frontend and the server.",
  },
  {
    icon: <FaCodeBranch className="text-red-500 text-4xl" />,
    title: "Version Control",
    description:
      "Version control is the practice of tracking and managing changes to code. It enables multiple developers to collaborate and maintain history.",
  },
  {
    icon: <FaPlug className="text-pink-950 text-4xl" />,
    title: "API Integration",
    description:
      "API integration enables applications to connect with external systems, exchange data, and extend functionality efficiently.",
  },
];

export default function Services() {
  return (
    <motion.section
      className="text-white py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          className="text-sm text-white"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          What I offer
        </motion.p>
        <motion.h2
          className="text-4xl font-bold mt-2 mb-4"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          My Services
        </motion.h2>
        <motion.p
          className="text-white max-w-4xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          I am a MERN stack developer from Lahore, Pakistan with 1 year of
          experience of my Final Year Project{" "}
          <span className="font-bold">
            ( Plants Nursary Management & Plants Recognitin System )
          </span>{" "}
          and some More cloning projects.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border border-white rounded-lg p-6 text-left 
                  
                 transition-all duration-400 transform 
                 hover:shadow-[8px_8px_20px_rgba(236,72,153,0.5)] 
                 hover:shadow-blue-500/30
                 hover:brightness-110
                 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-20 bg-gradient-to-br from-pink-500 via-transparent to-purple-500 pointer-events-none transition-all duration-300"></div>

              <div className="mb-4 relative z-10">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 relative z-10">
                {service.title}
              </h3>
              <p className="text-white text-sm mb-4 relative z-10">
                {service.description}
              </p>
              <a
                href="#"
                className="text-white text-sm font-medium flex items-center gap-1 hover:underline relative z-10"
              >
                Read more →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
