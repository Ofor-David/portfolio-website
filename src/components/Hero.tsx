import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/14NBdTfmX36sQp2uT3pr19wDmnvB98bzx/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Hi, I'm{' '}
          <span className="text-blue-600 dark:text-blue-400">Ofor David</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          A passionate computer science student specializing in cloud infrastructure and DevOps
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewResume}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
          >
            View Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 