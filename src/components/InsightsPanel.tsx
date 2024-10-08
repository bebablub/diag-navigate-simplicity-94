import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Card } from './ui/card';
import CustomerFriendlySummary from './insights/CustomerFriendlySummary';
import MainIssuesDetected from './insights/MainIssuesDetected';
import SafetyAssessment from './insights/SafetyAssessment';
import ErrorCodeDefinitions from './insights/ErrorCodeDefinitions';
import BatteryHealthComparison from './insights/BatteryHealthComparison';

const InsightsPanel: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full h-full overflow-y-auto space-y-4">
      <Card className="p-4 shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Report Insights and Explanations</h2>
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
      </Card>
      <div className="space-y-4">
        <InsightCard>
          <CustomerFriendlySummary />
        </InsightCard>
        <InsightCard>
          <MainIssuesDetected />
        </InsightCard>
        <InsightCard>
          <SafetyAssessment />
        </InsightCard>
        <InsightCard>
          <ErrorCodeDefinitions />
        </InsightCard>
        <InsightCard>
          <BatteryHealthComparison />
        </InsightCard>
      </div>
    </div>
  );
};

const InsightCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Card className="p-4 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
    {children}
  </Card>
);

export default InsightsPanel;