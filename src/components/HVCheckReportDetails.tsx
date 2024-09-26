import React from 'react';

const HVCheckReportDetails: React.FC = () => {
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
        <h3 className="font-bold mb-2">Sicherheitsindikatoren</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Isolationswiderstände</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>Minuspol Hochvolt-Batterie</div>
              <div>10.801 kOhm</div>
              <div>Pluspol Hochvolt-Batterie</div>
              <div>9.210 kOhm</div>
              <div>Minuspol im Hochvolt-Gesamtsystem</div>
              <div>4.410 kOhm</div>
              <div>Pluspol im Hochvolt-Gesamtsystem</div>
              <div>4.100 kOhm</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">HV-System</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>Crashsignal</div>
              <div>nicht aktiv</div>
              <div>Pilotlinie</div>
              <div>aktiv</div>
              <div>Status Spannungsfreiheit</div>
              <div>nicht aktiv</div>
              <div>Status Ladeschütz +</div>
              <div>offen</div>
              <div>Status Ladeschütz -</div>
              <div>offen</div>
              <div>Schütz am Pluspol Batterie</div>
              <div>geschlossen</div>
              <div>Schütz am Minuspol Batterie</div>
              <div>offen</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-bold mb-2">Batterieinformationen</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Steuergerätedaten</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>State of Health (SOH)</div>
              <div>95 %</div>
              <div>Ladezustand (SOC)</div>
              <div>90 %</div>
              <div>max. diff. Zell-Ladezustand</div>
              <div>0,8 %</div>
              <div>max. diff. Zellspannung</div>
              <div>0,34 V</div>
              <div>max. Zellspannung</div>
              <div>4,2 V</div>
              <div>min. Zellspannung</div>
              <div>3,86 V</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Temperaturen</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>Temperatur Batterie</div>
              <div>25 °C</div>
              <div>max. diff. Zelltemperatur</div>
              <div>6,4 °C</div>
              <div>max. Zelltemperatur</div>
              <div>22,6 °C</div>
              <div>min. Zelltemperatur</div>
              <div>16,2 °C</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-bold mb-2">Fehlercodes</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Fehlercodes</th>
              <th className="text-left">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>[PGA1F00] 4560EFG</td>
              <td>Steuergerät für Batterieenergiemanagement Fehlfunktion</td>
            </tr>
            <tr>
              <td>[P0C6F00] 567DRFG</td>
              <td>Geber 10 für Temperatur für Hybrid-/Hochvoltbatterie Kurzschluss nach Masse</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm text-right">
        <p>AVL DITEST XDS iReport v2.0.03 * VC1 1.28.05</p>
        <p>2/2</p>
      </div>
    </div>
  );
};

export default HVCheckReportDetails;
