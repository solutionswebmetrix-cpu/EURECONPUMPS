import { motion } from 'framer-motion';
import { FiLock, FiCreditCard, FiTruck, FiCheckCircle } from 'react-icons/fi';

const Checkout = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-text-primary">Checkout</h1>
            
            {/* Shipping Info */}
            <section className="space-y-8">
              <h3 className="text-2xl font-bold font-poppins flex items-center gap-4 text-text-primary">
                <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm shadow-blue-glow-sm">01</span>
                Shipping Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                <input type="text" placeholder="Last Name" className="bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                <input type="email" placeholder="Email Address" className="md:col-span-2 bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                <input type="text" placeholder="Street Address" className="md:col-span-2 bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                <input type="text" placeholder="City" className="bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                <input type="text" placeholder="Zip Code" className="bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors" />
              </div>
            </section>

            {/* Payment Method */}
            <section className="space-y-8">
              <h3 className="text-2xl font-bold font-poppins flex items-center gap-4 text-text-primary">
                <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm shadow-blue-glow-sm">02</span>
                Payment Method
              </h3>
              <div className="glass-dark p-8 rounded-[40px] border border-black/5 shadow-xl">
                <div className="flex gap-4 mb-8">
                  <button className="flex-1 py-4 glass rounded-2xl border-primary text-primary font-bold shadow-blue-glow">Credit Card</button>
                  <button className="flex-1 py-4 glass rounded-2xl border-black/10 text-text-secondary hover:border-primary transition-all">PayPal</button>
                </div>
                <div className="space-y-6">
                  <input type="text" placeholder="Card Number" className="w-full bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                    <input type="text" placeholder="CVV" className="bg-gray-50 border border-black/10 rounded-2xl py-4 px-6 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Order Review */}
          <div>
            <div className="glass-dark p-10 rounded-[40px] border border-black/5 sticky top-32 shadow-xl">
              <h3 className="text-2xl font-bold font-poppins mb-8 text-text-primary">Review Order</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-text-primary font-bold text-sm">Industrial Centrifugal P1</p>
                    <p className="text-text-secondary text-xs">Qty: 1</p>
                  </div>
                  <p className="text-text-primary font-bold">$1,299</p>
                </div>
              </div>

              <div className="space-y-4 border-t border-black/5 pt-6 mb-8">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal</span>
                  <span className="text-text-primary font-bold">$1,299.00</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Shipping</span>
                  <span className="text-primary font-bold">Free</span>
                </div>
                <div className="flex justify-between text-text-primary font-bold text-xl pt-4">
                  <span>Total</span>
                  <span className="text-primary shadow-blue-glow-sm">$1,299.00</span>
                </div>
              </div>

              <button className="w-full py-5 bg-premium-gradient rounded-full font-bold text-white shadow-blue-glow hover:shadow-red-glow hover:scale-105 transition-all duration-500">
                Complete Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
