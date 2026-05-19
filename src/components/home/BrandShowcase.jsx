import { motion } from 'framer-motion';

const brands = [
  'SIEMENS', 'ABB', 'GRUNDFOS', 'KSB', 'FLOWSERVE', 'SULZER', 'WILO', 'DANFOSS'
];

const BrandShowcase = () => {
  return (
    <section className="py-20 bg-[#0f172a] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-white/40 text-xs font-bold tracking-[0.5em] uppercase">
          Trusted by Industry Giants
        </p>
      </div>

      <div className="flex relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-20 items-center whitespace-nowrap min-w-full"
        >
          {[...brands, ...brands].map((brand, idx) => (
            <span 
              key={idx} 
              className="text-4xl md:text-6xl font-poppins font-black text-white/10 hover:text-primary transition-all duration-500 cursor-default select-none hover:scale-110"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandShowcase;
