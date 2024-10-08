import React from 'react';
import HVCheckReportOverview from './HVCheckReportOverview';
import HVCheckReportDetails from './HVCheckReportDetails';
import { Card } from './ui/card';

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
  const pageStyle = {
    transform: `scale(${zoomLevel / 100})`,
    transformOrigin: 'top center',
    width: '210mm',
    height: '297mm',
    margin: '0 auto 20px',
    padding: '10mm',
    boxSizing: 'border-box' as const,
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontSize: '10px',
    lineHeight: '1.2',
  };

  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    overflow: 'hidden',
  };

  return (
    <div className="space-y-8">
      <Card style={{...pageStyle, ...cardStyle}}>
        <HVCheckReportOverview
          generalData={reportData.general}
          overviewResult={reportData.overview}
        />
      </Card>
      <Card style={{...pageStyle, ...cardStyle}}>
        <HVCheckReportDetails
          generalData={reportData.general}
          safetyIndicators={reportData.safetyIndicators}
          batteryInformation={reportData.batteryInformation}
          errorCodes={reportData.errorCodes}
        />
      </Card>
    </div>
  );
};

export default DiagnosticProtocolViewer;