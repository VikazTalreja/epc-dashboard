"use client";

import React from 'react';
import { Search, DollarSign, PieChart, AlertTriangle, Clock, ChevronRight } from 'lucide-react';
import { TENDERS } from '../../data/tenders';
import KPICard from '../common/KPICard';
import Badge from '../common/Badge';

interface DashboardViewProps {
  onSelectTender: () => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onSelectTender }) => (
  <div className="p-8 space-y-8 bg-gray-50 min-h-screen ml-64">
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Command Center</h1>
        <p className="text-gray-500 text-sm mt-1">Overview of your bidding pipeline</p>
      </div>
      <div className="flex gap-3">
        <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm transition-all">Sync GeM Portal</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm flex items-center gap-2 transition-all">
          <Search size={16} /> Find Tenders
        </button>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-6">
      <KPICard title="Active Pipeline" value="₹ 1,672 Cr" trend="12%" trendUp={true} icon={DollarSign} color="bg-blue-100" />
      <KPICard title="Win Rate (YTD)" value="18.4%" trend="2.1%" trendUp={true} icon={PieChart} color="bg-green-100" />
      <KPICard title="Pending Approvals" value="5 Urgent" trend="1" trendUp={false} icon={AlertTriangle} color="bg-yellow-100" />
    </div>

    <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="font-semibold text-gray-900 text-lg">Priority Tenders</h2>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800 uppercase tracking-wide">View All</button>
      </div>
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
          <tr>
            <th className="px-6 py-3">Project</th>
            <th className="px-6 py-3">Client</th>
            <th className="px-6 py-3">Value</th>
            <th className="px-6 py-3">Deadline</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {TENDERS.map((tender) => (
            <tr key={tender.id} onClick={onSelectTender} className="hover:bg-gray-50 transition-colors cursor-pointer group">
              <td className="px-6 py-4">
                <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{tender.title}</div>
                <div className="text-xs text-gray-400 mt-0.5">{tender.id}</div>
              </td>
              <td className="px-6 py-4 text-gray-600">{tender.client}</td>
              <td className="px-6 py-4 font-mono text-gray-700 font-medium">{tender.value}</td>
              <td className="px-6 py-4">
                <Badge type={tender.deadline.includes('Urgent') ? 'danger' : 'neutral'}>
                  <Clock size={10} className="mr-1" /> {tender.deadline}
                </Badge>
              </td>
              <td className="px-6 py-4">
                 <span className="text-gray-700 text-xs font-medium bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                   {tender.status}
                 </span>
              </td>
              <td className="px-6 py-4 text-right">
                <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DashboardView;