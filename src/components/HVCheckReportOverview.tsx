import React from 'react';
import ReportHeader from './ReportHeader';
import VehicleInformation from './VehicleInformation';
import TestResultOverview from './TestResultOverview';

const HVCheckReportOverview: React.FC = () => {
  return (
    <div className="p-4">
      <ReportHeader />
      <div className="mt-4">
        <VehicleInformation />
      </div>
      <div className="mt-4">
        <TestResultOverview />
      </div>
    </div>
  );
};

export default HVCheckReportOverview;