import React, { useState } from 'react';
import { Card } from '../ui/card';
import { MessageSquare, Edit, Copy, Mail } from 'lucide-react';
import { Button } from '../ui/button';

const CustomerFriendlyExplanation: React.FC = () => {
  const [explanation, setExplanation] = useState(`Hello [Customer Name], we have completed the HV diagnostic evaluation for your Cupra Born.

Overall, the high-voltage system is functioning well, with a few observations that need your attention.

Key Findings:
• The battery's health is good, with a State of Health (SOH) of 98.85%, which is an excellent rating for your vehicle.
• The insulation of the HV system is strong, with resistance values within the expected safety limits.
• There are two error codes detected related to the battery management system and a temperature sensor.

Recommendations:
To ensure optimal performance, we recommend addressing the detected error codes promptly and ensuring regular maintenance checks.`);

  const handleEdit = () => {
    // Implement edit functionality
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(explanation);
  };

  const handleEmail = () => {
    // Implement email functionality
  };

  return (
    <Card className="p-4 shadow-md">
      <div className="flex items-center mb-4">
        <MessageSquare className="mr-2" />
        <h3 className="text-lg font-semibold">Customer-Friendly Explanation</h3>
      </div>
      <div className="mb-4 whitespace-pre-wrap">{explanation}</div>
      <div className="flex justify-end space-x-2">
        <Button variant="outline" size="sm" onClick={handleEdit}>
          <Edit className="mr-2 h-4 w-4" /> Edit Text
        </Button>
        <Button variant="outline" size="sm" onClick={handleCopy}>
          <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
        </Button>
        <Button variant="outline" size="sm" onClick={handleEmail}>
          <Mail className="mr-2 h-4 w-4" /> Send via Email
        </Button>
      </div>
    </Card>
  );
};

export default CustomerFriendlyExplanation;