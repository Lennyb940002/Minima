import React from 'react';
import { Sale } from '../../types/sales';

interface SalesTableRowProps {
  sale: Sale;
}

export function SalesTableRow({ sale }: SalesTableRowProps) {
  const margin = ((sale.salePrice - sale.unitCost * sale.quantity) / (sale.unitCost * sale.quantity) * 100).toFixed(2);

  const statusColors = {
    completed: 'bg-green-500',
    pending: 'bg-yellow-500',
    cancelled: 'bg-red-500'
  };

  const statusTranslations = {
    completed: 'Effectué',
    pending: 'En attente',
    cancelled: 'Annulé'
  };

  const paymentMethodTranslations = {
    cash: 'Espèces',
    card: 'Carte',
    transfer: 'Virement'
  };

  return (
    <tr className="border-b border-white">
      <td className="px-4 py-3 border-r border-white">{sale.product}</td>
      <td className="px-4 py-3">{sale.quantity}</td>
      <td className="px-4 py-3">{sale.salePrice.toFixed(2)} €</td>
      <td className="px-4 py-3">{sale.unitCost.toFixed(2)} €</td>
      <td className="px-4 py-3 border-r border-white">{margin}%</td>
      <td className="px-4 py-3">{new Date(sale.saleDate).toLocaleDateString('fr-FR')}</td>
      <td className="px-4 py-3">{sale.customer || '-'}</td>
      <td className="px-4 py-3 ">{paymentMethodTranslations[sale.paymentMethod]}</td>
      <td className="px-4 py-3 border-r border-white">
        <span className={`px-2 py-1 rounded-full text-xs ${statusColors[sale.paymentStatus]}`}>
          {statusTranslations[sale.paymentStatus]}
        </span>
      </td>
      <td className="px-4 py-3">{sale.notes || '-'}</td>
    </tr>
  );
}