import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  Icon: LucideIcon;
}

export function DashboardCard({ title, Icon }: DashboardCardProps) {
  return (
    <div className="bg-black border border-white px-6 py-8 rounded-lg transition-all duration-300 hover:bg-white group cursor-pointer top-10 rounded-[20px]" style={{ width: '380px', height: '260px' }}>
      <div className="flex flex-col items-center gap-4">
        <Icon className="w-24 h-24 text-white group-hover:text-black" />
        <h3 className="text-white group-hover:text-black font-medium">{title}</h3>
      </div>
    </div>
  );
}
