import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Nnamdi Azikiwe University',
      date: '2024 - 2027',
    },
 
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am a passionate software developer with expertise in cloud infrastructure and DevOps practices. My journey in technology began with an interest in game development with Unity and C#, which later evolved into a deep interest in cloud computing and infrastructure automation.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              With experience in AWS, Terraform, and Docker, I specialize in building scalable and reliable cloud solutions. I believe in the power of automation and infrastructure as code to create efficient and maintainable systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, I enjoy photography, playing the guitar, listening to cybersecurity podcasts and learning new technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 