import React from 'react';
import { Check, X } from 'lucide-react';

const HVSystemParameters: React.FC = () => {
  const parameters = [
    { name: 'Crash Signal', status: 'Not active', normal: true },
    { name: 'Pilot Line', status: 'Closed', normal: true },
    { name: 'Voltage Freedom', status: 'Not detected', normal: true },
    { name: 'Charge Contactor Positive', status: 'Open', normal: true },
    { name: 'Charge Contactor Negative', status: 'Open', normal: true },
    { name: 'Battery Contactor Positive', status: 'Closed', normal: true },
    { name: 'Battery Contactor Negative', status: 'Closed', normal: true },
  ];

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">HV-System Parameters</h3>
      <ul className="space-y-1">
        {parameters.map((param, index) => (
          <li key={index} className="flex items-center">
            {param.normal ? (
              <Check className="mr-2 text-green-500" />
            ) : (
              <X className="mr-2 text-red-500" />
            )}
            <span>{param.name}: {param.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HVSystemParameters;