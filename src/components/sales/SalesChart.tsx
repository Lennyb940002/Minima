import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'April', value: 30 },
  { name: 'May', value: 20 },
  { name: 'June', value: 45 },
  { name: 'July', value: 35 }
];

export function SalesChart() {
  return (
    <div className="bg-black border border-white rounded-lg p-6 h-full">
      <h3 className="text-white text-lg mb-4">Evolution des ventes</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#FFF" />
            <YAxis stroke="#FFF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#000', border: '1px solid #FFF' }}
              labelStyle={{ color: '#FFF' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#FFF" 
              fill="url(#gradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}