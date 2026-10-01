import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaLightbulb } from 'react-icons/fa';

const highlights = [
  { icon: <FaCode size={24} />, title: 'Full-Stack', desc: 'Maîtrise du développement web de bout en bout' },
  { icon: <FaBrain size={24} />, title: 'Intelligence Artificielle', desc: 'Passionné par le Machine Learning et le Deep Learning' },
  { icon: <FaLightbulb size={24} />, title: 'Résolution de problèmes', desc: 'Approche analytique et orientée résultats' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-primary">#</span> À propos de moi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

          {/* Texte centré */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-muted leading-relaxed text-lg mb-6">
              Étudiant en <span className="text-primary font-semibold">5ème année</span> en Génie Informatique 
              spécialisé en Intelligence Artificielle à l'EHEIM Oujda. Passionné par le développement web 
              moderne et l'IA, je cherche constamment à apprendre et à relever de nouveaux défis.
            </p>
            <p className="text-muted leading-relaxed text-lg">
              Avec une approche orientée <span className="text-accent font-semibold">résolution de problèmes</span>, 
              je combine créativité et rigueur technique pour concevoir des solutions innovantes 
              et performantes.
            </p>
          </motion.div>

          {/* Cards centrées */}
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                className="flex flex-col items-center text-center p-6 bg-dark-card border border-dark-border rounded-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 transition-colors mb-4">
                  {item.icon}
                </div>
                <h3 className="text-light font-semibold mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
