import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    category: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Github Actions', icon: 'githubactions' },
    ],
  },
  {
    category: 'AWS Services',
    items: [
      { name: 'EC2', icon: 'ec2' },
      { name: 'Lambda', icon: 'lambda' },
      { name: 'ECS', icon: 'ecs' },
      { name: 'EventBrige', icon: 'eventbridge' },
      { name: 'ALB', icon: 'alb' },
      { name: 'S3', icon: 's3' },
      { name: 'RDS', icon: 'rds' },
      { name: 'Firehose', icon: 'firehose' },
      { name: 'Glue Crawler', icon: 'gluecrawler' },
      { name: 'Athena', icon: 'athena' },
      { name: 'CloudFront', icon: 'cloudfront' },
      { name: 'API Gateway', icon: 'api-gateway' },
      { name: 'VPC', icon: 'vpc' },
      { name: 'IAM', icon: 'iam' },
      { name: 'ASG', icon: 'asg' },
      { name: 'CloudTrail', icon: 'cloudtrail' },
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
      { name: 'notion', icon: 'notion' },
      { name: 'vscode', icon: 'vscode' },
      { name: 'Trivy', icon: 'trivy' },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: (index * 0.2) + (skillIndex * 0.1) }}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="w-6 h-6 flex-shrink-0">
                        <img
                          src={`/icons/${skill.icon}.svg`}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `/icons/${skill.icon}.png`;
                            target.onerror = null; // Prevent infinite loop
                          }}
                        />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
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