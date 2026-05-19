import { motion } from 'framer-motion';
import { FiTrash2, FiPlus, FiMinus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = [];

  const subtotal = cartItems.reduce((acc, item) => acc + (typeof item.price === 'string' ? parseInt(item.price.replace(/[^\d]/g, '')) : item.price) * item.quantity, 0);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-12 text-text-primary">Your <span className="text-primary">Cart</span></h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-dark p-6 rounded-[30px] flex flex-col md:flex-row items-center gap-8 border border-black/5 hover:border-primary/20 transition-all duration-500 shadow-xl"
                >
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl font-bold font-poppins mb-2 text-text-primary">{item.name}</h3>
                    <p className="text-primary font-bold text-lg shadow-blue-glow-sm">₹{item.price}</p>
                  </div>

                  <div className="flex items-center gap-6 bg-gray-50 rounded-full px-6 py-3 border border-black/10">
                    <button className="text-text-secondary hover:text-text-primary transition-colors"><FiMinus /></button>
                    <span className="text-text-primary font-bold">{item.quantity}</span>
                    <button className="text-text-secondary hover:text-text-primary transition-colors"><FiPlus /></button>
                  </div>

                  <button className="text-text-secondary hover:text-secondary transition-colors p-2 hover:shadow-red-glow-sm rounded-full">
                    <FiTrash2 size={24} />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass-dark p-10 rounded-[40px] border border-black/5 sticky top-32 shadow-xl">
                <h3 className="text-2xl font-bold font-poppins mb-8 text-text-primary">Order Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal</span>
                    <span className="text-text-primary font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Shipping</span>
                    <span className="text-text-primary font-bold">Calculated at next step</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Taxes</span>
                    <span className="text-text-primary font-bold">₹0.00</span>
                  </div>
                  <div className="pt-4 border-t border-black/10 flex justify-between">
                    <span className="text-xl font-bold text-text-primary">Total</span>
                    <span className="text-2xl font-bold text-primary shadow-blue-glow-sm">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <Link to="/checkout" className="block w-full">
                  <button className="w-full bg-premium-gradient text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 shadow-blue-glow hover:shadow-red-glow hover:scale-[1.02] transition-all duration-500">
                    Proceed to Checkout <FiArrowRight />
                  </button>
                </Link>

                <p className="text-center text-gray-500 text-xs mt-6">
                  Secure checkout powered by Eurecon Pay
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-24 glass-dark rounded-[40px] border border-black/5">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Your cart is empty</h2>
            <p className="text-text-secondary mb-12">Looks like you haven't added any industrial solutions to your cart yet.</p>
            <Link to="/products">
              <button className="px-12 py-4 bg-premium-gradient text-white font-bold rounded-full shadow-blue-glow hover:shadow-red-glow transition-all duration-500">
                Start Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
