import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

const ErrorCodeDefinitions: React.FC = () => {
  const [expandedCodes, setExpandedCodes] = useState<string[]>([]);

  const errorCodes = [
    {
      code: "E1234",
      description: "Battery Management System Error",
      cause: "Communication issue between BMS and vehicle control unit",
      solution: "Check wiring connections and update BMS firmware",
      resolved: false
    },
    {
      code: "E5678",
      description: "Charging System Malfunction",
      cause: "Faulty charging port or internal charging component",
      solution: "Inspect charging port for damage and test internal charging components",
      resolved: true
    }
  ];

  const toggleExpand = (code: string) => {
    setExpandedCodes(prev =>
      prev.includes(code)
        ? prev.filter(c => c !== code)
        : [...prev, code]
    );
  };

  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">4. Error Code Definitions</h3>
      {errorCodes.length === 0 ? (
        <p>No error codes detected.</p>
      ) : (
        <ul className="space-y-4">
          {errorCodes.map((error) => (
            <li key={error.code} className="border rounded-lg">
              <div
                className="flex justify-between items-center p-3 cursor-pointer"
                onClick={() => toggleExpand(error.code)}
              >
                <div className="flex items-center">
                  <AlertCircle className={`mr-2 ${error.resolved ? 'text-green-500' : 'text-red-500'}`} />
                  <span className="font-semibold">{error.code}</span>
                </div>
                {expandedCodes.includes(error.code) ? <ChevronUp /> : <ChevronDown />}
              </div>
              {expandedCodes.includes(error.code) && (
                <div className="p-3 bg-gray-50">
                  <p><strong>Description:</strong> {error.description}</p>
                  <p><strong>Cause:</strong> {error.cause}</p>
                  <p><strong>Solution:</strong> {error.solution}</p>
                  <p><strong>Status:</strong> {error.resolved ? 'Resolved' : 'Pending'}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ErrorCodeDefinitions;