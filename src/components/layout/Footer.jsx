import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-black/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-premium-gradient rounded-lg flex items-center justify-center shadow-blue-glow">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-poppins font-bold tracking-tighter text-text-primary">
                EURECON<span className="text-primary">PUMPS</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Leading the future of industrial fluid solutions with cutting-edge technology and premium engineering. 
              Efficiency, durability, and innovation in every pump.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaFacebookF, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaLinkedinIn, href: "#" },
                { Icon: FaInstagram, href: "https://www.instagram.com/eurecon_pumps?utm_source=qr&igsh=MXRkemVmZXI3b2s5dQ==" },
                { Icon: FaYoutube, href: "https://youtube.com/@eureconpumps8330?si=yOLE1nNqthhvENWK" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300 border border-transparent hover:shadow-lg"
                >
                  <item.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-poppins font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Industrial Solutions', path: '/solutions' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text-primary font-poppins font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-text-secondary text-sm">
                <FiMapPin className="text-primary mt-1 shadow-blue-glow" size={18} />
                <span> BLOCK C1 FF 27-28, D.M. TOWER, RAWABHATA, DM TOWER, Raipur, Raipur, Chhattisgarh, 493221 </span>
              </li>
              <li className="flex items-center gap-4 text-text-secondary text-sm">
                <FiPhone className="text-primary shadow-blue-glow" size={18} />
                <span>+91 9575121555</span>
              </li>
              <li className="flex items-center gap-4 text-text-secondary text-sm">
                <FiMail className="text-primary shadow-blue-glow" size={18} />
                <span>info@eureconpumps.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-text-primary font-poppins font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-text-secondary text-sm mb-6">Subscribe to get the latest industrial insights and product updates.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white border border-black/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-primary transition-colors text-text-primary"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-premium-gradient text-white px-4 py-1.5 rounded-full text-sm font-bold hover:shadow-blue-glow transition-all duration-300">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © 2026 Eurecon Pumps. All rights reserved. Designed for the Future.
          </p>
          <div className="flex gap-8 text-xs text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
