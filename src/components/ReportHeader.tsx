import React from 'react';

const ReportHeader: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">HV-CHECK Zustandprotokoll HV Sicherheit</h1>
      <div className="flex justify-between mt-2">
        <span>Date: 21.02.2024</span>
        <span>Protocol: HV-2024-02-21-7.871</span>
      </div>
      <div className="mt-2">
        <span>Diagnostic Tool: AVL DiTEST XDS 1000</span>
      </div>
    </div>
  );
};

export default ReportHeader;