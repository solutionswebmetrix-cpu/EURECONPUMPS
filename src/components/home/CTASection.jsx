import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="relative rounded-[60px] overflow-hidden bg-gray-50 p-12 md:p-24 border border-black/5 text-center shadow-xl">
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full animate-pulse-glow" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-poppins font-bold mb-8 leading-tight text-text-primary"
            >
              Ready to <span className="text-primary">Optimize</span> Your Operations?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-lg md:text-xl mb-12"
            >
              Join 10,000+ global industry leaders who trust Eurecon for their critical fluid solutions. 
              Let's build the future together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to="/products">
                <button className="px-12 py-5 bg-premium-gradient rounded-full font-bold text-white text-lg flex items-center justify-center gap-3 shadow-blue-glow hover:shadow-red-glow hover:scale-105 transition-all duration-500 w-full">
                  Get Started Now <FiArrowRight />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-12 py-5 glass rounded-full font-bold text-text-primary text-lg border border-black/10 hover:border-primary/50 transition-all duration-500 w-full shadow-lg">
                  Talk to an Expert
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Floating Particles Simulation */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity
                }}
                className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-primary shadow-blue-glow' : 'bg-secondary shadow-red-glow'}`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
