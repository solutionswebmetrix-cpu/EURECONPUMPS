import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Zap, 
  Sun, 
  ChevronRight, 
  ArrowRight, 
  Cable, 
  Cylinder
} from 'lucide-react';

const ProductCategories = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="text-primary font-bold tracking-[0.3em] uppercase mb-4 block"
          >
            Product Range
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 text-text-primary"
          >
            Our Product Categories
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-orange-500 rounded-full" />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto"
          >
            Advanced Pumping, Electrical & Solar Energy Solutions
          </motion.p>
        </motion.div>

        {/* Category 1 - Submersible Pump Set */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 overflow-hidden relative group transition-all duration-500 hover:shadow-blue-glow hover:-translate-y-2"
            whileHover={{ y: -10 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400" />
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-blue-glow-sm">
                  <Droplets size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-poppins font-bold text-text-primary">
                    Submersible Pump Set
                  </h3>
                  <p className="text-text-secondary">
                    High Performance Borewell & Openwell Pump Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Borewell Pump Set */}
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl border border-slate-100 hover:border-primary/30 group-hover:shadow-blue-glow-sm transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="p-8">
                  <h4 className="text-2xl font-poppins font-bold text-text-primary mb-3">
                    Borewell Pump Set
                  </h4>
                  <p className="text-text-secondary mb-6">
                    Durable and energy efficient borewell pump systems for deep water applications.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-text-primary mb-3">
                    Pump Material Types:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['SS Pumps', 'CI Pumps', 'Noryl Pumps'].map((material) => (
                        <span key={material} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-text-primary mb-3">
                    Available Models:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['V3', 'V4', 'V5', 'V6', 'V7', 'V8'].map(model => (
                        <span key={model} className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm font-bold">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link to="/category/borewell-pump-set">
                    <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-blue-glow-sm">
                      View Products <ChevronRight size={18} />
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Openwell Pump Set */}
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl border border-slate-100 hover:border-primary/30 group-hover:shadow-blue-glow-sm transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="p-8">
                  <h4 className="text-2xl font-poppins font-bold text-text-primary mb-3">
                    Openwell Pump Set
                  </h4>
                  <p className="text-text-secondary mb-6">
                    Reliable horizontal and vertical openwell pumps for agricultural and industrial applications.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-text-primary mb-3">
                    Pump Types:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Horizontal Pumps', 'Vertical Pumps'].map(type => (
                        <span key={type} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-text-primary mb-3">
                    Available Series:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Mini', 'V7', 'V8', 'V9'].map(series => (
                        <span key={series} className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm font-bold">
                          {series}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {['Heavy Duty', 'Energy Efficient', 'Long Life'].map(badge => (
                        <span key={badge} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link to="/category/openwell-pump-set">
                    <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-blue-glow-sm">
                      View Products <ChevronRight size={18} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Category 2 - Control Panel & Power Capacitor */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 overflow-hidden relative group transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            whileHover={{ y: -10 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-700 to-slate-500" />
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-slate-700/10 rounded-2xl flex items-center justify-center text-slate-700">
                  <Zap size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-poppins font-bold text-text-primary">
                    Control Panel & Power Capacitor
                  </h3>
                  <p className="text-text-secondary">
                    Reliable Electrical Control & Motor Protection Systems
                  </p>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                'Single Phase Panel',
                'Three Phase Panel',
                'DOL Starter',
                'Motor Capacitor',
                'Submersible Capacitor'
              ].map((product, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <h5 className="text-lg font-poppins font-bold text-text-primary">
                    {product}
                  </h5>
                </motion.div>
              ))}
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 justify-center">
              {['Shock Resistant', 'Safe Operation', 'Durable'].map((badge, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  className="px-5 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-bold border border-slate-300"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/category/control-panel-power-capacitor">
                <button className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all duration-300 hover:shadow-lg">
                  Explore More <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Category 3 - Solar Products */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-100 overflow-hidden relative group transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            whileHover={{ y: -10 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-400" />
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 animate-glow-pulse">
                  <Sun size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-poppins font-bold text-text-primary">
                    Solar Products
                  </h3>
                  <p className="text-text-secondary">
                    Complete Solar Energy & Renewable Power Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                'Solar Pump & Controller',
                'Solar Rooftop',
                'Solar Power Plant',
                'Solar Inverter',
                'Solar Panel',
                'Solar Street Light',
                'Poles & High Mast',
                'Structure for Solar Pump',
                'Structure for Rooftop & Power Plant'
              ].map((product, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-white border border-orange-100 hover:border-orange-300 group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <h5 className="text-lg font-poppins font-bold text-text-primary">
                    {product}
                  </h5>
                </motion.div>
              ))}
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 justify-center">
              {['Eco Friendly', 'Smart Energy', 'Low Maintenance'].map((badge, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  className="px-5 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold border border-orange-200"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/category/solar-products">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:shadow-xl">
                  Explore More <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Category 4 - Wire & Cables */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="my-24"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 overflow-hidden relative group transition-all duration-500 hover:shadow-blue-glow hover:-translate-y-2"
            whileHover={{ y: -10 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-500" />
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-blue-glow-sm animate-glow-pulse">
                  <Cable size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-poppins font-bold text-text-primary">
                    Wire & Cables
                  </h3>
                  <p className="text-text-secondary">
                    Reliable Electrical Wiring & Power Transmission Solutions
                  </p>
                </div>
              </div>
              <p className="text-text-secondary text-lg">
                High-quality industrial and residential wires & cables designed for safety, durability, and efficient power distribution.
              </p>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                'House Wiring Cables',
                'Industrial Power Cables',
                'Flexible Wires',
                'Armoured Cables',
                'PVC Insulated Wires',
                'Copper Cables',
                'Aluminium Cables',
                'Submersible Flat Cables'
              ].map((product, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/30 group-hover:shadow-blue-glow-sm transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <h5 className="text-lg font-poppins font-bold text-text-primary">
                    {product}
                  </h5>
                </motion.div>
              ))}
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 justify-center">
              {['Fire Resistant', 'Heavy Duty', 'High Conductivity', 'Long Life'].map((badge, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  className="px-5 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold border border-orange-200"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/category/wire-cables">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-500 hover:to-primary transition-all duration-300 hover:shadow-xl">
                  Explore Products <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Category 5 - HDPE Pipes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100 overflow-hidden relative group transition-all duration-500 hover:shadow-blue-glow hover:-translate-y-2"
            whileHover={{ y: -10 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400" />
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-blue-glow-sm">
                  <Cylinder size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-poppins font-bold text-text-primary">
                    HDPE Pipes
                  </h3>
                  <p className="text-text-secondary">
                    Durable High-Pressure Piping Solutions
                  </p>
                </div>
              </div>
              <p className="text-text-secondary text-lg">
                Premium quality HDPE pipes engineered for agriculture, water supply, industrial, and underground applications.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                'Agricultural HDPE Pipes',
                'Water Supply Pipes',
                'Borewell Pipes',
                'Industrial HDPE Pipes',
                'Underground Pipeline Systems',
                'High Pressure HDPE Pipes',
                'Flexible HDPE Pipe Solutions'
              ].map((product, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-white border border-blue-100 hover:border-blue-300 group-hover:shadow-blue-glow-sm transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <h5 className="text-lg font-poppins font-bold text-text-primary">
                    {product}
                  </h5>
                </motion.div>
              ))}
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 justify-center">
              {['Corrosion Resistant', 'Leak Proof', 'High Strength', 'Long Lasting'].map((badge, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold border border-blue-200"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/category/hdpe-pipes">
                <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-blue-glow-sm">
                  View Products <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
