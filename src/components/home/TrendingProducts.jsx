import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FiHeart, FiEye, FiShoppingCart } from 'react-icons/fi';
import { products } from '../../data/products';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TrendingProducts = () => {
  const trendingProducts = products.slice(0, 6); // Pehle 6 products trending me dikhayenge
  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-text-primary">
            Trending <span className="text-primary">Innovations</span>
          </h2>
          <p className="text-text-secondary">
            Discover our most sought-after industrial solutions, trusted by global engineering leaders 
            for unmatched reliability and performance.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="product-swiper !pb-16"
        >
          {trendingProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="group glass-dark rounded-3xl p-4 transition-all duration-500 hover:shadow-blue-glow border border-black/5 hover:border-primary/20"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 py-1 px-3 bg-secondary text-[10px] font-bold text-white rounded-full uppercase tracking-wider shadow-red-glow">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link to={`/product/${product.id}`} className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <FiEye size={20} />
                    </Link>
                    <button className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-secondary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                      <FiHeart size={20} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-dark hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                      <FiShoppingCart size={20} />
                    </button>
                  </div>
                </div>

                <div className="px-2">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{product.category}</p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-xl font-poppins font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-2xl font-bold text-text-primary">{product.price}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendingProducts;
