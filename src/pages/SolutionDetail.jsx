import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheck, FiMail, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { solarSolutions } from '../data/solutions';
import { useState } from 'react';

const SolutionDetail = () => {
  const { solutionSlug } = useParams();
  const solution = solarSolutions.find(s => s.id === solutionSlug) || solarSolutions[0];
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Back Button */}
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-all duration-300 mb-12 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Solutions
        </Link>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 shadow-lg`}>
                <solution.icon size={32} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 text-text-primary">
                {solution.title}
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                {solution.description}
              </p>
              <Link to="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-10 rounded-full flex items-center gap-3 shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-500">
                  <FiMail size={20} /> Get Quote
                </button>
              </Link>
            </div>
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-black/10">
              <img
                src={solution.heroImage}
                alt={solution.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Overview Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-text-primary">Service Overview</h2>
          <div className="glass p-8 rounded-3xl border border-black/10">
            <p className="text-lg text-text-secondary leading-relaxed">
              {solution.overview}
            </p>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-text-primary">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 glass rounded-3xl border border-black/10 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheck className="text-white" size={16} />
                  </div>
                  <p className="text-text-secondary font-medium">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-text-primary">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 glass rounded-3xl border border-black/10 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500" />
                  <span className="text-text-primary font-semibold">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-text-primary">Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {solution.applications.map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-4 text-center glass rounded-2xl border border-black/10 hover:border-primary/20 transition-all duration-300"
              >
                <p className="text-text-secondary font-medium">{app}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-12 text-text-primary">Process Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 -translate-x-1/2" />
            
            <div className="space-y-12">
              {solution.process.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 items-center`}
                >
                  <div className="flex-1">
                    <div className="glass p-6 rounded-3xl border border-black/10 hover:border-primary/20 transition-all duration-300">
                      <h3 className="text-xl font-bold text-text-primary mb-2">{step.title}</h3>
                      <p className="text-text-secondary">{step.desc}</p>
                    </div>
                  </div>
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 flex items-center justify-center shadow-lg z-10 border-4 border-white`}>
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-text-primary">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {solution.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-3xl border border-black/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between"
                >
                  <span className="font-semibold text-text-primary">{faq.question}</span>
                  {openFaq === idx ? (
                    <FiChevronUp className="text-primary" size={20} />
                  ) : (
                    <FiChevronDown className="text-text-secondary" size={20} />
                  )}
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-6 pb-6 text-text-secondary"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative">
          <div className="glass p-12 md:p-24 rounded-[60px] text-center border border-black/5 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 text-text-primary">{solution.ctaTitle}</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
                {solution.ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-500">
                    Contact Us Today
                  </button>
                </Link>
                <Link to="/solutions">
                  <button className="border-2 border-primary/50 text-primary font-bold py-4 px-10 rounded-full hover:bg-primary hover:text-white transition-all duration-500">
                    View All Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SolutionDetail;
