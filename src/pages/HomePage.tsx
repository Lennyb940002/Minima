import { useNavigate } from 'react-router-dom';
import { Banknote, Package, Calculator, FileSpreadsheet, FileEdit, Megaphone } from 'lucide-react';
import { DashboardCard } from '../components/Dashboard/DashboardCard';

export function HomePage() {
  const navigate = useNavigate();

  const sections = [
    { title: 'Vente', Icon: Banknote, path: '/e-commerce/ventes' },
    { title: 'Stock', Icon: Package, path: '/e-commerce/stock' },
    { title: 'Comptabilité', Icon: Calculator, path: '/e-commerce/comptabilite' },
    { title: 'Déclaration', Icon: FileSpreadsheet, path: '/e-commerce/declaration' },
    { title: 'Création Produit', Icon: FileEdit, path: '/e-commerce/creation-produit' },
    { title: 'Marketing', Icon: Megaphone, path: '/e-commerce/marketing' },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {sections.map((section) => (
        <div key={section.title} onClick={() => navigate(section.path)}>
          <DashboardCard title={section.title} Icon={section.Icon} />
        </div>
      ))}
    </div>
  );
}