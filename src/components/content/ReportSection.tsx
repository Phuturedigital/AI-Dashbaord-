import React from 'react';
import { FileText, Calendar, Mail } from 'lucide-react';

export default function ReportSection() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <select className="p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300">
          <option>SEO Report</option>
          <option>Social Media Report</option>
          <option>Ad Performance Report</option>
        </select>

        <select className="p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Custom Range</option>
        </select>

        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <FileText className="w-4 h-4" />
          Generate Report
        </button>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-gray-400" />
          <div>
            <div className="font-medium text-gray-900">Automatic Reports</div>
            <div className="text-sm text-gray-500">
              Get reports delivered to your inbox
            </div>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
        </label>
      </div>
    </div>
  );
}