import { Sun, Shield, Zap, Cpu, DollarSign, Lightbulb } from 'lucide-react';
import solarEpcImage from '../assets/Solar EPC Solutions.png';
import hybridSolarImage from '../assets/Hybrid Solar + BESS.png';
import ppaImage from '../assets/PPA  Group Captive.png';

export const solarSolutions = [
  {
    id: 'solar-epc-solutions',
    title: 'Solar EPC Solutions',
    description: 'End-to-end solar EPC services designed to deliver reliable and efficient renewable energy systems.',
    icon: Sun,
    color: 'from-orange-500 to-yellow-500',
    heroImage: solarEpcImage,
    overview: 'End-to-end solar EPC services designed to deliver reliable and efficient renewable energy systems. From site assessment and engineering design to procurement, installation, and commissioning, we ensure seamless project execution with maximum performance and long-term value.',
    benefits: [
      'Complete turnkey solution',
      'Compliance with all regulatory standards',
      'Quality assured components',
      'On-time project delivery',
      'Post-commissioning support',
    ],
    features: [
      'Detailed site assessment & feasibility study',
      'Custom system design',
      'Procurement of premium solar equipment',
      'Professional installation & commissioning',
      'Comprehensive testing & documentation',
    ],
    applications: [
      'Industrial solar plants',
      'Commercial rooftop installations',
      'Utility-scale solar farms',
      'Educational institutions',
      'Hospital & healthcare facilities',
    ],
    process: [
      { step: 1, title: 'Site Survey', desc: 'Comprehensive site analysis & measurement' },
      { step: 2, title: 'System Design', desc: 'Customized solar system design' },
      { step: 3, title: 'Procurement', desc: 'Sourcing of high-quality components' },
      { step: 4, title: 'Installation', desc: 'Professional installation by experts' },
      { step: 5, title: 'Commissioning', desc: 'Testing & system optimization' },
      { step: 6, title: 'Handover', desc: 'Project documentation & training' },
    ],
    faqs: [
      {
        question: 'What is included in Solar EPC?',
        answer: 'Our EPC package includes site survey, design, engineering, procurement of all materials, installation, commissioning, and project documentation.'
      },
      {
        question: 'How long does it take to complete a solar project?',
        answer: 'Project duration varies based on size. Typical rooftop projects take 4-8 weeks while larger utility-scale projects can take 3-6 months.'
      },
      {
        question: 'Do you handle all regulatory approvals?',
        answer: 'Yes, we assist with all necessary approvals, permits, and grid connection processes to ensure a smooth project execution.'
      }
    ],
    ctaTitle: 'Ready to Go Solar?',
    ctaDescription: 'Get a customized solar solution designed specifically for your needs.',
  },
  {
    id: 'resco-model',
    title: 'RESCO Model',
    description: 'Adopt solar energy with zero upfront investment through our Renewable Energy Service Company (RESCO) model.',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    heroImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80',
    overview: 'Adopt solar energy with zero upfront investment through our Renewable Energy Service Company (RESCO) model. We finance, install, operate, and maintain the solar system while you enjoy clean energy at reduced electricity costs.',
    benefits: [
      'Zero upfront capital investment',
      'Reduced electricity costs',
      'No maintenance headaches',
      'Predictable energy expenses',
      'Risk-free implementation',
    ],
    features: [
      'Full system ownership by Eurecon',
      'Complete operation & maintenance',
      'Performance guarantee',
      'Flexible contract terms',
      'Option to purchase system later',
    ],
    applications: [
      'Manufacturing units',
      'Commercial buildings',
      'Shopping malls',
      'Hospitals & healthcare',
      'Educational campuses',
    ],
    process: [
      { step: 1, title: 'Feasibility Study', desc: 'Energy consumption & site analysis' },
      { step: 2, title: 'Agreement', desc: 'Sign power purchase agreement' },
      { step: 3, title: 'Installation', desc: 'Complete solar system installation' },
      { step: 4, title: 'Operation', desc: 'We handle all operations' },
      { step: 5, title: 'Monitoring', desc: 'Real-time performance tracking' },
      { step: 6, title: 'Support', desc: '24/7 maintenance & support' },
    ],
    faqs: [
      {
        question: 'What is the contract duration for RESCO?',
        answer: 'Typical contract duration ranges from 15-25 years with flexible options to suit your requirements.'
      },
      {
        question: 'Who is responsible for maintenance?',
        answer: 'We take full responsibility for operation, maintenance, repairs, and insurance of the solar system throughout the contract period.'
      },
      {
        question: 'Can we purchase the system later?',
        answer: 'Yes, we offer an option to purchase the solar system at the end of the contract period at a mutually agreed price.'
      }
    ],
    ctaTitle: 'Switch to Solar with No Upfront Cost',
    ctaDescription: 'Start saving on electricity bills today with our RESCO model.',
  },
  {
    id: 'hybrid-solar-bess',
    title: 'Hybrid Solar + BESS',
    description: 'Enhance energy reliability with hybrid solar solutions integrated with Battery Energy Storage Systems (BESS).',
    icon: Zap,
    color: 'from-cyan-500 to-blue-500',
    heroImage: hybridSolarImage,
    overview: 'Enhance energy reliability with hybrid solar solutions integrated with Battery Energy Storage Systems (BESS). Our systems provide uninterrupted power supply, peak demand management, and greater energy independence for commercial and industrial facilities.',
    benefits: [
      '24/7 reliable power supply',
      'Peak load management',
      'Reduced grid dependency',
      'Energy cost optimization',
      'Backup power for critical loads',
    ],
    features: [
      'Advanced lithium-ion batteries',
      'Smart energy management system',
      'Grid-tied & off-grid capabilities',
      'Real-time monitoring',
      'Scalable storage capacity',
    ],
    applications: [
      'Industrial critical loads',
      'Data centers',
      'Hospitals & healthcare facilities',
      'Remote industrial sites',
      'Commercial buildings',
    ],
    process: [
      { step: 1, title: 'Load Analysis', desc: 'Detailed power consumption study' },
      { step: 2, title: 'System Design', desc: 'Hybrid system sizing & design' },
      { step: 3, title: 'Equipment Selection', desc: 'Battery & inverter selection' },
      { step: 4, title: 'Installation', desc: 'Complete system integration' },
      { step: 5, title: 'Testing', desc: 'Performance verification' },
      { step: 6, title: 'Commissioning', desc: 'Go live & monitoring setup' },
    ],
    faqs: [
      {
        question: 'What battery technologies do you use?',
        answer: 'We use premium lithium-ion battery technologies including LFP (Lithium Iron Phosphate) for their safety, longevity, and performance.'
      },
      {
        question: 'How long do the batteries last?',
        answer: 'Our battery systems typically last 10-15 years with proper maintenance and come with manufacturer warranties.'
      },
      {
        question: 'Can the system work off-grid?',
        answer: 'Yes! Our hybrid systems can operate both in grid-tied mode and fully off-grid mode depending on your requirements.'
      }
    ],
    ctaTitle: 'Ensure Uninterrupted Power',
    ctaDescription: 'Get a reliable hybrid solution with energy storage for your business.',
  },
  {
    id: 'om-services',
    title: 'O&M Services',
    description: 'Maximize the performance and lifespan of your solar assets with our comprehensive Operation & Maintenance services.',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    overview: 'Maximize the performance and lifespan of your solar assets with our comprehensive Operation & Maintenance services. From preventive maintenance and remote monitoring to fault diagnosis and performance optimization, we ensure your system operates at peak efficiency.',
    benefits: [
      'Maximized energy generation',
      'Extended system lifespan',
      'Proactive issue resolution',
      'Predictable maintenance costs',
      'Performance guarantee',
    ],
    features: [
      'Regular preventive maintenance',
      'Real-time monitoring',
      'Performance analysis & reporting',
      '24/7 emergency support',
      'Module cleaning services',
    ],
    applications: [
      'All types of solar installations',
      'Industrial solar plants',
      'Commercial rooftop systems',
      'Utility-scale solar farms',
      'Hybrid & storage systems',
    ],
    process: [
      { step: 1, title: 'System Audit', desc: 'Initial performance assessment' },
      { step: 2, title: 'Monitoring Setup', desc: 'Real-time monitoring configuration' },
      { step: 3, title: 'Preventive Maintenance', desc: 'Scheduled maintenance visits' },
      { step: 4, title: 'Performance Analysis', desc: 'Regular performance reporting' },
      { step: 5, title: 'Corrective Maintenance', desc: 'Quick repairs & replacements' },
      { step: 6, title: 'Optimization', desc: 'Continuous system improvement' },
    ],
    faqs: [
      {
        question: 'What is included in O&M services?',
        answer: 'Our O&M includes preventive maintenance, performance monitoring, troubleshooting, repairs, module cleaning, and annual system inspection.'
      },
      {
        question: 'How often do you service the plant?',
        answer: 'Service frequency depends on plant size and location, typically ranging from monthly visits for large plants to quarterly for smaller systems.'
      },
      {
        question: 'Do you provide 24/7 support?',
        answer: 'Yes, we offer 24/7 emergency support for critical issues and real-time monitoring to detect problems early.'
      }
    ],
    ctaTitle: 'Keep Your Solar Plant at Peak Performance',
    ctaDescription: 'Ensure maximum efficiency and longevity with our expert O&M services.',
  },
  {
    id: 'ppa-group-captive',
    title: 'PPA / Group Captive',
    description: 'Reduce energy costs and secure long-term price stability through Power Purchase Agreements (PPA) and Group Captive solar models.',
    icon: DollarSign,
    color: 'from-amber-500 to-orange-500',
    heroImage: ppaImage,
    overview: 'Reduce energy costs and secure long-term price stability through Power Purchase Agreements (PPA) and Group Captive solar models. Benefit from clean energy without significant capital investment while achieving your sustainability goals.',
    benefits: [
      'No upfront capital required',
      'Lower electricity costs',
      'Long-term price stability',
      'Tax benefits & incentives',
      'Clean & green energy',
    ],
    features: [
      'Flexible PPA terms',
      'Group captive structures',
      'Competitive pricing',
      'Performance guarantees',
      'End-to-end project management',
    ],
    applications: [
      'Large industrial consumers',
      'Commercial complexes',
      'Industrial parks',
      'Manufacturing clusters',
      'Multiple business entities',
    ],
    process: [
      { step: 1, title: 'Feasibility', desc: 'Project viability assessment' },
      { step: 2, title: 'Structure Design', desc: 'PPA or Group Captive structure' },
      { step: 3, title: 'Agreement', desc: 'Finalize all legal agreements' },
      { step: 4, title: 'Project Execution', desc: 'Complete EPC implementation' },
      { step: 5, title: 'Commercial Operation', desc: 'Start power generation' },
      { step: 6, title: 'Ongoing Management', desc: 'Continuous operation & support' },
    ],
    faqs: [
      {
        question: 'What is the difference between PPA and Group Captive?',
        answer: 'PPA involves purchasing power from a solar plant, while Group Captive involves joint ownership of a solar project by multiple consumers.'
      },
      {
        question: 'What is the typical PPA duration?',
        answer: 'PPAs typically range from 15-25 years, providing long-term price stability for your electricity costs.'
      },
      {
        question: 'Can we customize the agreement structure?',
        answer: 'Yes! We offer flexible agreement structures tailored to meet your specific business needs and financial objectives.'
      }
    ],
    ctaTitle: 'Get Affordable Solar Power',
    ctaDescription: 'Explore PPA and Group Captive options for your business.',
  },
  {
    id: 'consulting-feasibility',
    title: 'Consulting & Feasibility',
    description: 'Expert solar consulting and feasibility study services.',
    icon: Lightbulb,
    color: 'from-blue-500 to-indigo-500',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    overview: 'Our expert consulting team provides comprehensive feasibility studies and strategic advisory services to help you make informed decisions about your solar investment. We analyze all aspects to ensure your project is technically sound and financially viable.',
    benefits: [
      'Data-driven recommendations',
      'Optimized system design',
      'Financial modeling',
      'Risk assessment',
      'Regulatory guidance',
    ],
    features: [
      'Site assessment & analysis',
      'Energy consumption audit',
      'Financial modeling & ROI analysis',
      'Technology selection',
      'Regulatory & policy advisory',
    ],
    applications: [
      'New solar project planning',
      'Existing system optimization',
      'Technology upgrade decisions',
      'Investment analysis',
      'Portfolio strategy',
    ],
    process: [
      { step: 1, title: 'Data Collection', desc: 'Gather site & energy data' },
      { step: 2, title: 'Analysis', desc: 'Technical & financial analysis' },
      { step: 3, title: 'Option Evaluation', desc: 'Evaluate different scenarios' },
      { step: 4, title: 'Recommendations', desc: 'Optimal solution recommendation' },
      { step: 5, title: 'Report', desc: 'Detailed feasibility report' },
      { step: 6, title: 'Implementation', desc: 'Support for execution' },
    ],
    faqs: [
      {
        question: 'What does a feasibility study include?',
        answer: 'Our feasibility study includes site analysis, shading analysis, energy yield assessment, financial modeling, ROI analysis, and risk assessment.'
      },
      {
        question: 'How long does a feasibility study take?',
        answer: 'Typically 2-4 weeks depending on project complexity and data availability.'
      },
      {
        question: 'Do you also help with implementation?',
        answer: 'Absolutely! We can support you from initial study all the way through to successful project commissioning.'
      }
    ],
    ctaTitle: 'Make Informed Decisions',
    ctaDescription: 'Get expert consulting and feasibility study for your solar project.',
  },
];
