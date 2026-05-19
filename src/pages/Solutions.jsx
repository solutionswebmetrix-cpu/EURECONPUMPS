import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCpu, FiDroplet, FiSettings, FiActivity, FiGlobe, FiShield } from 'react-icons/fi';

const solutions = [
  {
    title: 'Smart Flow Monitoring',
    icon: FiActivity,
    desc: 'Real-time data analytics and IoT integration for predictive maintenance of industrial pump systems.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
  },
  {
    title: 'Corrosive Environment Handling',
    icon: FiDroplet,
    desc: 'Specialized titanium and duplex steel solutions designed to withstand the most aggressive chemical processes.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
  },
  {
    title: 'Energy Optimization',
    icon: FiSettings,
    desc: 'Advanced variable speed drives and high-efficiency motors that reduce energy consumption by up to 40%.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
  },
  {
    title: 'Global Remote Support',
    icon: FiGlobe,
    desc: '24/7 remote diagnostics and on-site engineering support across 50+ countries worldwide.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80',
  },
];

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
            Industrial Solutions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-poppins font-bold mb-8 leading-tight text-text-primary"
          >
            Engineering the <span className="text-primary">Impossible</span>
          </motion.h1>
          <p className="text-text-secondary text-lg md:text-xl">
            We don't just sell pumps; we provide comprehensive engineering solutions that optimize 
            your operations and future-proof your industrial infrastructure.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-32">
          {solutions.map((solution, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-blue-glow-sm">
                  <solution.icon size={32} />
                </div>
                <h2 className="text-3xl md:text-5xl font-poppins font-bold text-text-primary">{solution.title}</h2>
                <p className="text-text-secondary text-lg leading-relaxed">{solution.desc}</p>
                <button className="px-8 py-4 bg-transparent border border-primary/50 text-primary font-bold rounded-full hover:bg-premium-gradient hover:text-white hover:border-transparent transition-all duration-500 shadow-blue-glow-sm">
                  Learn More
                </button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 relative group"
              >
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-[40px] overflow-hidden border border-black/10 aspect-video lg:aspect-square shadow-2xl">
                  <img src={solution.image} alt={solution.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-40 glass p-12 md:p-24 rounded-[60px] text-center border border-black/5 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full animate-pulse-glow" />
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 relative z-10 text-text-primary">Need a Custom Solution?</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12 relative z-10">
            Our expert engineers are ready to design a tailored fluid handling system that meets your 
            specific industrial requirements.
          </p>
          <Link to="/contact" className="relative z-10">
            <button className="px-12 py-5 bg-premium-gradient text-white font-bold rounded-full shadow-blue-glow hover:shadow-red-glow hover:scale-105 transition-all duration-500">
              Consult Our Experts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
