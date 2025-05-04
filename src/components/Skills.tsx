import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    category: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Docker', icon: 'docker' },
/*       { name: 'CI/CD', icon: 'cicd' },
 */    ],
  },
  {
    category: 'AWS Services',
    items: [
      { name: 'EC2', icon: 'ec2' },
      { name: 'Lambda', icon: 'lambda' },
      { name: 'ECS', icon: 'ecs' },
      { name: 'S3', icon: 's3' },
      { name: 'CloudFront', icon: 'cloudfront' },
      { name: 'VPC', icon: 'vpc' },
      { name: 'IAM', icon: 'iam' },
      { name: 'ASG', icon: 'asg' },
      { name: 'ALB', icon: 'alb' },
      { name: 'CloudWatch', icon: 'cloudwatch' },
    ],
  },
  {
    category: 'Development & Tools',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'Bash', icon: 'bash' },
      { name: 'Git', icon: 'git' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Java', icon: 'java' },
      { name: 'Node.js', icon: 'node' },
      { name: 'mongoDB', icon: 'mongodb' },
      { name: 'Javascript', icon: 'js' },


    ],
  },
];

const Skills = () => {
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

  const getIconPath = (iconName: string) => {
    try {
      // Try to import SVG first
      const svgPath = `/icons/${iconName}.svg`;
      // If SVG fails, fall back to PNG
      const pngPath = `/icons/${iconName}.png`;
      return svgPath;
    } catch (error) {
      return `/icons/${iconName}.png`;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-6 text-blue-400">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <div className="w-6 h-6 flex-shrink-0">
                        <img
                          src={getIconPath(skill.icon)}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `/icons/${skill.icon}.png`;
                          }}
                        />
                      </div>
                      <span className="text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 