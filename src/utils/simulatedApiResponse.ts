export const simulatedApiResponse = {
  general: {
    date: "23.02.2023",
    protocolNumber: "HV-2023-0001-123",
    brand: "Volkswagen",
    model: "ID.Buzz",
    mileage: "23.741 km",
    vin: "5YJSA1DG9DFP14705"
  },
  overview: {
    hvSystem: "auffällig",
    isolationResistance: "im Normalbereich",
    errorCodes: "gespeichert"
  },
  safetyIndicators: {
    isolationResistance: {
      minusPoleBattery: "10.801 kOhm",
      plusPoleBattery: "9.210 kOhm",
      minusPoleSystem: "4.410 kOhm",
      plusPoleSystem: "4.100 kOhm"
    },
    hvSystem: {
      crashSignal: "nicht aktiv",
      pilotLine: "aktiv",
      voltageFreedom: "nicht aktiv",
      chargingContactorPositive: "offen",
      chargingContactorNegative: "offen",
      batteryContactorPositive: "geschlossen",
      batteryContactorNegative: "offen"
    }
  },
  batteryInformation: {
    controlUnitData: {
      stateOfHealth: "95 %",
      stateOfCharge: "90 %",
      maxDiffCellCharge: "0,8 %",
      maxDiffCellVoltage: "0,34 V",
      maxCellVoltage: "4,2 V",
      minCellVoltage: "3,86 V"
    },
    temperatures: {
      batteryTemperature: "25 °C",
      maxDiffCellTemperature: "6,4 °C",
      maxCellTemperature: "22,6 °C",
      minCellTemperature: "16,2 °C"
    }
  },
  errorCodes: [
    {
      code: "[PGA1F00] 456DEFG",
      description: "Steuergerät für Batterieenergiemanagement Fehlfunktion"
    },
    {
      code: "[P0C3F00] 567DRFG",
      description: "Geber 10 für Temperatur für Hybrid-/Hochvoltbatterie Kurzschluss nach Masse"
    }
  ]
};