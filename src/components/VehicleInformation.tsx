import React from 'react';

const VehicleInformation: React.FC = () => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Vehicle Information</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="font-semibold">Brand:</td>
            <td>Cupra</td>
          </tr>
          <tr>
            <td className="font-semibold">Model:</td>
            <td>Born_Cupra</td>
          </tr>
          <tr>
            <td className="font-semibold">VIN:</td>
            <td>VSSZZZK12PP036893</td>
          </tr>
          <tr>
            <td className="font-semibold">Mileage:</td>
            <td>Not specified</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VehicleInformation;