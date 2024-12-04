import React, { useState } from 'react';
import { Sale } from '../types/sales';
import { SalesTable } from '../components/SalesTable/SalesTable';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function TablePage() {
  const [sales, setSales] = useLocalStorage<Sale[]>('sales', [

  ]);

  const handleAddSale = (newSale: Omit<Sale, 'id'>) => {
    setSales(prev => [...prev, { ...newSale, id: crypto.randomUUID() }]);
  };

  return (
    <div className="min-h-screen bg-black">
      <SalesTable sales={sales} onAddSale={handleAddSale} />
    </div>
  );
}