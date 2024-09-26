import React from 'react';
import { AlertTriangle, Battery, Zap, RefreshCw, Shield } from 'lucide-react';

const InsightsSummariesModule: React.FC = () => {
  return (
    <div className="h-full overflow-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Insights & Summaries</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Key Findings</h3>
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-2">
          <div className="flex items-center">
            <AlertTriangle className="mr-2" />
            <p>Critical issue detected in battery system</p>
          </div>
        </div>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
          <div className="flex items-center">
            <AlertTriangle className="mr-2" />
            <p>Software update required for optimal performance</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Overall Vehicle Health</h3>
        <div className="bg-orange-200 text-orange-800 p-4 rounded">
          <p className="text-3xl font-bold">75%</p>
          <p>Moderate health - Attention required</p>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-2">Detailed Sections</h3>
        <div className="space-y-4">
          <div className="border rounded p-4">
            <h4 className="font-semibold flex items-center">
              <Battery className="mr-2" /> Battery Health
            </h4>
            <p>Capacity at 82% - Consider replacement within 6 months</p>
          </div>
          <div className="border rounded p-4">
            <h4 className="font-semibold flex items-center">
              <Zap className="mr-2" /> Motor Functionality
            </h4>
            <p>Operating within normal parameters</p>
          </div>
          <div className="border rounded p-4">
            <h4 className="font-semibold flex items-center">
              <RefreshCw className="mr-2" /> Software Updates
            </h4>
            <p>Critical update available - Schedule installation</p>
          </div>
          <div className="border rounded p-4">
            <h4 className="font-semibold flex items-center">
              <Shield className="mr-2" /> Safety Systems
            </h4>
            <p>All systems functioning correctly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsSummariesModule;