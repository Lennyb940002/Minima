import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="flex gap-8">
      <NavLink
        to="/e-commerce/ventes"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-white ${
            isActive ? 'bg-white text-black border border-white' : 'text-white'
          }`
        }
      >
        E-commerce
      </NavLink>
      <NavLink
        to="/investissements"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-white ${
            isActive ? 'bg-white text-black border border-white' : 'text-white'
          }`
        }
      >
        Investissements
      </NavLink>
      <NavLink
        to="/agenda"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-white ${
            isActive ? 'bg-white text-black border border-white' : 'text-white'
          }`
        }
      >
        Agenda
      </NavLink>
      <NavLink
        to="/assistance"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-white ${
            isActive ? 'bg-white text-black border border-white' : 'text-white'
          }`
        }
      >
        Assistance
      </NavLink>
    </nav>
  );
}