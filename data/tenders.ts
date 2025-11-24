export type TenderStatus = 'Estimation' | 'Review' | 'Submitted' | 'New';
export type TabType = 'boq' | 'docs' | 'vendors';

export const TENDERS = [
  {
    id: 'T-101',
    title: 'Construction of 4-Lane Highway (NH-44 Section)',
    client: 'NHAI',
    value: '₹ 450 Cr',
    deadline: '2 days left',
    status: 'Estimation',
    risk: 'Medium'
  },
  {
    id: 'T-102',
    title: '33kV Substation Upgrade & Maintenance',
    client: 'MSEDCL',
    value: '₹ 22 Cr',
    deadline: '14 days left',
    status: 'Review',
    risk: 'Low'
  },
  {
    id: 'T-103',
    title: 'Civil Works for New Airport Terminal',
    client: 'AAI',
    value: '₹ 1,200 Cr',
    deadline: 'Urgent',
    status: 'New',
    risk: 'High'
  }
];

export const BOQ_ITEMS = [
  { id: 1, desc: 'Ordinary Portland Cement (OPC) 53 Grade', unit: 'MT', qty: 5000, rate: 6500 },
  { id: 2, desc: 'Fe-500D TMT Steel Reinforcement Bars', unit: 'MT', qty: 1200, rate: 52000 },
  { id: 3, desc: 'M25 Grade Ready Mix Concrete', unit: 'Cum', qty: 8500, rate: 4200 },
  { id: 4, desc: 'Excavation in Hard Rock (Blasting Prohibited)', unit: 'Cum', qty: 2000, rate: 0 },
];

export const RISK_CLAUSES = [
  { id: 1, clause: '44.2', title: 'Liquidated Damages', risk: 'High', desc: 'Penalty cap is 10% of contract value, standard is usually 5%.', aiSuggestion: 'Request amendment to cap at 5%.' },
  { id: 2, clause: '12.1', title: 'Payment Terms', risk: 'Medium', desc: 'Payment release timeline is 90 days instead of 45 days.', aiSuggestion: 'Factor in 3% extra for working capital interest.' },
];

export const VENDORS = [
  { id: 1, package: 'Electrical Works', name: 'PowerTech Solutions', status: 'Quoted', amount: '₹ 1.2 Cr', l1: true },
  { id: 2, package: 'Electrical Works', name: 'Standard Infra', status: 'Viewed', amount: '-', l1: false },
  { id: 3, package: 'Plumbing', name: 'AquaFlow Systems', status: 'Sent', amount: '-', l1: false },
];

export const COLORS = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  danger: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  }
};