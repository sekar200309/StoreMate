import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path='/dashboard' element={<Dashboard />} />
    //   </Routes>
    // </Router>
    <Dashboard/>
  );
}

export default App;
