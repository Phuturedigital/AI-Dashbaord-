import React from 'react';
import { TrendingUp, ArrowRight, DollarSign } from 'lucide-react';

interface Campaign {
  platform: string;
  icon: string;
  metrics: {
    engagement: string;
    conversion: string;
    roi: string;
  };
  topCampaign: {
    name: string;
    reach: string;
    clicks: string;
    conversions: string;
  };
  suggestion: string;
}

export default function CampaignSummary() {
  const campaigns: Campaign[] = [
    {
      platform: 'Google Ads',
      icon: '🎯',
      metrics: {
        engagement: '4.2%',
        conversion: '2.8%',
        roi: '320%'
      },
      topCampaign: {
        name: 'Summer Sale',
        reach: '50K',
        clicks: '2.5K',
        conversions: '180'
      },
      suggestion: 'Increase budget by 15%'
    },
    {
      platform: 'Facebook Ads',
      icon: '📱',
      metrics: {
        engagement: '3.8%',
        conversion: '2.1%',
        roi: '280%'
      },
      topCampaign: {
        name: 'Product Launch',
        reach: '35K',
        clicks: '1.8K',
        conversions: '120'
      },
      suggestion: 'Optimize ad creative'
    }
  ];

  return (
    <div className="space-y-6">
      {campaigns.map((campaign, index) => (
        <div
          key={index}
          className="border border-gray-100 rounded-lg p-4 space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">{campaign.icon}</span>
              <h3 className="font-medium text-gray-900">{campaign.platform}</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm">
                <span className="text-gray-500">Engagement: </span>
                <span className="font-medium text-gray-900">
                  {campaign.metrics.engagement}
                </span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Conversion: </span>
                <span className="font-medium text-gray-900">
                  {campaign.metrics.conversion}
                </span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">ROI: </span>
                <span className="font-medium text-green-600">
                  {campaign.metrics.roi}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-900">
                Top Campaign: {campaign.topCampaign.name}
              </h4>
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-medium">
                  Best Performer
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-sm text-gray-500">Reach</div>
                <div className="font-medium text-gray-900">
                  {campaign.topCampaign.reach}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Clicks</div>
                <div className="font-medium text-gray-900">
                  {campaign.topCampaign.clicks}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Conversions</div>
                <div className="font-medium text-gray-900">
                  {campaign.topCampaign.conversions}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              <span className="text-gray-600">AI Suggestion: </span>
              <span className="font-medium text-gray-900">
                {campaign.suggestion}
              </span>
            </div>
            <button className="px-4 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              Optimize Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}