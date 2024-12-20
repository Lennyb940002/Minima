import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Sale } from '../../types/sales';

interface AddSaleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (sale: Omit<Sale, 'id'>) => void;
}

export function AddSaleModal({ isOpen, onClose, onSubmit }: AddSaleModalProps) {
  const [formData, setFormData] = useState({
    product: '',
    quantity: 1,
    salePrice: 0,
    unitCost: 0,
    customer: '',
    paymentMethod: 'cash',
    paymentStatus: 'pending',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      saleDate: new Date().toISOString(),
    });
    onClose();
  };

  // Nouveau gestionnaire générique pour les inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]:
        name === 'quantity' ? parseInt(value, 10) :
          name === 'salePrice' || name === 'unitCost' ? parseFloat(value) :
            value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-black border border-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Nouvelle Vente</h2>
          <button onClick={onClose} className="text-white hover:text-white">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">Produit</label>
            <input
              type="text"
              name="product"
              required
              className="mt-1 w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
              value={formData.product}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Quantité</label>
              <input
                type="number"
                name="quantity"
                required
                min="1"
                className="mt-1 w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Prix de vente</label>
              <input
                type="number"
                name="salePrice"
                required
                min="0"
                step="0.01"
                className="mt-1 w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                value={formData.salePrice}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Coût unitaire</label>
            <input
              type="number"
              name="unitCost"
              required
              min="0"
              step="0.01"
              className="mt-1 w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
              value={formData.unitCost}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Client (Optionnel)</label>
            <input
              type="text"
              name="customer"
              className="mt-1 w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
              value={formData.customer}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Mode de paiement</label>
              <select
                name="paymentMethod"
                className="mt-1 w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <option value="cash">Espèces</option>
                <option value="card">Carte</option>
                <option value="transfer">Virement</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Statut du paiement</label>
              <select
                name="paymentStatus"
                className="mt-1 w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                value={formData.paymentStatus}
                onChange={handleChange}
              >
                <option value="completed">Effectué</option>
                <option value="pending">En attente</option>
                <option value="cancelled">Annulé</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Notes (Optionnel)</label>
            <textarea
              name="notes"
              className="mt-1 w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            Ajouter la vente
          </button>
        </form>
      </div>
    </div>
  );
}