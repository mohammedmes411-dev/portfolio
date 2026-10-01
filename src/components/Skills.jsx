import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJava, FaPython, FaJs, FaReact, FaAngular, FaDocker, FaGitAlt, FaDatabase, FaHtml5, FaCss3Alt,
} from 'react-icons/fa';
import {
  SiSpringboot, SiDotnet, SiTailwindcss, SiMysql, SiMongodb, SiPostgresql, SiTypescript, SiFlutter,
} from 'react-icons/si';

const categories = [
  {
    title: 'Langages',
    skills: [
      { name: 'Java', icon: <FaJava />, level: 90 },
      { name: 'Python', icon: <FaPython />, level: 85 },
      { name: 'JavaScript', icon: <FaJs />, level: 88 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
      { name: 'C', level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot />, level: 85 },
      { name: 'ASP.NET', icon: <SiDotnet />, level: 80 },
      { name: 'Django', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, level: 90 },
      { name: 'Angular', icon: <FaAngular />, level: 75 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
      { name: 'Tailwind', icon: <SiTailwindcss />, level: 85 },
      { name: 'Flutter', icon: <SiFlutter />, level: 65 },
    ],
  },
  {
    title: 'Bases de Données',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, level: 85 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75 },
      { name: 'SQL Server', icon: <FaDatabase />, level: 78 },
    ],
  },
  {
    title: 'Outils & DevOps',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 90 },
      { name: 'Docker', icon: <FaDocker />, level: 75 },
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
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2 text-light text-sm font-medium">
                        {skill.icon && <span className="text-primary text-lg">{skill.icon}</span>}
                        {skill.name}
                      </div>
                      <span className="text-muted text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                      />
                    </div>
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
