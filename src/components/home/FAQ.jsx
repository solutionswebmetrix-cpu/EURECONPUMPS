import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: "What is the typical lead time for custom pump solutions?",
    a: "Custom solutions typically take 4-8 weeks from design approval to delivery, depending on the complexity and specialized material requirements. For urgent requirements, we offer expedited manufacturing options to meet your project deadlines."
  },
  {
    q: "Do you provide on-site maintenance services?",
    a: "Yes, we have a global network of certified technicians who provide on-site installation, commissioning, and preventive maintenance services 24/7. Our service team is equipped to handle emergency repairs, routine maintenance, and system optimization to ensure maximum uptime."
  },
  {
    q: "Are your pumps compatible with IoT monitoring systems?",
    a: "Absolutely. All our premium series pumps come with integrated sensors and can be connected to our Eurecon Smart Cloud or your existing SCADA systems. Our IoT solutions provide real-time monitoring of pump performance, energy consumption, and predictive maintenance alerts."
  },
  {
    q: "What materials are used for corrosive fluid handling?",
    a: "We use high-grade materials including Duplex Stainless Steel, Titanium, and specialized Hastelloy alloys to ensure maximum longevity in corrosive environments. Our engineering team can recommend the best material based on your specific fluid and application requirements."
  },
  {
    q: "What warranty do you offer on your products?",
    a: "We offer comprehensive warranties on all our products, ranging from 1 to 3 years depending on the product category. Our warranties cover manufacturing defects and ensure that your investment is protected. We also offer extended warranty options for additional peace of mind."
  },
  {
    q: "Do you provide installation and commissioning services?",
    a: "Yes, our certified technicians provide complete installation and commissioning services to ensure that your pump system operates at optimal performance from day one. We also provide training for your staff on proper operation and maintenance procedures."
  },
  {
    q: "What is the energy efficiency of your pumps?",
    a: "Our pumps are designed for maximum energy efficiency, with many models featuring IE3 and IE4 premium efficiency motors. Our engineering team continuously works on improving hydraulic designs to minimize energy consumption and reduce operational costs for our customers."
  },
  {
    q: "Can you help with system design and optimization?",
    a: "Absolutely. Our experienced engineering team provides complete system design services, including pump selection, piping layout, and optimization to ensure that your fluid handling system operates at peak efficiency and reliability."
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
