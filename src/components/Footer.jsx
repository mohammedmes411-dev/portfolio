import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-dark-border text-center">
      <p className="text-muted text-sm flex items-center justify-center gap-1">
        © 2024 MESBAHI Mohammed — Fait avec <FaHeart className="text-red-500 text-xs" /> à Oujda, Maroc
      </p>
    </footer>
  );
};

export default Footer;
