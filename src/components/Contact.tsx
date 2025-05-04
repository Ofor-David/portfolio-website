import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
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

  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/david-ofor-23bb75354/',
      color: 'hover:text-blue-500',
      hoverColor: 'group-hover:bg-blue-500/10',
    },
    {
      name: 'Email',
      icon: 'gmail',
      url: 'mailto:davidoforincloud@gmail.com',
      color: 'hover:text-red-500',
      hoverColor: 'group-hover:bg-red-500/10',
    },

  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Get in Touch
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-2xl">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 ${link.color} ${link.hoverColor} w-40`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="w-12 h-12 mb-4"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={`/icons/${link.icon}.svg`}
                    alt={link.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `/icons/${link.icon}.png`;
                    }}
                  />
                </motion.div>
                <motion.span 
                  className="text-white text-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 