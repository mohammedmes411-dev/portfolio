import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'AUTONOVA',
    subtitle: 'Plateforme intelligente pour automobile',
    description:
      "Application web complète pour la gestion d'un parc automobile avec des fonctionnalités avancées d'intelligence artificielle pour la recommandation et l'analyse prédictive.",
    tech: ['Spring Boot', 'React', 'MySQL', 'Python', 'Docker'],
    color: 'from-blue-500 to-cyan-400',
    github: '#',
    demo: '#',
  },
  {
    title: 'Evently',
    subtitle: 'Plateforme de gestion d\'événements',
    description:
      "Application de gestion d'événements permettant aux utilisateurs de créer, gérer et participer à des événements avec un système de réservation, notifications en temps réel et tableau de bord interactif.",
    tech: ['ASP.NET', 'Angular', 'SQL Server', 'SignalR'],
    color: 'from-violet-500 to-purple-400',
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-primary">#</span> Mes Projets
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-14 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              {/* Gradient header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.h3
                    className="text-4xl font-black text-white/90 tracking-wider"
                    animate={hovered === idx ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />
              </div>

              <div className="p-6">
                <p className="text-accent text-sm font-semibold mb-2">{project.subtitle}</p>
                <p className="text-muted text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <FaExternalLinkAlt /> Démo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
