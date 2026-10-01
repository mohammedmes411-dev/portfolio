import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const timeline = [
  {
    year: '2024 - Présent',
    title: '5ème année Génie Informatique - IA',
    place: 'EHEIM - Oujda',
    desc: 'Spécialisation en Intelligence Artificielle, Machine Learning et Deep Learning.',
  },
  {
    year: '2022 - 2024',
    title: 'Cycle Ingénieur - Génie Informatique',
    place: 'EHEIM - Oujda',
    desc: 'Formation approfondie en génie logiciel, bases de données, réseaux et systèmes distribués.',
  },
  {
    year: '2019 - 2022',
    title: 'Cycle Préparatoire',
    place: 'EHEIM - Oujda',
    desc: 'Classes préparatoires intégrées aux études d\'ingénieur. Maths, physique et algorithmique.',
  },
  {
    year: '2019',
    title: 'Baccalauréat Sciences Mathématiques',
    place: 'Oujda',
    desc: 'Obtention du baccalauréat avec mention.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-dark-card/50 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-primary">#</span> Formation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-14 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-border md:-translate-x-0.5" />

          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative flex items-start mb-12 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark -translate-x-1/2 z-10 shadow-lg shadow-primary/40" />

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-dark border border-dark-border rounded-xl p-5 hover:border-primary/40 transition-all duration-300 group">
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                    <FaGraduationCap />
                    {item.year}
                  </span>
                  <h3 className="text-light font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-accent text-sm mb-2">{item.place}</p>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
