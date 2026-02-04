import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';
import Experience from './Experience';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  

  // Apply dark mode to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div
  className={`min-h-screen transition-colors duration-300
    ${darkMode ? 'bg-black text-white' : 'bg-purple-900 text-white'}
  `}
>

      <ParticlesBackground />

      {/* Navigation */}
      <nav
  className={`fixed w-full z-50 backdrop-blur-sm transition-colors
    ${darkMode ? 'bg-black/70' : 'bg-purple-900/70'}
  `}
>

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
          <h1 className="text-5xl font-bold mb-4">Amulya Sukka</h1>

          <h2 className="text-2xl mb-6 gradient-text">
            Full Stack AI Developer | AWS Cloud Solution Architect – Associate
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

          <p className="text-gray-300 mb-4">
            Hey there! I’m Amulya, a Full Stack Developer with 4 years of experience
            building everything from secure banking apps to artisan management
            platforms. I love working with Java, Spring Boot, ReactJS, and all things
            cloud—especially AWS.
          </p>

          <p className="text-gray-300 mb-6">
            I'm passionate about creating efficient, scalable solutions and
            continuously expanding my technical expertise in cloud technologies and
            modern development practices.
          </p>

          <a
            href="https://image2url.com/r2/default/documents/1770166769816-37f41749-315b-40f5-a6f7-7f80fed56e69.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="glow-button flex items-center gap-2 mx-auto">
              <Download size={20} />
              Download Amulya Sukka's Resume
            </button>
          </a>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {[
            'Java', 'React', 'Angular', 'AWS', 'MySQL', 'Azure',
            'Spring Boot', 'Git', 'Clean Code', 'Docker',
            'Kubernetes', 'CI/CD', 'Microservices'
          ].map(skill => (
            <motion.div key={skill} className="skill-bubble" whileHover={{ scale: 1.1 }}>
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience */}
      <Experience />

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Keyword search using Java and AWS',
              description: 'Secure Data Storage and Trapdoor-based keyword Search in Cloud Computing',
              tech: ['Java', 'AWS', 'Spring Boot', 'SQL']
            },
            {
              title: 'Cloud-Native E-Commerce',
              description: 'Microservices-based platform built with Spring Boot and AWS EKS',
              tech: ['Java', 'Spring Boot', 'AWS', 'Kubernetes']
            },
            {
              title: 'Real-time Analytics Dashboard',
              description: 'Interactive dashboard using React and Azure',
              tech: ['React', 'TypeScript', 'Azure']
            }
          ].map(project => (
            <motion.div key={project.title} className="project-card">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="text-sm bg-white/5 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
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
            <input type="email" 
            placeholder="Your Email" 
            className="contact-input" /> 
            </div> 
            <div> 
              <textarea rows={4} 
              placeholder="Your Message" 
              className="contact-input" /> 
              </div> 
              <button type="submit" 
              className="glow-button w-full"> 
              Send Message 
              </button> 
              </form> 
              <div className="flex justify-center gap-6 mt-12">

              </div>

        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/s-v-s-amulya-sukka-477828395/"><Linkedin /></a>
          <a href="https://github.com/sukkaamulya"><Github /></a>
          <a href="mailto:amulya.sukka@outlook.com"><Mail /></a>
        </div>
      </section>
    </div>
  );
}

export default App;
