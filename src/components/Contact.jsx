import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const contactInfo = [
  { icon: <FaEnvelope size={20} />, label: 'Email', value: 'mesbahimohammed01@gmail.com', href: 'mailto:mesbahimohammed01@gmail.com' },
  { icon: <FaPhone size={20} />, label: 'Téléphone', value: '+212 701829294', href: 'tel:+212 701829294' },
  { icon: <FaMapMarkerAlt size={20} />, label: 'Localisation', value: 'Oujda, Maroc', href: null },
  { icon: <FaLinkedin size={20} />, label: 'LinkedIn', value: 'mohammed-mesbahi', href: 'https://www.linkedin.com/in/mohammed-mesbahi-66542639a' },
  { icon: <FaGithub size={20} />, label: 'GitHub', value: 'mohammedmes411-dev', href: 'https://github.com/mohammedmes411-dev' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-primary">#</span> Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-muted text-center max-w-lg mx-auto mb-14">
            N'hésitez pas à me contacter pour toute opportunité de stage, collaboration ou simplement pour échanger !
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contactInfo.map((item, idx) => {
            const Wrapper = item.href ? 'a' : 'div';
            const extraProps = item.href
              ? {
                  href: item.href,
                  target: item.href.startsWith('http') ? '_blank' : undefined,
                  rel: 'noreferrer',
                }
              : {};
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Wrapper
                  {...extraProps}
                  className="flex items-center gap-4 p-5 bg-dark-card border border-dark-border rounded-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-0.5">{item.label}</p>
                    <p className="text-light text-sm font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
