"use client";
import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Function to close the mobile menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const menuLinks = (
    <motion.ul className="flex flex-col md:flex-row md:gap-10 gap-6 text-xl font-semibold md:text-inherit text-white"
    initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
    >
      <motion.li className="relative group"
      whileHover={{ scale: 1.05 }}
      >
        <a
          href="#"
          onClick={handleLinkClick}
          className="inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#23424E] after:transition-all after:duration-300 group-hover:after:w-full"
        >
          Home
        </a>
      </motion.li>
      <motion.li className="relative group"
      whileHover={{ scale: 1.05 }}
      >
        <a
          href="#"
          onClick={handleLinkClick}
          className="inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#23424E] after:transition-all after:duration-300 group-hover:after:w-full"
        >
          About Me
        </a>
      </motion.li>
      <motion.li className="relative group"
      whileHover={{ scale: 1.05 }}
      >
        <a
          href="#"
          onClick={handleLinkClick}
          className="inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#23424E] after:transition-all after:duration-300 group-hover:after:w-full"
        >
          Services
        </a>
      </motion.li>
      <motion.li className="relative group"
      whileHover={{ scale: 1.05 }}
      >
        <a
          href="#"
          onClick={handleLinkClick}
          className="inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#23424E] after:transition-all after:duration-300 group-hover:after:w-full"
        >
          My Work
        </a>
      </motion.li>
      <motion.li className="relative group"
      whileHover={{ scale: 1.05 }}
      >
        <a
          href="#"
          onClick={handleLinkClick}
          className="inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#23424E] after:transition-all after:duration-300 group-hover:after:w-full"
        >
          Contact Me
        </a>
      </motion.li>
      <motion.li className="md:hidden"
      whileHover={{ scale: 1.05 }}>
        <button 
          onClick={handleLinkClick}
          className="font-bold text-xl flex items-center justify-center"
        >
          Resume
          <Download className="inline ml-2" size={20} />
        </button>
      </motion.li>
    </motion.ul>
  );

  return (
    <div className="w-full fixed top-0 z-50">
      <nav className={`flex items-center justify-between px-8 py-3 text-white border-b-2 border-gray-300 transition-all duration-300 ${scrolled ? 'bg-white/10 backdrop-blur-md' : 'bg-green-100/10'}`}>
        <div className="flex items-center">
          <motion.p
            className="font-bold text-3xl cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            KASHAF
          </motion.p>
          <span className="text-[#23424E] font-bold text-5xl">.</span>
        </div>
        {/* Desktop Menu */}
        <div
  className={`px-14 py-3 border-3 border-[#5f1f1d] rounded-full hidden md:block shadow-neon neon-animate ${
    scrolled ? 'bg-transparent' : 'bg-white/20'
  }`}
>
  {menuLinks}
</div>

        <div className="hidden md:flex items-center gap-4">
          <motion.button className="font-bold text-2xl flex items-center justify-center"
           whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            Resume
            <Download className="inline ml-2" size={25} />
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
        
      </nav>
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-8 py-4 w-full absolute top-[100%] left-0 z-40 border-b-2 border-gray-200 bg-white/20 backdrop-blur-md">
          {menuLinks}
        </div>
      )}
    </div>
  );
};

export default Navbar;