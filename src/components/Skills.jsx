/**
 * Skills Section
 * Displays technical skills with animated progress bars
 * 
 * TO CUSTOMIZE:
 * - Add/remove skills in the skills array
 * - Adjust proficiency levels (0-100)
 * - Modify categories (Frontend, Backend, etc.)
 */

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', level: 95, color: 'bg-orange-500' },
        { name: 'CSS', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'React.js', level: 85, color: 'bg-cyan-500' },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Python', level: 75, color: 'bg-blue-600' },
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', level: 80, color: 'bg-green-500' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
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
              My <span className="text-primary-600">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive set of technologies and tools I use to build amazing applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: groupIndex * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-primary-600 pb-2">
                  {skillGroup.category}
                </h3>
                
                <div className="space-y-6">
                  {skillGroup.items.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: groupIndex * 0.2 + index * 0.1,
                            ease: "easeOut"
                          }}
                          className={`h-full ${skill.color} rounded-full shadow-md`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Git', 'GitHub', 'VS Code', 'Vercel', 'Express.js', 
                'REST API', 'JWT', 'Tailwind CSS', 'Framer Motion', 
                'Responsive Design', 'Agile', 'CI/CD'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 font-medium shadow-sm hover:shadow-md hover:border-primary-500 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
