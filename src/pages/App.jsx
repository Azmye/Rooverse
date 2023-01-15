import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Home/Home';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
