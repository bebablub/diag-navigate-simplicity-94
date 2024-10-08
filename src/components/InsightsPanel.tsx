import React, { useState } from 'react';
import { AlertTriangle, Battery, Car, Wrench, HelpCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import SafetyAlerts from './insights/SafetyAlerts';
import KeyFindings from './insights/KeyFindings';
import HVSystemParameters from './insights/HVSystemParameters';
import FAQSection from './insights/FAQSection';
import DetailedExplanation from './insights/DetailedExplanation';

const InsightsPanel: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(question);
  };

  return (
    <div className="w-full h-full overflow-y-auto space-y-4 p-4">
      <Card className="p-4 shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Insights & FAQs Panel</h2>
        <SafetyAlerts />
        <KeyFindings />
        <HVSystemParameters />
        <div className="mt-4 space-x-2">
          <Button variant="destructive">View Critical Issues</Button>
          <Button variant="outline">Access workSafe Procedure</Button>
          <Button>Schedule Service</Button>
        </div>
      </Card>

      <Card className="p-4 shadow-md">
        <FAQSection onQuestionClick={handleQuestionClick} />
      </Card>

      {selectedQuestion && (
        <Card className="p-4 shadow-md">
          <DetailedExplanation question={selectedQuestion} />
        </Card>
      )}
    </div>
  );
};

export default InsightsPanel;