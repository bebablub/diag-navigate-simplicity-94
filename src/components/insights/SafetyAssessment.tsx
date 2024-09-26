import React from 'react';
import { Shield } from 'lucide-react';

const SafetyAssessment: React.FC = () => {
  const safetyStatus = "safe"; // This could be 'safe', 'caution', or 'unsafe'
  const safetyFactors = [
    "All critical systems are functioning normally",
    "No severe error codes detected",
    "Battery integrity is within acceptable parameters"
  ];
  const recommendations = [
    "Schedule regular maintenance check in 3 months",
    "Monitor tire pressure weekly",
    "Ensure software is up to date"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'text-green-600';
      case 'caution': return 'text-yellow-600';
      case 'unsafe': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center mb-4">
        <Shield className={`mr-2 ${getStatusColor(safetyStatus)}`} />
        <h3 className="text-lg font-semibold">3. Safety Assessment</h3>
      </div>
      <p className={`text-xl font-bold mb-4 ${getStatusColor(safetyStatus)}`}>
        The vehicle is {safetyStatus} to drive.
      </p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Key Safety Factors:</h4>
        <ul className="list-disc list-inside">
          {safetyFactors.map((factor, index) => (
            <li key={index}>{factor}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Recommendations:</h4>
        <ol className="list-decimal list-inside">
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SafetyAssessment;