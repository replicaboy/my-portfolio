/**
 * About Section
 * Professional summary and personal introduction
 * 
 * TO CUSTOMIZE:
 * - Update the paragraphs with your own story
 * - Modify the highlights/metrics
 */

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="text-primary-600">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                Hello! I'm <strong>Hariom Thakur</strong>, a passionate full-stack developer 
                with a love for creating elegant and efficient web solutions. My journey in 
                software development began with a curiosity about how websites work, and it 
                has evolved into a career where I bring ideas to life through code.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                I specialize in building modern web applications using cutting-edge technologies 
                like <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. 
                Whether it's developing responsive user interfaces, creating robust APIs, or 
                optimizing database performance, I enjoy every aspect of the development process.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying updated with industry best practices.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus-outline"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </motion.div>
            </div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Mission</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Creating impactful digital experiences that solve real-world problems
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">💡</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Vision</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pushing boundaries with innovative solutions and clean code
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">🚀</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Approach</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Agile development with focus on quality and user experience
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">🤝</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Values</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Collaboration, continuous learning, and delivering excellence
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
