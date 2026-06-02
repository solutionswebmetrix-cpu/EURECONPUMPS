import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

const VideoShowcase = () => {
  return (
    <section className="py-24 relative min-h-[600px] flex items-center overflow-hidden bg-white">
      {/* Video Background Placeholder (Image for now) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80" 
          alt="Industrial Video"
          className="w-full h-full object-cover grayscale opacity-10"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 inline-block"
        >
          <button className="w-24 h-24 rounded-full bg-premium-gradient text-white flex items-center justify-center shadow-blue-glow hover:scale-110 transition-transform duration-500 relative group">
            <FiPlay size={32} className="ml-2 shadow-blue-glow-sm" />
            <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping opacity-20" />
            <div className="absolute inset-[-10px] rounded-full border border-black/10 group-hover:border-primary/50 transition-colors duration-500" />
          </button>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-poppins font-bold mb-8 max-w-4xl mx-auto leading-tight text-text-primary"
        >
          Experience the <span className="text-primary">Engineering Mastery</span> In Action
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-lg max-w-2xl mx-auto mb-12"
        >
          Take a deep dive into our manufacturing process and see how we redefine 
          industrial standards with precision and passion.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { label: 'Precision Engineering', icon: '01' },
            { label: 'Quality Control', icon: '02' },
            { label: 'Global Logistics', icon: '03' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="glass p-6 rounded-2xl flex items-center gap-6 group hover:border-primary/30 transition-all duration-500 cursor-default hover:shadow-xl"
            >
              <span className="text-3xl font-poppins font-black text-black/5 group-hover:text-primary/20 transition-colors duration-500">
                {item.icon}
              </span>
              <span className="text-text-primary font-bold tracking-wide text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
