import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { AlertTriangle, Battery, Car, Wrench, HelpCircle, MessageSquare, StopCircle, BarChart2 } from 'lucide-react';

const InsightsPanel: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const customerQuestions = [
    {
      question: "How can I explain this report to my customer?",
      icon: <MessageSquare className="w-6 h-6" />,
      answer: (
        <div>
          <p>This report shows that your vehicle has two issues that need immediate attention to ensure safety and proper functioning.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>The battery is in excellent health at 98.85%, meaning it performs almost like new.</li>
            <li>However, there are two problems detected that could affect safety and performance.</li>
            <li>We recommend addressing these issues promptly.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What are the main issues detected in this report?",
      icon: <StopCircle className="w-6 h-6" />,
      answer: (
        <div>
          <p><strong>Issue 1:</strong></p>
          <ul className="list-disc pl-5">
            <li>Code: [PGA1F00]</li>
            <li>Description: Battery management system malfunction.</li>
            <li>Impact: Could affect battery charging and overall performance.</li>
          </ul>
          <p className="mt-2"><strong>Issue 2:</strong></p>
          <ul className="list-disc pl-5">
            <li>Code: [P0C3F00]</li>
            <li>Description: Battery temperature sensor problem.</li>
            <li>Impact: May prevent detection of battery overheating, posing a safety risk.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Is the vehicle safe to drive based on this report?",
      icon: <Car className="w-6 h-6" />,
      answer: "Caution is advised. Due to the detected issues, it's recommended not to drive the vehicle until they are resolved to ensure your safety.",
    },
    {
      question: "What do the error codes in this report mean?",
      icon: <Wrench className="w-6 h-6" />,
      answer: (
        <div>
          <p><strong>Error Code [PGA1F00]:</strong></p>
          <p>Indicates a problem with the battery management system, which controls battery charging and health.</p>
          <p className="mt-2"><strong>Error Code [P0C3F00]:</strong></p>
          <p>Points to an issue with the battery temperature sensor, important for preventing overheating.</p>
        </div>
      ),
    },
    {
      question: "How does the battery health compare to normal standards?",
      icon: <BarChart2 className="w-6 h-6" />,
      answer: "Your battery's health is at 98.85%, which is excellent and close to a new battery's condition. This means you can expect optimal performance and driving range.",
    },
  ];

  const generalQuestions = [
    {
      question: "Why is the battery's State of Health important?",
      icon: <Battery className="w-4 h-4" />,
      answer: (
        <div>
          <p><strong>Explanation:</strong></p>
          <ul className="list-disc pl-5">
            <li>The State of Health (SOH) indicates how well your battery is performing compared to when it was new.</li>
            <li>A high SOH means your battery holds a good charge and provides optimal performance.</li>
          </ul>
          <p className="mt-2"><strong>Relevance to You:</strong></p>
          <p>Your battery's SOH is 98.85%, which is excellent. This means your battery is almost as good as new.</p>
        </div>
      ),
    },
    {
      question: "What is isolation resistance and why is it important?",
      icon: <HelpCircle className="w-4 h-4" />,
      answer: (
        <div>
          <p><strong>Explanation:</strong></p>
          <p>Isolation resistance measures how well the electrical system is insulated. High resistance is good; it means electricity stays where it should.</p>
          <p className="mt-2"><strong>Safety Aspect:</strong></p>
          <p>Proper insulation prevents electrical shocks and ensures safety.</p>
          <p className="mt-2"><strong>Your Vehicle:</strong></p>
          <p>Your vehicle's isolation resistance is within safe limits, indicating good insulation.</p>
        </div>
      ),
    },
    // ... Add the remaining general questions here
  ];

  return (
    <div className="w-full h-full overflow-y-auto space-y-4 p-4">
      <Card className="p-4 shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Vehicle Health Summary</h2>
        <p className="text-sm text-gray-600 mb-2">Overview of Your Vehicle's Diagnostic Report</p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
            <span>Your vehicle has some issues that need attention.</span>
          </li>
          <li className="flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
            <span className="font-bold">Important: Your vehicle may not be safe to drive.</span>
          </li>
          <li className="flex items-center">
            <Battery className="w-5 h-5 mr-2 text-green-500" />
            <span>Battery is in excellent condition at 98.85% health.</span>
          </li>
          <li className="flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
            <span>Two problems were found that could affect your vehicle's performance and safety.</span>
          </li>
        </ul>
      </Card>

      <div className="space-y-4">
        {customerQuestions.map((item, index) => (
          <Card key={index} className="p-4 shadow-md cursor-pointer" onClick={() => toggleCard(index)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {item.icon}
                <h3 className="text-lg font-semibold ml-2">{item.question}</h3>
              </div>
              <Button variant="ghost" size="sm">
                {expandedCard === index ? '−' : '+'}
              </Button>
            </div>
            {expandedCard === index && (
              <div className="mt-4 text-gray-700">
                {item.answer}
              </div>
            )}
          </Card>
        ))}
      </div>

      <Card className="p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-4">General Questions</h3>
        <Accordion type="single" collapsible className="w-full">
          {generalQuestions.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="flex items-center">
                {item.icon}
                <span className="ml-2">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
};

export default InsightsPanel;