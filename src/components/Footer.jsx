import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaRocket,
  FaCode,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { portfolioData } from "../data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: portfolioData.social.github,
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: FaLinkedin,
      href: portfolioData.social.linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaTwitter,
      href: portfolioData.social.twitter,
      label: "Twitter",
      color: "hover:text-blue-300",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-4"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCode className="text-white text-xl" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {portfolioData.personal.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {portfolioData.personal.title}
                </p>
              </div>
            </motion.div>

            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Passionate about creating exceptional digital experiences through
              innovative design and cutting-edge technology. Let's build
              something amazing together.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                className="flex items-center text-gray-300"
                whileHover={{ x: 5, color: "#e5e7eb" }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="text-indigo-400 mr-3" size={16} />
                <span className="text-sm">{portfolioData.personal.email}</span>
              </motion.div>
              <motion.div
                className="flex items-center text-gray-300"
                whileHover={{ x: 5, color: "#e5e7eb" }}
                transition={{ duration: 0.2 }}
              >
                <FaPhone className="text-green-400 mr-3" size={16} />
                <span className="text-sm">{portfolioData.personal.phone}</span>
              </motion.div>
              <motion.div
                className="flex items-center text-gray-300"
                whileHover={{ x: 5, color: "#e5e7eb" }}
                transition={{ duration: 0.2 }}
              >
                <FaMapMarkerAlt className="text-red-400 mr-3" size={16} />
                <span className="text-sm">
                  {portfolioData.personal.location}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-indigo-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Connect</h4>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-gray-600`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-3">Built with</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind", "Framer Motion"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium border border-gray-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp size={14} />
              <span className="text-sm font-medium">Back to Top</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex items-center text-gray-400 mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>
                © {currentYear} {portfolioData.personal.name}. All rights
                reserved.
              </span>
            </motion.div>

            <motion.div
              className="flex items-center text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="mr-2">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaHeart className="text-red-500 mx-1" size={16} />
              </motion.div>
              <span className="ml-2">and</span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-2"
              >
                <FaRocket className="text-indigo-400" size={16} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                label: "Projects Completed",
                value: "50+",
                color: "text-green-400",
              },
              { label: "Happy Clients", value: "30+", color: "text-blue-400" },
              {
                label: "Lines of Code",
                value: "10K+",
                color: "text-purple-400",
              },
              { label: "Coffee Cups", value: "∞", color: "text-orange-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`text-2xl font-bold ${stat.color} mb-1`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.8,
                    type: "spring",
                    bounce: 0.6,
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
