import { CircuitBoard } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <CircuitBoard className="h-8 w-8 text-white" />
      <span className="text-2xl font-bold text-white">Minima</span>
    </Link>
  );
}