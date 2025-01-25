'use client';

import React from 'react';
import { FaGithub, FaEnvelope, FaGlobe, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-black bg-opacity-80 backdrop-blur-md text-white p-4 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Jeongmo.dev. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <motion.a
            href="https://github.com/2zm00"
            className="text-cyan-400 hover:text-cyan-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="mailto:ljm010301@naver.com"
            className="text-cyan-400 hover:text-cyan-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={24} />
          </motion.a>
          <motion.a
            href="https://ljm010301.tistory.com"
            className="text-cyan-400 hover:text-cyan-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGlobe size={24} />
          </motion.a>
          <motion.a
            href="https://discordapp.com/users/397246059228823572"
            className="text-cyan-400 hover:text-cyan-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaDiscord size={24} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
