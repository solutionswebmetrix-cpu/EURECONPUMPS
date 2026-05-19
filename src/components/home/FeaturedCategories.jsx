import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import four from '../../assets/Four.png';

const categories = [
  {
    title: 'Centrifugal Pumps',
    count: 'High Performance',
    image: one,
    color: 'from-primary/40',
  },
  {
    title: 'Industrial Motors',
    count: 'Heavy Duty',
    image: two,
    color: 'from-secondary/40',
  },
  {
    title: 'Precision Parts',
    count: 'Quality Components',
    image: three,
    color: 'from-primary/40',
  },
  {
    title: 'Portable Systems',
    count: 'Versatile Solutions',
    image: four,
    color: 'from-secondary/40',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-text-primary">
              Industry Specific <span className="text-primary">Categories</span>
            </h2>
            <p className="text-text-secondary">
              Tailored solutions for every sector. Explore our specialized range of high-performance 
              industrial pumps designed for maximum efficiency and longevity.
            </p>
          </div>
          <Link to="/products">
            <button className="text-primary font-bold hover:text-secondary underline underline-offset-8 transition-all duration-300">
              View All Categories
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <Link to="/products" key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent z-10 group-hover:scale-110 transition-transform duration-700`} />
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors duration-500 z-10" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                  </span>
                  <h3 className="text-2xl font-poppins font-bold text-white mb-2 drop-shadow-lg">{cat.title}</h3>
                  <p className="text-white/90 text-sm drop-shadow-md">{cat.count}</p>
                </div>

                {/* Decorative Border Glow */}
                <div className="absolute inset-0 border border-black/5 rounded-3xl group-hover:border-primary/50 transition-colors duration-500 z-30 group-hover:shadow-blue-glow" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
