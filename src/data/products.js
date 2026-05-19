import img1 from '../assets/product/Industrial centrifugal pump and motor assembly.png';
import img2 from '../assets/product/Industrial pump components on display.png';
import img3 from '../assets/product/Industrial pump components on white backdrop.png';
import img4 from '../assets/product/Industrious pump motor assembly shot.png';
import img5 from '../assets/product/Industrious row of metallic cylinders.png';
import img6 from '../assets/product/Industrious yellow pump on white background.png';
import img7 from '../assets/product/Industriy pump motor unit on display.png';
import img8 from '../assets/product/Isolated colorful electrical cables on white.png';
import img9 from '../assets/product/Portable engine water pump unit.png';

export const products = [
  {
    id: 1,
    name: 'Industrial Centrifugal Pump',
    category: 'Centrifugal',
    price: '₹45,000',
    image: img1,
    badge: 'Best Seller',
    rating: 4.9,
    reviews: 128,
    description: 'High-performance industrial centrifugal pump designed for heavy-duty fluid transport with maximum efficiency.',
    specs: [
      { label: 'Flow Rate', value: '600 L/min' },
      { label: 'Max Pressure', value: '12 Bar' },
      { label: 'Material', value: 'Stainless Steel' }
    ]
  },
  {
    id: 2,
    name: 'Precision Pump Components',
    category: 'Components',
    price: '₹12,500',
    image: img2,
    badge: 'New',
    rating: 4.7,
    reviews: 56,
    description: 'High-precision components for industrial pumps, ensuring long-lasting performance and reliability.',
    specs: [
      { label: 'Type', value: 'Internal Parts' },
      { label: 'Precision', value: '0.01mm' },
      { label: 'Material', value: 'Alloy Steel' }
    ]
  },
  {
    id: 3,
    name: 'Core Pump Assembly Kit',
    category: 'Components',
    price: '₹28,000',
    image: img3,
    badge: 'Premium',
    rating: 4.8,
    reviews: 89,
    description: 'Complete assembly kit for core industrial pump systems, featuring reinforced materials.',
    specs: [
      { label: 'Kit Type', value: 'Full Assembly' },
      { label: 'Durability', value: 'High' },
      { label: 'Warranty', value: '2 Years' }
    ]
  },
  {
    id: 4,
    name: 'Heavy-Duty Motor Assembly',
    category: 'Motor',
    price: '₹35,000',
    image: img4,
    description: 'Robust motor assembly unit designed to power heavy industrial pumping operations.',
    specs: [
      { label: 'Power', value: '5.5 kW' },
      { label: 'Voltage', value: '440V' },
      { label: 'Phase', value: '3 Phase' }
    ]
  },
  {
    id: 5,
    name: 'Metallic Cylinder Series',
    category: 'Parts',
    price: '₹8,500',
    image: img5,
    badge: 'Limited',
    description: 'Durable metallic cylinders for fluid pressure management in industrial systems.',
    specs: [
      { label: 'Material', value: 'Hardened Steel' },
      { label: 'Pressure Rating', value: '20 Bar' }
    ]
  },
  {
    id: 6,
    name: 'Compact Industrial Pump',
    category: 'Portable',
    price: '₹18,000',
    image: img6,
    description: 'Space-saving compact industrial pump for specialized small-scale fluid operations.',
    specs: [
      { label: 'Size', value: 'Compact' },
      { label: 'Weight', value: '15kg' }
    ]
  },
  {
    id: 7,
    name: 'Standard Motor Unit',
    category: 'Motor',
    price: '₹22,000',
    image: img7,
    description: 'Reliable standard motor unit compatible with various industrial pump models.',
    specs: [
      { label: 'Efficiency', value: 'IE3' },
      { label: 'Mounting', value: 'Foot Mounted' }
    ]
  },
  {
    id: 8,
    name: 'Control System Cables',
    category: 'Electronics',
    price: '₹5,500',
    image: img8,
    description: 'High-grade insulated electrical cables for industrial pump control systems.',
    specs: [
      { label: 'Type', value: 'Shielded' },
      { label: 'Length', value: '10m' }
    ]
  },
  {
    id: 9,
    name: 'Portable Engine Pump',
    category: 'Portable',
    price: '₹24,500',
    image: img9,
    badge: 'Popular',
    description: 'Engine-powered portable water pump for versatile field applications.',
    specs: [
      { label: 'Fuel Type', value: 'Petrol/Diesel' },
      { label: 'Discharge', value: '3 Inch' }
    ]
  }
];
