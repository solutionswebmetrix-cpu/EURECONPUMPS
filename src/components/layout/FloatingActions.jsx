import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll top button
      setShowScrollTop(window.scrollY > 400);

      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-black/5">
        <motion.div 
          className="h-full bg-premium-gradient shadow-blue-glow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 shadow-green-500/20"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* Inquiry Button */}
        <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 shadow-blue-glow">
          <FiMessageCircle size={28} />
        </button>

        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="w-14 h-14 glass text-text-primary rounded-full flex items-center justify-center border border-black/10 hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-xl"
            >
              <FiArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingActions;
