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
            I'm a motivated Computer Science undergraduate with hands-on experience in AWS, and cloud-native deployment. I specialize in building backend applications and implementing Infrastructure as Code (IaC) using Terraform.

            My skill set includes working with key AWS services such as EC2, S3, Lambda, and modern tools like GitHub Actions and MongoDB Atlas. Beyond technical skills, I've led a tech accountability community, promoting collaboration and continuous growth.

            I'm currently advancing my knowledge in DevOps, Cloud security and springboot.
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
                    <span className="font-medium">Founder & community lead</span> at TechCentrics
                    <br />
                    <span className="text-sm text-gray-400">2024 - Present</span>
                  </li>
                  {/* <li className="text-gray-300">
                    <span className="font-medium">Full Stack Developer</span> at Web Solutions
                    <br />
                    <span className="text-sm text-gray-400">2018 - 2020</span>
                  </li> */}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-700 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Education
                </h3>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-gray-800 rounded-lg p-6 shadow-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                        <span className="text-blue-400">{edu.date}</span>
                      </div>
                      <p className="text-gray-400 mb-2">{edu.school}</p>
                    
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 