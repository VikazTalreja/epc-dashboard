"use client";

import React, { useState } from 'react';
import { Search, LayoutDashboard, FileText, Users, PieChart, DollarSign, AlertTriangle, ChevronRight, Clock } from 'lucide-react';
import Sidebar from '../components/common/Sidebar';
import DashboardView from '../components/views/DashboardView';
import TenderWorkbench from '../components/views/TenderWorkbench';

export default function EPCAutomationApp() {
  const [view, setView] = useState('dashboard');
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-800">
      <Sidebar activeView={view} setView={setView} />
      <main className="animate-in fade-in duration-500">
        {view === 'dashboard' && <DashboardView onSelectTender={() => setView('tender')} />}
        {view === 'tender' && <TenderWorkbench onBack={() => setView('dashboard')} />}
      </main>
    </div>
  );
}