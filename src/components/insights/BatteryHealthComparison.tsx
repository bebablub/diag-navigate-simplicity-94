import React from 'react';
import { Card } from '../ui/card';
import { Battery } from 'lucide-react';

const BatteryHealthComparison: React.FC = () => {
  const batterySOH = 98.85;
  const batterySOC = 85.59;
  const normalRange = { min: 90, max: 100 };

  return (
    <Card className="p-4 shadow-md">
      <div className="flex items-center mb-4">
        <Battery className="mr-2 text-green-500" />
        <h3 className="text-lg font-semibold">Battery Health Comparison</h3>
      </div>
      <div className="mb-4">
        <p className="text-xl font-bold">State of Health (SOH): {batterySOH.toFixed(2)}%</p>
        <p>State of Charge (SOC): {batterySOC.toFixed(2)}%</p>
      </div>
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
          <div
            className="bg-green-600 h-2.5 rounded-full"
            style={{ width: `${batterySOH}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          Normal Range: {normalRange.min}% - {normalRange.max}%
        </p>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Comparison with Standards:</h4>
        <p>
          An SOH above {normalRange.min}% is considered good for this vehicle model and age.
          Your vehicle's battery is well above the expected threshold for optimal performance.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Recommendations:</h4>
        <p>
          Maintain regular check-ups and perform battery conditioning services as needed to keep the battery in excellent health.
        </p>
      </div>
    </Card>
  );
};

export default BatteryHealthComparison;