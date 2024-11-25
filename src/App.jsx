import { Navigate } from 'react-router-dom';
import './App.css'

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? <Navigate to="/login" /> : <Navigate to="/" />;
};

export default App;
