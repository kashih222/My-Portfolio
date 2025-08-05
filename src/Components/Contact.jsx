import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm text-white">Connect With Me</p>
        <h2 className="text-4xl font-bold mb-2 text-white">Get In Touch</h2>
        <p className="text-white max-w-lg mx-auto">
          I'd love to hear from you! If you have any questions, comments, or
          feedback, please fill the form below
        </p>
      </div>

      {/* Form */}
      <form className="w-full max-w-2xl space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full text-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full text-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Enter your message"
          rows="5"
          className="w-full text-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
        ></textarea>

        {/* Button */}
          <div>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          whileHover={{
            scale: 0.95, // scale down slightly
            boxShadow: "0 0 10px #ff00ff, 0 0 15px #ff00ff", // neon pink glow
            borderColor: "#ff00ff", // neon border
            color: "#ff00ff", // neon text
          }}
          href="https://github.com/kashih222"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 mx-auto  dark:text-white dark:border-white duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit Now →
        </motion.a>
      </div>
      </form>
    </section>
  );
};

export default Contact;
