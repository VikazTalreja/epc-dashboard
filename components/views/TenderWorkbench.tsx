"use client";

import React, { useState } from 'react';
import { ChevronRight, Mail, LayoutDashboard, FileText, Users, PieChart } from 'lucide-react';
import SmartBOQTab from '../tabs/SmartBOQTab';
import DocumentsTab from '../tabs/DocumentsTab';
import VendorTab from '../tabs/VendorTab';
import Badge from '../common/Badge';

type TabType = 'boq' | 'docs' | 'vendors';

interface TenderWorkbenchProps {
  onBack: () => void;
}

const TenderWorkbench: React.FC<TenderWorkbenchProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<TabType>('boq');

  return (
    <div className="flex flex-col h-screen ml-64 bg-gray-50">
      {/* Sticky Header */}
      <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
            <ChevronRight className="rotate-180" size={20} />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-gray-900 text-xl">NH-44 Highway Section</h1>
              <span className="bg-green-100 text-green-700 border border-green-200 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">Live Tender</span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5 flex gap-2">
              <span>Tender ID: T-101</span> • <span>Client: NHAI</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex -space-x-2">
             <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600 shadow-sm" title="Amit (Eng)">AM</div>
             <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-white flex items-center justify-center text-xs font-bold text-red-600 shadow-sm" title="Sarah (Legal)">SA</div>
           </div>
           <div className="h-6 w-px bg-gray-200"></div>
           <button className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 shadow-md transition-all">
             Submit Final Bid
           </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-8 py-2 bg-white border-b border-gray-200">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('boq')}
            className={`pb-3 text-sm font-medium border-b-2 transition-all ${activeTab === 'boq' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
          >
            Smart BOQ
          </button>
          <button
             onClick={() => setActiveTab('docs')}
             className={`pb-3 text-sm font-medium border-b-2 transition-all ${activeTab === 'docs' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
          >
            Documents & Risk <Badge type="danger">2</Badge>
          </button>
          <button
             onClick={() => setActiveTab('vendors')}
             className={`pb-3 text-sm font-medium border-b-2 transition-all ${activeTab === 'vendors' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
          >
            Subcontractors
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-8 overflow-auto flex-1">
        {activeTab === 'boq' && <SmartBOQTab />}
        {activeTab === 'docs' && <DocumentsTab />}
        {activeTab === 'vendors' && <VendorTab />}
      </div>
    </div>
  );
};

export default TenderWorkbench;