import React from 'react';
import { Brain, TrendingUp, Users, Target } from 'lucide-react';
import MetricCard from './MetricCard';

export default function Header() {
  return (
    <header className="pt-8 pb-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">AI Insight – The Brain of Dashboard AI</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Optimization Score"
          value={85}
          icon={<Target className="w-5 h-5" />}
          trend={+5.2}
        />
        <MetricCard
          title="Forecasted Growth"
          value={32}
          icon={<TrendingUp className="w-5 h-5" />}
          trend={+2.8}
        />
        <MetricCard
          title="Engagement Rate"
          value={12.5}
          icon={<Users className="w-5 h-5" />}
          trend={-0.8}
        />
      </div>
    </header>
  );
}