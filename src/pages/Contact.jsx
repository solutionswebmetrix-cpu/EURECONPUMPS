import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-poppins font-bold mb-6 text-text-primary"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <p className="text-text-secondary text-lg">
            Have a project in mind or need technical support? Our team of experts is ready to assist you 
            with premium industrial solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: FiMail, title: 'Email Us', info: 'info@eureconpumps.com', sub: 'Support 24/7' },
                { icon: FiPhone, title: 'Call Us', info: '+91 9575121555', sub: 'Mon-Fri, 9am-6pm' },
                { icon: FiMapPin, title: 'Visit Us', info: 'Block C1 FF 27-28, D.M. Tower, Rawabhata', sub: 'Raipur, Chhattisgarh, 493221, India' },
                { icon: FiClock, title: 'Response Time', info: 'Under 2 Hours', sub: 'For all inquiries' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-3xl border border-black/5 hover:border-primary/30 transition-all group hover:shadow-xl duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-blue-glow-sm">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-text-primary font-bold mb-2">{item.title}</h3>
                  <p className="text-text-primary font-poppins text-lg mb-1">{item.info}</p>
                  <p className="text-text-secondary text-sm">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass p-10 rounded-[40px] border border-black/5 shadow-xl">
              <h3 className="text-2xl font-poppins font-bold mb-8 text-text-primary">Follow Our Progress</h3>
              <div className="flex gap-6">
                {[FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-14 h-14 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300 border border-transparent hover:shadow-xl">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-dark p-10 md:p-16 rounded-[50px] border border-black/5 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full animate-pulse-glow" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-text-secondary text-sm px-4">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-text-secondary text-sm px-4">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-text-secondary text-sm px-4">Subject</label>
                <select className="w-full bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option className="bg-white">Product Inquiry</option>
                  <option className="bg-white">Technical Support</option>
                  <option className="bg-white">Custom Solution</option>
                  <option className="bg-white">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-text-secondary text-sm px-4">Message</label>
                <textarea rows="5" placeholder="Tell us about your requirements..." className="w-full bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
              </div>
              
              <button className="w-full bg-premium-gradient text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 shadow-blue-glow hover:shadow-red-glow hover:scale-[1.02] transition-all duration-500 group">
                Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
