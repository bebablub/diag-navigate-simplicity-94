import React from 'react';
import { Separator } from './ui/separator';

interface GeneralData {
  date: string;
  protocolNumber: string;
  brand: string;
  model: string;
  mileage: string;
  vin: string;
}

interface OverviewResult {
  hvSystem: string;
  isolationResistance: string;
  errorCodes: string;
}

interface HVCheckReportOverviewProps {
  generalData: GeneralData;
  overviewResult: OverviewResult;
}

const HVCheckReportOverview: React.FC<HVCheckReportOverviewProps> = ({ generalData, overviewResult }) => {
  if (!generalData || !overviewResult) {
    return <div>Loading overview...</div>;
  }

  return (
    <div className="flex flex-col h-full text-xs">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-xl font-bold">HV-CHECK</h1>
          <h2 className="text-sm">Zustandprotokoll HV Sicherheit</h2>
        </div>
        <img src="/avl-ditest-logo.png" alt="AVL DITEST" className="w-16" />
      </div>
      
      <Separator className="my-4" />
      
      <div className="mb-4">
        <h3 className="text-sm font-bold mb-2">Prüfdaten</h3>
        <div className="flex justify-between">
          <span>Datum: {generalData.date}</span>
          <span>Protokollnr.: {generalData.protocolNumber}</span>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="mb-4">
        <h3 className="text-sm font-bold mb-2">Fahrzeugdaten</h3>
        <div className="grid grid-cols-2 gap-y-1">
          <div>Marke: {generalData.brand}</div>
          <div>Kilometerstand: {generalData.mileage}</div>
          <div>Modell: {generalData.model}</div>
          <div>VIN: {generalData.vin}</div>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="mb-6">
        <h3 className="text-sm font-bold mb-2">Prüfergebnis - Übersicht</h3>
        <div className="space-y-2">
          <div className={`p-2 text-white text-center ${overviewResult.hvSystem === 'auffällig' ? 'bg-green-600' : 'bg-red-600'}`}>
            HV-System {overviewResult.hvSystem}
          </div>
          <div className={`p-2 text-white text-center ${overviewResult.isolationResistance === 'im Normalbereich' ? 'bg-green-600' : 'bg-red-600'}`}>
            Isolationswiderstände {overviewResult.isolationResistance}
          </div>
          <div className={`p-2 text-white text-center ${overviewResult.errorCodes === 'gespeichert' ? 'bg-red-600' : 'bg-green-600'}`}>
            Fehlercodes {overviewResult.errorCodes}
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="text-[8px] space-y-1 mb-4">
          <p>Bei allen angezeigten Werten handelt es sich um Daten aus den Steuergeräten des Fahrzeugs.</p>
          <p>Die Ermittlung der Zustände der Isolationswiderstände erfolgt entsprechend den UN ECE R100 Grenzwerten.</p>
          <p>Für tiefergehende Sicherheitsanalysen ist entsprechendes zertifiziertes Messequipment notwendig.</p>
          <p>siehe auch: http://avlditest/workshop</p>
        </div>
        <div className="text-[8px] text-right">
          <p>AVL DITEST XDS iReport v2.0.03 * VC1 1.28.05</p>
          <p>1/2</p>
        </div>
      </div>
    </div>
  );
};

export default HVCheckReportOverview;