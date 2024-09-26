import React from 'react';
import DiagnosticProtocolViewer from './DiagnosticProtocolViewer';
import InsightsSummariesModule from './InsightsSummariesModule';

const HVCheckReport: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 bg-white shadow-lg rounded-lg overflow-hidden">
          <DiagnosticProtocolViewer />
        </div>
        <div className="w-full md:w-2/5 bg-gray-100 p-4 mt-4 md:mt-0 md:ml-4 rounded-lg">
          <InsightsSummariesModule />
        </div>
      </div>
    </div>
  );
};

export default HVCheckReport;
