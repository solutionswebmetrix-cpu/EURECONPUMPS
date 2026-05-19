import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text-reveal", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements - Side by Side Videos */}
      <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
        <div className="flex-1 relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/assets/Banner/Banner2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex-1 relative overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/assets/Banner/Banner3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/40 z-[1]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-6 rounded-full bg-primary/20 text-white text-sm font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md border border-white/20 shadow-lg">
              Next-Gen Industrial Fluid Tech
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-poppins font-extrabold leading-[1.1] mb-8 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
          >
            <div className="overflow-hidden">
              <span className="hero-text-reveal inline-block">Future of</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-text-reveal inline-block text-transparent bg-clip-text bg-premium-gradient filter drop-shadow-lg">
                Industrial Solutions
              </span>
            </div>
          </motion.h1>
        </div>
      </div>

    </section>
  );
};

export default Hero;
