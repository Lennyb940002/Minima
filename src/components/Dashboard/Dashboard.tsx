import { Banknote, Package, Calculator, FileSpreadsheet, FileEdit, Megaphone } from 'lucide-react';
import { DashboardCard } from './DashboardCard';

export function Dashboard() {
  const sections = [
    { title: 'Vente', Icon: Banknote },
    { title: 'Stock', Icon: Package },
    { title: 'Comptabilité', Icon: Calculator },
    { title: 'Déclaration', Icon: FileSpreadsheet },
    { title: 'Création Produit', Icon: FileEdit },
    { title: 'Marketing', Icon: Megaphone },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {sections.map((section) => (
        <DashboardCard key={section.title} {...section} />
      ))}
    </div>
  );
}
