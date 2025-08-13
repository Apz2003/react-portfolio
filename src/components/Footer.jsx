import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDribbble } from 'react-icons/fi';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-10 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#work" className="hover:underline">Work</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/Apz2003"><FiGithub /></a>
          <a href="www.linkedin.com/in/apsara-abeysinghe-a01641342"><FiLinkedin /></a>
          <a href="buddiniapsara2003@gmail.com"><FiMail /></a>
        
        </div>
      </div>
      <div className="text-center text-sm mt-6 text-gray-400">
        © {new Date().getFullYear()} Apsara Abeysinghe. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
