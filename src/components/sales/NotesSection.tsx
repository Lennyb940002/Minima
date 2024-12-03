import { FileText } from 'lucide-react';

export function NotesSection() {
  return (
    <div className="bg-black border border-white rounded-lg p-6">
      <h3 className="text-white text-lg mb-4">Note</h3>
      <div className="flex justify-center items-center h-32">
        <FileText className="w-16 h-16 text-white" />
      </div>
    </div>
  );
}