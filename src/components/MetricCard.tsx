import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend: number;
}

export default function MetricCard({ title, value, icon, trend }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-sm">{title}</span>
        <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
          {icon}
        </div>
      </div>
      
      <div className="flex items-end justify-between">
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-gray-900">{value}%</h3>
          <div className={`flex items-center text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
            <span>{Math.abs(trend)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}