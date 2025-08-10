
import { useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/ProfileAbout.jpg";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const listItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08 }
    })
  };

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
            Currently pursuing a BSc (Hons) in Software Engineering, I enjoy blending creativity with code to craft beautiful interfaces and solve tricky frontend challenges.
            My passion lies in React development, UI/UX design, and exploring innovative ways to enhance user experiences. Beyond coding, I’m driven by curiosity, continuous learning, and the thrill of turning ideas into impactful digital products.
          </p>

          {/* View More Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            View More
          </button>
        </motion.div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-xl shadow-lg p-8 max-w-md w-full relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xl"
            >
              ✖
            </button>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              More About Me
            </h3>

            <motion.ul
              className="space-y-4 text-gray-700 dark:text-gray-300"
              initial="hidden"
              animate="visible"
            >
              {[
                { label: "Full Name", value: "A.M.B.A.K.Abeysinghe" },
                { 
                  label: "Education",
                  value: (
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li>BSc (Hons) in Software Engineering (Ongoing)</li>
                      <li>Certificate in Information Technology - Esoft Metro Campus</li>
                      <li>G.C.E A/L (2023 Math stream)</li>
                      <li>G.C.E O/L (Passed all subjects including Mathematics, Science, and English)</li>
                    </ul>
                  )
                },
                { label: "Specialization", value: "React, UI/UX Design" },
                { label: "Passion", value: "Creating user-friendly, beautiful digital products" },
                { label: "Interests", value: "Technology, design, and continuous learning" },
                { label: "Hobbies", value: "Exploring new tools, UI prototyping, Dancing" }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItemVariants}
                  custom={i}
                  className="leading-relaxed"
                >
                  <strong className="text-gray-900 dark:text-white">{item.label}:</strong>{" "}
                  {typeof item.value === "string" ? item.value : item.value}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default About;
