import { ShoppingCart, TrendingUp, Users, Calendar } from 'lucide-react';

export function StatsCard() {
  return (
    <div className="bg-black border border-white rounded-lg p-6">
      <h2 className="text-white text-2xl font-bold mb-6">Stat</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-white w-5 h-5" />
            <span className="text-white">Panier Moyen</span>
          </div>
          <span className="text-white font-bold">30.11 €</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-white w-5 h-5" />
            <span className="text-white">Taux de conversion</span>
          </div>
          <span className="text-white font-bold">3.1%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="text-white w-5 h-5" />
            <span className="text-white">Vente J.Moyen</span>
          </div>
          <span className="text-white font-bold">0.84</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="text-white w-5 h-5" />
            <span className="text-white">Vente S.Moyen</span>
          </div>
          <span className="text-white font-bold">14</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="text-white w-5 h-5" />
            <span className="text-white">Vente M.Moyen</span>
          </div>
          <span className="text-white font-bold">44</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="text-white w-5 h-5" />
            <span className="text-white">Nouveaux Clients</span>
          </div>
          <span className="text-white font-bold">4</span>
        </div>
      </div>
    </div>
  );
}