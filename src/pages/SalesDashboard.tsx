import { useState } from 'react';
import { MetricCard } from '../components/sales/MetricCard';
import { SalesChart } from '../components/sales/SalesChart';
import { NotesSection } from '../components/sales/NotesSection';
import { StatsCard } from '../components/sales/StatsCard';
import { SalesTable } from '../components/sales/SalesTable';

export function SalesDashboard() {
  const [salesPeriod, setSalesPeriod] = useState<'jour' | 'semaine' | 'mois'>('jour');
  const [revenuePeriod, setRevenuePeriod] = useState<'jour' | 'semaine' | 'mois'>('jour');
  const [profitPeriod, setProfitPeriod] = useState<'jour' | 'semaine' | 'mois'>('jour');

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <div className="row-span-2">
        <MetricCard
          title="Vue d'ensemble des ventes"
          value="33"
          period={salesPeriod}
          onPeriodChange={setSalesPeriod}
        />
      </div>
      <div className="col-span-2 row-span-1">
        <MetricCard
          title="Vue d'ensemble du CA"
          value="+ 7 096 €"
          period={revenuePeriod}
          onPeriodChange={setRevenuePeriod}
        />
      </div>
      <div className="row-span-2">
        <NotesSection />
      </div>
      <div className="row-span-2">
        <MetricCard
          title="Bénéfices"
          value="+ 4 520 €"
          period={profitPeriod}
          onPeriodChange={setProfitPeriod}
        />
      </div>
      <div className="col-span-2">
        <SalesChart />
      </div>
      <div className="col-span-2">
        <SalesTable />
      </div>
      <div className="row-span-2">
        <StatsCard />
      </div>
    </div>
  );
}