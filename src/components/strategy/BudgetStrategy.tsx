import React from 'react';
import { Info, TrendingUp, ArrowRight, ArrowDown, Minus } from 'lucide-react';
import { Strategy } from '../../types/strategy';
import Tooltip from '../ui/Tooltip';

interface BudgetStrategyProps {
  strategy: Strategy;
  onApply: (data: any) => void;
}

interface PlatformRecommendation {
  platform: string;
  change: number;
  impact: string;
  projected: string;
  icon: string;
}

export default function BudgetStrategy({ strategy, onApply }: BudgetStrategyProps) {
  const recommendations: PlatformRecommendation[] = [
    {
      platform: 'Google Ads',
      change: 20,
      impact: 'Improved visibility and click-through rates',
      projected: '+25% CTR',
      icon: '🎯'
    },
    {
      platform: 'Facebook Ads',
      change: -10,
      impact: 'Maintain reach at optimized spend',
      projected: '+15% ROI',
      icon: '📱'
    },
    {
      platform: 'Instagram Ads',
      change: 15,
      impact: 'Enhanced engagement and conversions',
      projected: '+30% engagement',
      icon: '📸'
    },
    {
      platform: 'LinkedIn Ads',
      change: 0,
      impact: 'Stable reach and conversions expected',
      projected: 'Maintain performance',
      icon: '💼'
    }
  ];

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (change < 0) return <ArrowDown className="w-4 h-4 text-amber-600" />;
    return <Minus className="w-4 h-4 text-gray-600" />;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-amber-600';
    return 'text-gray-600';
  };

  const handleApply = () => {
    onApply({ recommendations });
  };

  const projectedOverallROI = '+10%';

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-medium text-gray-900">Budget Recommendations by Platform</h3>
          <Tooltip content="Based on recent performance data and market trends">
            <Info className="w-4 h-4 text-gray-400" />
          </Tooltip>
        </div>

        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{rec.icon}</span>
                  <span className="font-medium text-gray-900">{rec.platform}</span>
                </div>
                <div className="flex items-center gap-2">
                  {getChangeIcon(rec.change)}
                  <span className={`text-sm font-medium ${getChangeColor(rec.change)}`}>
                    {rec.change > 0 ? '+' : ''}{rec.change}% budget
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{rec.impact}</span>
                <span className={`font-medium ${getChangeColor(rec.change)}`}>
                  {rec.projected}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-indigo-50 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-indigo-900">Projected Overall ROI</span>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            <span className="font-bold text-indigo-600">{projectedOverallROI}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleApply}
          className="flex-1 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          Apply All Changes
        </button>
      </div>
    </div>
  );
}