import React, { useState } from 'react';
import { Search, ZoomIn, ZoomOut, Download, Printer } from 'lucide-react';
import HVCheckReportOverview from './HVCheckReportOverview';
import HVCheckReportDetails from './HVCheckReportDetails';

interface DiagnosticProtocolViewerProps {
  reportData: {
  reportData: {
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
  };
  };
}

const DiagnosticProtocolViewer: React.FC<DiagnosticProtocolViewerProps> = ({ reportData }) => {
  const [zoomLevel, setZoomLevel] = useState(100);

  return (
    <div className="h-full flex flex-col">
      <div className="bg-white p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">HV-CHECK Zustandprotokoll HV Sicherheit</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-200 rounded" onClick={() => setZoomLevel(prev => Math.max(50, prev - 10))}>
              <ZoomOut size={20} />
            </button>
            <span>{zoomLevel}%</span>
            <button className="p-2 hover:bg-gray-200 rounded" onClick={() => setZoomLevel(prev => Math.min(200, prev + 10))}>
              <ZoomIn size={20} />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded">
              <Download size={20} />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded">
              <Printer size={20} />
            </button>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search in document"
            className="w-full p-2 pl-10 border rounded"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="flex-grow overflow-auto p-4">
        <div className="bg-white shadow-md max-w-[210mm] mx-auto" style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}>
          <HVCheckReportOverview
            generalData={reportData.general}
            overviewResult={reportData.overview}
          />
          <HVCheckReportDetails
            safetyIndicators={reportData.safetyIndicators}
            batteryInformation={reportData.batteryInformation}
            errorCodes={reportData.errorCodes}
          />
        </div>
      </div>
    </div>
  );
};

export default DiagnosticProtocolViewer;
