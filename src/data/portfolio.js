import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";

export const portfolioData = {
  personal: {
    name: "Geisha Lutfan Waldhani", // Ganti dengan nama Anda
    title: "Fullstack Developer",
    email: "gesavlop@gmail.com", // Ganti dengan email Anda
    phone: "+62 822 4127 9426", // Ganti dengan nomor Anda
    location: "Purwokerto, Banyumas", // Ganti dengan lokasi Anda
    bio: "Passionate frontend developer with 2+ years of experience in creating modern, responsive web applications. I love turning ideas into beautiful, functional websites.",
  },
  skills: [
    { name: "React", icon: FaReact, level: 85 },
    { name: "JavaScript", icon: FaJs, level: 90 },
    { name: "HTML5", icon: FaHtml5, level: 95 },
    { name: "CSS3", icon: FaCss3Alt, level: 90 },
    { name: "Node.js", icon: FaNodeJs, level: 70 },
    { name: "Git", icon: FaGit, level: 80 },
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard built with React and Tailwind CSS featuring real-time analytics and inventory management.",
      image:
        "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=E-Commerce+Dashboard",
      technologies: ["React", "Tailwind", "Chart.js"],
      github: "https://github.com/yourusername/ecommerce-dashboard",
      demo: "https://your-demo-link.com",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "Responsive weather application with geolocation and 7-day forecast using OpenWeather API.",
      image:
        "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Weather+App",
      technologies: ["React", "API", "CSS3"],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://your-demo-link.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Productivity app with drag-and-drop functionality and local storage integration.",
      image:
        "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Task+Manager",
      technologies: ["React", "DnD", "LocalStorage"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://your-demo-link.com",
    },
  ],
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};
