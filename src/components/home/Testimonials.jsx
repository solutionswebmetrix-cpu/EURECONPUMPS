import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { FaQuoteRight } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    name: 'Robert Jenkins',
    role: 'CTO, Global Infra',
    content: 'Eurecon Pumps has completely transformed our cooling systems. The efficiency gains were immediate and the smart monitoring is a game changer.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
  },
  {
    name: 'Sarah Chen',
    role: 'Operations Director',
    content: 'The reliability of these pumps in corrosive environments is unmatched. We have seen a 40% reduction in maintenance costs since switching.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Engineer',
    content: 'Fantastic support and engineering precision. The custom solution they built for our deep-sea project exceeded all performance metrics.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-text-primary">
              Trusted by <span className="text-primary">Industry Leaders</span>
            </h2>
            <p className="text-text-secondary text-lg">
              We've helped thousands of companies optimize their fluid handling processes with our premium 
              industrial solutions.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="testimonial-prev w-12 h-12 rounded-full glass flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all shadow-xl">
              <FiArrowLeft />
            </div>
            <div className="testimonial-next w-12 h-12 rounded-full glass flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all shadow-xl">
              <FiArrowRight />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.testimonial-prev',
            nextEl: '.testimonial-next',
          }}
          autoplay={{ delay: 6000 }}
          className="testimonial-swiper"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="glass-dark p-10 md:p-20 rounded-[60px] border border-black/5 relative shadow-xl"
              >
                <div className="absolute top-10 right-10 text-primary opacity-10">
                  <FaQuoteRight size={80} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary shadow-blue-glow-sm">★</span>
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-text-secondary italic mb-10 leading-relaxed">
                    "{t.content}"
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <img 
                      src={t.image} 
                      alt={t.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-primary/30 shadow-blue-glow"
                    />
                    <div>
                      <h4 className="text-text-primary font-bold text-lg">{t.name}</h4>
                      <p className="text-primary text-sm font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
