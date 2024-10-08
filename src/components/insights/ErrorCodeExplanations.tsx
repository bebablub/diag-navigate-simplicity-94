import React, { useState } from 'react';
import { Card } from '../ui/card';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface ErrorCode {
  code: string;
  description: string;
  cause: string;
  recommendedAction: string;
  severity: 'High' | 'Moderate' | 'Low';
}

const ErrorCodeExplanations: React.FC = () => {
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const errorCodes: ErrorCode[] = [
    {
      code: 'PGA1F00',
      description: 'Battery Energy Management System Malfunction',
      cause: 'Possible causes include software issues or problems with the energy management controller.',
      recommendedAction: 'Consider updating the battery management software or scheduling a diagnostic inspection.',
      severity: 'Moderate',
    },
    {
      code: 'P0C3F00',
      description: 'Temperature Sensor Short to Ground',
      cause: 'This could be due to wiring issues or a sensor fault.',
      recommendedAction: 'Have the wiring and sensor inspected and repaired as needed.',
      severity: 'High',
    },
  ];

  const toggleCode = (code: string) => {
    setExpandedCode(expandedCode === code ? null : code);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-red-500 bg-red-100';
      case 'Moderate': return 'text-yellow-500 bg-yellow-100';
      case 'Low': return 'text-green-500 bg-green-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  return (
    <Card className="p-4 shadow-md">
      <div className="flex items-center mb-4">
        <AlertCircle className="mr-2 text-blue-500" />
        <h3 className="text-lg font-semibold">Error Code Explanations</h3>
      </div>
      <ul className="space-y-2">
        {errorCodes.map((error) => (
          <li key={error.code} className="border rounded-lg">
            <div
              className="flex justify-between items-center p-3 cursor-pointer"
              onClick={() => toggleCode(error.code)}
            >
              <div className="flex items-center">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold mr-2 ${getSeverityColor(error.severity)}`}>
                  {error.severity}
                </span>
                <span className="font-medium">{error.code}</span>
              </div>
              {expandedCode === error.code ? <ChevronUp /> : <ChevronDown />}
            </div>
            {expandedCode === error.code && (
              <div className="p-3 bg-gray-50">
                <p className="mb-2"><strong>Description:</strong> {error.description}</p>
                <p className="mb-2"><strong>Cause:</strong> {error.cause}</p>
                <p><strong>Recommended Action:</strong> {error.recommendedAction}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ErrorCodeExplanations;