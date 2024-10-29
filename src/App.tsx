import React from 'react';
import { Brain, BarChart3, FileText, Lightbulb, HelpCircle, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import StrategyBoard from './components/StrategyBoard';
import ContentHub from './components/ContentHub';
import AnalyticsSection from './components/AnalyticsSection';
import QuickActions from './components/QuickActions';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Quick Actions */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <QuickActions />
      </div>

      <div className="max-w-[1600px] mx-auto px-6">
        {/* Header Section */}
        <Header />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8">
          {/* Strategy Board */}
          <StrategyBoard />

          {/* Content Hub */}
          <ContentHub />
        </div>

        {/* Analytics Section */}
        <AnalyticsSection />

        {/* Help Button */}
        <button className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
          <HelpCircle size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;