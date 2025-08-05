import React from "react";
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-2 px-4 sm:px-6 lg:px-8 border-t-2 border-white bg-white/10 bottom-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left section */}
        <div className="flex flex-col mb-4 md:mb-0">
          <p className="text-2xl text-white font-medium">KASHAF。</p>
          <p className="text-white">kashafmhr222@gmail.com</p>
        </div>
        
        {/* Right section */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-sm text-white mb-2">© 2025 Muhammad Kashaf. All rights reserved.</p>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/kashih222" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors"
            >
              <Github />
            </a>
            <a 
              href="https://www.linkedin.com/in/kashafmhr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors"
            >
              <Linkedin />
            </a>
            <a 
              href="https://www.instagram.com/kshihmehr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;