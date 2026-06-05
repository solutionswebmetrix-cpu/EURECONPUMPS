import { Droplets, Zap, Sun, Cable, Cylinder, Cpu } from 'lucide-react';

export const productCategories = [
  {
    id: 'submersible-pump-set',
    name: 'Submersible Pump Set',
    description: 'High Performance Borewell & Openwell',
    icon: Droplets,
    color: 'from-blue-500 to-cyan-500',
    path: '/category/submersible-pump-set',
    subcategories: [
      { name: 'Borewell Pump Set', path: '/category/borewell-pump-set' },
      { name: 'Openwell Pump Set', path: '/category/openwell-pump-set' },
      { name: 'SS Pumps', path: '/category/ss-pumps' },
      { name: 'CI Pumps', path: '/category/ci-pumps' },
      { name: 'Noryl Pumps', path: '/category/noryl-pumps' },
    ]
  },
  {
    id: 'borewell-pump-set',
    name: 'Borewell Pump Set',
    description: 'Durable & Energy Efficient',
    icon: Droplets,
    color: 'from-cyan-500 to-sky-500',
    path: '/category/borewell-pump-set',
    subcategories: [
      { name: 'SS Borewell Pump', path: '/category/borewell-pump-set/ss' },
      { name: 'CI Borewell Pump', path: '/category/borewell-pump-set/ci' },
      { name: 'Noryl Borewell Pump', path: '/category/borewell-pump-set/noryl' },
      { name: 'V3', path: '/category/borewell-pump-set/v3' },
      { name: 'V4', path: '/category/borewell-pump-set/v4' },
      { name: 'V5', path: '/category/borewell-pump-set/v5' },
      { name: 'V6', path: '/category/borewell-pump-set/v6' },
      { name: 'V7', path: '/category/borewell-pump-set/v7' },
      { name: 'V8', path: '/category/borewell-pump-set/v8' },
    ]
  },
  {
    id: 'openwell-pump-set',
    name: 'Openwell Pump Set',
    description: 'Reliable Horizontal & Vertical',
    icon: Droplets,
    color: 'from-sky-500 to-blue-500',
    path: '/category/openwell-pump-set',
    subcategories: [
      { name: 'SS Openwell Pump', path: '/category/openwell-pump-set/ss' },
      { name: 'CI Openwell Pump', path: '/category/openwell-pump-set/ci' },
      { name: 'Mini', path: '/category/openwell-pump-set/mini' },
      { name: 'V7', path: '/category/openwell-pump-set/v7' },
      { name: 'V8', path: '/category/openwell-pump-set/v8' },
      { name: 'V9', path: '/category/openwell-pump-set/v9' },
    ]
  },
  {
    id: 'control-panel-power-capacitor',
    name: 'Control Panel & Power Capacitor',
    description: 'Reliable Electrical Control',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    path: '/category/control-panel-power-capacitor',
    subcategories: [
      { name: 'Single & Three Phase Panel', path: '/category/single-three-phase-panel' },
      { name: 'DOL Starter', path: '/category/dol-starter' },
      { name: 'Motor Capacitor', path: '/category/motor-capacitor' },
      { name: 'Submersible Capacitor', path: '/category/submersible-capacitor' },
    ]
  },
  {
    id: 'single-three-phase-panel',
    name: 'Single & Three Phase Panel',
    description: 'High-Quality Electrical Control Panels',
    icon: Zap,
    color: 'from-yellow-600 to-orange-600',
    path: '/category/single-three-phase-panel',
    subcategories: []
  },
  {
    id: 'dol-starter',
    name: 'DOL Starter',
    description: 'Direct On-Line Motor Starters',
    icon: Cpu,
    color: 'from-gray-600 to-gray-800',
    path: '/category/dol-starter',
    subcategories: []
  },
  {
    id: 'motor-capacitor',
    name: 'Motor Capacitor',
    description: 'Premium Motor Running & Starting Capacitors',
    icon: Zap,
    color: 'from-amber-500 to-yellow-600',
    path: '/category/motor-capacitor',
    subcategories: []
  },
  {
    id: 'submersible-capacitor',
    name: 'Submersible Capacitor',
    description: 'Water-Resistant Submersible Pump Capacitors',
    icon: Droplets,
    color: 'from-blue-600 to-cyan-600',
    path: '/category/submersible-capacitor',
    subcategories: []
  },
  {
    id: 'solar-products',
    name: 'Solar Products',
    description: 'Complete Solar Energy Solutions',
    icon: Sun,
    color: 'from-orange-500 to-red-500',
    path: '/category/solar-products',
    subcategories: [
      { name: 'Solar Pump & Controller', path: '/category/solar-pump-controller' },
      { name: 'Solar Rooftop', path: '/category/solar-rooftop' },
      { name: 'Solar Power Plant', path: '/category/solar-power-plant' },
      { name: 'Solar Inverter', path: '/category/solar-inverter' },
      { name: 'Solar Panel', path: '/category/solar-panel' },
      { name: 'Solar Street Light', path: '/category/solar-street-light' },
      { name: 'Poles and High Mast', path: '/category/poles-high-mast' },
      { name: 'Structure for Solar Pump', path: '/category/structure-solar-pump' },
      { name: 'Structure for Solar Rooftop & Power Plant', path: '/category/structure-solar-rooftop-power-plant' },
    ]
  },
  {
    id: 'wire-cables',
    name: 'Wire & Cables',
    description: 'Reliable Wiring Solutions',
    icon: Cable,
    color: 'from-purple-500 to-pink-500',
    path: '/category/wire-cables',
    subcategories: [
      { name: 'House Wiring', path: '/category/house-wiring' },
      { name: 'Industrial Cables', path: '/category/industrial-cables' },
      { name: 'Armoured Cables', path: '/category/armoured-cables' },
      { name: 'PVC Wires', path: '/category/pvc-wires' },
    ]
  },
  {
    id: 'hdpe-pipes',
    name: 'HDPE Pipes',
    description: 'Durable High-Pressure Piping',
    icon: Cylinder,
    color: 'from-emerald-500 to-green-500',
    path: '/category/hdpe-pipes',
    subcategories: [
      { name: 'Agricultural Pipes', path: '/category/agricultural-pipes' },
      { name: 'Water Supply Pipes', path: '/category/water-supply-pipes' },
      { name: 'Industrial HDPE Pipes', path: '/category/industrial-hdpe-pipes' },
    ]
  }
];
