import React, { useState } from "react";
import profileImg from "../assets/mKashaf.png";
// Import tool images
import cssImg from "../assets/CSS3.png";
import githubImg from "../assets/GitHub.png";
import htmlImg from "../assets/HTML5.png";
import jsImg from "../assets/JavaScript.png";
import mongodbImg from "../assets/MongoDB.png";
import nodeImg from "../assets/Node.js.png";
import reactImg from "../assets/React.png";
import vsCodeImg from "../assets/Visual Studio Code (VS Code).png";
import { motion } from "motion/react";

import { Code, GraduationCap, Briefcase } from "lucide-react";

const AboutMe = () => {
  // State to track which card is clicked
  const [activeCard, setActiveCard] = useState(null);

  // Function to handle card click
  const handleCardClick = (cardIndex) => {
    setActiveCard(cardIndex === activeCard ? null : cardIndex);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center pt-32 gap-y-8 lg:gap-y-0 lg:gap-x-16 py-8">
      {/* Profile Image */}
      <motion.div
        className="flex-shrink-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-[270px] h-[350px] object-cover rounded-3xl shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex-1 flex flex-col items-center lg:items-start gap-4 max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* tittle */}
        <motion.h1
          className="text-white text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          About Me
        </motion.h1>
        {/* Headline / Summary */}
        <p className="text-white text-sm text-center lg:text-left ">
          Passionate and detail-oriented Web Developer with a solid foundation
          in front-end and backend technologies, including HTML, CSS,
          JavaScript, Bootstrap, React, Node.js, and MongoDB. Gained hands-on
          experience through academic projects and certified courses from NAVTTC
          and Codex Society. Successfully developed a full-stack Plant Nursery
          Management & Plant Recognition System as a final year project,
          integrating MERN stack and Flask-based AI image classification. Strong
          problem-solving skills, eager to contribute to innovative web
          applications and grow within a dynamic development team.
        </p>

        {/* Info Cards */}
        <motion.div
          className="w-full flex flex-col md:flex-row gap-6 justify-center lg:justify-start px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Languages */}
          <div
            className={`flex-1 border border-white/40 rounded-xl p-6 flex flex-col items-center min-w-[180px] 
              ${
                activeCard === 0
                  ? "scale-95 transition-all duration-300"
                  : "transition-all duration-300"
              } 
              cursor-pointer bg-green-900/5 hover:shadow-[0_0_15px_rgba(219,39,119,0.5)] hover:border-green-500 

              hover:bg-gradient-to-br hover:from-transparent hover:to-green-900/10`}
            onClick={() => handleCardClick(0)}
          >
            <Code
              size={36}
              className={`mb-2 text-white ${
                activeCard === 0 ? "scale-90" : ""
              } transition-all duration-300`}
            />
            <h3 className="text-white font-bold text-lg mb-1">Languages</h3>
            <p className="text-white/80 text-sm text-center">
              HTML, CSS, Tailwind CSS, JavaScript
              <br />
              MERN Stack
            </p>
          </div>

          {/* Education */}
          <div
            className={`flex-1 border border-white/40 rounded-xl p-6 flex flex-col items-center min-w-[180px] 
              ${
                activeCard === 1
                  ? "scale-95 transition-all duration-300"
                  : "transition-all duration-300"
              } 
              cursor-pointer bg-white/5 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:border-purple-500 
              hover:bg-gradient-to-br hover:from-transparent hover:to-purple-500/10`}
            onClick={() => handleCardClick(1)}
          >
            <GraduationCap
              size={36}
              className={`mb-2 text-white ${
                activeCard === 1 ? "scale-90" : ""
              } transition-all duration-300`}
            />
            <h3 className="text-white font-bold text-lg mb-1">Education</h3>
            <p className="text-white/80 text-sm text-center">
              Bachelors in Information Technology
            </p>
          </div>

          {/* Projects */}
          <div
            className={`flex-1 border border-white/40 rounded-xl p-6 flex flex-col items-center min-w-[180px] 
              ${
                activeCard === 2
                  ? "scale-95 transition-all duration-300"
                  : "transition-all duration-300"
              } 
              cursor-pointer bg-white/5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500 
              hover:bg-gradient-to-br hover:from-transparent hover:to-blue-500/10`}
            onClick={() => handleCardClick(2)}
          >
            <Briefcase
              size={36}
              className={`mb-2 text-white ${
                activeCard === 2 ? "scale-90" : ""
              } transition-all duration-300`}
            />
            <h3 className="text-white font-bold text-lg mb-1">Projects</h3>
            <p className="text-white/80 text-sm text-center">
              Built more than 5 projects
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full mt-2 px-8 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.h4
            className="text-white font-semibold mb-3"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Tools I use
          </motion.h4>
          <motion.div
            className="flex flex-wrap md:flex-row gap-4 items-center justify-center cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.img
              src={htmlImg}
              alt="HTML5"
              className="w-12 h-12"
              whileHover={{ scale: 1.3 }}
            />
            <motion.img
              src={cssImg}
              alt="CSS3"
              className="w-12 h-12"
              whileHover={{ scale: 1.3 }}
            />
            <motion.img
              src={jsImg}
              alt="JavaScript"
              className="w-12 h-12"
              whileHover={{ scale: 1.3 }}
            />
            <motion.img
              src={reactImg}
              alt="React"
              className="w-12 h-12"
              whileHover={{ scale: 1.3 }}
            />
            <motion.img
              src={nodeImg}
              alt="Node.js"
              className="w-12 h-12"
              whileHover={{ scale: 1.3 }}
            />
            <motion.img
              src={mongodbImg}
              alt="MongoDB"
              className="w-12 h-12"
              whileHover={{ scale: 1.3 }}
            />
            <motion.img
              src={githubImg}
              alt="GitHub"
              className="w-12 h-12"
              whileHover={{ scale: 1.3 }}
            />
            <motion.img
              src={vsCodeImg}
              alt="VS Code"
              className="w-12 h-12"
              whileHover={{ scale: 1.3 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
