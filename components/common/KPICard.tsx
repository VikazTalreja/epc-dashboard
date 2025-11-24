"use client";

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: React.ComponentType<any>;
  color: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, trend, trendUp, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 mt-1 font-mono tracking-tight">{value}</h3>
      </div>
      <div className={`p-2.5 rounded-lg bg-opacity-10 ${color} bg-gray-50`}>
        <Icon size={20} className={color.replace('bg-', 'text-')} />
      </div>
    </div>
    <div className="flex items-center gap-2 text-xs font-medium">
      <span className={`flex items-center gap-0.5 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
        {trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />} {trend}
      </span>
      <span className="text-gray-400">vs last month</span>
    </div>
  </div>
);

export default KPICard;