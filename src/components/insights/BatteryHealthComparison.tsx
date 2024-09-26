import React from 'react';
import { Battery } from 'lucide-react';

const BatteryHealthComparison: React.FC = () => {
  const batteryHealth = 98.85;
  const normalRange = { min: 80, max: 100 };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center mb-4">
        <Battery className="mr-2" />
        <h3 className="text-lg font-semibold">5. Battery Health Comparison</h3>
      </div>
      <div className="text-3xl font-bold mb-4">
        State of Health: {batteryHealth.toFixed(2)}%
      </div>
      <div className="relative h-8 bg-gray-200 rounded-full mb-4">
        <div
          className="absolute h-full bg-green-500 rounded-full"
          style={{ width: `${batteryHealth}%` }}
        ></div>
        <div
          className="absolute h-full border-r-2 border-blue-500"
          style={{ left: `${normalRange.min}%` }}
        ></div>
        <div
          className="absolute h-full border-r-2 border-blue-500"
          style={{ left: `${normalRange.max}%` }}
        ></div>
      </div>
      <p className="mb-2">
        Your vehicle's battery health is within the normal range of {normalRange.min}% to {normalRange.max}%.
      </p>
      <p className="mb-4">
        The current state of health indicates excellent battery condition, suggesting optimal performance and range.
      </p>
      <h4 className="font-semibold mb-2">Recommendations:</h4>
      <ul className="list-disc list-inside">
        <li>Continue with regular charging habits</li>
        <li>Avoid extreme temperature exposure when possible</li>
        <li>Schedule your next battery check-up in 6 months</li>
      </ul>
      <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Learn more about EV battery health</a>
    </div>
  );
};

export default BatteryHealthComparison;