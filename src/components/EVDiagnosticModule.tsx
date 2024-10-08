import React, { useState, useEffect } from 'react';
import DiagnosticProtocolViewer from './DiagnosticProtocolViewer';
import InsightsSummariesModule from './InsightsSummariesModule';

// Define the ReportData interface
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

const EVDiagnosticModule: React.FC = () => {
  const [reportData, setReportData] = useState<ReportData | null>(null);

  useEffect(() => {
    // Fetch report data (replace with actual API call)
    const fetchReportData = async () => {
      try {
        const response = await fetch('/api/report-data');
        const data = await response.json();
        setReportData(data);
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
    <div className="flex h-screen">
      <div className="w-2/3 bg-gray-100">
        <DiagnosticProtocolViewer reportData={reportData} zoomLevel={100} />
      </div>
      <div className="w-1/3 bg-white">
        <InsightsSummariesModule />
      </div>
    </div>
  );
};

export default EVDiagnosticModule;