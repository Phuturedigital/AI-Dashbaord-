import React, { useState } from 'react';
import { Sparkles, TrendingUp, Target, DollarSign } from 'lucide-react';
import StrategyPopup from './strategy/StrategyPopup';
import { Strategy } from '../types/strategy';

const strategies: Strategy[] = [
  {
    id: 'seo',
    title: 'Optimize SEO Keywords',
    description: 'Update your content strategy with trending keywords',
    icon: <Target className="w-5 h-5" />,
    impact: 'High',
    difficulty: 'Medium',
    type: 'seo',
    details: {
      keywords: ['digital marketing', 'content strategy', 'SEO optimization'],
      estimatedImpact: 15,
      contentIdeas: [
        'How to Boost Your SEO in 2024',
        '10 Tips for Better Content Strategy',
        'SEO Best Practices Guide'
      ]
    }
  },
  {
    id: 'engagement',
    title: 'Boost Engagement',
    description: 'Schedule posts during peak audience activity',
    icon: <Sparkles className="w-5 h-5" />,
    impact: 'Medium',
    difficulty: 'Low',
    type: 'engagement',
    details: {
      peakTimes: [
        { day: 'Monday', time: '10:00 AM' },
        { day: 'Wednesday', time: '2:00 PM' },
        { day: 'Friday', time: '3:00 PM' }
      ],
      platforms: ['Instagram', 'LinkedIn', 'Twitter']
    }
  },
  {
    id: 'budget',
    title: 'Adjust Ad Budget',
    description: 'Reallocate budget to best-performing campaigns',
    icon: <DollarSign className="w-5 h-5" />,
    impact: 'High',
    difficulty: 'High',
    type: 'budget',
    details: {
      currentAllocation: [
        { campaign: 'Brand Awareness', amount: 5000 },
        { campaign: 'Lead Generation', amount: 3000 },
        { campaign: 'Retargeting', amount: 2000 }
      ],
      recommendedAllocation: [
        { campaign: 'Brand Awareness', amount: 4000 },
        { campaign: 'Lead Generation', amount: 4500 },
        { campaign: 'Retargeting', amount: 1500 }
      ]
    }
  }
];

export default function StrategyBoard() {
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);

  const handleApply = (strategy: Strategy, data: any) => {
    console.log(`Applying strategy: ${strategy.title}`, data);
    // Here you would implement the actual logic for applying each strategy
    switch (strategy.type) {
      case 'seo':
        // Handle SEO strategy application
        break;
      case 'engagement':
        // Handle engagement strategy application
        break;
      case 'budget':
        // Handle budget strategy application
        break;
    }
    setSelectedStrategy(null);
  };

  return (
    <>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Strategic Recommendations</h2>
          <TrendingUp className="w-5 h-5 text-indigo-600" />
        </div>

        <div className="space-y-4">
          {strategies.map((strategy) => (
            <div key={strategy.id} className="p-4 rounded-lg border border-gray-100 hover:border-indigo-100 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                  {strategy.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">{strategy.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{strategy.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700">
                      Impact: {strategy.impact}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                      Difficulty: {strategy.difficulty}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedStrategy(strategy)}
                  className="px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedStrategy && (
        <StrategyPopup
          strategy={selectedStrategy}
          onClose={() => setSelectedStrategy(null)}
          onApply={(data) => handleApply(selectedStrategy, data)}
        />
      )}
    </>
  );
}