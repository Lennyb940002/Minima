import React, { useState } from 'react';
import { Sale } from '../types/sales';
import { SalesTable } from '../components/SalesTable/SalesTable';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function TablePage() {
  const [sales, setSales] = useLocalStorage<Sale[]>('sales', [
    {
      id: '1',
      product: 'Ordinateur Pro X',
      quantity: 1,
      salePrice: 1299.99,
      unitCost: 900,
      saleDate: '2024-03-15T10:30:00Z',
      customer: 'Jean Dupont',
      paymentMethod: 'card',
      paymentStatus: 'completed',
      notes: 'Garantie prolongée incluse'
    },
    {
      id: '2',
      product: 'Casque sans fil',
      quantity: 2,
      salePrice: 199.98,
      unitCost: 60,
      saleDate: '2024-03-15T11:45:00Z',
      paymentMethod: 'cash',
      paymentStatus: 'completed'
    }
  ]);

  const handleAddSale = (newSale: Omit<Sale, 'id'>) => {
    setSales(prev => [...prev, { ...newSale, id: crypto.randomUUID() }]);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <SalesTable sales={sales} onAddSale={handleAddSale} />
    </div>
  );
}