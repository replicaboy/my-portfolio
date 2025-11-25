import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Yuva Chetna Samiti',
      period: '2023 - Present',
      description: 'Developing educational platforms with payment integration, email automation, and quiz functionalities. Built and deployed multiple MERN stack applications on Vercel and Render.',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Razorpay', 'Vercel'],
      icon: '💼'
    },
    {
      title: 'Web Developer',
      company: 'Freelance Projects',
      period: '2022 - 2023',
      description: 'Created custom websites and web applications for various clients. Specialized in responsive design, SEO optimization, and modern JavaScript frameworks.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Git'],
      icon: '🚀'
    },
    {
      title: 'Computer Science Student',
      company: 'Academic Projects',
      period: '2020 - 2022',
      description: 'Completed numerous academic projects involving data structures, algorithms, database management, and web development. Built strong foundation in computer science fundamentals.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'SQL'],
      icon: '🎓'
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Experience & <span className="text-primary-600">Education</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and educational background
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-900/30"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{exp.icon}</span>
                        <div className={index % 2 === 0 ? 'md:ml-auto' : ''}>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-primary-600 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {exp.period}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>
                      
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
