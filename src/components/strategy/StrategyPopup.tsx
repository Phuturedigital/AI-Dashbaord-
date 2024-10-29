import React from 'react';
import { X, Info } from 'lucide-react';
import { Strategy } from '../../types/strategy';
import SEOStrategy from './SEOStrategy';
import EngagementStrategy from './EngagementStrategy';
import BudgetStrategy from './BudgetStrategy';
import Toast from '../ui/Toast';

interface StrategyPopupProps {
  strategy: Strategy;
  onClose: () => void;
  onApply: (data: any) => void;
}

export default function StrategyPopup({ strategy, onClose, onApply }: StrategyPopupProps) {
  const renderStrategyContent = () => {
    switch (strategy.type) {
      case 'seo':
        return <SEOStrategy strategy={strategy} onApply={onApply} />;
      case 'engagement':
        return <EngagementStrategy strategy={strategy} onApply={onApply} />;
      case 'budget':
        return <BudgetStrategy strategy={strategy} onApply={onApply} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg m-4">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">AI Recommendations</h2>
              <p className="text-sm text-gray-500 mt-1">{strategy.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {renderStrategyContent()}
        </div>
      </div>
      
      <Toast />
    </div>
  );
}