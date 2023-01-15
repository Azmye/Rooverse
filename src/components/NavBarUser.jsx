import { HiOutlineDotsVertical } from 'react-icons/hi';
const NavBarUser = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h3></h3>
      <button onClick={() => logoutUsers()}>
        <HiOutlineDotsVertical />
      </button>
    </div>
  );
};

export default NavBarUser;
