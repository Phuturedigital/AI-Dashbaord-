import React, { useState } from 'react';
import { Calendar, BarChart3, FileText, MessageSquare, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import ContentCalendar from './content/ContentCalendar';
import CampaignSummary from './content/CampaignSummary';
import ReportSection from './content/ReportSection';
import ConsultationSection from './content/ConsultationSection';

export default function ContentHub() {
  const [activeTab, setActiveTab] = useState('calendar');
  const [isReportExpanded, setIsReportExpanded] = useState(false);
  const [isHelpExpanded, setIsHelpExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Main Tabs */}
      <div className="flex border-b border-gray-100">
        <button
          onClick={() => setActiveTab('calendar')}
          className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
            activeTab === 'calendar'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Calendar className="w-4 h-4" />
          Content Calendar
        </button>
        <button
          onClick={() => setActiveTab('performance')}
          className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
            activeTab === 'performance'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          Campaign Performance
        </button>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {activeTab === 'calendar' && <ContentCalendar />}
        {activeTab === 'performance' && <CampaignSummary />}
      </div>

      {/* Collapsible Sections */}
      <div className="border-t border-gray-100">
        {/* Report Generation */}
        <div className="border-b border-gray-100">
          <button
            onClick={() => setIsReportExpanded(!isReportExpanded)}
            className="w-full px-6 py-4 flex items-center justify-between text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="font-medium">Report Generation</span>
            </div>
            {isReportExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {isReportExpanded && <ReportSection />}
        </div>

        {/* Consultation/Help */}
        <div>
          <button
            onClick={() => setIsHelpExpanded(!isHelpExpanded)}
            className="w-full px-6 py-4 flex items-center justify-between text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span className="font-medium">Get Help & Consultation</span>
            </div>
            {isHelpExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {isHelpExpanded && <ConsultationSection />}
        </div>
      </div>

      {/* Sticky Apply Button */}
      <div className="sticky bottom-0 p-4 bg-white border-t border-gray-100">
        <button className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Apply All AI Suggestions
        </button>
      </div>
    </div>
  );
}