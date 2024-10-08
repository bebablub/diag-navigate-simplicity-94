import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CustomerFriendlySummary from './insights/CustomerFriendlySummary';
import MainIssuesDetected from './insights/MainIssuesDetected';
import SafetyAssessment from './insights/SafetyAssessment';
import ErrorCodeDefinitions from './insights/ErrorCodeDefinitions';
import BatteryHealthComparison from './insights/BatteryHealthComparison';

const InsightsPanel: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const commonQuestions = [
    "How can I explain this report to my customer?",
    "What are the main issues detected?",
    "Is the vehicle safe to drive?",
    "What do the error codes mean?",
    "How's the battery health compared to normal standards?"
  ];

  return (
    <div className="w-full h-full bg-white overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Report Insights and Explanations</h2>
        <select
          className="w-full p-2 mb-4 border rounded"
          value={selectedQuestion}
          onChange={(e) => setSelectedQuestion(e.target.value)}
        >
          <option value="">Select a question to get started:</option>
          {commonQuestions.map((question, index) => (
            <option key={index} value={question}>{question}</option>
          ))}
        </select>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for explanations..."
            className="w-full pl-10 p-2 border rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="p-4 space-y-6">
        <CustomerFriendlySummary />
        <MainIssuesDetected />
        <SafetyAssessment />
        <ErrorCodeDefinitions />
        <BatteryHealthComparison />
      </div>
    </div>
  );
};

export default InsightsPanel;