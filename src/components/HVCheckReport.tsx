import React, { useState, useEffect } from 'react';
import DiagnosticProtocolViewer from './DiagnosticProtocolViewer';
import InsightsPanel from './InsightsPanel';
import { simulatedApiResponse } from '../utils/simulatedApiResponse';

interface ReportData {
  general: {
    date: string;
    protocolNumber: string;
    brand: string;
    model: string;
    mileage: string;
    vin: string;
  };
  overview: {
    hvSystem: string;
    isolationResistance: string;
    errorCodes: string;
  };
  safetyIndicators: {
    isolationResistance: {
      minusPoleBattery: string;
      plusPoleBattery: string;
      minusPoleSystem: string;
      plusPoleSystem: string;
    };
    hvSystem: {
      crashSignal: string;
      pilotLine: string;
      voltageFreedom: string;
      chargingContactorPositive: string;
      chargingContactorNegative: string;
      batteryContactorPositive: string;
      batteryContactorNegative: string;
    };
  };
  batteryInformation: {
    controlUnitData: {
      stateOfHealth: string;
      stateOfCharge: string;
      maxDiffCellCharge: string;
      maxDiffCellVoltage: string;
      maxCellVoltage: string;
      minCellVoltage: string;
    };
    temperatures: {
      batteryTemperature: string;
      maxDiffCellTemperature: string;
      maxCellTemperature: string;
      minCellTemperature: string;
    };
  };
  errorCodes: Array<{
    code: string;
    description: string;
  }>;
}

const HVCheckReport: React.FC = () => {
  const [reportData, setReportData] = useState<ReportData | null>(null);

  useEffect(() => {
    // Simulate API call with a delay
    const fetchReportData = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setReportData(simulatedApiResponse as ReportData);
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };

    fetchReportData();
  }, []);

  if (!reportData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-2/3 bg-gray-100 flex flex-col">
        <div className="bg-white p-4 shadow-md">
          {/* PDF tooling */}
          {/* ... Add PDF tooling buttons here */}
        </div>
        <div className="flex-grow overflow-auto">
          <DiagnosticProtocolViewer reportData={reportData} />
        </div>
      </div>
      <div className="w-full lg:w-1/3 bg-white border-l border-gray-300">
        <InsightsPanel />
      </div>
    </div>
  );
};

export default HVCheckReport;