import React from 'react';
import DiagnosticProtocolViewer from './DiagnosticProtocolViewer';
import InsightsSummariesModule from './InsightsSummariesModule';

const EVDiagnosticModule: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-2/3 bg-gray-100">
        <DiagnosticProtocolViewer />
      </div>
      <div className="w-1/3 bg-white">
        <InsightsSummariesModule />
      </div>
    </div>
  );
};

export default EVDiagnosticModule;