import React from 'react';
import ReportHeader from './ReportHeader';
import VehicleInformation from './VehicleInformation';
import TestResultOverview from './TestResultOverview';
import IsolationResistance from './IsolationResistance';
import HVSystemStatus from './HVSystemStatus';
import BatteryInformation from './BatteryInformation';
import TemperatureData from './TemperatureData';
import ErrorCodes from './ErrorCodes';

const HVCheckReport: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <ReportHeader />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/5 p-4">
            <VehicleInformation />
            <IsolationResistance />
            <HVSystemStatus />
          </div>
          <div className="w-full md:w-2/5 bg-gray-100 p-4">
            <TestResultOverview />
            <BatteryInformation />
            <TemperatureData />
            <ErrorCodes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HVCheckReport;