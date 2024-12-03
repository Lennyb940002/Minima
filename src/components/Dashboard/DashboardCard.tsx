import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  Icon: LucideIcon;
}

export function DashboardCard({ title, Icon }: DashboardCardProps) {
  return (
    <div className="bg-black border border-white p-12 rounded-lg transition-all duration-300 hover:bg-white group cursor-pointer">
      <div className="flex flex-col items-center gap-4">
        <Icon className="w-24 h- text-white group-hover:text-black" />
        <h3 className="text-white group-hover:text-black font-medium">{title}</h3>
      </div>
    </div>
  );
}