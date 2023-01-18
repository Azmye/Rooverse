import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FaSignOutAlt, FaEdit } from 'react-icons/fa';
import userState from '../config/UserState';
import ModalProfileUpdate from './ModalProfileUpdate';
import { useState } from 'react';
const NavBarUser = ({ className, signOut }) => {
  const users = userState((state) => state.users);
  const [isProfileForm, setProfileForm] = useState(false);

  const handleOnOpen = () => {
    setProfileForm(true);
  };

  const handleOnClose = () => {
    setProfileForm(false);
  };
  return (
    <div className={`text-white bg-slate-900  px-2 p-1 rounded-full relative ${className}`}>
      <h3>{users.user.displayName !== null ? users.user.displayName : users.user.email}</h3>
      <button className="bg-white text-sky-500 rounded-full p-1" title="Update User" onClick={handleOnOpen}>
        <FaEdit size={18} />
      </button>
      <button className="bg-white text-sky-500 rounded-full p-1" title="Sign Out" onClick={signOut}>
        <FaSignOutAlt size={18} />
      </button>
      {isProfileForm ? <ModalProfileUpdate onClick={handleOnClose} /> : undefined}
    </div>
  );
};

export default NavBarUser;
