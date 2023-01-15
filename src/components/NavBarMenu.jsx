import { NavLink } from 'react-router-dom';
import { IoHome, IoPlanet } from 'react-icons/io5';
import { MdTravelExplore } from 'react-icons/md';
const NavBarMenu = ({ className }) => {
  return (
    <ul className={`${className}`}>
      <li>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-sky-500 flex gap-1 items-center' : 'flex gap-1 items-center')}>
          <IoHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={'/explore'} className={({ isActive }) => (isActive ? 'text-sky-500 flex gap-1 items-center' : 'flex gap-1 items-center')}>
          <MdTravelExplore /> Explore
        </NavLink>
      </li>
      {/* <li>
        <NavLink to={'/planet'} className={({ isActive }) => (isActive ? 'text-sky-500 flex gap-1 items-center' : 'flex gap-1 items-center')}>
          <IoPlanet /> Planet
        </NavLink>
      </li> */}
    </ul>
  );
};

export default NavBarMenu;
