'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}
 
const projects: Project[] = [
  {
    id: 'project1',
    title: 'Cyberpunk Music Visualizer',
    description: 'An interactive music visualizer with neon aesthetics',
    imageUrl: '/images/track1.jpg',
  },
  {
    id: 'project2',
    title: 'AI-Powered Synth',
    description: 'A synthesizer that uses AI to generate unique sounds',
    imageUrl: '/images/track5.jpg',
  },
  {
    id: 'project3',
    title: 'Virtual Reality Concert Hall',
    description: 'A VR experience for attending live music performances',
    imageUrl: '/images/track6.jpg',
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-32 px-4">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center neon-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.imageUrl || '/placeholder.svg'}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-cyan-400">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <Link href={`/projects/${project.id}`}>
                <div className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-full hover:bg-cyan-700 transition-colors">
                  Learn More
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
