import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CustomerFriendlySummary from './insights/CustomerFriendlySummary';
import MainIssuesDetected from './insights/MainIssuesDetected';
import SafetyAssessment from './insights/SafetyAssessment';
import ErrorCodeDefinitions from './insights/ErrorCodeDefinitions';
import BatteryHealthComparison from './insights/BatteryHealthComparison';

const InsightsPanel: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full h-full bg-gray-50 overflow-y-auto">
      <div className="p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-600 mt-4">Report Insights and Explanations</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Ask me a question about this report ..."
            className="w-full p-2 pl-10 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="space-y-6">
          <CustomerFriendlySummary />
          <MainIssuesDetected />
          <SafetyAssessment />
          <ErrorCodeDefinitions />
          <BatteryHealthComparison />
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;