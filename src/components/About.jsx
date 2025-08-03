import { motion } from 'framer-motion';
import profile from '../assets/ProfileAbout.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={profile}
            alt="Apz Profile"
            className="w-64 h-auto object-contain rounded-xl shadow-xl border-4 border-blue-500"
          />
        </motion.div>

        {/* Text Block */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
            Hey there! I’m Apsara — a software developer who loves clean design, responsive UI, and bringing digital ideas to life.
            <br /><br />
            Whether it's crafting beautiful interfaces or solving tricky frontend challenges, I'm all in. I have a strong passion for React, UI/UX, and everything in between.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
