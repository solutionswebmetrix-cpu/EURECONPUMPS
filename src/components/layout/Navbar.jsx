import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass-dark shadow-2xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-premium-gradient rounded-lg flex items-center justify-center shadow-blue-glow group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className={`text-2xl font-poppins font-bold tracking-tighter transition-colors duration-300 ${
            isScrolled ? 'text-text-primary' : 'text-white drop-shadow-md'
          }`}>
            EURECON<span className="text-primary">PUMPS</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : isScrolled 
                    ? 'text-text-secondary hover:text-text-primary' 
                    : 'text-white/90 hover:text-white drop-shadow-md'
              } group`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-premium-gradient transition-all duration-300 ${
                location.pathname === link.path ? 'w-full shadow-blue-glow' : 'w-0 group-hover:w-full shadow-blue-glow'
              }`} />
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className={`transition-colors duration-300 ${isScrolled ? 'text-text-secondary hover:text-primary' : 'text-white/90 hover:text-white drop-shadow-md'}`}
          >
            <FiSearch size={20} />
          </button>
          <button className={`transition-colors duration-300 ${isScrolled ? 'text-text-secondary hover:text-primary' : 'text-white/90 hover:text-white drop-shadow-md'}`}>
            <FiUser size={20} />
          </button>
          <Link to="/cart" className={`relative transition-colors duration-300 ${isScrolled ? 'text-text-secondary hover:text-primary' : 'text-white/90 hover:text-white drop-shadow-md'}`}>
            <FiShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-red-glow">
              2
            </span>
          </Link>
          <Link to="/contact">
            <button className={`px-6 py-2 bg-transparent border rounded-full font-bold transition-all duration-300 shadow-blue-glow backdrop-blur-md ${
              isScrolled 
                ? 'border-primary/50 text-text-primary hover:bg-premium-gradient hover:text-white hover:border-transparent' 
                : 'border-white/50 text-white hover:bg-white hover:text-primary hover:border-white'
            }`}>
              Get Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden transition-colors ${isScrolled ? 'text-text-primary' : 'text-white drop-shadow-md'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/98 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-10 right-10 text-white hover:text-primary transition-colors"
            >
              <HiX size={40} />
            </button>
            <div className="w-full max-w-4xl space-y-8">
              <h2 className="text-4xl md:text-6xl font-poppins font-bold text-center">Search <span className="text-primary">Eurecon</span></h2>
              <div className="relative">
                <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={30} />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="w-full bg-white/5 border-b-2 border-white/10 py-8 pl-20 pr-10 text-2xl md:text-4xl focus:outline-none focus:border-primary transition-colors text-white"
                />
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="text-text-secondary uppercase tracking-widest text-sm">Popular:</span>
                {['Centrifugal Pumps', 'Vacuum Systems', 'Titanium Fittings', 'IoT Sensors'].map(tag => (
                  <button key={tag} className="text-white hover:text-primary transition-colors">{tag}</button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-dark/95 backdrop-blur-xl z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-poppins font-semibold text-text-secondary hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-8 mt-4">
                <FiSearch 
                  size={24} 
                  className="text-text-secondary hover:text-primary cursor-pointer" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                />
                <FiUser size={24} className="text-text-secondary" />
                <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                  <FiShoppingCart size={24} className="text-text-secondary" />
                </Link>
              </div>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="mt-4 px-10 py-3 bg-premium-gradient text-white font-bold rounded-full shadow-blue-glow">
                  Get Quote
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
