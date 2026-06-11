import { motion } from 'framer-motion';
import { FiShield, FiCpu, FiClock, FiSettings } from 'react-icons/fi';

const features = [
  {
    icon: FiShield,
    title: 'Unmatched Durability',
    desc: 'Our pumps are built with premium materials including stainless steel, cast iron, and specialized alloys to withstand the harshest industrial conditions, ensuring long service life and minimal maintenance.',
  },
  {
    icon: FiCpu,
    title: 'Smart Technology',
    desc: 'Integrated IoT sensors for real-time monitoring, predictive maintenance alerts, and energy consumption tracking, helping you optimize performance and reduce operational costs.',
  },
  {
    icon: FiClock,
    title: '24/7 Support',
    desc: 'Global network of certified engineers and technicians ready to assist you anytime, anywhere in the world, with emergency response services available around the clock.',
  },
  {
    icon: FiSettings,
    title: 'Custom Engineering',
    desc: 'Tailored solutions designed specifically for your unique operational requirements, including custom pump designs, materials, and configurations to meet your exact needs.',
  },
];

const stats = [
  { value: '10K+', label: 'Global Customers' },
  { value: '500+', label: 'Premium Products' },
  { value: '15+', label: 'Years Experience' },
  { value: '24h', label: 'Fast Delivery' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase mb-6 block">Why Choose Eurecon</span>
            <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-8 leading-tight text-text-primary">
              Pioneering the <span className="text-primary">Fluid Evolution</span>
            </h2>
            <p className="text-text-secondary text-lg mb-12 leading-relaxed">
              With over 15 years of excellence, we combine futuristic design with heavy-duty engineering 
              to provide the most reliable industrial solutions on the planet. Our commitment to quality, 
              innovation, and customer satisfaction has made us a trusted partner for thousands of businesses 
              worldwide, delivering sustainable, energy-efficient fluid handling solutions that drive 
              productivity and profitability.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-3xl p-6 border-l-4 border-primary shadow-xl"
                >
                  <p className="text-3xl font-poppins font-bold text-text-primary mb-1">{stat.value}</p>
                  <p className="text-text-secondary text-xs uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`glass p-8 rounded-3xl transition-all duration-500 hover:bg-gray-50 group hover:shadow-xl border border-black/5 ${
                  idx % 2 === 1 ? 'lg:translate-y-12' : ''
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-blue-glow-sm">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-poppins font-bold text-text-primary mb-4">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
