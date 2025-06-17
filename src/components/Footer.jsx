import React from "react";
import { portfolioData } from "../data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {currentYear} {portfolioData.personal.name}. All rights reserved.
        </p>
        <p className="text-gray-400 mt-2">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
