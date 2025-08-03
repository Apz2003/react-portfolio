import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 px-6 pt-28">
     <motion.div
  className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 via-cyan-300/10 to-indigo-500/20 backdrop-blur-lg shadow-2xl ring-4 ring-white/10"
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
  <img
    src="/your-photo.jpg"
    alt="Profile"
    className="w-full h-full object-cover rounded-full mix-blend-luminosity"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent mix-blend-overlay rounded-full" />
</motion.div>


      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-3"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm A.M.B.A.K. Abeysinghe
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm a passionate UI/UX Designer and Frontend Developer focused on creating beautiful and user-friendly digital experiences.
      </motion.p>

      <motion.a
        href="/Abeysinghe UIUX.pdf" // ✅ Ensure this file is in the public folder
        download
        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-medium transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download CV <FaArrowDown className="ml-2" />
      </motion.a>
    </section>
  );
};

export default Hero;
