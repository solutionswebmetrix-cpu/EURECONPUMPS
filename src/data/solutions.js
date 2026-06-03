import { Sun, Shield, Zap, Cpu, DollarSign, Lightbulb, TrendingUp, Home, Building2, Factory } from 'lucide-react';
import solarEpcImage from '../assets/Solar EPC Solutions.png';
import hybridSolarImage from '../assets/Hybrid Solar + BESS.png';
import ppaImage from '../assets/PPA  Group Captive.png';
import omServicesImage from '../assets/O&M Services.png';
import consultingImage from '../assets/Consulting & Feasibility.png';
import energyAuditImage from '../assets/Energy Audit.png';
import rooftopSolarImage from '../assets/Rooftop Solar.png';

// Solution categories for mega menu
export const solutionCategories = [
  {
    id: 'solar-epc-solutions',
    name: 'Solar EPC Solutions',
    icon: Sun,
    color: 'from-orange-500 to-yellow-500',
    path: '/solutions/solar-epc-solutions',
    subcategories: [
      { name: 'End-to-End EPC Services', path: '/solutions/solar-epc-solutions' },
      { name: 'Design & Engineering', path: '/solutions/solar-epc-solutions' },
      { name: 'Procurement', path: '/solutions/solar-epc-solutions' },
      { name: 'Installation & Commissioning', path: '/solutions/solar-epc-solutions' },
      { name: 'Project Management', path: '/solutions/solar-epc-solutions' },
    ]
  },
  {
    id: 'resco-model',
    name: 'RESCO Model',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    path: '/solutions/resco-model',
    subcategories: [
      { name: 'Zero Upfront Investment', path: '/solutions/resco-model' },
      { name: 'Pay-as-You-Save', path: '/solutions/resco-model' },
      { name: 'Energy Cost Reduction', path: '/solutions/resco-model' },
      { name: 'Long-Term Operations', path: '/solutions/resco-model' },
    ]
  },
  {
    id: 'hybrid-solar-bess',
    name: 'Hybrid Solar + BESS',
    icon: Zap,
    color: 'from-cyan-500 to-blue-500',
    path: '/solutions/hybrid-solar-bess',
    subcategories: [
      { name: 'Battery Energy Storage', path: '/solutions/hybrid-solar-bess' },
      { name: 'Hybrid Power Systems', path: '/solutions/hybrid-solar-bess' },
      { name: 'Peak Load Management', path: '/solutions/hybrid-solar-bess' },
      { name: 'Backup Power Solutions', path: '/solutions/hybrid-solar-bess' },
    ]
  },
  {
    id: 'om-services',
    name: 'O&M Services',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500',
    path: '/solutions/om-services',
    subcategories: [
      { name: 'Preventive Maintenance', path: '/solutions/om-services' },
      { name: 'Performance Monitoring', path: '/solutions/om-services' },
      { name: 'Panel Cleaning', path: '/solutions/om-services' },
      { name: 'System Health Checks', path: '/solutions/om-services' },
    ]
  },
  {
    id: 'ppa-group-captive',
    name: 'PPA / Group Captive',
    icon: DollarSign,
    color: 'from-amber-500 to-orange-500',
    path: '/solutions/ppa-group-captive',
    subcategories: [
      { name: 'Power Purchase Agreements', path: '/solutions/ppa-group-captive' },
      { name: 'Group Captive Solutions', path: '/solutions/ppa-group-captive' },
      { name: 'Open Access Power', path: '/solutions/ppa-group-captive' },
      { name: 'Cost Optimization', path: '/solutions/ppa-group-captive' },
    ]
  },
  {
    id: 'consulting-feasibility',
    name: 'Consulting & Feasibility',
    icon: Lightbulb,
    color: 'from-blue-500 to-indigo-500',
    path: '/solutions/consulting-feasibility',
    subcategories: [
      { name: 'Energy Audits', path: '/solutions/consulting-feasibility' },
      { name: 'Site Assessment', path: '/solutions/consulting-feasibility' },
      { name: 'Financial Analysis', path: '/solutions/consulting-feasibility' },
      { name: 'Feasibility Studies', path: '/solutions/consulting-feasibility' },
    ]
  },
];

// Detailed solution data for detail pages
export const solarSolutions = [
  {
    id: 'solar-epc-solutions',
    title: 'Solar EPC Solutions',
    description: 'Complete turnkey solar power solutions for commercial, industrial, and institutional clients.',
    icon: Sun,
    color: 'from-orange-500 to-yellow-500',
    heroImage: solarEpcImage,
    overview: 'Our Solar EPC (Engineering, Procurement & Construction) services provide complete turnkey solar power solutions for commercial, industrial, and institutional clients. From initial site assessment and system design to procurement, installation, testing, and commissioning, we manage every stage of the project with precision and expertise. With a focus on quality, efficiency, and long-term performance, our team delivers customized solar energy systems that maximize energy generation while reducing electricity costs and carbon emissions. We use high-quality components, advanced engineering practices, and industry-leading standards to ensure reliable and sustainable solar installations.',
    benefits: [
      'Reduced Electricity Costs',
      'Faster Return on Investment',
      'Reliable Renewable Energy Generation',
      'Lower Carbon Footprint',
      'Long-Term Operational Efficiency',
      'End-to-End Project Accountability',
    ],
    features: [
      'Detailed Site Survey & Feasibility Analysis',
      'Customized System Design & Engineering',
      'Procurement of High-Quality Solar Components',
      'Professional Installation & Project Management',
      'Testing, Commissioning & Grid Integration',
      'Performance Monitoring & Technical Support',
      'Compliance with Industry Standards & Regulations',
    ],
    applications: [
      'Industrial solar plants',
      'Commercial rooftop installations',
      'Utility-scale solar farms',
      'Educational institutions',
      'Hospital & healthcare facilities',
      'Solar carports',
      'Ground-mounted systems',
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
    heroImage: solarEpcImage,
    overview: 'The Renewable Energy Service Company (RESCO) Model enables businesses to adopt solar energy without any upfront capital investment. Under this model, we finance, design, install, own, operate, and maintain the solar power plant, while the customer only pays for the electricity generated at a pre-agreed tariff. This approach allows organizations to reduce their energy costs immediately without investing in solar infrastructure. By transferring the ownership, operational, and maintenance responsibilities to us, businesses can focus on their core operations while benefiting from clean, reliable, and cost-effective renewable energy.',
    benefits: [
      'Preserve Capital for Core Business Activities',
      'Lower Electricity Bills',
      'Protection Against Rising Energy Prices',
      'Access to Clean and Sustainable Energy',
      'Improved ESG and Sustainability Performance',
      'Hassle-Free Solar Adoption',
    ],
    features: [
      'Zero Upfront Investment',
      'End-to-End Project Development',
      'Operation & Maintenance Included',
      'Long-Term Power Purchase Agreement (PPA)',
      'Guaranteed System Performance',
      'Reduced Energy Costs from Day One',
      'No Technical or Operational Burden',
    ],
    applications: [
      'Commercial facilities',
      'Industrial facilities',
      'Educational institutions',
      'Healthcare facilities',
      'Institutional facilities',
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
    overview: 'Our Hybrid Solar + Battery Energy Storage System (BESS) solutions combine solar power generation with advanced battery storage technology to provide reliable, efficient, and uninterrupted energy. By storing excess solar energy generated during the day, the system ensures power availability during peak demand periods, grid outages, or low sunlight conditions. Designed for commercial, industrial, and institutional facilities, Hybrid Solar + BESS solutions help reduce dependence on the grid, optimize energy consumption, and improve overall energy resilience. The integrated energy management system intelligently controls power flow between solar panels, batteries, and the grid to maximize savings and operational efficiency.',
    benefits: [
      '24/7 Reliable Power Availability',
      'Lower Electricity Costs',
      'Protection Against Power Outages',
      'Improved Energy Independence',
      'Enhanced Sustainability Performance',
      'Better Utilization of Solar Energy',
      'Reduced Carbon Emissions',
    ],
    features: [
      'Integrated Solar Power & Battery Storage',
      'Uninterrupted Power Supply (UPS Functionality)',
      'Peak Demand & Load Management',
      'Intelligent Energy Management System',
      'Reduced Grid Dependency',
      'Scalable and Modular Design',
      'Real-Time Monitoring & Analytics',
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
    heroImage: omServicesImage,
    overview: 'Our Operation & Maintenance (O&M) Services are designed to ensure the optimal performance, reliability, and longevity of your solar power plant. With a proactive approach to monitoring, maintenance, and performance optimization, we help maximize energy generation while minimizing downtime and operational risks. Our experienced technical team provides comprehensive support, including routine inspections, preventive maintenance, panel cleaning, inverter servicing, fault detection, and real-time system monitoring. By continuously analyzing system performance, we identify potential issues early and implement corrective actions to maintain peak efficiency.',
    benefits: [
      'Maximum Energy Generation',
      'Reduced System Downtime',
      'Extended Equipment Lifespan',
      'Improved Return on Investment (ROI)',
      'Enhanced System Reliability',
      'Lower Maintenance Costs',
      'Compliance with Safety & Performance Standards',
    ],
    features: [
      'Preventive & Corrective Maintenance',
      'Solar Panel Cleaning & Inspection',
      'Inverter Health Checks & Servicing',
      'Remote Monitoring & Performance Tracking',
      'Fault Detection & Troubleshooting',
      'Energy Generation Analysis & Reporting',
      'Annual Maintenance Contracts (AMC)',
      'Rapid Technical Support & Emergency Response',
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
    overview: 'Our PPA (Power Purchase Agreement) and Group Captive solar solutions provide businesses with a cost-effective way to access clean and reliable solar energy without significant upfront investment. These models enable organizations to reduce electricity expenses, achieve long-term price stability, and meet sustainability goals while minimizing financial risk. Under a Power Purchase Agreement (PPA), we develop, own, operate, and maintain the solar power plant, while you purchase the generated electricity at a predetermined tariff, typically lower than conventional grid rates. In the Group Captive model, multiple consumers collectively invest in and consume power from a solar project, benefiting from reduced energy costs and regulatory advantages.',
    benefits: [
      'Significant Savings on Energy Bills',
      'Protection Against Rising Electricity Tariffs',
      'Improved Cash Flow & Capital Preservation',
      'Reduced Carbon Footprint',
      'Enhanced ESG & Sustainability Performance',
      'Long-Term Energy Security',
      'Hassle-Free Solar Adoption',
    ],
    features: [
      'No or Minimal Upfront Capital Investment',
      'Long-Term Fixed Energy Pricing',
      'Reduced Electricity Costs',
      'End-to-End Project Development & Management',
      'Reliable Renewable Energy Supply',
      'Regulatory & Compliance Support',
      'Flexible Contract Structures',
      'Performance Monitoring & Maintenance Included',
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
    heroImage: consultingImage,
    overview: 'Our Consulting & Feasibility services help businesses make informed decisions before investing in solar energy projects. We provide expert guidance, technical evaluations, financial analysis, and strategic planning to ensure that every project is technically viable, financially attractive, and aligned with your energy goals. Our team conducts detailed site assessments, energy consumption analysis, solar potential studies, and project feasibility evaluations to identify the most efficient and cost-effective renewable energy solutions. Whether you are planning a new solar installation, expanding an existing system, or evaluating investment opportunities, we deliver data-driven insights and actionable recommendations.',
    benefits: [
      'Informed Investment Decisions',
      'Reduced Project Risks',
      'Improved Financial Returns',
      'Optimized System Performance',
      'Accurate Cost & Savings Projections',
      'Regulatory Compliance Assurance',
      'Long-Term Energy Strategy Planning',
    ],
    features: [
      'Solar Feasibility Studies',
      'Site Assessment & Resource Evaluation',
      'Energy Consumption Analysis',
      'Technical Due Diligence',
      'Financial & ROI Assessment',
      'Technology Selection & System Sizing',
      'Regulatory & Compliance Advisory',
      'Performance Audits & Optimization Recommendations',
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
  {
    id: 'energy-audit',
    title: 'Energy Audit',
    description: 'Comprehensive energy audit services to identify savings opportunities.',
    icon: TrendingUp,
    color: 'from-emerald-500 to-teal-500',
    heroImage: energyAuditImage,
    overview: 'Our Energy Audit services help businesses identify energy-saving opportunities, improve operational efficiency, and reduce electricity costs. Through a detailed assessment of your facility\'s energy consumption patterns, equipment performance, and electrical systems, we provide actionable recommendations that enhance productivity while minimizing energy waste. Our team conducts comprehensive inspections, data analysis, and performance evaluations to identify inefficiencies across lighting, HVAC systems, motors, pumps, compressed air systems, and other critical energy-consuming equipment. Based on the findings, we develop customized strategies to optimize energy usage and improve overall system performance.',
    benefits: [
      'Reduced Energy Costs',
      'Improved Operational Efficiency',
      'Lower Carbon Emissions',
      'Enhanced Equipment Performance',
      'Reduced Energy Waste',
      'Better Energy Management',
      'Compliance with Energy Efficiency Standards',
    ],
    features: [
      'Comprehensive Energy Consumption Analysis',
      'Electrical System Inspection & Assessment',
      'Load Monitoring & Demand Analysis',
      'Equipment Efficiency Evaluation',
      'Power Quality Assessment',
      'Identification of Energy Saving Opportunities',
      'Cost-Benefit & ROI Analysis',
      'Detailed Audit Reports & Recommendations',
    ],
    applications: [
      'Industrial plants',
      'Commercial facilities',
      'Hospitals',
      'Educational institutions',
      'Office buildings',
    ],
    process: [
      { step: 1, title: 'Initial Assessment', desc: 'Data collection and site visit' },
      { step: 2, title: 'Analysis', desc: 'Energy consumption pattern analysis' },
      { step: 3, title: 'Recommendations', desc: 'Savings opportunity identification' },
      { step: 4, title: 'Implementation', desc: 'Support for executing changes' },
    ],
    faqs: [
      { question: 'What is an energy audit?', answer: 'A comprehensive assessment of energy usage to identify savings opportunities.' },
    ],
    ctaTitle: 'Start Your Energy Audit',
    ctaDescription: 'Discover how much you can save with our energy audit services.',
  },
  {
    id: 'rooftop-solar',
    title: 'Rooftop Solar',
    description: 'Custom rooftop solar solutions for homes and businesses.',
    icon: Home,
    color: 'from-blue-500 to-indigo-500',
    heroImage: rooftopSolarImage,
    overview: 'Our Rooftop Solar solutions provide an efficient and sustainable way to generate clean energy directly from your building\'s unused rooftop space. Designed for commercial, industrial, institutional, and residential applications, rooftop solar systems help reduce electricity costs, increase energy independence, and support long-term sustainability goals. From system design and engineering to installation and commissioning, we deliver customized rooftop solar solutions tailored to your energy requirements and available roof area. Our high-performance solar systems are built using premium-quality components to ensure maximum energy generation, reliability, and long-term returns.',
    benefits: [
      'Significant Reduction in Electricity Bills',
      'Faster Return on Investment (ROI)',
      'Clean & Renewable Energy Generation',
      'Better Utilization of Rooftop Space',
      'Reduced Carbon Footprint',
      'Increased Energy Independence',
      'Enhanced Sustainability Performance',
    ],
    features: [
      'Customized Rooftop Solar Design',
      'High-Efficiency Solar Panels',
      'Grid-Tied & Hybrid Solutions',
      'Professional Installation & Commissioning',
      'Real-Time Monitoring System',
      'Scalable System Capacity',
      'Low Maintenance Requirements',
      'Long Service Life',
    ],
    applications: [
      'Factory',
      'Warehouse',
      'Office building',
      'Hospital',
      'School',
      'Residential complex',
    ],
    process: [
      { step: 1, title: 'Site Survey', desc: 'Roof assessment and measurement' },
      { step: 2, title: 'Design', desc: 'Custom system design' },
      { step: 3, title: 'Installation', desc: 'Professional panel installation' },
      { step: 4, title: 'Commissioning', desc: 'System testing and activation' },
    ],
    faqs: [
      { question: 'How long does rooftop solar installation take?', answer: 'Typically 2-7 days depending on system size.' },
    ],
    ctaTitle: 'Go Solar Today',
    ctaDescription: 'Get a custom rooftop solar solution for your property.',
  },
  {
    id: 'ground-mounted-solar',
    title: 'Ground Mounted Solar',
    description: 'Large-scale ground mounted solar power plants.',
    icon: Building2,
    color: 'from-green-500 to-emerald-500',
    heroImage: solarEpcImage,
    overview: 'Our Ground Mounted Solar solutions are ideal for businesses, industries, institutions, and utility-scale projects that require large-scale solar power generation. Installed on open land, these systems provide greater flexibility in design, orientation, and capacity, enabling maximum energy production and long-term performance. Ground-mounted solar plants are engineered to optimize sunlight exposure, improve efficiency, and deliver reliable renewable energy for decades. Our team handles every stage of the project, including site assessment, engineering, procurement, installation, commissioning, and ongoing support, ensuring a seamless and cost-effective solar deployment.',
    benefits: [
      'Higher Energy Generation Potential',
      'Better System Efficiency & Performance',
      'Reduced Electricity Costs',
      'Long-Term Energy Security',
      'Minimal Roof Space Constraints',
      'Lower Carbon Emissions',
      'Strong Return on Investment (ROI)',
    ],
    features: [
      'Utility-Scale & Commercial Solar Installations',
      'Optimized Panel Orientation & Layout',
      'High-Efficiency Solar Modules',
      'Fixed Tilt & Tracker-Based Systems',
      'Scalable Project Capacity',
      'Real-Time Monitoring & Performance Analytics',
      'Durable Structures for Long-Term Reliability',
      'End-to-End EPC Execution',
    ],
    applications: [
      'Industrial facilities',
      'Solar parks',
      'Agricultural land',
      'Large commercial developments',
    ],
    process: [
      { step: 1, title: 'Land Assessment', desc: 'Site evaluation and planning' },
      { step: 2, title: 'Engineering', desc: 'Detailed system design' },
      { step: 3, title: 'Construction', desc: 'Ground mounting and installation' },
      { step: 4, title: 'Activation', desc: 'Grid connection and testing' },
    ],
    faqs: [
      { question: 'How much land is needed?', answer: 'Approximately 1 acre per 1 MW of solar capacity.' },
    ],
    ctaTitle: 'Build Your Solar Plant',
    ctaDescription: 'Develop a ground-mounted solar power plant with us.',
  },
  {
    id: 'commercial-industrial-solar',
    title: 'Commercial & Industrial Solar',
    description: 'Solar solutions tailored for commercial and industrial needs.',
    icon: Factory,
    color: 'from-gray-500 to-slate-500',
    heroImage: solarEpcImage,
    overview: 'Our Commercial & Industrial (C&I) Solar solutions are designed to help businesses reduce energy costs, improve operational efficiency, and achieve sustainability goals through reliable renewable energy generation. Whether for manufacturing facilities, warehouses, office buildings, shopping complexes, hotels, hospitals, or educational institutions, we provide customized solar systems tailored to your specific energy requirements. By utilizing rooftop spaces, ground-mounted installations, or hybrid solar solutions, businesses can significantly lower their dependence on conventional grid power while benefiting from long-term energy savings and environmental responsibility.',
    benefits: [
      'Significant Reduction in Electricity Bills',
      'Improved Return on Investment (ROI)',
      'Protection Against Rising Energy Costs',
      'Enhanced Energy Independence',
      'Reduced Carbon Footprint',
      'Improved ESG & Sustainability Performance',
      'Reliable Long-Term Power Generation',
    ],
    features: [
      'Customized Solar Solutions for Commercial & Industrial Facilities',
      'Rooftop, Ground-Mounted & Hybrid Solar Systems',
      'High-Efficiency Solar Panels & Inverters',
      'Real-Time Monitoring & Performance Analytics',
      'Grid-Tied & Battery Storage Integration',
      'End-to-End EPC Services',
      'Scalable System Capacity',
      'Comprehensive O&M Support',
    ],
    applications: [
      'Manufacturing facilities',
      'Warehouses',
      'Office buildings',
      'Shopping complexes',
      'Hotels',
      'Hospitals',
      'Educational institutions',
    ],
    process: [
      { step: 1, title: 'Demand Analysis', desc: 'Energy consumption assessment' },
      { step: 2, title: 'Custom Solution', desc: 'Tailored system design' },
      { step: 3, title: 'Execution', desc: 'Large-scale installation' },
      { step: 4, title: 'Support', desc: 'Ongoing maintenance and support' },
    ],
    faqs: [
      { question: 'Is solar suitable for industrial use?', answer: 'Yes, solar is perfect for offsetting high industrial energy costs.' },
    ],
    ctaTitle: 'Power Your Business',
    ctaDescription: 'Get a solar solution designed for your industrial needs.',
  },
];
