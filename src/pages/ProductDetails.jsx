import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiStar, FiCheck, FiArrowLeft, FiMail, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useState } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  
  // Find product by id
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  
  // Images fallback if only one image exists in data
  const productImages = product.images || [product.image];
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  // Get related products
  const relatedProductsList = product.relatedProducts 
    ? product.relatedProducts.map(relatedId => products.find(p => p.id === relatedId)).filter(Boolean)
    : products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Link to="/products" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-all duration-300 mb-12 group">
          <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square rounded-[40px] overflow-hidden glass border border-black/5 shadow-xl"
            >
              <img src={selectedImage} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="grid grid-cols-3 gap-6">
              {productImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square rounded-2xl overflow-hidden glass border cursor-pointer transition-all duration-300 shadow-lg ${selectedImage === img ? 'border-primary ring-2 ring-primary/30' : 'border-black/5 hover:border-primary/20'}`}
                >
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
                className="text-4xl md:text-5xl font-poppins font-bold mt-4 mb-6 text-text-primary"
              >
                {product.name}
              </motion.h1>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => <FiStar key={i} fill={i < Math.floor(product.rating || 4.8) ? "currentColor" : "none"} className="shadow-blue-glow-sm" />)}
                  <span className="text-text-primary font-bold ml-2">{product.rating || '4.8'}</span>
                </div>
                <span className="text-text-secondary">({product.reviews || '45'} customer reviews)</span>
              </div>

              <p className="text-text-secondary text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Benefits Section */}
            {product.benefits && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-poppins text-text-primary">Key Benefits</h3>
                <div className="grid grid-cols-1 gap-3">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 glass rounded-2xl border border-black/5">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="text-white" size={14} />
                      </div>
                      <p className="text-text-secondary">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

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

            {/* Applications Section */}
            {product.applications && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-poppins text-text-primary">Applications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 glass rounded-xl border border-black/5">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500" />
                      <span className="text-text-secondary">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-black/5">
              <Link to="/contact" className="flex-grow">
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-500">
                  <FiMail size={20} /> Get Quote
                </button>
              </Link>
              <button className="w-full sm:w-auto px-10 bg-white border-2 border-primary/30 text-primary font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all duration-500">
                <FiDownload size={20} /> Download Brochure
              </button>
            </div>

            <div className="flex gap-8 pt-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiCheck className="text-cyan-600" /> Quality Assured
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiCheck className="text-cyan-600" /> After Sales Support
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <section className="mb-24 glass p-12 rounded-[40px] border border-black/5 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-text-primary">
              Inquire About This <span className="text-primary">Product</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Have questions about this product? Fill out the form below and our team will get back to you soon!
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-text-primary mb-3">Full Name</label>
              <input type="text" placeholder="Enter your name" className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-text-primary mb-3">Email Address</label>
              <input type="email" placeholder="Enter your email" className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-text-primary mb-3">Phone Number</label>
              <input type="tel" placeholder="Enter your phone" className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-text-primary mb-3">Company Name</label>
              <input type="text" placeholder="Enter company name" className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-text-primary mb-3">Your Message</label>
              <textarea rows="4" placeholder="Tell us about your requirements..." className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="md:col-span-2 text-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-5 px-16 rounded-full shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-500">
                Submit Inquiry
              </button>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        {relatedProductsList.length > 0 && (
          <section className="py-16 bg-gray-50/50 rounded-[40px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-text-primary">
                Related <span className="text-primary">Products</span>
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Explore similar products that might interest you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProductsList.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group glass-dark rounded-3xl p-4 transition-all duration-500 hover:shadow-blue-glow border border-black/5 hover:border-primary/20"
                >
                  <Link to={`/product/${relatedProduct.id}`} className="block">
                    <div className="relative h-52 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {relatedProduct.badge && (
                        <span className="absolute top-4 left-4 py-1 px-3 bg-gradient-to-r from-cyan-600 to-blue-500 text-[10px] font-bold text-white rounded-full uppercase tracking-wider shadow-lg">
                          {relatedProduct.badge}
                        </span>
                      )}
                    </div>
                    <div className="px-2">
                      <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{relatedProduct.category}</p>
                      <h3 className="text-lg font-poppins font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h3>

                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
