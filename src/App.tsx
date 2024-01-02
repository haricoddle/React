import './App.css';
import Head from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import EmpLogin from './components/EmpLogin';
import EmpHomePage from './pages/EmpHomepage';
import Accessories from './components/Accessories/Accessories';
import Vehicles from './components/Vehicles/Vehicles';
import BookService from './components/BookService/BookService';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/vehicles' element={<Vehicles/>}/> 
      <Route path='/accessories' element={<Accessories/>}/>
      <Route path='/bookService' element={<BookService/>}/>
      <Route path='/home' element={<Head />}/>
      <Route path='/' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/emplogin' element={<EmpLogin />}/>
      <Route path='/empHome' element={<EmpHomePage />}/>
    </Routes>
    </div>
  );
}

export default App;
