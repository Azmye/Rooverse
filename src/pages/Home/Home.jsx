import { auth } from '../../config/firebase';
import userState from '../../config/UserState';
const Home = () => {
  const users = userState((state) => state.users);
  console.log(users);
  return <div>Home</div>;
};

export default Home;
