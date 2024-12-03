import React from 'react';
import { TimeFilter } from './TimeFilter';

interface MetricCardProps {
  title: string;
  value: string;
  period: 'jour' | 'semaine' | 'mois';
  onPeriodChange: (period: 'jour' | 'semaine' | 'mois') => void;
}

export function MetricCard({ title, value, period, onPeriodChange }: MetricCardProps) {
  return (
    <div className="bg-black border border-white rounded-lg p-6">
      <h3 className="text-white text-lg mb-4">{title}</h3>
      <div className="text-white text-4xl font-bold mb-6">{value}</div>
      <TimeFilter selected={period} onChange={onPeriodChange} />
    </div>
  );
}