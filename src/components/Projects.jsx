import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Siksha & Diksha Platform',
      description: 'Educational platform built for Yuva Chetna Samiti with quiz functionality and payment integration.',
      longDescription: 'A comprehensive educational platform featuring interactive quizzes, user authentication with JWT, Razorpay payment gateway integration, and real-time email notifications using Nodemailer. Built with MERN stack and deployed on Vercel.',
      image: '/projects/siksha-diksha.jpg',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Razorpay', 'Express'],
      liveUrl: 'https://siksha-diksha.vercel.app',
      githubUrl: 'https://github.com/hariomthakur/siksha-diksha',
    },
    {
      id: 2,
      title: 'Quiz Application',
      description: 'Interactive quiz platform with payment gateway integration and automated email system.',
      longDescription: 'Full-stack quiz application with user authentication, dynamic quiz generation, payment processing through Razorpay, and automated certificate generation. Features include admin dashboard, analytics, and email notifications.',
      image: '/projects/quiz-app.jpg',
      tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Nodemailer'],
      liveUrl: 'https://quiz-app-demo.vercel.app',
      githubUrl: 'https://github.com/hariomthakur/quiz-app',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio with dark mode and smooth animations.',
      longDescription: 'Professional portfolio website built with React and Tailwind CSS, featuring Framer Motion animations, dark/light theme toggle, responsive design, and SEO optimization. Deployed on Vercel with CI/CD pipeline.',
      image: '/projects/portfolio.jpg',
      tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: 'https://hariomthakur.vercel.app',
      githubUrl: 'https://github.com/hariomthakur/portfolio',
    },
    {
      id: 4,
      title: 'MongoDB Search Feature',
      description: 'Advanced search and vector search implementation for MongoDB data.',
      longDescription: 'Implemented full-text search and vector search capabilities for large-scale MongoDB databases. Features include fuzzy matching, autocomplete suggestions, and semantic search using embeddings.',
      image: '/projects/search.jpg',
      tags: ['MongoDB', 'Node.js', 'Vector Search', 'Express'],
      liveUrl: '#',
      githubUrl: 'https://github.com/hariomthakur/mongodb-search',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-primary-600">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and side projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-primary-400 to-purple-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                      const placeholder = document.createElement('div')
                      placeholder.className = 'text-white text-6xl'
                      placeholder.textContent = '🚀'
                      e.target.parentElement.appendChild(placeholder)
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors focus-outline"
                    >
                      View Details
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border-2 border-gray-300 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-500 rounded-lg transition-colors focus-outline"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative h-64 bg-gradient-to-br from-primary-400 to-purple-500">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    const placeholder = document.createElement('div')
                    placeholder.className = 'text-white text-8xl'
                    placeholder.textContent = '🚀'
                    e.target.parentElement.appendChild(placeholder)
                  }}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.liveUrl !== '#' && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white text-center rounded-lg font-medium transition-colors"
                    >
                      View Live Site
                    </a>
                  )}
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-500 text-center rounded-lg font-medium transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
