import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast() {
  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-green-50 text-green-700 px-4 py-3 rounded-lg border border-green-100 shadow-lg">
      <CheckCircle className="w-5 h-5" />
      <span className="font-medium">Budget adjustments applied successfully!</span>
      <button className="text-sm underline ml-2 hover:text-green-800">Undo</button>
    </div>
  );
}