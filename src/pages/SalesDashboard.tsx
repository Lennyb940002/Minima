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
    <div className="grid grid-cols-12 gap-6 p-6 ">
      {/* Rangée 1 */}
      {/* Vue d'ensemble des ventes */}
      <div className="col-span-4 row-span-2 bg-white">
        <MetricCard
          title="Vue d'ensemble des ventes"
          value="33"
          period={salesPeriod}
          onPeriodChange={setSalesPeriod}
        />
      </div>

      {/* Vue d'ensemble du CA */}
      <div className="col-span-4 row-span-2 bg-white">
        <MetricCard
          title="Vue d'ensemble du CA"
          value="+ 7 096 €"
          period={revenuePeriod}
          onPeriodChange={setRevenuePeriod}
        />
      </div>

      {/* Evolution des ventes */}
      <div className="col-span-4 row-span-2" >
        <SalesChart />
      </div>

      {/* Rangée 2 */}
      {/* Note */}
      <div className="col-span-4 row-span-2">
        <NotesSection />
      </div>

      {/* Bénéfices */}
      <div className="col-span-4 row-span-2 bg-white" >
        <MetricCard
          title="Bénéfices"
          value="+ 4 520 €"
          period={profitPeriod}
          onPeriodChange={setProfitPeriod}
        />
      </div>

      {/* Stat */}
      <div className="col-span-4 row-span-3">
        <StatsCard />
      </div>

      {/* Rangée 3 */}
      {/* Tableau */}
      <div className="col-span-8 row-span-1" >
        <SalesTable />
      </div>
    </div>
  );
}
