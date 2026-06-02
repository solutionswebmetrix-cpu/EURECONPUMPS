import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import TrendingProducts from '../components/home/TrendingProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import BrandShowcase from '../components/home/BrandShowcase';
import VideoShowcase from '../components/home/VideoShowcase';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <BrandShowcase />
      <FeaturedCategories />
      <VideoShowcase />
      <TrendingProducts />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Home;
