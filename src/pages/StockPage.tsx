import { useState } from 'react';
import { Package, AlertTriangle } from 'lucide-react';

export function StockPage() {
  const [activeTab, setActiveTab] = useState('apercu');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Gestion des Stocks</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('apercu')}
            className={`px-4 py-2 rounded ${
              activeTab === 'apercu'
                ? 'bg-white text-black'
                : 'text-white border border-white'
            }`}
          >
            Aperçu
          </button>
          <button
            onClick={() => setActiveTab('alertes')}
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              activeTab === 'alertes'
                ? 'bg-white text-black'
                : 'text-white border border-white'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            Alertes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-black border border-white rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Vue d'ensemble du stock</h2>
          <div className="space-y-4">
            {/* Placeholder for stock items */}
            <div className="border border-white/20 rounded p-4 text-white">
              Aucun produit en stock
            </div>
          </div>
        </div>

        <div className="bg-black border border-white rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Statistiques</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-white">
              <span>Produits en stock</span>
              <span className="font-bold">0</span>
            </div>
            <div className="flex items-center justify-between text-white">
              <span>Valeur totale</span>
              <span className="font-bold">0 €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}