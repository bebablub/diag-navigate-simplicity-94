import React from 'react';

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
    <div className="p-6 border-b border-gray-300">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold">HV-CHECK</h1>
          <h2 className="text-xl">Zustandprotokoll HV Sicherheit</h2>
        </div>
        <img src="/avl-ditest-logo.png" alt="AVL DITEST" className="w-24" />
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2">Prüfdaten</h3>
        <div className="flex flex-col sm:flex-row justify-between text-sm">
          <span>Datum: {generalData.date}</span>
          <span>Protokollnr.: {generalData.protocolNumber}</span>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2">Fahrzeugdaten</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 text-sm">
          <div>Marke: {generalData.brand}</div>
          <div>Kilometerstand: {generalData.mileage}</div>
          <div>Modell: {generalData.model}</div>
          <div>VIN: {generalData.vin}</div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2">Prüfergebnis - Übersicht</h3>
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
      
      <div className="text-xs mt-8 space-y-1">
        <p>Bei allen angezeigten Werten handelt es sich um Daten aus den Steuergeräten des Fahrzeugs.</p>
        <p>Die Ermittlung der Zustände der Isolationswiderstände erfolgt entsprechend den UN ECE R100 Grenzwerten.</p>
        <p>Für tiefergehende Sicherheitsanalysen ist entsprechendes zertifiziertes Messequipment notwendig.</p>
        <p>siehe auch: http://avlditest/workshop</p>
      </div>
    </div>
  );
};

export default HVCheckReportOverview;
