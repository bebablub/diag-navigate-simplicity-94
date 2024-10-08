import React from 'react';
import { Card } from '../ui/card';
import { Shield, CheckCircle } from 'lucide-react';

const VehicleSafetyAssessment: React.FC = () => {
  return (
    <Card className="p-4 shadow-md">
      <div className="flex items-center mb-4">
        <Shield className="mr-2 text-green-500" />
        <h3 className="text-lg font-semibold">Vehicle Safety Assessment</h3>
      </div>
      <div className="mb-4 flex items-center">
        <CheckCircle className="mr-2 text-green-500" />
        <span className="text-xl font-bold text-green-700">The vehicle is safe to drive</span>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Supporting Information:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>The battery's state of health is at 98.85%, indicating good condition.</li>
          <li>The two detected error codes relate to non-critical issues involving battery management and a temperature sensor.</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Recommendations:</h4>
        <p>Schedule a service appointment soon to address the detected error codes and ensure continued safe operation.</p>
      </div>
    </Card>
  );
};

export default VehicleSafetyAssessment;