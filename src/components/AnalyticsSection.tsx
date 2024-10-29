import React from 'react';
import { BarChart, LineChart, PieChart } from 'lucide-react';

export default function AnalyticsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-gray-900">Performance</h3>
          <BarChart className="w-5 h-5 text-indigo-600" />
        </div>
        <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
          <span className="text-sm text-gray-500">Performance Chart</span>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-gray-900">Engagement Trends</h3>
          <LineChart className="w-5 h-5 text-indigo-600" />
        </div>
        <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
          <span className="text-sm text-gray-500">Trends Chart</span>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-gray-900">Audience Demographics</h3>
          <PieChart className="w-5 h-5 text-indigo-600" />
        </div>
        <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
          <span className="text-sm text-gray-500">Demographics Chart</span>
        </div>
      </div>
    </div>
  );
}