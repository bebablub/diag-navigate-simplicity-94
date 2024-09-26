import React from 'react';

const IsolationResistance: React.FC = () => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Isolation Resistance Values</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td>Minus Pole (HV Battery):</td>
            <td>10,000 kOhm</td>
          </tr>
          <tr>
            <td>Plus Pole (HV Battery):</td>
            <td>10,000 kOhm</td>
          </tr>
          <tr>
            <td>Minus Pole (Complete HV System):</td>
            <td>4,770 kOhm</td>
          </tr>
          <tr>
            <td>Plus Pole (Complete HV System):</td>
            <td>4,750 kOhm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IsolationResistance;