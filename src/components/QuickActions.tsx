import React from 'react';
import { Play, FileText, Lightbulb } from 'lucide-react';

export default function QuickActions() {
  return (
    <div className="flex flex-col gap-3">
      <button className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
        <Play className="w-5 h-5" />
      </button>
      <button className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
        <FileText className="w-5 h-5" />
      </button>
      <button className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
        <Lightbulb className="w-5 h-5" />
      </button>
    </div>
  );
}