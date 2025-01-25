'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  details: string;
}

const projects: { [key: string]: Project } = {
  project1: {
    id: 'project1',
    title: 'Cyberpunk Music Visualizer',
    description: 'An interactive music visualizer with neon aesthetics',
    imageUrl: '/images/track4.jpg',
    details:
      'This project uses WebGL and the Web Audio API to create a stunning visual representation of music. The visualizer reacts in real-time to the frequency and amplitude of the audio, creating a mesmerizing display of colors and shapes that pulse and flow with the music. Users can customize the visual style and color palette to suit their preferences, making each experience unique.',
  },
  project2: {
    id: 'project2',
    title: 'AI-Powered Synth',
    description: 'A synthesizer that uses AI to generate unique sounds',
    imageUrl: '/images/track5.jpg',
    details:
      'This innovative synthesizer leverages machine learning algorithms to create novel sounds and textures. By training on a vast database of existing synthesizer patches and acoustic instruments, the AI can generate entirely new timbres and evolving soundscapes. Users can control various parameters and guide the AI output, resulting in a powerful tool for sound designers and musicians alike.',
  },
  project3: {
    id: 'project3',
    title: 'Virtual Reality Concert Hall',
    description: 'A VR experience for attending live music performances',
    imageUrl: '/images/track6.jpg',
    details:
      'This VR project aims to revolutionize the way we experience live music. Using cutting-edge VR technology, users can attend virtual concerts from the comfort of their homes. The experience includes realistic 3D audio, crowd interactions, and multiple viewing angles. Artists can perform in fantastical, physically impossible venues, opening up new creative possibilities for stage design and performance art.',
  },
};

const ProjectPage: React.FC = () => {
  const params = useParams();
  const project = projects[params.slug as string];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-black py-32 px-4">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center neon-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h1>
      <div className="max-w-4xl mx-auto">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.p
          className="text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.description}
        </motion.p>
        <motion.div
          className="bg-gray-900 rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
            Project Details
          </h2>
          <p className="text-gray-300">{project.details}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
