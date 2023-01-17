import { auth } from '../../config/firebase';
import userState from '../../config/UserState';
const Home = () => {
  console.log(auth.currentUser);
  return <div>Home</div>;
};

export default Home;
