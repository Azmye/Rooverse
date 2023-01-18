import { updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { auth } from '../config/firebase';
const ModalProfileUpdate = ({ onClick }) => {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const userDisplayName = auth.currentUser.displayName;
    if (userDisplayName !== null) {
      setUserName(userDisplayName);
    }
  }, []);

  const handleOnClick = async () => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: userName,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="absolute top-full right-0 mt-2 text-black p-2 bg-slate-200 rounded-lg shadow-xl">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sky-500 uppercase font-semibold">Profile Update</h2>
        <button className="p-1 text-red-500" onClick={onClick}>
          <IoClose size={18} />
        </button>
      </div>
      <div className="flex gap-1 ring-2 ring-sky-500 rounded-lg">
        <input type="text" placeholder="Update your username" className="outline-none bg-transparent px-2" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button className="bg-sky-500 py-2 px-3 rounded-lg font-semibold text-white" onClick={handleOnClick}>
          {loading ? 'Updating...' : 'Update'}
        </button>
      </div>
    </div>
  );
};

export default ModalProfileUpdate;
