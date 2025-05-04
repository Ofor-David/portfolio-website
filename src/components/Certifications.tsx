import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certifications = [
  {
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    date: '2024',
    credentialId: 'OD9USW8EZFTR',
    icon: 'google',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/OD9USW8EZFTR',
  },
  {
    name: 'Google AI Essentials',
    issuer: 'Google',
    date: '2024',
    credentialId: 'JU70OB1JMUB1',
    icon: 'google',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/JU70OB1JMUB1',
  },
];

const Certifications = () => {
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
    <section id="certifications" className="py-20 bg-gray-900">
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
            Certifications
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full w-96"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img
                      src={`/icons/${cert.icon}.svg`}
                      alt={cert.issuer}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/icons/${cert.icon}.png`;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-white break-words">{cert.name}</h3>
                  </div>
                </div>
                <div className="mt-auto space-y-2">
                  <p className="text-gray-300">
                    <span className="font-medium">Issuer:</span> {cert.issuer}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-medium">Issued:</span> {cert.date}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </p>
                  {cert.verifyUrl && (
                    <motion.a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Verify Credential</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 