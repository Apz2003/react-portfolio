
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaFigma,
  FaPython,
  FaAward,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiFramer,
  SiFlutter,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
  { name: "Flutter", icon: <SiFlutter />, color: "text-blue-400" },
  { name: "Figma", icon: <FaFigma />, color: "text-pink-500" },
  { name: "Framer Motion", icon: <SiFramer />, color: "text-purple-500" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-600" },
];

const achievements = [
  {
    title: "Industry Preparation Training Program – 2025",
    description: "Completed program covering UI/UX, AI, cloud computing, and more.",
    date: "Aug 2025",
    image: "/certificates/industry-training.jpg",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    description: "Learned UX design principles and practices.",
    date: "May 2025",
    image: "/uiux.png",
  },
  {
    title: "JavaScript Essentials 1",
    description: "Fundamentals of JavaScript.",
    date: "2025",
    image: "/js.png",
  },
  {
    title: "CSS Basics",
    description: "Introduction to CSS for styling web pages.",
    date: "2025",
    image: "/css.png",
  },
  {
    title: "Certificate in information technology",
    description: "Fundamentals of information technology.",
    date: "2023",
    image: "/html.png",
  },
];

const Skills = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.section
      id="skills"
      className="py-20 px-6 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Skills Section */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & Tools
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Technologies I work with
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`text-4xl mb-2 ${skill.color} group-hover:scale-110 transition-transform`}
              >
                {skill.icon}
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Achievements & Certificates
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Recognitions and milestones in my learning journey
        </p>

        {/* Horizontal Scroll */}
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedImage(achievement.image)}
              className="min-w-[250px] cursor-pointer rounded-xl overflow-hidden 
                 bg-white/10 dark:bg-gray-700/20 backdrop-blur-md border border-white/20 
                 shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="text-3xl text-yellow-500 mb-3">
                <FaAward />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {achievement.description}
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-500">
                {achievement.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
            <img
              src={selectedImage}
              alt="Certificate"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Skills;
