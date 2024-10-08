import React, { useState, useEffect } from 'react';
import DiagnosticProtocolViewer from './DiagnosticProtocolViewer';
import InsightsSummariesModule from './InsightsSummariesModule';

// Define the ReportData interface (you may want to move this to a separate types file)
interface ReportData {
  // ... add all the necessary fields here, matching the structure in HVCheckReport.tsx
}

const EVDiagnosticModule: React.FC = () => {
  const [reportData, setReportData] = useState<ReportData | null>(null);

  useEffect(() => {
    // Fetch report data (replace with actual API call)
    const fetchReportData = async () => {
      try {
        const response = await fetch('/api/report-data');
        const data = await response.json();
        setReportData(data);
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };

    fetchReportData();
  }, []);

  if (!reportData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <div className="w-2/3 bg-gray-100">
        <DiagnosticProtocolViewer reportData={reportData} />
      </div>
      <div className="w-1/3 bg-white">
        <InsightsSummariesModule />
      </div>
    </div>
  );
};

export default EVDiagnosticModule;