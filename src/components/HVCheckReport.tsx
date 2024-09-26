import React from 'react';
import DiagnosticProtocolViewer from './DiagnosticProtocolViewer';
import InsightsPanel from './InsightsPanel';

const HVCheckReport: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-3/5 bg-gray-100">
        <DiagnosticProtocolViewer />
      </div>
      <div className="w-2/5 bg-white">
        <InsightsPanel />
      </div>
    </div>
  );
};

export default HVCheckReport;
