'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-32 px-4">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center neon-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
                Let's Connect
              </h2>
              <p className="text-gray-300 mb-8">
                Feel free to reach out for collaborations, projects, or just to say hello. 
                I'm always excited to connect with fellow developers and music enthusiasts.
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:ljm010301@naver.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaEnvelope className="text-xl" />
                  <span>ljm010301@naver.com</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/2zm00"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaGithub className="text-xl" />
                  <span>github.com/2zm00</span>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/정모-이-039980280"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaLinkedin className="text-xl" />
                  <span>linkedin.com/in/이정모</span>
                </motion.a>
                
                <motion.a
                  href="https://discordapp.com/users/397246059228823572"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaDiscord className="text-xl" />
                  <span>2zm00</span>
                </motion.a>
              </div>
            </div>

            <motion.form
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <label className="block text-cyan-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-gray-300 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-cyan-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-gray-300 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-cyan-400 mb-2">Message</label>
                <textarea
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-gray-300 focus:border-cyan-400 focus:outline-none transition-colors h-32"
                  placeholder="Your message"
                ></textarea>
              </div>

              <motion.button
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-md transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
