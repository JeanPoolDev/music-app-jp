import { NavLink } from "react-router";

const links = [
  { path: '/', nombre: 'Inicio' },
  { path: '/music/romance', nombre: 'Romance' },
  { path: '/music/regueton', nombre: 'Regueton' },
]

export function Navbar() {

  return (
    <header className="flex justify-between items-center h-[80px]">

      <nav className="bg-[#121212] p-2 rounded-full flex gap-5">
        {
          links.map((link) => (
            <NavLink
              key={link.nombre}
              to={link.path}
              className={({ isActive }) => (
                `py-2 px-5 rounded-full ${isActive ? 'bg-[#ffffff2b]' : ''}`
              )}>
              {link.nombre}
            </NavLink>
          ))
        }
      </nav>

      <div className="hidden lg:flex gap-4">
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
      </div>
    </header>
  );
};
