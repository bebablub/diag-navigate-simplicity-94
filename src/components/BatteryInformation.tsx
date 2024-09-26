import React from 'react';

const BatteryInformation: React.FC = () => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Battery Information</h2>
      <ul className="list-none">
        <li><span className="font-semibold">State of Health (SOH):</span> 98.85%</li>
        <li><span className="font-semibold">State of Charge (SOC):</span> 85.59%</li>
        <li><span className="font-semibold">Maximum Difference in Cell Charge:</span> 0.66%</li>
        <li><span className="font-semibold">Maximum Cell Voltage:</span> 4.050V</li>
        <li><span className="font-semibold">Minimum Cell Voltage:</span> 4.041V</li>
      </ul>
    </div>
  );
};

export default BatteryInformation;