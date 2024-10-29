import React from 'react';
import { Calendar, MessageSquare, BookOpen } from 'lucide-react';

export default function ConsultationSection() {
  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics of AI-powered marketing',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Best Practices',
      description: 'Tips for optimizing your campaigns',
      icon: <MessageSquare className="w-5 h-5" />
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
        <Calendar className="w-4 h-4" />
        Schedule a Consultation
      </button>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Help Resources</h3>
        <div className="grid grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <a
              key={index}
              href="#"
              className="p-4 border border-gray-100 rounded-lg hover:border-indigo-100 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gray-50 rounded-lg text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  {resource.icon}
                </div>
                <h4 className="font-medium text-gray-900">{resource.title}</h4>
              </div>
              <p className="text-sm text-gray-500">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
        <div>
          <h4 className="font-medium text-indigo-900">Need immediate help?</h4>
          <p className="text-sm text-indigo-700">Our support team is here 24/7</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Start Chat
        </button>
      </div>
    </div>
  );
}