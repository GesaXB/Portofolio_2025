import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://via.placeholder.com/500x400/10B981/FFFFFF?text=About+Me"
              alt="About me"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate frontend developer based in{" "}
              {portfolioData.personal.location}. I love creating beautiful,
              functional, and user-friendly websites and applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in web development started 2 years ago, and since then
              I've been constantly learning and improving my skills. I'm always
              excited to take on new challenges and create amazing digital
              experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                <p className="text-gray-600">{portfolioData.personal.email}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                <p className="text-gray-600">{portfolioData.personal.phone}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
