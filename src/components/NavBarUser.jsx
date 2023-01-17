import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FaSignOutAlt } from 'react-icons/fa';
import userState from '../config/UserState';
const NavBarUser = ({ className, onClick }) => {
  const users = userState((state) => state.users);
  return (
    <div className={`text-white bg-slate-900  px-2 p-1 rounded-full ${className}`}>
      <h3>{users.user?.email}</h3>
      <button className="bg-white text-red-500 rounded-full p-1" title="Sign Out" onClick={onClick}>
        <FaSignOutAlt size={18} />
      </button>
    </div>
  );
};

export default NavBarUser;
