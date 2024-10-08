import React from 'react';
import { Car, AlertTriangle, Battery, Wrench } from 'lucide-react';

interface FAQSectionProps {
  onQuestionClick: (question: string) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ onQuestionClick }) => {
  const questions = [
    { icon: <Car className="mr-2" />, text: "Is my vehicle safe to drive based on this report?" },
    { icon: <Car className="mr-2" />, text: "What do the HV-system parameters indicate?" },
    { icon: <Car className="mr-2" />, text: "How does the State of Charge affect my driving range?" },
    { icon: <AlertTriangle className="mr-2" />, text: "What do the detected trouble codes mean?" },
    { icon: <AlertTriangle className="mr-2" />, text: "How do these trouble codes affect safety and performance?" },
    { icon: <AlertTriangle className="mr-2" />, text: "What immediate actions should I take?" },
    { icon: <Battery className="mr-2" />, text: "Why is the battery's State of Health important?" },
    { icon: <Battery className="mr-2" />, text: "How do temperature readings affect performance?" },
    { icon: <Wrench className="mr-2" />, text: "What is the workSafe procedure?" },
    { icon: <Wrench className="mr-2" />, text: "How do I safely disconnect the vehicle for analysis?" },
    { icon: <Wrench className="mr-2" />, text: "What maintenance should be scheduled based on this report?" },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
      <ul className="space-y-2">
        {questions.map((q, index) => (
          <li 
            key={index} 
            className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() => onQuestionClick(q.text)}
          >
            {q.icon}
            <span>{q.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQSection;