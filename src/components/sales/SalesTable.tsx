export function SalesTable() {
  return (
    <div className="bg-black border border-white rounded-lg p-6">
      <h3 className="text-white text-2xl font-bold mb-6">Tableau</h3>
      <div className="border border-white/20 rounded">
        <div className="grid grid-cols-4 gap-4 p-4 border-b border-white/20">
          <div className="text-white font-medium">Date</div>
          <div className="text-white font-medium">Produit</div>
          <div className="text-white font-medium">Quantité</div>
          <div className="text-white font-medium">Total</div>
        </div>
      </div>
    </div>
  );
}