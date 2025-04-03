import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Home from './components/Home';
import AccountPage from './components/Account';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  );
}

export default App;
