import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            className="text-5xl md:text-6xl font-black text-white mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h2>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="group relative"
            >
              <motion.div
                className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Skill Icon and Name */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg mr-4"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <skill.icon className="text-2xl text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Skill Level Bar */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        Proficiency
                      </span>
                      <span className="text-purple-300 font-bold text-lg">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="relative">
                      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        >
                          {/* Animated Shine Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Skill Level Indicator */}
                      <motion.div
                        className="absolute -top-8 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-semibold"
                        style={{ left: `${skill.level}%` }}
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 1.5, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.div>
                    </div>
                  </div>

                  {/* Skill Description/Tags */}
                  <motion.div
                    className="mt-6 space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {["Expert", "Professional", "Intermediate", "Beginner"][
                        Math.floor((100 - skill.level) / 25)
                      ] && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            skill.level >= 90
                              ? "bg-green-500/20 text-green-300 border border-green-500/30"
                              : skill.level >= 70
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : skill.level >= 50
                              ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                              : "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                          }`}
                        >
                          {skill.level >= 90
                            ? "Expert"
                            : skill.level >= 70
                            ? "Professional"
                            : skill.level >= 50
                            ? "Intermediate"
                            : "Beginner"}
                        </span>
                      )}
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold border border-purple-500/30">
                        {skill.level >= 80
                          ? "2+ Years"
                          : skill.level >= 60
                          ? "1+ Years"
                          : "< 1 Year"}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 border-2 border-purple-400/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-6 h-6 border-2 border-pink-400/30 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-300 text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Always learning and growing in the ever-evolving world of technology
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            See My Work
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
