// src/components/Accounting/StatCard.tsx
import { Euro, TrendingUp, TrendingDown } from 'lucide-react';

type StatCardProps = {
    title: string;
    value: string | number;
    icon: JSX.Element;
};

export function StatCard({ title, value, icon }: StatCardProps) {
    return (
        <div className="bg-black border border-white rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
                {icon}
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <p className="text-3xl font-bold text-white">{value} €</p>
        </div>
    );
}
