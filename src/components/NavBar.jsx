import NavBarButtons from './NavBarButtons';
import NavBarMenu from './NavBarMenu';

import { IoPlanet } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <header className="">
      <div className="fixed right-0 left-0">
        <div className="container mx-auto">
          <div className="px-4 flex items-center justify-between py-4 lg:px-0">
            <NavLink to={'/'} className="font-bold text-xl flex items-center text-slate-900">
              <IoPlanet className="mr-1" /> Roo<span className="text-slate-700">verse</span>
            </NavLink>
            <NavBarButtons className={`ml-auto flex gap-3 lg:hidden`} />
            <nav className="lg:w-full lg:ml-auto lg:flex">
              <NavBarMenu
                className={'fixed left-0 right-0 bottom-0 flex justify-evenly items-center text-xl font-semibold text-white bg-slate-900 py-4 lg:text-slate-900 lg:bg-transparent lg:py-0 lg:mx-auto lg:gap-3 lg:justify-between lg:static'}
              />
              <NavBarButtons className={'gap-2 hidden lg:flex'} />
              {/* {Object.keys(users).length <= 0 ? <NavBarButtons className={'gap-2 hidden lg:flex'} /> : <NavBarUser className={'gap-2 hidden lg:flex items-center'} />} */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
