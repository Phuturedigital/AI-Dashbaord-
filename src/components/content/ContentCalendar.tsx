import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Hash } from 'lucide-react';

interface PostSuggestion {
  day: string;
  type: string;
  time: string;
  caption: string;
  hashtags: string[];
}

export default function ContentCalendar() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const suggestions: PostSuggestion[] = [
    {
      day: 'Monday',
      type: 'Product Highlight',
      time: '10:00 AM',
      caption: 'Transform your workflow with our latest AI-powered features! 🚀',
      hashtags: ['#ProductLaunch', '#AI', '#Innovation']
    },
    {
      day: 'Wednesday',
      type: 'Customer Story',
      time: '2:00 PM',
      caption: 'See how Company X achieved 200% growth with our platform.',
      hashtags: ['#CustomerSuccess', '#Growth', '#CaseStudy']
    },
    {
      day: 'Friday',
      type: 'Tips & Tricks',
      time: '11:00 AM',
      caption: '5 ways to optimize your marketing strategy using AI insights.',
      hashtags: ['#MarketingTips', '#Growth', '#Strategy']
    }
  ];

  return (
    <div className="space-y-6">
      {/* Calendar Preview */}
      <div className="grid grid-cols-7 gap-4">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <div key={i} className="text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
        {[...Array(7)].map((_, i) => {
          const suggestion = suggestions.find(s => s.day === ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i]);
          return (
            <button
              key={i}
              onClick={() => setSelectedDay(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i])}
              className={`p-3 rounded-lg border ${
                suggestion 
                  ? 'border-indigo-100 bg-indigo-50 hover:bg-indigo-100' 
                  : 'border-gray-100 hover:bg-gray-50'
              } transition-colors`}
            >
              {suggestion && (
                <div className="text-xs text-indigo-600">
                  {suggestion.type}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Post Details Panel */}
      {selectedDay && (
        <div className="border border-gray-100 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-900">
              {selectedDay}'s Content Plan
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Best time to post: {suggestions.find(s => s.day === selectedDay)?.time}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI-Generated Caption
              </label>
              <textarea
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300"
                rows={3}
                defaultValue={suggestions.find(s => s.day === selectedDay)?.caption}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Suggested Hashtags
              </label>
              <div className="flex flex-wrap gap-2">
                {suggestions
                  .find(s => s.day === selectedDay)
                  ?.hashtags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Add to Calendar
            </button>
            <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
              Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}