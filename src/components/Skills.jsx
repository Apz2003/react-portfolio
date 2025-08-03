import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaFigma, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiFramer, SiFlutter } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-500' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-600' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-600' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
  { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-400' },
  { name: 'Flutter', icon: <SiFlutter />, color: 'text-blue-400' },
  { name: 'Figma', icon: <FaFigma />, color: 'text-pink-500' },
  { name: 'Framer Motion', icon: <SiFramer />, color: 'text-purple-500' },
  { name: 'Python', icon: <FaPython />, color: 'text-yellow-600' },
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
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Tools</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">Technologies I work with</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
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
      </div>
    </motion.section>
  );
};

export default Skills;
