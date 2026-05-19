import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiStar, FiCheck, FiArrowLeft, FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();

  // Find product by id
  const product = products.find(p => p.id === parseInt(id)) || products[0];

  // Images fallback if only one image exists in data
  const productImages = product.images || [product.image];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Link to="/products" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-all duration-300 mb-12 group">
          <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square rounded-[40px] overflow-hidden glass border border-black/10 shadow-xl"
            >
              <img src={productImages[0]} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="grid grid-cols-3 gap-6">
              {productImages.map((img, idx) => (
                <div key={idx} className="aspect-square rounded-2xl overflow-hidden glass border border-black/10 cursor-pointer hover:border-primary transition-all duration-300 shadow-lg">
                  <img src={img} alt={product.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-primary font-bold tracking-widest uppercase text-sm"
              >
                {product.category}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-poppins font-bold mt-4 mb-6 text-text-primary"
              >
                {product.name}
              </motion.h1>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => <FiStar key={i} fill="currentColor" className="shadow-blue-glow-sm" />)}
                  <span className="text-text-primary font-bold ml-2">{product.rating || '4.8'}</span>
                </div>
                <span className="text-text-secondary">({product.reviews || '45'} customer reviews)</span>
              </div>
              <p className="text-4xl font-bold text-text-primary mb-8 shadow-blue-glow-sm">{product.price}</p>
              <p className="text-text-secondary text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-poppins text-text-primary">Key Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between p-4 glass rounded-2xl border border-black/5 hover:border-primary/20 transition-all duration-300">
                    <span className="text-text-secondary">{spec.label}</span>
                    <span className="text-text-primary font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-black/5">
              <div className="flex items-center gap-4 bg-gray-50 rounded-full px-6 py-4 border border-black/10">
                <button className="text-text-secondary hover:text-text-primary transition-colors"><FiMinus /></button>
                <span className="text-text-primary font-bold text-xl min-w-[40px] text-center">1</span>
                <button className="text-text-secondary hover:text-text-primary transition-colors"><FiPlus /></button>
              </div>
              <Link to="/cart" className="flex-grow">
                <button className="w-full bg-premium-gradient text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 shadow-blue-glow hover:shadow-red-glow hover:scale-[1.02] transition-all duration-500">
                  <FiShoppingCart size={20} /> Add to Cart
                </button>
              </Link>
            </div>

            <div className="flex gap-8 pt-6">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <FiCheck className="text-primary shadow-blue-glow-sm" /> Lifetime Warranty
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <FiCheck className="text-primary shadow-blue-glow-sm" /> Global Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
