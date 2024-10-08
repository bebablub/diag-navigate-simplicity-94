import React from 'react';

interface GeneralData {
  date: string;
  protocolNumber: string;
  brand: string;
  model: string;
  mileage: string;
  vin: string;
}

interface SafetyIndicators {
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
}

interface BatteryInformation {
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
}

interface ErrorCode {
  code: string;
  description: string;
}

interface HVCheckReportDetailsProps {
  generalData: GeneralData;
  safetyIndicators: SafetyIndicators;
  batteryInformation: BatteryInformation;
  errorCodes: ErrorCode[];
}

const HVCheckReportDetails: React.FC<HVCheckReportDetailsProps> = ({ generalData, safetyIndicators, batteryInformation, errorCodes }) => {
  if (!safetyIndicators || !batteryInformation || !errorCodes) {
    return <div>Loading details...</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold">HV-CHECK</h1>
          <h2 className="text-lg">Zustandprotokoll HV Sicherheit</h2>
        </div>
        <img src="/avl-ditest-logo.png" alt="AVL DITEST" className="w-20" />
      </div>

      <div className="mb-4">
        <h3 className="text-base font-bold mb-2">Prüfdaten</h3>
        <div className="flex justify-between text-sm">
          <span>Datum: {generalData.date}</span>
          <span>Protokollnr.: {generalData.protocolNumber}</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-base font-bold mb-2">Sicherheitsindikatoren</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-1">Isolationswiderstände</h4>
            <div className="grid grid-cols-2 gap-y-1">
              <div>Minuspol Hochvolt-Batterie</div>
              <div>{safetyIndicators.isolationResistance.minusPoleBattery}</div>
              <div>Pluspol Hochvolt-Batterie</div>
              <div>{safetyIndicators.isolationResistance.plusPoleBattery}</div>
              <div>Minuspol im Hochvolt-Gesamtsystem</div>
              <div>{safetyIndicators.isolationResistance.minusPoleSystem}</div>
              <div>Pluspol im Hochvolt-Gesamtsystem</div>
              <div>{safetyIndicators.isolationResistance.plusPoleSystem}</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">HV-System</h4>
            <div className="grid grid-cols-2 gap-y-1">
              <div>Crashsignal</div>
              <div>{safetyIndicators.hvSystem.crashSignal}</div>
              <div>Pilotlinie</div>
              <div>{safetyIndicators.hvSystem.pilotLine}</div>
              <div>Status Spannungsfreiheit</div>
              <div>{safetyIndicators.hvSystem.voltageFreedom}</div>
              <div>Status Ladeschütz +</div>
              <div>{safetyIndicators.hvSystem.chargingContactorPositive}</div>
              <div>Status Ladeschütz -</div>
              <div>{safetyIndicators.hvSystem.chargingContactorNegative}</div>
              <div>Schütz am Pluspol Batterie</div>
              <div>{safetyIndicators.hvSystem.batteryContactorPositive}</div>
              <div>Schütz am Minuspol Batterie</div>
              <div>{safetyIndicators.hvSystem.batteryContactorNegative}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-base font-bold mb-2">Batterieinformationen</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-1">Steuergerätedaten</h4>
            <div className="grid grid-cols-2 gap-y-1">
              <div>State of Health (SOH)</div>
              <div>{batteryInformation.controlUnitData.stateOfHealth}</div>
              <div>Ladezustand (SOC)</div>
              <div>{batteryInformation.controlUnitData.stateOfCharge}</div>
              <div>max. diff. Zell-Ladezustand</div>
              <div>{batteryInformation.controlUnitData.maxDiffCellCharge}</div>
              <div>max. diff. Zellspannung</div>
              <div>{batteryInformation.controlUnitData.maxDiffCellVoltage}</div>
              <div>max. Zellspannung</div>
              <div>{batteryInformation.controlUnitData.maxCellVoltage}</div>
              <div>min. Zellspannung</div>
              <div>{batteryInformation.controlUnitData.minCellVoltage}</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Temperaturen</h4>
            <div className="grid grid-cols-2 gap-y-1">
              <div>Temperatur Batterie</div>
              <div>{batteryInformation.temperatures.batteryTemperature}</div>
              <div>max. diff. Zelltemperatur</div>
              <div>{batteryInformation.temperatures.maxDiffCellTemperature}</div>
              <div>max. Zelltemperatur</div>
              <div>{batteryInformation.temperatures.maxCellTemperature}</div>
              <div>min. Zelltemperatur</div>
              <div>{batteryInformation.temperatures.minCellTemperature}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-base font-bold mb-2">Fehlercodes</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-1">Fehlercodes</th>
              <th className="text-left py-1">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            {errorCodes.map((error, index) => (
              <tr key={index} className="border-b">
                <td className="py-1">{error.code}</td>
                <td className="py-1">{error.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-auto">
        <div className="text-xs text-right">
          <p>AVL DITEST XDS iReport v2.0.03 * VC1 1.28.05</p>
          <p>2/2</p>
        </div>
      </div>
    </div>
  );
};

export default HVCheckReportDetails;