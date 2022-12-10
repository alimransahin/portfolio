import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './Components/Context/AuthProvider/AuthProvider';
import { router } from './Components/Routes/Routes';

function App() {
  const {darkMode}=useContext(AuthContext);
  return (
    <div data-theme={darkMode===true?"dark":"light"} >
      <div className="min-h-screen">

      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
