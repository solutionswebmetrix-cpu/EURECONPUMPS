import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

const values = [
  { icon: FiTarget, title: 'Our Mission', desc: 'To revolutionize industrial fluid handling through sustainable innovation and engineering excellence, delivering reliable, energy-efficient solutions that empower businesses worldwide to operate more productively and responsibly.' },
  { icon: FiEye, title: 'Our Vision', desc: 'To be the global leader in high-performance pump technology, setting the standard for efficiency, durability, and customer-centric innovation while driving the transition to sustainable industrial practices.' },
  { icon: FiHeart, title: 'Our Values', desc: 'Integrity, precision, and a relentless focus on customer success drive everything we do. We are committed to quality, innovation, and environmental responsibility in every product we manufacture and every service we provide.' },
];

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-12 mb-32 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase mb-6 block"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-poppins font-bold mb-12 leading-tight text-text-primary"
          >
            Defining the <span className="text-primary">Future</span> of Industry
          </motion.h1>
          <p className="text-text-secondary text-xl md:text-2xl leading-relaxed">
            Founded in 2010, Eurecon Pumps emerged with a singular vision: to create the world's most 
            efficient and reliable industrial fluid solutions. Today, we are at the forefront of the 
            engineering revolution, blending futuristic design with heavy-duty performance. Our comprehensive 
            product portfolio includes submersible pumps, openwell pumps, borewell pumps, control panels, 
            and solar-powered solutions, serving diverse industries such as agriculture, water treatment, 
            manufacturing, construction, and more. With a commitment to quality, innovation, and customer 
            satisfaction, we continue to push the boundaries of what's possible in fluid handling technology.
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <div className="container mx-auto px-6 md:px-12 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-12 rounded-[40px] border border-black/5 hover:border-primary/30 transition-all group hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <value.icon size={32} />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-text-primary mb-6">{value.title}</h3>
              <p className="text-text-secondary leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-32 border-y border-black/5 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: FiUsers, value: '10K+', label: 'Global Clients' },
              { icon: FiAward, value: '50+', label: 'Industry Awards' },
              { icon: FiTrendingUp, value: '99.9%', label: 'Efficiency Rate' },
              { icon: FiTarget, value: '15+', label: 'Years Experience' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex justify-center text-primary mb-4 shadow-blue-glow-sm"><stat.icon size={32} /></div>
                <h4 className="text-4xl md:text-6xl font-poppins font-bold text-text-primary">{stat.value}</h4>
                <p className="text-text-secondary uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team/Philosophy */}
      <div className="container mx-auto px-6 md:px-12 py-40">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-8 leading-tight text-text-primary">
              Engineering <span className="text-primary">Mastery</span> in Every Detail
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Our team consists of over 200 world-class engineers and designers who share a passion for 
              excellence. We invest heavily in R&D to ensure that every Eurecon pump is not just a 
              machine, but a masterpiece of modern engineering.
            </p>
            <div className="space-y-4">
              {['Proprietary Flow Technology', 'Eco-Friendly Manufacturing', 'Smart IoT Integration'].map((item) => (
                <div key={item} className="flex items-center gap-4 text-text-primary font-bold">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-blue-glow-sm" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
              className="relative rounded-[40px] border border-black/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              alt="Engineering Team"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
