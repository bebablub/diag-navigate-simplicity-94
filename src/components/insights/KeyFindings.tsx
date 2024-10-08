import React from 'react';
import { AlertCircle, Battery, Shield } from 'lucide-react';

const KeyFindings: React.FC = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Key Findings</h3>
      <ul className="space-y-2">
        <li className="flex items-center">
          <AlertCircle className="mr-2 text-red-500" />
          <span>2 trouble codes found in the HV system.</span>
        </li>
        <li className="flex items-center">
          <Battery className="mr-2 text-green-500" />
          <span>Battery SOH: 98.85% (Excellent condition)</span>
        </li>
        <li className="flex items-center">
          <Shield className="mr-2 text-green-500" />
          <span>Isolation resistance within safe limits.</span>
        </li>
      </ul>
    </div>
  );
};

export default KeyFindings;