import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { solarSolutions } from '../data/solutions';

const Solutions = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase mb-6 block"
          >
            Solar Solutions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-poppins font-bold mb-8 leading-tight text-text-primary"
          >
            Powering Your <span className="text-primary">Future</span>
          </motion.h1>
          <p className="text-text-secondary text-lg md:text-xl">
            Comprehensive solar energy solutions tailored to meet your energy needs with sustainability and reliability at the core.
          </p>
        </div>

        {/* Solar Solutions Grid */}
        <div className="space-y-20">
          {solarSolutions.map((solution, idx) => (
            <div 
              key={solution.id} 
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
            >
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg`}>
                  <solution.icon size={32} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-poppins font-bold text-text-primary">{solution.title}</h2>
                <p className="text-text-secondary text-lg leading-relaxed">{solution.description}</p>
                <Link to={`/solutions/${solution.id}`}>
                  <button className="px-8 py-4 bg-transparent border-2 border-primary/50 text-primary font-bold rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white hover:border-transparent transition-all duration-500 shadow-blue-glow-sm">
                    Learn More
                  </button>
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 relative group"
              >
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-[40px] overflow-hidden border border-black/10 aspect-video lg:aspect-square shadow-2xl">
                  <img src={solution.heroImage} alt={solution.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-32 glass p-12 md:p-24 rounded-[60px] text-center border border-black/5 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 relative z-10 text-text-primary">Ready to Go Solar?</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12 relative z-10">
            Our solar experts are ready to design a customized solar solution that perfectly fits your energy needs.
          </p>
          <Link to="/contact" className="relative z-10">
            <button className="px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-blue-glow hover:scale-105 transition-all duration-500">
              Get Your Free Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
