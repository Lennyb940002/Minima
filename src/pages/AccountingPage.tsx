// src/pages/AccountingPage.tsx
import { useState } from 'react';
import { Euro, TrendingUp, TrendingDown } from 'lucide-react';
import { StatCard } from '../components/Accounting/StatCard';
import { TransactionList } from '../components/Accounting/TransactionList';

export function AccountingPage() {
  const [period, setPeriod] = useState<'jour' | 'semaine' | 'mois'>('mois');

  // Exemple de données financières
  const exampleData = {
    revenues: {
      '10/12/24': 1200,
      '09/12/24': 800,
      total: 2000,
    },
    expenses: {
      marketing: 300,
      ursaff: 150,
      other: 100,
      total: 550,
    },
  };

  const profit = exampleData.revenues.total - exampleData.expenses.total;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Comptabilité</h1>
        <div className="flex gap-2">
          {(['jour', 'semaine', 'mois'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 rounded ${period === p ? 'bg-white text-black' : 'text-white border border-white'}`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Revenus */}
        <StatCard
          title="Revenus"
          value={exampleData.revenues.total}
          icon={<Euro className="w-6 h-6 text-white" />}
        />

        {/* Dépenses */}
        <StatCard
          title="Dépenses"
          value={exampleData.expenses.total}
          icon={<TrendingDown className="w-6 h-6 text-white" />}
        />

        {/* Bénéfices */}
        <StatCard
          title="Bénéfices"
          value={profit}
          icon={<TrendingUp className="w-6 h-6 text-white" />}
        />
      </div>

      <div className="bg-black border border-white rounded-lg p-6 mt-6">
        <TransactionList data={exampleData.revenues} period={period} />
      </div>
    </div>
  );
}
