import React from 'react';
import ReportHeader from './ReportHeader';
import IsolationResistance from './IsolationResistance';
import HVSystemStatus from './HVSystemStatus';
import BatteryInformation from './BatteryInformation';
import TemperatureData from './TemperatureData';
import ErrorCodes from './ErrorCodes';

const HVCheckReportDetails: React.FC = () => {
  return (
    <div className="p-4">
      <ReportHeader />
      <div className="mt-4">
        <IsolationResistance />
      </div>
      <div className="mt-4">
        <HVSystemStatus />
      </div>
      <div className="mt-4">
        <BatteryInformation />
      </div>
      <div className="mt-4">
        <TemperatureData />
      </div>
      <div className="mt-4">
        <ErrorCodes />
      </div>
    </div>
  );
};

export default HVCheckReportDetails;