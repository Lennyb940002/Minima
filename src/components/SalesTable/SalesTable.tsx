// components/SalesTable/SalesTable.tsx
import React, { useState } from 'react';
import { SalesTableHeader } from './SalesTableHeader';
import { SalesTableRow } from './SalesTableRow';
import { AddSaleModal } from './AddSaleModal';
import { AddSaleButton } from './AddSaleButton';
import { Sale, SalesTableProps } from '../../types/sales';

export function SalesTable({ sales, onAddSale, onDeleteSale }: SalesTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalSales = sales.reduce((sum, sale) => sum + sale.salePrice, 0);
  const totalQuantity = sales.reduce((sum, sale) => sum + sale.quantity, 0);
  const totalMargin = sales.reduce((sum, sale) =>
    sum + (sale.salePrice - sale.unitCost * sale.quantity), 0);

  return (
    <div className="p-2 flex flex-col">
      <div className="overflow-x-auto flex-grow mb-4">
        <table className="w-full text-center text-white">
          <thead className="bg-black">
            <tr>
              <th className="px-4 py-3">Produit</th>
              <th className="px-4 py-3">Quantité</th>
              <th className="px-4 py-3">Prix de vente</th>
              <th className="px-4 py-3">Coût unitaire</th>
              <th className="px-4 py-3">Marge</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Mode de paiement</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Notes</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(sale => (
              <SalesTableRow
                key={sale.id}
                sale={sale}
                onDelete={onDeleteSale}
              />
            ))}
          </tbody>
          <tfoot className="bg-black">
            <tr>
              <td className="px-4 py-3 font-bold">Totaux</td>
              <td className="px-4 py-3">{totalQuantity}</td>
              <td className="px-4 py-3">{totalSales.toFixed(2)} €</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">{totalMargin.toFixed(2)} €</td>
              <td colSpan={6}></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="flex justify-center pb-6">
        <AddSaleButton onClick={() => setIsModalOpen(true)} />
      </div>

      <AddSaleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onAddSale}
      />
    </div>
  );
}