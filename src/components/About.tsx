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

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-gray-800 rounded-lg p-8 shadow-xl"
          >
            <p className="text-gray-300 text-lg mb-6">
              I'm a passionate Full Stack Developer with a strong focus on creating
              efficient, scalable, and user-friendly applications. With expertise in
              modern web technologies and a keen eye for design, I strive to build
              solutions that not only meet but exceed user expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-gray-700 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Experience
                </h3>
                <ul className="space-y-4">
                  <li className="text-gray-300">
                    <span className="font-medium">Senior Developer</span> at Tech Corp
                    <br />
                    <span className="text-sm text-gray-400">2020 - Present</span>
                  </li>
                  <li className="text-gray-300">
                    <span className="font-medium">Full Stack Developer</span> at Web Solutions
                    <br />
                    <span className="text-sm text-gray-400">2018 - 2020</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-700 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Education
                </h3>
                <ul className="space-y-4">
                  <li className="text-gray-300">
                    <span className="font-medium">Master's in Computer Science</span>
                    <br />
                    <span className="text-sm text-gray-400">University of Technology</span>
                  </li>
                  <li className="text-gray-300">
                    <span className="font-medium">Bachelor's in Software Engineering</span>
                    <br />
                    <span className="text-sm text-gray-400">Tech University</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 