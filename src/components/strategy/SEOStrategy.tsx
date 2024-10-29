import React from 'react';
import { Info } from 'lucide-react';
import { Strategy } from '../../types/strategy';
import Tooltip from '../ui/Tooltip';

interface SEOStrategyProps {
  strategy: Strategy;
  onApply: (data: any) => void;
}

export default function SEOStrategy({ strategy, onApply }: SEOStrategyProps) {
  const recommendations = [
    { keyword: 'digital marketing', volume: '110K', relevance: 98 },
    { keyword: 'content strategy', volume: '74K', relevance: 95 },
    { keyword: 'SEO optimization', volume: '60K', relevance: 92 },
  ];

  const contentIdeas = [
    '5 Digital Marketing Trends for 2024',
    'How to Build a Content Strategy That Converts',
    'SEO Best Practices: A Complete Guide',
  ];

  const handleApply = () => {
    onApply({ recommendations, contentIdeas });
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-medium text-gray-900">Top Keyword Suggestions</h3>
          <Tooltip content="Based on search volume and industry relevance">
            <Info className="w-4 h-4 text-gray-400" />
          </Tooltip>
        </div>
        
        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">{rec.keyword}</span>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">{rec.volume} searches/mo</span>
                <span className="text-green-600">{rec.relevance}% relevant</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-medium text-gray-900">Suggested Content</h3>
          <Tooltip content="AI-generated content ideas using recommended keywords">
            <Info className="w-4 h-4 text-gray-400" />
          </Tooltip>
        </div>
        
        <div className="space-y-2">
          {contentIdeas.map((idea, index) => (
            <div key={index} className="p-3 border border-gray-100 rounded-lg text-sm text-gray-700">
              {idea}
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