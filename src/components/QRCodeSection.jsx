import React from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
const QRCodeSection = () => {
  const portfolioUrl = 'https://mohammed-mesbahi-portfolio.vercel.app';

  return (
    <section className="py-20 bg-dark-card/50 border-t border-dark-border" id="qrcode">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">#</span> QR Code
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-muted mb-10 max-w-lg mx-auto text-center">
            Scannez ce QR Code avec votre téléphone pour accéder instantanément à mon portfolio. 
        
          </p>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="inline-block"
          >
            <div className="bg-white p-4 rounded-2xl shadow-2xl shadow-primary/20 border-4 border-primary/30">
              <QRCodeSVG
                value={portfolioUrl}
                size={220}
                bgColor="#ffffff"
                fgColor="#0a0a0f"
                level="Q"
                includeMargin={false}
              />
            </div>
          </motion.div>

          <p className="mt-8 px-2 text-center text-sm text-muted">
            Lien :{' '}
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline break-all"
            >
              {portfolioUrl}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QRCodeSection;
