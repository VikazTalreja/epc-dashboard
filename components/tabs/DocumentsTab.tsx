"use client";

import React from 'react';
import { FileText, Bot, Sparkles } from 'lucide-react';
import Badge from '../common/Badge';
import { RISK_CLAUSES } from '../../data/tenders';

const DocumentsTab = () => (
  <div className="flex h-[calc(100vh-14rem)] gap-6 animate-in fade-in duration-500">
    {/* Mock PDF Viewer */}
    <div className="w-1/2 bg-gray-800 rounded-xl p-8 flex flex-col items-center justify-center shadow-lg text-gray-400 border border-gray-700">
      <FileText size={48} className="mb-4 opacity-20" />
      <p className="text-white">NHAI_Tender_Doc_Vol_1.pdf</p>
      <p className="text-xs opacity-50 mt-2">Page 44 of 250</p>
    </div>

    <div className="w-1/2 flex flex-col gap-4">
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-start gap-3">
        <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
          <Bot size={20} />
        </div>
        <div>
          <h4 className="font-semibold text-blue-900 text-sm">Automated Risk Scan</h4>
          <p className="text-blue-700 text-xs mt-1">
            I have analyzed 250 pages. Found <span className="font-bold">2 High Risks</span> and <span className="font-bold">1 Medium Risk</span>.
          </p>
        </div>
      </div>

      <div className="space-y-3 overflow-auto pr-2">
        {RISK_CLAUSES.map((risk) => (
          <div key={risk.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-medium text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">Clause {risk.clause}</span>
                <Badge type={risk.risk === 'High' ? 'danger' : 'warning'}>{risk.risk} Risk</Badge>
              </div>
            </div>
            <h5 className="font-semibold text-gray-800 text-sm">{risk.title}</h5>
            <p className="text-sm text-gray-600 mt-1">{risk.desc}</p>
            <div className="mt-3 pt-3 border-t border-gray-100 bg-gray-50 -mx-4 -mb-4 px-4 py-2 flex gap-2 items-start">
               <Sparkles size={14} className="text-blue-500 mt-0.5 shrink-0" />
               <p className="text-xs text-gray-500 italic"><span className="font-medium text-blue-700">Suggestion:</span> {risk.aiSuggestion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DocumentsTab;