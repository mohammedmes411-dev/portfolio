import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJava, FaPython, FaJs, FaReact, FaDocker, FaGitAlt, FaDatabase, FaHtml5, FaCss3Alt, FaServer, FaCode, FaRobot, FaTools, FaProjectDiagram, FaLock, FaFileAlt
} from 'react-icons/fa';
import {
  SiSpringboot, SiDotnet, SiTailwindcss, SiMysql, SiMongodb, SiPostgresql, SiBootstrap, SiGithub, SiPostman, SiJira, SiFigma, SiPhp, SiCplusplus
} from 'react-icons/si';

const categories = [
  {
    title: 'Langages',
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'PHP', icon: <SiPhp /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'ASP.NET Core', icon: <SiDotnet /> },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
    ],
  },
  {
    title: 'Bases de données',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'SQL Server', icon: <FaDatabase /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
  {
    title: 'API & Sécurité',
    skills: [
      { name: 'API REST', icon: <FaServer /> },
      { name: 'JSON', icon: <FaFileAlt /> },
      { name: 'JWT', icon: <FaLock /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Ansible', icon: <FaTools /> },
    ],
  },
  {
    title: 'Intelligence Artificielle',
    skills: [
      { name: 'Machine Learning (bases)', icon: <FaRobot /> },
      { name: 'Automatisation (n8n)', icon: <FaRobot /> },
    ],
  },
  {
    title: 'Architecture',
    skills: [
      { name: 'Microservices', icon: <FaProjectDiagram /> },
      { name: 'MVC', icon: <FaCode /> },
      { name: 'Clean Code', icon: <FaCode /> },
    ],
  },
  {
    title: 'Méthodologies & Outils',
    skills: [
      { name: 'Agile/Scrum', icon: <FaTools /> },
      { name: 'Jira', icon: <SiJira /> },
      { name: 'VS Code', icon: <FaCode /> },
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'Documentation', icon: <FaFileAlt /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-dark-card/50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-primary">#</span> Compétences Techniques
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-14 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-dark border border-dark-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-primary mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-dark-border/30 rounded-lg border border-dark-border/50 hover:border-primary/50 transition-colors"
                  >
                    {skill.icon && <span className="text-primary">{skill.icon}</span>}
                    <span className="text-light text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
