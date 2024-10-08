import React, { useState, useEffect } from 'react';
import DiagnosticProtocolViewer from './DiagnosticProtocolViewer';
import InsightsPanel from './InsightsPanel';
import HVCheckReportOverview from './HVCheckReportOverview';
import HVCheckReportDetails from './HVCheckReportDetails';

// This interface represents the structure of the data we expect from the API
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
    // This is where you would fetch the data from your API
    const fetchReportData = async () => {
      try {
        // Replace this with your actual API call
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
      <div className="w-3/5 bg-gray-100 overflow-auto">
        <DiagnosticProtocolViewer>
          <HVCheckReportOverview
            generalData={reportData.general}
            overviewResult={reportData.overview}
          />
          <HVCheckReportDetails
            safetyIndicators={reportData.safetyIndicators}
            batteryInformation={reportData.batteryInformation}
            errorCodes={reportData.errorCodes}
          />
        </DiagnosticProtocolViewer>
      </div>
      <div className="w-2/5 bg-white">
        <InsightsPanel reportData={reportData} />
      </div>
    </div>
  );
};

export default HVCheckReport;