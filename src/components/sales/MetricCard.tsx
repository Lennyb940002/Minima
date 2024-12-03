export function MetricCard({ title, value, period, onPeriodChange }) {
  return (
    <div className="text-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-4xl font-bold my-4">{value}</p>
      <div className="flex justify-center gap-2">
        {['jour', 'semaine', 'mois'].map((p) => (
          <button
            key={p}
            onClick={() => onPeriodChange(p)}
            className={`px-4 py-2 rounded-full ${period === p ? 'bg-white text-black' : 'bg-gray-700 text-white'
              }`}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
