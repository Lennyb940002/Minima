// src/components/Accounting/TransactionList.tsx
type TransactionListProps = {
    data: Record<string, number>;
    period: 'jour' | 'semaine' | 'mois';
};

export function TransactionList({ data, period }: TransactionListProps) {
    return (
        <div className="text-white mt-4">
            <h3 className="text-lg font-bold">{period.charAt(0).toUpperCase() + period.slice(1)} - Transactions</h3>
            <ul>
                {Object.entries(data).map(([date, amount]) => (
                    <li key={date}>
                        {date}: {amount} €
                    </li>
                ))}
            </ul>
        </div>
    );
}
