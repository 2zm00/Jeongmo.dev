'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiReact, 
  SiDjango, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMongodb, 
  SiMysql,
  SiDocker,
  SiLinux,
  SiFastapi,
  SiMinio,
  SiPortainer,
  SiStreamlit,
  SiPandas,
  SiNumpy,
  SiSelenium,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiPlotly,
  SiAmazon,
} from 'react-icons/si';



const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-32 px-4">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center neon-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Profile
      </motion.h1>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        <motion.img
          src="/images/profile2.jpg"
          alt="Jeongmo"
          className="w-64 h-64 rounded-full object-cover mb-8 md:mb-0 md:mr-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
            About Me
          </h2>
          <p className="text-gray-300 mb-6">
            Hi, I'm Jeongmo, a passionate web developer and music enthusiast. I
            specialize in creating immersive digital experiences that blend
            cutting-edge web technologies with innovative audio-visual elements.
            My goal is to push the boundaries of what's possible in web-based
            music applications and interactive art.
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Contact</h2>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-cyan-400" />
                <a href="mailto:ljm@naver.com" className="text-gray-300 hover:text-cyan-400">ljm010301@naver.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-cyan-400" />
                <span className="text-gray-300">+82 10-1234-1234</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGithub className="text-cyan-400" size={20} />
                <a href="https://github.com/2zm00" className="text-gray-300 hover:text-cyan-400">
                  2zm00
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaDiscord className="text-cyan-400" size={20} />
                <a href="https://discordapp.com/users/397246059228823572" className="text-gray-300 hover:text-cyan-400">
                  정모#9407
                </a>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Personal Info</h2>
            <div className="text-gray-300 space-y-2">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-cyan-400" />
                <p>Republic of Korea, Seoul</p>
              </div>
              <div className="flex items-center space-x-2">
              <FaBirthdayCake className='text-cyan-400' />
              <p>2000. 01. 03.</p>
              </div>
            </div>
          </section>

          <h3 className="text-2xl font-semibold mb-2 text-cyan-400">Skills</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Frontend Development (React, Next.js)</li>
            <li>Backend Development (Django, FastAPI, Node.js)</li>
            <li>DevOps & Cloud (AWS, Docker, Linux, Portainer)</li>
            <li>API Integration: LLM API, Payment Gateway Integration</li>
            <li>Effective team collaboration and leadership experience</li>
          </ul>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Education</h2>
            <div className="text-gray-300">
              <p>The Department of Occupational Therapy, KNU.</p>
              <p>GPA: 4+/4.5 </p>
              <p>TOEIC: 800+ (2022) </p>
            </div>
          </section>

          <h3 className="text-2xl font-semibold mb-2 text-cyan-400">
            Experience
          </h3>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white">
            Developer in Training
            </h4>
            <p className="text-gray-400">2024 - Present</p>
            <p className="text-gray-300">
              Self-studying programming and full-stack development, focusing on web development technologies.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white">
              Backend Developer Bootcamp Participant
            </h4>
            <p className="text-gray-400">2024 - 2025</p>
            <p className="text-gray-300">
            Likelion Backend School Python Track. Led three project teams as Project Manager, demonstrating leadership and collaborative development skills.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white">
            Clinical Occupational Therapist
            </h4>
            <p className="text-gray-400">2023 - 2024</p>
            <p className="text-gray-300">
            Coordinated care between medical teams, patients, and caregivers.
            Developed patient trust through cross-generational communication strategies.
            Conducted real-time problem solving for treatment plan optimization.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white">
              Occupational Therapist Intern
            </h4>
            <p className="text-gray-400">2023</p>
            <p className="text-gray-300">
            Completed clinical internship and practical training at University Hospital. Developed strong interpersonal and communication skills through daily interactions with patients, families, and professionals.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Certifications</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Occupational Therapist (License 25400)</li>
              <li>Psychological Counselor Level 1 (2023-25-A75-0487)</li>
              <li>SQL Developer (SQLD-054000856)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Tech Stack</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg text-gray-400 mb-2">Languages</h3>
                <div className="flex space-x-4">
                  <SiPython size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiJavascript size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiTypescript size={24} className="text-gray-300 hover:text-cyan-400" />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg text-gray-400 mb-2">Web Technologies</h3>
                <div className="flex flex-wrap gap-4">
                  <SiNextdotjs size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiReact size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiDjango size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiFastapi size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiTailwindcss size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiStreamlit size={24} className="text-gray-300 hover:text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg text-gray-400 mb-2">Data Science & ML</h3>
                <div className="flex flex-wrap gap-4">
                  <SiPandas size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiNumpy size={24} className="text-gray-300 hover:text-cyan-400"/>
                  <SiSelenium size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiTensorflow size={24} className="text-gray-300 hover:text-cyan-400"  />
                  <SiPytorch size={24} className="text-gray-300 hover:text-cyan-400"  />
                  <SiScikitlearn size={24} className="text-gray-300 hover:text-cyan-400"  />
                  <SiOpencv size={24} className="text-gray-300 hover:text-cyan-400"  />
                  <SiPlotly size={24} className="text-gray-300 hover:text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg text-gray-400 mb-2">DevOps & Cloud</h3>
                <div className="flex flex-wrap gap-4">
                  <SiDocker size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiAmazon size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiLinux size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiPortainer size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiMinio size={24} className="text-gray-300 hover:text-cyan-400" />
                </div>
              </div>

              <div>
                <h3 className="text-lg text-gray-400 mb-2">Databases</h3>
                <div className="flex space-x-4">
                  <SiPostgresql size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiMongodb size={24} className="text-gray-300 hover:text-cyan-400" />
                  <SiMysql size={24} className="text-gray-300 hover:text-cyan-400" />
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
