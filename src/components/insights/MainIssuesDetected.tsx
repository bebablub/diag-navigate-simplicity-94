import React, { useState } from 'react';
import { Card } from '../ui/card';
import { AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

interface Issue {
  code: string;
  severity: 'High' | 'Moderate' | 'Low';
  description: string;
  details: string;
  recommendedAction: string;
}

const MainIssuesDetected: React.FC = () => {
  const [expandedIssue, setExpandedIssue] = useState<string | null>(null);

  const issues: Issue[] = [
    {
      code: 'PGA1F00',
      severity: 'Moderate',
      description: 'Battery Energy Management System Malfunction - This issue may affect the proper regulation of the battery's energy usage.',
      details: 'Possible software or hardware issues in the energy management controller.',
      recommendedAction: 'Update software or schedule inspection.',
    },
    {
      code: 'P0C3F00',
      severity: 'High',
      description: 'Temperature Sensor Malfunction - Short to Ground in HV Battery Temperature Sensor.',
      details: 'Faulty sensor or wiring issue.',
      recommendedAction: 'Inspect the sensor and wiring for potential replacement.',
    },
  ];

  const toggleIssue = (code: string) => {
    setExpandedIssue(expandedIssue === code ? null : code);
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
        <AlertTriangle className="mr-2 text-yellow-500" />
        <h3 className="text-lg font-semibold">Main Issues Detected</h3>
      </div>
      <ul className="space-y-2">
        {issues.map((issue) => (
          <li key={issue.code} className="border rounded-lg">
            <div
              className="flex justify-between items-center p-3 cursor-pointer"
              onClick={() => toggleIssue(issue.code)}
            >
              <div className="flex items-center">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold mr-2 ${getSeverityColor(issue.severity)}`}>
                  {issue.severity}
                </span>
                <span className="font-medium">{issue.code}</span>
              </div>
              {expandedIssue === issue.code ? <ChevronUp /> : <ChevronDown />}
            </div>
            {expandedIssue === issue.code && (
              <div className="p-3 bg-gray-50">
                <p className="mb-2">{issue.description}</p>
                <p className="mb-2"><strong>Details:</strong> {issue.details}</p>
                <p><strong>Recommended Action:</strong> {issue.recommendedAction}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MainIssuesDetected;