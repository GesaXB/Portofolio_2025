import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Discover my journey and passion for creating digital experiences
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <img
                  src="https://via.placeholder.com/600x500/10B981/FFFFFF?text=About+Me"
                  alt="About me"
                  className="rounded-2xl w-full h-auto shadow-lg"
                />
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-white font-bold text-xl">🚀</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-white font-bold">💡</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <motion.div
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed font-light"
              >
                I'm a passionate frontend developer based in{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {portfolioData.personal.location}
                </span>
                . I love creating beautiful, functional, and user-friendly websites and applications that make a difference.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed font-light"
              >
                My journey in web development started 2 years ago, and since then I've been constantly learning and improving my skills. I'm always excited to take on new challenges and create amazing digital experiences that users love.
              </motion.p>
            </motion.div>

            {/* Stats/Info Cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                </div>
                <p className="text-gray-600 font-medium">{portfolioData.personal.email}</p>
              </motion.div>
              
              <motion.div
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                </div>
                <p className="text-gray-600 font-medium">{portfolioData.personal.phone}</p>
              </motion.div>
            </motion.div>

            {/* Achievement badges */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8"
            >
              {["2+ Years Experience", "50+ Projects", "Happy Clients"].map((badge, index) => (
                <motion.div
                  key={badge}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-200"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {badge}
                </motion.div>
              ))}
            </motion.div>

            {/* Call to action */}
            <motion.div
              variants={itemVariants}
              className="pt-6"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;