import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Items from './Component/Items/Items';
import Login from './Component/Login/Login';
import RequirAuth from './Component/RequirAuth/RequirAuth';
import Signup from './Component/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<RequirAuth>
          <Home></Home>
        </RequirAuth>}></Route>

        <Route path='cart' element={
          <RequirAuth>
            <Cart></Cart>
          </RequirAuth>
        } ></Route>
        <Route path='login' element={<Login></Login>} ></Route>
        <Route path='signup' element={<Signup></Signup>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
