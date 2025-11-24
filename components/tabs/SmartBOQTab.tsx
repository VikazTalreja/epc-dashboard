"use client";

import React, { useState } from 'react';
import { Sparkles, Bot } from 'lucide-react';
import { BOQ_ITEMS } from '../../data/tenders';

const SmartBOQTab = () => {
  const [activeAiRow, setActiveAiRow] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const triggerAI = (id: number) => {
    setActiveAiRow(id);
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 w-12 text-gray-500 font-medium">#</th>
            <th className="px-6 py-3 text-gray-500 font-medium">Description</th>
            <th className="px-6 py-3 w-24 text-gray-500 font-medium">Unit</th>
            <th className="px-6 py-3 w-32 text-right text-gray-500 font-medium">Qty</th>
            <th className="px-6 py-3 w-48 text-gray-500 font-medium">Rate (₹)</th>
            <th className="px-6 py-3 w-48 text-right text-gray-500 font-medium">Total (₹)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {BOQ_ITEMS.map((item) => (
            <tr key={item.id} className="group hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-gray-400 text-xs">{item.id}</td>
              <td className="px-6 py-4 font-medium text-gray-700">{item.desc}</td>
              <td className="px-6 py-4 text-gray-500 text-xs">{item.unit}</td>
              <td className="px-6 py-4 text-right font-mono text-gray-700">{item.qty.toLocaleString()}</td>
              <td className="px-6 py-4 relative">
                <div className="flex items-center relative">
                  <input
                    defaultValue={item.rate > 0 ? item.rate : ''}
                    placeholder="0.00"
                    className="w-full bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm font-mono focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  />
                  <button
                    onClick={() => triggerAI(item.id)}
                    className="absolute right-2 p-1.5 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Sparkles size={14} />
                  </button>

                  {activeAiRow === item.id && (
                    <div className="absolute top-10 left-0 z-20 w-80 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-blue-200 p-4 ring-1 ring-blue-300/20">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-1.5 text-blue-700">
                          <Bot size={14} /> <span className="text-xs font-bold">AI ANALYST</span>
                        </div>
                        <button onClick={() => setActiveAiRow(null)} className="text-gray-400 hover:text-gray-600">×</button>
                      </div>
                      {loading ? (
                         <div className="flex items-center gap-2 text-gray-500 text-xs py-4">
                           <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                           Analyzing market trends...
                         </div>
                      ) : (
                        <>
                          <p className="text-sm text-gray-700 mb-3">Market rate for 53 Grade cement in Maharashtra is <span className="font-semibold">₹ 6,350</span>. Trend is stable.</p>
                          <div className="flex gap-2">
                            <button className="flex-1 bg-blue-600 text-white text-xs py-1.5 rounded-md font-medium hover:bg-blue-700 shadow-sm">Apply Rate</button>
                            <button className="px-3 border border-gray-200 text-gray-600 text-xs rounded-md font-medium hover:bg-gray-50">View Source</button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 text-right font-mono font-medium text-gray-900">
                {(item.qty * (item.rate || 0)).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SmartBOQTab;