import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="w-full px-6 md:px-8 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tight text-white font-serif z-50">
          BQ.
        </a>

        {/* Desktop Nav & Socials */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  activeSection === link.href.substring(1) ? 'text-white' : 'text-slate-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Vertical Divider */}
          <div className="h-6 w-px bg-white/10"></div>

          {/* Social Icons - Circular Style */}
          <div className="flex items-center gap-3">
             {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-sm"
                  aria-label={link.platform}
                >
                  {link.icon}
                </a>
             ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
            <button
              className="text-slate-300 hover:text-white p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-white/5 overflow-hidden absolute top-20 left-0 right-0 shadow-2xl"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    activeSection === link.href.substring(1) ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 pt-6 mt-2 border-t border-white/5 justify-center">
                 {SOCIAL_LINKS.map((link) => (
                    <a 
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
                    >
                      {link.icon}
                    </a>
                 ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;