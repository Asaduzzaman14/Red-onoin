import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Component/Cart/Cart';
import Dinner from './Component/Dinner/Dinner';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Breakfast from './Component/Items/Breakfast';
import Login from './Component/Login/Login';
import Lunch from './Component/Lunch/Lunch';
import RequirAuth from './Component/RequirAuth/RequirAuth';
import Signup from './Component/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='/' element={<Breakfast></Breakfast>}></Route>
          <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='/lunch' element={<Lunch></Lunch>}></Route>
          <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        </Route>

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
