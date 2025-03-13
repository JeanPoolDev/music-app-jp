import { NavLink, useNavigate } from "react-router";
import { assets } from "../../assets/assets";

const links = [
  { path: '/', nombre: 'Inicio' },
  { path: '/romance', nombre: 'Romance' },
  { path: '/regueton', nombre: 'Regueton' },
]

export function Navbar() {

  const navigate = useNavigate();

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
        <img onClick={() => navigate(-1)} src={assets.arrow_left} className="w-9 p-2 hover:bg-[#ffffff2b] rounded-full cursor-pointer" />
        <img onClick={() => navigate(1)} src={assets.arrow_right} className="w-9 p-2 hover:bg-[#ffffff2b] rounded-full cursor-pointer" />
      </div>

    </header>
  );
};
