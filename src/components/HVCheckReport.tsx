import React, { useState, useEffect } from 'react';
import DiagnosticProtocolViewer from './DiagnosticProtocolViewer';
import InsightsPanel from './InsightsPanel';
import { simulatedApiResponse } from '../utils/simulatedApiResponse';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Download, Printer, ZoomIn, ZoomOut, Mail } from 'lucide-react';

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
  const [zoomLevel, setZoomLevel] = useState(100);

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
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <div className="w-full lg:w-2/3 flex flex-col p-4">
        <Card className="mb-4 p-4 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">
                {reportData.general.brand} {reportData.general.model} - HV-CHECK Report
              </h1>
              <p className="text-sm text-gray-600">
                Protocol: {reportData.general.protocolNumber} | Date: {reportData.general.date}
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon"><ZoomIn size={20} /></Button>
              <Button variant="outline" size="icon"><ZoomOut size={20} /></Button>
              <Button variant="outline" size="icon"><Download size={20} /></Button>
              <Button variant="outline" size="icon"><Printer size={20} /></Button>
              <Button variant="outline" size="icon"><Mail size={20} /></Button>
            </div>
          </div>
        </Card>
        <div className="flex-grow overflow-auto space-y-4">
          <DiagnosticProtocolViewer reportData={reportData} zoomLevel={zoomLevel} />
        </div>
      </div>
      <div className="w-full lg:w-1/3 bg-gray-100 p-4">
        <InsightsPanel />
      </div>
    </div>
  );
};

export default HVCheckReport;