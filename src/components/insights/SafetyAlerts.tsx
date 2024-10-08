import React from 'react';
import { AlertTriangle } from 'lucide-react';

const SafetyAlerts: React.FC = () => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
      <div className="flex items-center">
        <AlertTriangle className="mr-2" />
        <div>
          <h3 className="font-bold">Safety Alert</h3>
          <p>Critical issues detected affecting vehicle safety. Immediate action required.</p>
        </div>
      </div>
    </div>
  );
};

export default SafetyAlerts;