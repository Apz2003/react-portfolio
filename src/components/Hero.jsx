import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiFigma,
  SiGithub,
  SiFirebase,
} from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter'; // 🆕 Typewriter import

const techIcons = [
  { icon: <SiReact size={24} />, angle: 0 },
  { icon: <SiTailwindcss size={24} />, angle: 60 },
  { icon: <SiJavascript size={24} />, angle: 120 },
  { icon: <SiFigma size={24} />, angle: 180 },
  { icon: <SiGithub size={24} />, angle: 240 },
  { icon: <SiFirebase size={24} />, angle: 300 },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 overflow-hidden"
    >
      {/* Orbiting Icons around the hero content */}
      <motion.div
        className="absolute w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        {techIcons.map(({ icon, angle }, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${angle}deg) translate(300px) rotate(-${angle}deg)`,
            }}
          >
            <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow text-blue-600 dark:text-blue-400">
              {icon}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Hero Content Centered */}
      <div className="z-10 text-center max-w-xl px-4">
        {/* Profile Image */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-700 shadow-2xl">
          <img
            src="/your-Photo.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name with Typewriter */}
        <motion.h1
          className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-3"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm{' '}
          <span className="text-blue-600 dark:text-blue-400">
            <Typewriter
              words={['Apsara Abeysinghe']}
             
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm a passionate UI/UX Designer and Frontend Developer focused on creating beautiful and user-friendly digital experiences.
        </motion.p>

        {/* Download Button */}
        <motion.a
          href="/APSARA ABEYSINGHE.pdf"
          download
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-medium transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV <FaArrowDown className="ml-2" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
