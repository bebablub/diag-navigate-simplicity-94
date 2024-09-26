import React from 'react';

const HVCheckReportOverview: React.FC = () => {
  return (
    <div className="p-4 border border-gray-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold">HV-CHECK</h1>
          <h2 className="text-xl">Zustandprotokoll HV Sicherheit</h2>
        </div>
        <div className="text-right">
          <img src="/avl-ditest-logo.png" alt="AVL DITEST" className="w-24" />
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-bold mb-2">Prüfdaten</h3>
        <div className="flex justify-between">
          <span>Datum: 23.02.2023</span>
          <span>Protokollnr.: HV-2023-0001-123</span>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-bold mb-2">Fahrzeugdaten</h3>
        <div className="grid grid-cols-2 gap-2">
          <div>Marke: Volkswagen</div>
          <div>Kilometerstand: 23.741 km</div>
          <div>Modell: ID.Buzz</div>
          <div>VIN: 5YJSA1DG9DFP14705</div>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-bold mb-2">Prüfergebnis - Übersicht</h3>
        <div className="space-y-2">
          <div className="bg-green-500 text-white p-2">HV-System auffällig</div>
          <div className="bg-green-500 text-white p-2">Isolationswiderstände im Normalbereich</div>
          <div className="bg-red-500 text-white p-2">Fehlercodes gespeichert</div>
        </div>
      </div>
      
      <div className="text-sm mt-8">
        <p>Bei allen angezeigten Werten handelt es sich um Daten aus den Steuergeräten des Fahrzeugs.</p>
        <p>Die Ermittlung der Zustände der Isolationswiderstände erfolgt entsprechend den UN ECE R100 Grenzwerten.</p>
        <p>Für tiefergehende Sicherheitsanalysen ist entsprechendes zertifiziertes Messequipment notwendig.</p>
        <p>siehe auch: http://avlditest/workshop</p>
      </div>
      
      <div className="mt-4 text-sm text-right">
        <p>AVL DITEST XDS iReport v2.0.03 * VC1 1.28.05</p>
        <p>1/2</p>
      </div>
    </div>
  );
};

export default HVCheckReportOverview;
