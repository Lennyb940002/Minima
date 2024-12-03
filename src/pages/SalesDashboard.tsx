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
      {/* Vue d'ensemble des ventes */}
      <div className="row-span-3 col-start-2 row-start-1">
        <MetricCard
          title="Vue d'ensemble des ventes"
          value="33"
          period={salesPeriod}
          onPeriodChange={setSalesPeriod}
        />
      </div>

      {/* Vue d'ensemble du CA */}
      <div className="row-span-4 col-start-1">
        <MetricCard
          title="Vue d'ensemble du CA"
          value="+ 7 096 €"
          period={revenuePeriod}
          onPeriodChange={setRevenuePeriod}
        />
      </div>

      {/* Evolution des ventes */}
      <div className="row-span-4 col-start-3 row-start-1">
        <SalesChart />
      </div>

      {/* Note */}
      <div className="row-span-2 col-start-1 row-start-5">
        <NotesSection />
      </div>

      {/* Bénéfices */}
      <div className="row-span-3 col-start-2 row-start-4">
        <MetricCard
          title="Bénéfices"
          value="+ 4 520 €"
          period={profitPeriod}
          onPeriodChange={setProfitPeriod}
        />
      </div>

      {/* Stat */}
      <div className="row-span-4 col-start-3 row-start-5">
        <StatsCard />
      </div>

      {/* Tableau */}
      <div className="col-span-2 row-span-2 col-start-1 row-start-7">
        <SalesTable />
      </div>
    </div>
  );
}
