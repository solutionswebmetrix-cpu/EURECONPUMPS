import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: "What is the typical lead time for custom pump solutions?",
    a: "Custom solutions typically take 4-8 weeks from design approval to delivery, depending on the complexity and specialized material requirements."
  },
  {
    q: "Do you provide on-site maintenance services?",
    a: "Yes, we have a global network of certified technicians who provide on-site installation, commissioning, and preventive maintenance services 24/7."
  },
  {
    q: "Are your pumps compatible with IoT monitoring systems?",
    a: "Absolutely. All our premium series pumps come with integrated sensors and can be connected to our Eurecon Smart Cloud or your existing SCADA systems."
  },
  {
    q: "What materials are used for corrosive fluid handling?",
    a: "We use high-grade materials including Duplex Stainless Steel, Titanium, and specialized Hastelloy alloys to ensure maximum longevity in corrosive environments."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-8 leading-tight text-text-primary">
              Frequently Asked <br />
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-text-secondary text-lg mb-12">
              Everything you need to know about our premium industrial solutions and services. 
              Can't find the answer? Contact our support team.
            </p>
            <Link to="/contact">
              <button className="px-10 py-4 border border-black/10 rounded-full font-bold text-text-primary hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-xl">
                Contact Support
              </button>
            </Link>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-dark rounded-3xl overflow-hidden border border-black/5 transition-all duration-300 hover:border-primary/20 shadow-sm">
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full p-8 flex justify-between items-center text-left hover:bg-black/5 transition-colors"
                >
                  <span className="text-xl font-poppins font-bold text-text-primary pr-8">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 ${activeIndex === idx ? 'bg-primary border-primary text-white rotate-180 shadow-blue-glow' : 'text-gray-400'}`}>
                    <FiChevronDown size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-text-secondary leading-relaxed border-t border-black/5 pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
