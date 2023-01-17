import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import ModalError from '../../components/ModalError';
import { auth } from '../../config/firebase';
import userState from '../../config/UserState';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const users = userState((state) => state.users);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(users);
    users.user === null ? undefined : navigate('/');
  }, [users]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnClick = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.code);
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  return (
    <div className="container mx-auto px-44 py-72">
      <div className="w-8/12 m-auto rounded-lg overflow-hidden">
        <div className="flex">
          <div className="w-7/12 bg-gradient-to-l from-slate-700 via-slate-800 to-slate-900 text-white p-5">
            <h1 className="font-bold text-3xl">Welcome back,</h1>
            <h2 className="font-bold text-5xl">Rooverse</h2>
            <p className="">Join us, make your own planet and sharing your thoughts with others.</p>
          </div>
          <div className="w-5/12 px-4 flex flex-col bg-slate-100 relative">
            {error && <ModalError errorTitle={'Error'} errorMessage={error} />}
            <h2 className="mt-5 mb-3 font-semibold">Login to your account!</h2>
            <div className="w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none mb-4 px-3 py-2 rounded-md ring-2 hover:ring-sky-500 autofill:bg-transparent focus:ring-sky-500"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="flex w-full mb-1 px-3 py-2 rounded-md ring-2 hover:ring-sky-500 autofill:bg-transparent focus-within:ring-sky-500">
                <input type={showPassword ? 'text' : 'password'} placeholder="Create your password" className="w-11/12 bg-transparent outline-none" minLength={8} value={password} onChange={handlePasswordChange} />
                <button className="w-1/12" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <p className="text-sm mb-4">
              Need an Account? sign up{' '}
              <Link className="text-blue-500 font-bold" to={'/register'}>
                here!
              </Link>
            </p>
            <button className="w-full py-2 bg-sky-500 font-semibold text-white rounded-lg mb-4" onClick={handleOnClick}>
              {loading ? 'Processing...' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
