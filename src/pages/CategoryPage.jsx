import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiEye } from 'react-icons/fi';
import { products } from '../data/products';
import { productCategories } from '../data/categories';

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = productCategories.find(cat => cat.id === categorySlug);
  const categoryProducts = products.filter(product => product.category === categorySlug);

  if (!category) {
    return (
      <div className="pt-32 pb-24 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <Link to="/" className="text-cyan-600 hover:text-cyan-700 font-semibold">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors mb-8"
        >
          <FiArrowLeft />
          Back to All Products
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-semibold mb-4`}>
            Product Category
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            {category.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {category.description}
          </p>
        </motion.div>

        {/* Subcategories */}
        {category.subcategories && category.subcategories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Subcategories</h2>
            <div className="flex flex-wrap gap-4">
              {category.subcategories.map((subcat, idx) => (
                <Link 
                  key={idx}
                  to={subcat.path}
                  className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300 hover:shadow-lg"
                >
                  {subcat.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Products or Placeholder */}
        {categoryProducts.length > 0 ? (
          /* Product Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {categoryProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="group bg-white rounded-3xl p-4 transition-all duration-500 hover:shadow-xl border border-gray-200 hover:border-cyan-500/30"
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
                    <p className="text-cyan-600 text-xs font-bold uppercase tracking-widest mb-2">{category.name}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Placeholder Content */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 text-center border border-gray-200"
          >
            <div className="max-w-2xl mx-auto">
              <div className={`w-24 h-24 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl`}>
                <span className="text-white text-5xl">✨</span>
              </div>
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-semibold mb-6`}>
                Coming Soon
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Products Will Be Updated Soon
              </h2>
              <p className="text-gray-600 mb-10 text-lg">
                New products for this category will be available soon. Stay tuned for exciting additions to our {category.name.toLowerCase()} range!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className={`px-8 py-3 bg-gradient-to-r ${category.color} text-white font-semibold rounded-full hover:shadow-xl transition-all transform hover:scale-105`}
                >
                  Get Quote Now
                </Link>
                <Link 
                  to="/products" 
                  className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-full border border-gray-300 hover:border-cyan-500 hover:text-cyan-600 transition-all"
                >
                  Browse All Products
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
