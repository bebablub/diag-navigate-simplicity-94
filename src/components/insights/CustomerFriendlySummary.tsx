import React, { useState } from 'react';
import { Edit, Copy, Mail } from 'lucide-react';

const CustomerFriendlySummary: React.FC = () => {
  const [summary, setSummary] = useState(`Dear [Customer Name],

Your [Vehicle Model] has undergone a comprehensive diagnostic check. Here are the key findings:

1. [Key Finding 1]
2. [Key Finding 2]
3. [Key Finding 3]

Overall, your vehicle is in [good/fair/needs attention] condition. We recommend [brief recommendation].

If you have any questions, please don't hesitate to ask.`);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the changes to a backend
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    // You might want to show a toast notification here
  };

  const handleEmail = () => {
    // Implement email functionality here
    console.log('Email functionality to be implemented');
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">1. Customer-Friendly Summary</h3>
        <div className="space-x-2">
          <button onClick={handleEdit} className="p-1 hover:bg-gray-100 rounded">
            <Edit size={20} />
          </button>
          <button onClick={handleCopy} className="p-1 hover:bg-gray-100 rounded">
            <Copy size={20} />
          </button>
          <button onClick={handleEmail} className="p-1 hover:bg-gray-100 rounded">
            <Mail size={20} />
          </button>
        </div>
      </div>
      {isEditing ? (
        <div>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full h-40 p-2 border rounded"
          />
          <div className="mt-2">
            <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
            <button onClick={() => setIsEditing(false)} className="ml-2 px-4 py-2 rounded border">Cancel</button>
          </div>
        </div>
      ) : (
        <div className="whitespace-pre-wrap">{summary}</div>
      )}
    </div>
  );
};

export default CustomerFriendlySummary;