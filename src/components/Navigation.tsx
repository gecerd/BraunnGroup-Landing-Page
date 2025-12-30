import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageType } from '../App';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home' as PageType, label: 'Главная' },
    { id: 'rent' as PageType, label: 'BraunNRent' },
    { id: 'car' as PageType, label: 'BraunNCar' },
    { id: 'autocare' as PageType, label: 'BraunNAutoCare' },
    { id: 'support' as PageType, label: 'BraunNSupport' },
    { id: 'living' as PageType, label: 'BraunNLiving' },
    { id: 'tours' as PageType, label: 'BraunNTours' },
  ];

  const handleNavigate = (page: PageType) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="text-2xl tracking-tight text-slate-900 hover:text-slate-700 transition-colors"
          >
            BraunnGroup
          </button>

          {/* Desktop Menu */}
          <div className="hidden min-[1100px]:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm tracking-wider transition-colors ${
                  currentPage === item.id
                    ? 'text-slate-900'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="px-6 py-2 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm rounded-full"
            >
              Связаться
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="min-[1100px]:hidden p-2 text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="min-[1100px]:hidden bg-white border-t border-slate-200/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`block w-full text-left py-2 text-sm tracking-wider transition-colors ${
                    currentPage === item.id
                      ? 'text-slate-900'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={handleContactClick}
                className="block w-full text-center px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm rounded-full"
              >
                Связаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
