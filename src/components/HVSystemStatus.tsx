import React from 'react';

const HVSystemStatus: React.FC = () => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">HV-System Status</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td>Crash Signal:</td>
            <td>Not active</td>
          </tr>
          <tr>
            <td>Pilot Line:</td>
            <td>Closed</td>
          </tr>
          <tr>
            <td>Voltage Freedom:</td>
            <td>Not detected</td>
          </tr>
          <tr>
            <td>Charge Contactor Status (Positive):</td>
            <td>Open</td>
          </tr>
          <tr>
            <td>Charge Contactor Status (Negative):</td>
            <td>Open</td>
          </tr>
          <tr>
            <td>Battery Contactor Status (Positive):</td>
            <td>Closed</td>
          </tr>
          <tr>
            <td>Battery Contactor Status (Negative):</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HVSystemStatus;