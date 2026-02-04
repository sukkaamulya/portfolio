import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';

import Experience from "./Experience";



function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  

  return (
    
      <div
  className={`min-h-screen transition-colors duration-300 
  ${darkMode ? 'dark bg-black text-white' : 'bg-purple-900 text-white'}`}
>

      <ParticlesBackground />
    
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-blur/70 dark:bg-white/5 backdrop-blur-sm">


function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <ParticlesBackground />
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/5 backdrop-blur-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold gradient-text"
            >
              Amulya
            </motion.h1>
            <div className="flex items-center gap-6">
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#experience" className="nav-link">Experience</a>


              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            Amulya Sukka
          </h1>
          <h2 className="text-2xl mb-8 gradient-text">

            Full Stack AI Developer | AWS Cloud Solution Architect - Associate 
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            Full Stack Developer | AWS Cloud Solution Architect - Associate | AI
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">

            Crafting Scalable Software. Building Cloud-First Solutions.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section">


        <motion.div
          className="max-w-3xl mx-auto text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    
  >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 dark:text-gray-300 mb-4">
              Hey there! I’m Amulya, a Full Stack Developer with 4 years of experience building everything from secure banking apps to artisan management platforms. I love working with Java, Spring Boot, ReactJS, and all things cloud—especially AWS. Whether it's setting up microservices, designing clean RESTful APIs, or deploying apps with Docker and Kubernetes, I enjoy the whole process of bringing ideas to life through code.

I recently wrapped up my Master’s in Computer and Information Sciences at Saint Louis University, where I got to dive deep into cloud computing, secure app design, and everything in between. I’ve also had the chance to work on some fun projects around AI and predictive modeling, which really pushed my problem-solving skills.

Outside of work, you’ll find me exploring new tech stacks, refactoring legacy code just for the fun of it, or diving into a good AI workshop. If you’re into building cool, impactful software—or just want to geek out about clean code let’s connect!
            </p>
            <p className="text-gray-300 dark:text-gray-300 mb-6">
              I'm passionate about creating efficient, scalable solutions and continuously expanding my technical expertise in cloud technologies and modern development practices.
            </p>

            <a
            href="https://image2url.com/r2/default/documents/1770166769816-37f41749-315b-40f5-a6f7-7f80fed56e69.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            >
  
            <button className="glow-button flex items-center gap-2 mx-auto">
              <Download size={20} />
              Download Amulya Sukka's Resume
            </button>
          </a>
          </motion.div>
      
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src=""
              alt="Profile"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-4">
              Hey there! I’m Amulya, a Full Stack Java Developer with 3+ years of experience building everything from secure banking apps to artisan management platforms. I love working with Java, Spring Boot, ReactJS, and all things cloud—especially AWS. Whether it's setting up microservices, designing clean RESTful APIs, or deploying apps with Docker and Kubernetes, I enjoy the whole process of bringing ideas to life through code.

I recently wrapped up my Master’s in Computer and Information Sciences at Saint Louis University, where I got to dive deep into cloud computing, secure app design, and everything in between. I’ve also had the chance to work on some fun projects around AI and predictive modeling, which really pushed my problem-solving skills.

Outside of work, you’ll find me exploring new tech stacks, refactoring legacy code just for the fun of it, or diving into a good AI workshop. If you’re into building cool, impactful software—or just want to geek out about clean code—let’s connect!
            </p>
            <p className="text-gray-300 mb-6">
              I'm passionate about creating efficient, scalable solutions and continuously expanding my technical expertise in cloud technologies and modern development practices.
            </p>
            <button className="glow-button flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {[
            'Java', 'React', 'Angular', 'AWS', 'MySQL', 'Azure', 'Spring Boot', 'Git', 'Clean Code', 'Docker', 'Kubernetes', 'CI/CD', 'Microservices'
          ].map((skill) => (
            <motion.div
              key={skill}
              className="skill-bubble"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* ---------- Add Experience Section here ---------- */}
<Experience />

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[

            {
              title: 'Keyword search using Java and AWS',
              description: 'Secure Data Storage and Trapdoor-based keyword Search in Cloud Computing',
              tech: ['Java', 'AWS', 'SpringBoot', 'SQL'],
              links: { github: '#', demo: '#' }
            },
            {
              title: 'Cloud-Native E-Commerce',
              description: 'Microservices-based platform built with Spring Boot and deployed on AWS EKS',
              tech: ['Java', 'Spring Boot', 'AWS', 'Kubernetes'],
              links: { github: '#', demo: '#' }
            },
            {
              title: 'Real-time Analytics Dashboard',
              description: 'Interactive dashboard using React and Azure services for real-time data visualization',
              tech: ['React', 'TypeScript', 'Azure', 'D3.js'],
              links: { github: '#', demo: '#' }
            }
            
          ].map((project) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              <p className="text-gray-300 dark:text-gray-300 mb-4">{project.description}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-sm bg-white/5 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.links.github} className="flex items-center gap-1 hover:text-purple-400">
                  <Github size={16} /> Code
                </a>
                <a href={project.links.demo} className="flex items-center gap-1 hover:text-purple-400">
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="contact-input"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="contact-input"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="contact-input"
              />
            </div>
            <button type="submit" className="glow-button w-full">
              Send Message
            </button>
          </form>
          <div className="flex justify-center gap-6 mt-12">

            <a href="https://www.linkedin.com/in/s-v-s-amulya-sukka-477828395/" className="text-2xl hover:text-purple-400 transition-colors">
              <Linkedin />
            </a>
            <a href="https://github.com/sukkaamulya" className="text-2xl hover:text-purple-400 transition-colors">
              <Github />
            </a>
            <a href="mailto:amulya.sukka@outlook.com" className="text-2xl hover:text-purple-400 transition-colors">
            </a>
            <a href="#" className="text-2xl hover:text-purple-400 transition-colors">
              <Linkedin />
            </a>
            <a href="#" className="text-2xl hover:text-purple-400 transition-colors">
              <Github />
            </a>
            <a href="#" className="text-2xl hover:text-purple-400 transition-colors">

              <Mail />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
                }
              

export default App;</nav>;