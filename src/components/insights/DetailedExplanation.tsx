import React from 'react';
import { AlertTriangle, Check } from 'lucide-react';

interface DetailedExplanationProps {
  question: string;
}

const DetailedExplanation: React.FC<DetailedExplanationProps> = ({ question }) => {
  // This is a simplified version. In a real application, you'd have more detailed content for each question.
  const getExplanation = () => {
    switch (question) {
      case "Is my vehicle safe to drive based on this report?":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Vehicle Safety Assessment</h3>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
              <AlertTriangle className="inline mr-2" />
              <span className="font-bold">Attention Required:</span> Due to detected trouble codes affecting critical systems, the vehicle may not be safe to drive.
            </div>
            <h4 className="font-semibold mt-4 mb-2">Report Data References:</h4>
            <ul className="list-disc list-inside mb-4">
              <li>Trouble Codes:
                <ul className="list-disc list-inside ml-4">
                  <li>[PGA1F00]: Battery Energy Management Control Unit Malfunction</li>
                  <li>[P0C3F00]: Battery Temperature Sensor Short to Ground</li>
                </ul>
              </li>
              <li>HV-System Parameters: Normal statuses provide some reassurance.</li>
            </ul>
            <h4 className="font-semibold mb-2">Recommendations:</h4>
            <ul className="list-disc list-inside mb-4">
              <li>Do not drive the vehicle until the issues are resolved.</li>
              <li>Follow the workSafe procedure to safely disconnect the vehicle.</li>
              <li>Contact a certified technician to schedule repairs.</li>
            </ul>
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
              <span className="font-bold">Aha Moment:</span> Understanding the severity of the issues helps prioritize safety and take immediate action.
            </div>
          </div>
        );
      // Add more cases for other questions...
      default:
        return <p>Detailed explanation for "{question}" is not available.</p>;
    }
  };

  return (
    <div>
      {getExplanation()}
    </div>
  );
};

export default DetailedExplanation;