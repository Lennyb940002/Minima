import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { StatCard } from '../components/Stock/StatCard';
import { ProductTable } from '../components/Stock/ProductTable';

export function StockPage() {
  const [activeTab, setActiveTab] = useState('apercu');

  // Exemple de données pour les produits
  const products = [
    { title: 'Sweat', reference: 'Blanc/M', quantity: 48, unitPrice: '11,16€', totalPrice: '535€', salePrice: '29,01€' },
    { title: 'Sweat', reference: 'Blanc/', quantity: 48, unitPrice: '11,16€', totalPrice: '535€', salePrice: '29,01€' },
    { title: 'Sweat', reference: 'Blanc/', quantity: 48, unitPrice: '11,16€', totalPrice: '535€', salePrice: '29,01€' },
    { title: 'Sweat', reference: 'Blanc/', quantity: 48, unitPrice: '11,16€', totalPrice: '535€', salePrice: '29,01€' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Gestion des Stocks</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('apercu')}
            className={`px-4 py-2 rounded ${activeTab === 'apercu' ? 'bg-white text-black' : 'text-white border border-white'}`}
          >
            Aperçu
          </button>
          <button
            onClick={() => setActiveTab('alertes')}
            className={`px-4 py-2 rounded flex items-center gap-2 ${activeTab === 'alertes' ? 'bg-white text-black' : 'text-white border border-white'}`}
          >
            <AlertTriangle className="w-4 h-4" />
            Alertes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Statistiques */}
        <div className="col-span-1 space-y-6">
          <StatCard title="Total Produits" value="85" />
          <StatCard title="Valeur Stock" value="4 520€" />
          <StatCard title="Commandes en Attente" value="2" />
        </div>

        {/* Tableau des produits */}
        <div className="col-span-3 bg-black border border-white rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Détails des Produits</h2>
          {/* Passer les données de produits à ProductTable */}
          <ProductTable products={products} />
        </div>
      </div>
    </div>
  );
}
