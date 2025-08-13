
import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs,
  FaFigma, FaPython
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiFramer, SiFlutter } from "react-icons/si";

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
  { title: "Industry Preparation Training Program – 2025", image: "/certificates/industry-training.jpg" },
  { title: "Foundations of UX Design", image: "/uiux.png" },
  { title: "JavaScript Essentials 1", image: "/js.png" },
  { title: "CSS Basics", image: "/css.png" },
  { title: "Certificate in Information Technology", image: "/Esoft.jpeg" },
];

const Skills = () => {
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

        {/* Achievements Smooth Marquee */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Achievements & Certificates
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee">
            {[...achievements, ...achievements].map((achievement, index) => (
              <div
                key={index}
                className="min-w-[250px] mx-3 rounded-xl overflow-hidden bg-white/10 dark:bg-gray-700/20 border border-white/20 shadow-lg"
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default Skills;
