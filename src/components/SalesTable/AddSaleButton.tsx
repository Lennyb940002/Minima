import React from 'react';
import { PlusCircle } from 'lucide-react';

interface AddSaleButtonProps {
  onClick: () => void;
}

export function AddSaleButton({ onClick }: AddSaleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium shadow-lg"
    >
      <PlusCircle size={24} />
      Ajouter une vente
    </button>
  );
}