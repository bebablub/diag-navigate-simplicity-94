import React from 'react';

const TemperatureData: React.FC = () => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Temperature Data</h2>
      <ul className="list-none">
        <li><span className="font-semibold">Battery Temperature:</span> 17.0°C</li>
        <li><span className="font-semibold">Maximum Cell Temperature Difference:</span> 0.37°C</li>
        <li><span className="font-semibold">Maximum Cell Temperature:</span> 17.2°C</li>
        <li><span className="font-semibold">Minimum Cell Temperature:</span> 16.8°C</li>
      </ul>
    </div>
  );
};

export default TemperatureData;