import React from 'react';
import { AlertTriangle } from 'lucide-react';

const MainIssuesDetected: React.FC = () => {
  const issues = [
    { description: "Battery degradation detected", severity: "High", impact: "May reduce driving range" },
    { description: "Brake pad wear", severity: "Moderate", impact: "Requires replacement within 5000 km" },
    { description: "Software update available", severity: "Low", impact: "Improves energy efficiency" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'moderate': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center mb-4">
        <AlertTriangle className="mr-2 text-yellow-500" />
        <h3 className="text-lg font-semibold">2. Main Issues Detected</h3>
      </div>
      <ul className="space-y-4">
        {issues.map((issue, index) => (
          <li key={index} className="border-b pb-2">
            <div className="flex justify-between items-start">
              <span className="font-medium">{index + 1}. {issue.description}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getSeverityColor(issue.severity)}`}>
                {issue.severity}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{issue.impact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainIssuesDetected;