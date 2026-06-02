import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiSearch, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All Products', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All Products' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-poppins font-bold mb-6 text-text-primary"
          >
            Explore Our <span className="text-primary">Catalog</span>
          </motion.h1>
          <p className="text-text-secondary text-lg max-w-2xl">
            Discover the most advanced industrial fluid solutions engineered for performance, reliability, and the future.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border text-sm whitespace-nowrap transition-all duration-300 hover:shadow-xl ${
                  activeCategory === cat 
                  ? 'bg-primary border-primary text-white shadow-blue-glow' 
                  : 'glass border-black/10 text-text-primary hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-black/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-primary transition-colors text-text-primary"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group glass-dark rounded-3xl p-4 transition-all duration-500 hover:shadow-blue-glow border border-black/5 hover:border-primary/20"
              >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 py-1 px-3 bg-gradient-to-r from-cyan-600 to-blue-500 text-[10px] font-bold text-white rounded-full uppercase tracking-wider shadow-lg">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link to={`/product/${product.id}`} className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center hover:scale-110 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg">
                    <FiEye size={24} />
                  </Link>
                </div>
              </div>

              <div className="px-2">
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{product.category}</p>
                <h3 className="text-xl font-poppins font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Products;
