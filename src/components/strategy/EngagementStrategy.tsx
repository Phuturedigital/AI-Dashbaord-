import React from 'react';
import { Info } from 'lucide-react';
import { Strategy } from '../../types/strategy';
import Tooltip from '../ui/Tooltip';

interface EngagementStrategyProps {
  strategy: Strategy;
  onApply: (data: any) => void;
}

export default function EngagementStrategy({ strategy, onApply }: EngagementStrategyProps) {
  const recommendations = [
    { platform: 'Instagram', times: ['Monday 8 AM', 'Wednesday 6 PM'], reason: 'Highest user activity' },
    { platform: 'LinkedIn', times: ['Tuesday 10 AM', 'Thursday 2 PM'], reason: 'Professional audience peak' },
    { platform: 'Twitter', times: ['Daily 12 PM', 'Daily 5 PM'], reason: 'Maximum reach potential' },
  ];

  const contentSuggestions = [
    'Share customer success story with relevant hashtags',
    'Run an industry poll during peak hours',
    'Post behind-the-scenes content with team',
  ];

  const handleApply = () => {
    onApply({ recommendations, contentSuggestions });
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-medium text-gray-900">Optimal Posting Times</h3>
          <Tooltip content="Based on your audience's peak activity periods">
            <Info className="w-4 h-4 text-gray-400" />
          </Tooltip>
        </div>

        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{rec.platform}</span>
                <span className="text-sm text-gray-500">{rec.reason}</span>
              </div>
              <div className="flex gap-2">
                {rec.times.map((time, i) => (
                  <span key={i} className="text-sm px-2 py-1 bg-white rounded border border-gray-200">
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-medium text-gray-900">Content Suggestions</h3>
          <Tooltip content="AI-generated content ideas for maximum engagement">
            <Info className="w-4 h-4 text-gray-400" />
          </Tooltip>
        </div>

        <div className="space-y-2">
          {contentSuggestions.map((suggestion, index) => (
            <div key={index} className="p-3 border border-gray-100 rounded-lg text-sm text-gray-700">
              {suggestion}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleApply}
        className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Apply AI Recommendations
      </button>
    </div>
  );
}