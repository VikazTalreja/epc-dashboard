"use client";

import React from 'react';
import { Mail } from 'lucide-react';
import Badge from '../common/Badge';
import { VENDORS } from '../../data/tenders';

const VendorTab = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-gray-800 text-lg">Work Packages & RFQs</h3>
      <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-all">
        + Create New Package
      </button>
    </div>

    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
          <tr>
            <th className="px-6 py-3">Package Name</th>
            <th className="px-6 py-3">Subcontractor</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Quote Value</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {VENDORS.map((vendor) => (
            <tr key={vendor.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-700">{vendor.package}</td>
              <td className="px-6 py-4 text-gray-600">{vendor.name}</td>
              <td className="px-6 py-4">
                <Badge type={vendor.status === 'Quoted' ? 'success' : vendor.status === 'Viewed' ? 'warning' : 'neutral'}>
                  {vendor.status}
                </Badge>
              </td>
              <td className="px-6 py-4 font-mono text-gray-900">
                {vendor.amount}
                {vendor.l1 && <span className="ml-2 text-[10px] bg-green-100 text-green-700 px-1 rounded border border-green-200">L1</span>}
              </td>
              <td className="px-6 py-4">
                <button className="text-gray-400 hover:text-blue-600"><Mail size={16} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default VendorTab;