import { Droplets, Zap, Sun, Cable, Cylinder } from 'lucide-react';

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
    subcategories: []
  },
  {
    id: 'openwell-pump-set',
    name: 'Openwell Pump Set',
    description: 'Reliable Horizontal & Vertical',
    icon: Droplets,
    color: 'from-sky-500 to-blue-500',
    path: '/category/openwell-pump-set',
    subcategories: []
  },
  {
    id: 'control-panel-power-capacitor',
    name: 'Control Panel & Power Capacitor',
    description: 'Reliable Electrical Control',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    path: '/category/control-panel-power-capacitor',
    subcategories: [
      { name: 'Single Phase Panel', path: '/category/single-phase-panel' },
      { name: 'Three Phase Panel', path: '/category/three-phase-panel' },
      { name: 'DOL Starter', path: '/category/dol-starter' },
      { name: 'Motor Capacitor', path: '/category/motor-capacitor' },
      { name: 'Submersible Capacitor', path: '/category/submersible-capacitor' },
    ]
  },
  {
    id: 'solar-products',
    name: 'Solar Products',
    description: 'Complete Solar Energy Solutions',
    icon: Sun,
    color: 'from-orange-500 to-red-500',
    path: '/category/solar-products',
    subcategories: [
      { name: 'Solar Pumps', path: '/category/solar-pumps' },
      { name: 'Solar Controllers', path: '/category/solar-controllers' },
      { name: 'Solar Panels', path: '/category/solar-panels' },
      { name: 'Solar Inverters', path: '/category/solar-inverters' },
      { name: 'Solar Street Lights', path: '/category/solar-street-lights' },
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
