import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaFileDownload, FaCode, FaTools, FaUserTie } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import './App.css';


// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const projects = [
  {
    title: "Movie Ticket Booking Website",
    description: "A full-stack web application for booking movie tickets with seat selection and payment processing.",
    tech: "Java, JSP, Servlets, HTML, CSS, JavaScript, MySQL",
    image: "moviebooking.png",
    link: "#"
  },
  {
    title: "Air Quality Monitoring Website",
    description: "Air quality monitoring web application with real-time pollution data, interactive maps, and an admin dashboard for managing sensor locations and alerts.",
    tech: "HTML, CSS, JavaScript, PHP, MySQL",
    image: "Airquality.png",
    link: "#"
  },
  {
    title: "Home Service Booking App",
    description: "Mobile application for booking home services with real-time tracking and payment integration.",
    tech: "Flutter, Firebase, Google Maps API",
    image: "home.png",
    link: "#"
  },
  {
    title: "Blood Donation Management",
    description: "System connecting donors with recipients and managing blood bank inventory.",
    tech: "Flutter, Firebase, Firestore",
    image: "blood.png",
    link: "#"
  },
  {
    title: "Event Management Platform",
    description: "Mobile app for creating, discovering, and managing local events.",
    tech: "Flutter, Firebase, Geolocation",
    image: "Eve.png",
    link: "#"
  }
];

const skills = {
  frontend: [
    { name: "HTML5 & CSS3", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Responsive Design", level: 90 },
    { name: "Tailwind CSS", level: 75 }
  ],
  tools: [
    { name: "Git & GitHub", level: 80 },
    { name: "Firebase", level: 70 },
    { name: "Figma", level: 75 },
    { name: "VS Code", level: 90 },
    { name: "MySQL", level: 65 }
  ],
  soft: [
    "Problem Solving",
    "Effective Communication",
    "Team Collaboration",
    "Creative Thinking",
    "Adaptability",
    "Time Management"
  ]
};

function App() {
  return (
    <div className="app-container">
      {/* Animated Navbar */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 100,
          damping: 20
        }}
      >
        <div className="navbar-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="logo-highlight">W</span>elcome
          </motion.div>
          <motion.ul 
            className="nav-links"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.li 
                key={item} 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="about" 
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="hero-title" variants={itemVariants}>
              <span className="greeting">Hello, I'm</span>
              <span className="name">Apsara Abeysinghe</span>
            </motion.h1>
            <motion.h2 className="hero-subtitle" variants={itemVariants}>
              Frontend Developer & UI/UX Enthusiast
            </motion.h2>
            <motion.p className="hero-description" variants={itemVariants}>
              I create beautiful, functional web interfaces with a focus on user experience.
              Currently specializing in React, JavaScript, and modern frontend technologies.
            </motion.p>
            <motion.div className="hero-actions">
  {/* Download CV Button */}
  <motion.a 
    href="/Apsara_CV.pdf" 
    download="Apsara_Abeysinghe_CV.pdf"
    className="download-btn"
    whileHover={{
      y: -3,
      backgroundColor: "var(--primary-dark)"
    }}
    whileTap={{ scale: 0.98 }}
  >
    <FaFileDownload className="btn-icon" />
    Download CV
  </motion.a>

  {/* Contact Me Button */}
  <motion.a 
    href="#contact" 
    className="contact-btn"
    whileHover={{
      y: -3,
      backgroundColor: "rgba(37, 99, 235, 0.1)",
      borderColor: "var(--primary-light)"
    }}
    whileTap={{ scale: 0.98 }}
  >
    Contact Me
    <svg className="arrow-icon" viewBox="0 0 24 24">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
    </svg>
  </motion.a>
</motion.div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              delay: 0.4, 
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            <motion.div 
              className="image-wrapper"
              whileHover={{ 
                rotate: 1, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="Profile.jpg.jpg" alt="Apsara Abeysinghe" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

{/* Skills Section */}
<motion.section 
  id="skills" 
  className="skills-section"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.6 }}
>
  <div className="section-header" style={{ textAlign: 'center' }}>
    <h2 className="section-title">Skills & Expertise</h2>
    <p className="section-subtitle">Technologies I work with</p>
  </div>
  
  <div className="skills-container" style={{ textAlign: 'left' }}>
    <div className="skill-category">
      <div className="skill-icon"><FaCode /></div>
      <h3>Frontend Development</h3>
      <ul className="skills-list">
        <li>HTML5 & CSS3</li>
        <li>JavaScript </li>
        <li>React.js</li>
        <li>Responsive Design</li>
        <li>Tailwind CSS</li>
        
        
      </ul>
    </div>
    
    <div className="skill-category">
      <div className="skill-icon"><FaTools /></div>
      <h3>Tools & Platforms</h3>
      <ul className="skills-list">
        <li>Git & GitHub</li>
        <li>Firebase</li>
        <li>Figma</li>
        <li>VS Code</li>
        <li>MySQL</li>
        
        
      </ul>
    </div>
    
    <div className="skill-category">
      <div className="skill-icon"><FaUserTie /></div>
      <h3>Soft Skills</h3>
      <ul className="skills-list">
        <li>Problem Solving</li>
        <li>Effective Communication</li>
        <li>Team Collaboration</li>
        <li>Creative Thinking</li>
        <li>Adaptability</li>
        <li>Time Management</li>
      </ul>
    </div>
  </div>
</motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="projects-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Some of my recent work
          </motion.p>
        </motion.div>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              className="project-card"
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.12)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                damping: 15
              }}
            >
              <div className="project-image">
                <motion.img 
                  src={project.image || 'project-placeholder.jpg'} 
                  alt={project.title}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="tech-stack">{project.tech}</p>
                <motion.a 
                  href={project.link}
                  className="project-link"
                  whileHover={{ 
                    x: 5,
                    color: "var(--primary-light)"
                  }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="contact-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Let's work together
          </motion.p>
        </motion.div>
        <motion.div 
          className="contact-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon-wrapper">
                <FaEnvelope className="contact-icon" />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:buddiniapsara2003@gmail.com">buddiniapsara2003@gmail.com</a>
              </div>
            </motion.div>
            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon-wrapper">
                <FaPhone className="contact-icon" />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+94718519298">+94 71 851 9298</a>
              </div>
            </motion.div>
            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon-wrapper">
                <FaGithub className="contact-icon" />
              </div>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/Apz2003" target="_blank" rel="noreferrer">github.com/Apz2003</a>
              </div>
            </motion.div>
            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon-wrapper">
                <FaLinkedin className="contact-icon" />
              </div>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/apsara-abeysinghe-a01641342" target="_blank" rel="noreferrer">linkedin.com/in/apsara-abeysinghe</a>
              </div>
            </motion.div>
          </motion.div>
          <motion.form 
            className="contact-form"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="btn-primary"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(37, 99, 235, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          © {new Date().getFullYear()} Apsara Abeysinghe. All rights reserved.
        </motion.p>
        <motion.div 
          className="social-links"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://github.com/Apz2003" 
            target="_blank" 
            rel="noreferrer"
            variants={itemVariants}
            whileHover={{ 
              y: -3, 
              scale: 1.1,
              backgroundColor: "var(--primary)"
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/apsara-abeysinghe-a01641342" 
            target="_blank" 
            rel="noreferrer"
            variants={itemVariants}
            whileHover={{ 
              y: -3, 
              scale: 1.1,
              backgroundColor: "var(--primary)"
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </motion.footer>
    </div>
  );
}

export default App;