import React from 'react';
import CustomerFriendlySummary from './insights/CustomerFriendlySummary';
import MainIssuesDetected from './insights/MainIssuesDetected';
import SafetyAssessment from './insights/SafetyAssessment';
import ErrorCodeDefinitions from './insights/ErrorCodeDefinitions';
import BatteryHealthComparison from './insights/BatteryHealthComparison';

const InsightsPanel: React.FC = () => {
  return (
    <div className="w-full h-full bg-white overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-blue-900">Report Insights and Explanations</h2>
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