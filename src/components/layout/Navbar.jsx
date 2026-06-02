import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiChevronDown, HiChevronRight, HiSearch } from 'react-icons/hi';
import { productCategories } from '../../data/categories';
import { solarSolutions } from '../../data/solutions';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSolutionsMegaMenuOpen, setIsSolutionsMegaMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  const isProductsActive = 
    location.pathname === '/products' || location.pathname.startsWith('/category/');
  
  const isSolutionsActive =
    location.pathname === '/solutions' || location.pathname.startsWith('/solutions/');

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled || !isHomePage
            ? 'py-3 bg-white/90 backdrop-blur-2xl shadow-lg border-b border-gray-200'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex justify-between items-center relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <h2
              className={`text-2xl font-bold tracking-tight transition-all duration-300 ${
                isScrolled || !isHomePage ? 'text-slate-800' : 'text-white'
              }`}
            >
              EURECON<span className="text-cyan-500">PUMPS</span>
            </h2>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = 
                link.name === 'Products' ? isProductsActive :
                link.name === 'Solutions' ? isSolutionsActive :
                location.pathname === link.path;

              if (link.name === 'Products') {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => {
                      setIsMegaMenuOpen(true);
                      setIsSolutionsMegaMenuOpen(false);
                    }}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                  >
                    {/* Products Button */}
                    <button
                      className={`relative flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                        isScrolled || !isHomePage
                          ? isActive
                            ? 'text-cyan-600'
                            : 'text-slate-700 hover:text-cyan-500'
                          : isActive
                            ? 'text-cyan-400'
                            : 'text-white hover:text-cyan-300'
                      }`}
                    >
                      {link.name}
                      <HiChevronDown
                        className={`transition-transform duration-300 ${
                          isMegaMenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Products Mega Menu */}
                    <AnimatePresence>
                      {isMegaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute left-1/2 top-full mt-3 z-[999] w-[90vw] max-w-7xl -translate-x-1/2"
                        >
                          <div className="overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200">
                            <div className="px-8 py-8">
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {productCategories.slice(0, 6).map((category, idx) => (
                                  <div key={idx}>
                                    <Link
                                      to={category.path}
                                      onClick={() => setIsMegaMenuOpen(false)}
                                      className="flex items-center gap-3 mb-4"
                                    >
                                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                        <category.icon size={20} className="text-white" />
                                      </div>
                                      <div>
                                        <h3 className="text-base font-bold text-slate-800">
                                          {category.name}
                                        </h3>
                                      </div>
                                    </Link>
                                    {category.subcategories.length > 0 && (
                                      <ul className="space-y-2">
                                        {category.subcategories.map((sub, subIdx) => (
                                          <li key={subIdx}>
                                            <Link
                                              to={sub.path}
                                              onClick={() => setIsMegaMenuOpen(false)}
                                              className="flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-600 transition-colors"
                                            >
                                              <HiChevronRight size={14} className="text-cyan-500" />
                                              {sub.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="px-8 py-4 bg-gradient-to-r from-slate-50 to-gray-50 border-t border-gray-200 flex items-center justify-between">
                              <Link
                                to="/products"
                                onClick={() => setIsMegaMenuOpen(false)}
                                className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors flex items-center gap-1"
                              >
                                View All Products
                                <HiChevronRight size={16} />
                              </Link>
                              <Link
                                to="/contact"
                                onClick={() => setIsMegaMenuOpen(false)}
                                className="text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors"
                              >
                                Get Custom Quote
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else if (link.name === 'Solutions') {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => {
                      setIsSolutionsMegaMenuOpen(true);
                      setIsMegaMenuOpen(false);
                    }}
                    onMouseLeave={() => setIsSolutionsMegaMenuOpen(false)}
                  >
                    {/* Solutions Button */}
                    <button
                      className={`relative flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                        isScrolled || !isHomePage
                          ? isActive
                            ? 'text-cyan-600'
                            : 'text-slate-700 hover:text-cyan-500'
                          : isActive
                            ? 'text-cyan-400'
                            : 'text-white hover:text-cyan-300'
                      }`}
                    >
                      {link.name}
                      <HiChevronDown
                        className={`transition-transform duration-300 ${
                          isSolutionsMegaMenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Solutions Mega Menu */}
                    <AnimatePresence>
                      {isSolutionsMegaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute left-1/2 top-full mt-3 z-[999] w-[90vw] max-w-5xl -translate-x-1/2"
                        >
                          <div className="overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200">
                            <div className="px-8 py-8">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {solarSolutions.map((solution, idx) => (
                                  <Link
                                    key={solution.id}
                                    to={`/solutions/${solution.id}`}
                                    onClick={() => setIsSolutionsMegaMenuOpen(false)}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                                  >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                                      <solution.icon size={24} className="text-white" />
                                    </div>
                                    <div>
                                      <h3 className="text-base font-bold text-slate-800">
                                        {solution.title}
                                      </h3>
                                      <p className="text-sm text-slate-500">
                                        {solution.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="px-8 py-4 bg-gradient-to-r from-slate-50 to-gray-50 border-t border-gray-200 flex items-center justify-between">
                              <Link
                                to="/solutions"
                                onClick={() => setIsSolutionsMegaMenuOpen(false)}
                                className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors flex items-center gap-1"
                              >
                                View All Solutions
                                <HiChevronRight size={16} />
                              </Link>
                              <Link
                                to="/contact"
                                onClick={() => setIsSolutionsMegaMenuOpen(false)}
                                className="text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors"
                              >
                                Contact Our Experts
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isScrolled || !isHomePage
                      ? isActive
                        ? 'text-cyan-600'
                        : 'text-slate-700 hover:text-cyan-500'
                      : isActive
                        ? 'text-cyan-400'
                        : 'text-white hover:text-cyan-300'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}
            <AnimatePresence>
              {isSearchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 240, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full px-4 py-2 rounded-full border-2 transition-all duration-300 focus:outline-none ${
                      isScrolled || !isHomePage
                        ? 'bg-gray-100 border-gray-300 focus:border-cyan-500 text-slate-800'
                        : 'bg-white/20 border-white/30 focus:border-cyan-400 text-white placeholder-white/60'
                    }`}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-all duration-300 hover:bg-gray-200/50 ${
                isScrolled || !isHomePage ? 'text-slate-700' : 'text-white'
              }`}
            >
              <HiSearch size={22} />
            </button>

            {/* CTA */}
            <Link to="/contact">
              <button className="ml-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className={`lg:hidden ${
              isScrolled || !isHomePage ? 'text-slate-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-semibold text-slate-800 hover:text-cyan-600"
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-gray-200" />
                {/* Categories on Mobile */}
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Product Categories</h3>
                  <div className="space-y-2">
                    {productCategories.map((cat, idx) => (
                      <Link
                        key={idx}
                        to={cat.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 py-2 text-slate-700 hover:text-cyan-600"
                      >
                        <cat.icon size={18} className="text-cyan-500" />
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <hr className="border-gray-200" />
                {/* Solutions on Mobile */}
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Solar Solutions</h3>
                  <div className="space-y-2">
                    {solarSolutions.map((sol, idx) => (
                      <Link
                        key={idx}
                        to={`/solutions/${sol.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 py-2 text-slate-700 hover:text-cyan-600"
                      >
                        <sol.icon size={18} className="text-cyan-500" />
                        {sol.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
