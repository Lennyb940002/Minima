import { useState } from 'react';
import { Euro, TrendingUp, TrendingDown } from 'lucide-react';

export function AccountingPage() {
  const [period, setPeriod] = useState<'jour' | 'semaine' | 'mois'>('mois');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Comptabilité</h1>
        <div className="flex gap-2">
          {(['jour', 'semaine', 'mois'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 rounded ${
                period === p
                  ? 'bg-white text-black'
                  : 'text-white border border-white'
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-black border border-white rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Euro className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">Revenus</h2>
          </div>
          <p className="text-3xl font-bold text-white">0 €</p>
        </div>

        <div className="bg-black border border-white rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">Dépenses</h2>
          </div>
          <p className="text-3xl font-bold text-white">0 €</p>
        </div>

        <div className="bg-black border border-white rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">Bénéfices</h2>
          </div>
          <p className="text-3xl font-bold text-white">0 €</p>
        </div>
      </div>
    </div>
  );
}