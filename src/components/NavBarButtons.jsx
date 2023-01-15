import { useNavigate } from 'react-router-dom';

const NavBarButtons = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={`${className}`}>
      <button className="rounded-md font-semibold lg:px-3 lg:py-2 lg:bg-sky-500 lg:text-white" onClick={() => navigate('/login')}>
        Login
      </button>
      <button className="rounded-md font-semibold lg:px-3 lg:py-2 lg:bg-slate-700 lg:text-white" onClick={() => navigate('/register')}>
        Register
      </button>
    </div>
  );
};

export default NavBarButtons;
