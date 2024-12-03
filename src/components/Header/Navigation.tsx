import { NavLink, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();

  const baseClass = 'px-4 py-2 transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-white rounded-[20px]';
  const activeClass = 'bg-white text-black border border-white';
  const inactiveClass = 'text-white';

  return (
    <nav className="flex gap-8">
      <NavLink
        to=""
        className={({ isActive }) =>
          `${baseClass} ${isActive || location.pathname === '/' ? activeClass : inactiveClass}`
        }
      >
        E-commerce
      </NavLink>
      {['/investissements', '/agenda', '/assistance'].map((path, index) => (
        <NavLink
          key={index}
          to={path}
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          {path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
        </NavLink>
      ))}
    </nav>
  );
}
