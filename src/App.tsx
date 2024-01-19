import './App.css';
import Head from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup/Signup';
import EmpLogin from './components/EmpLogin/EmpLogin';
import EmpHomePage from './pages/EmpHomepage/EmpHomepage';
import Accessories from './components/Accessories/Accessories';
import Vehicles from './components/Vehicles/Vehicles';
import BookService from './components/BookService/BookService';
import Cart from './components/Cart/Cart';
import Booking from './components/Booking/Booking';

import EmpBooking from './components/EmployeeSide/EmpBooking/EmpBooking';
import EmpCustomer from './components/EmployeeSide/EmpCustomer/EmpCustomer';
import EmpVehicles from './components/EmployeeSide/EmpVehicles/EmpVehicles';
import Employee from './components/EmployeeSide/Employee/Employee';
import EmpBookServive from './components/EmployeeSide/EmpBookService/EmpBookServive';
import EmpAccessories from './components/EmployeeSide/EmpAccessories/EmpAccessories';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/cart' element={ <Cart /> }/>
        <Route path='/vehicles' element={ <Vehicles /> }/>
        <Route path='/accessories' element={ <Accessories /> }/>
        <Route path='/bookService' element={ <BookService /> }/>
        <Route path='/bookings' element={ <Booking /> }/>
        <Route path='/home' element={ <Head /> }/>
        <Route path='/' element={ <Login /> }/>
        <Route path='/signup' element={ <Signup /> }/>
        <Route path='/emplogin' element={ <EmpLogin /> }/>
        <Route path='/empHome' element={ <EmpHomePage /> }/>
        <Route path='/empHome/vehiclesBooking' element={ <EmpBooking /> }/>
        <Route path='/empHome/accessories' element={ <EmpAccessories/> }/>
        <Route path='/empHome/serviceBooking' element={ <EmpBookServive/> }/>
        <Route path='/empHome/vehicles' element={ <EmpVehicles/>}/>
        <Route path='/empHome/customer' element= { <EmpCustomer/> }/>
        <Route path='/empHome/employee' element={<Employee/>}/>
      </Routes>
    </div>
  );
}

export default App;
