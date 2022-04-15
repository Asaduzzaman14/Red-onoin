import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='login' element={<Login></Login>} ></Route>
        <Route path='signup' element={<Signup></Signup>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
