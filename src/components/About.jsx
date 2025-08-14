
import { useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/ProfileAbout.jpg";
import profileBack from "../assets/AA.jpeg";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image Flip Card */}
        <div
          className="relative w-64 h-80 cursor-pointer"
          onClick={() => setFlipped(!flipped)}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 rounded-xl shadow-xl border-4 border-blue-500"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={profile}
                alt="Profile Front"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 rounded-xl shadow-xl border-4 border-blue-500"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <img
                src={profileBack}
                alt="Profile Back"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>

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
            Hey there! I’m Apsara — a software developer who loves clean design,
            responsive UI, and bringing digital ideas to life.
            <br />
            <br />
            Currently pursuing a BSc (Hons) in Software Engineering, I enjoy blending creativity with code to craft beautiful interfaces and solve tricky frontend challenges. My passion lies in React development, UI/UX design, and exploring innovative ways to enhance user experiences. Beyond coding, I’m driven by curiosity, continuous learning, and the thrill of turning ideas into impactful digital products.
          </p>

        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
