import React from 'react';
import HVCheckReportOverview from './HVCheckReportOverview';
import HVCheckReportDetails from './HVCheckReportDetails';

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

interface DiagnosticProtocolViewerProps {
  reportData: ReportData;
  zoomLevel: number;
}

const DiagnosticProtocolViewer: React.FC<DiagnosticProtocolViewerProps> = ({ reportData, zoomLevel }) => {
  return (
    <div className="space-y-4">
      <div className="bg-white shadow-md max-w-[210mm] mx-auto" style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}>
        <HVCheckReportOverview
          generalData={reportData.general}
          overviewResult={reportData.overview}
        />
      </div>
      <div className="bg-white shadow-md max-w-[210mm] mx-auto" style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}>
        <HVCheckReportDetails
          safetyIndicators={reportData.safetyIndicators}
          batteryInformation={reportData.batteryInformation}
          errorCodes={reportData.errorCodes}
        />
      </div>
    </div>
  );
};

export default DiagnosticProtocolViewer;