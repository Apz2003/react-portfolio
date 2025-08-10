
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Movie Ticket Booking Website",
    description: "An online learning platform with interactive courses and progress tracking.",
    tags: ["UI/UX Design", "Java", "Servlets"],
    image: "/moviebooking.png",
    links: {
      code: "https://github.com/Gawesh2001/SEproject"
    }
  },
  {
    id: 2,
    title: "Event Management Platform",
    description: "Machine learning application for image recognition and classification.",
    tags: ["Flutter", "Firebase"],
    image: "/Eve.png",
    links: {
      live: "https://www.figma.com/proto/Anz9nwppdsvuh5igSqeOiU/Social-Event-Plan-App?node-id=0-1&t=AurKOsLIT9nWS4Ue-1",
      code: "https://github.com/Gawesh2001/Eventory"
    }
  },
  {
    id: 3,
    title: "Blood Donation Management System",
    description: "Mobile application connecting yoga practitioners with instructors.",
    tags: ["C#", "MySQL"],
    image: "/blood.png"
  },
  {
    id: 4,
    title: "Home Service Booking App",
    description: "An online learning platform with interactive courses and progress tracking.",
    tags: ["UI/UX Design", "Flutter", "Firebase"],
    image: "/home.png",
    links: {
      live: "https://www.figma.com/design/UajSyNKiGB49jFdCUSsXM2/Home-Service-Booking-App?node-id=0-1&t=aFLbucALkfYLPdwp-1",
      code: "https://github.com/Gawesh2001/MobileProject"
    }
  },
  {
    id: 5,
    title: "University Communication Platform",
    description: "Mobile application connecting yoga practitioners with instructors.",
    tags: ["React", "GSAP", "Firebase"],
    image: "/yoga.png",
    links: {
      live: "#",
      code: "https://github.com/Gawesh2001/UNIapp-WEB"
    }
  },
  {
    id: 6,
    title: "Air Quality Monitoring Website",
    description: "Machine learning application for image recognition and classification.",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    image: "/Airquality.png",
    links: {
      code: "https://github.com/Gawesh2001/SDTP-Project"
    }
  }
];

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <div className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 mx-4 md:mx-0 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-600 dark:text-gray-300 hover:text-red-500"
        >
          <FiX />
        </button>

        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:w-[60%] rounded-lg object-cover max-h-[500px]"
          />

          <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
              {project.title}
            </h3>
            <p className="text-md text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-2 flex-wrap">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
              {project.links?.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <FiGithub /> View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      id="work"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Selected Work
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Projects I've worked on</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
