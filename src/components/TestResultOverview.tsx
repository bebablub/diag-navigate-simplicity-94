import React from 'react';

const TestResultOverview: React.FC = () => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Test Result Overview</h2>
      <ul className="list-disc list-inside">
        <li>No Error Codes</li>
        <li>Isolation Resistance within Expected Range</li>
        <li>HV System Status: Unremarkable</li>
      </ul>
      <p className="mt-2 text-sm">Reference: UN ECE R100</p>
    </div>
  );
};

export default TestResultOverview;