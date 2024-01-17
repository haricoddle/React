import React from 'react'
import Head from './Home'
import Login from './Login';
import Signup from './Signup/Signup';
import EmpLogin from './EmpLogin/EmpLogin';
import EmpHomePage from '../pages/EmpHomepage/EmpHomepage';
import Accessories from './Accessories/Accessories';
import Vehicles from './Vehicles/Vehicles';
import BookService from './BookService/BookService';
import Cart from './Cart/Cart';
import Booking from './Booking/Booking';

import EmpBooking from './EmployeeSide/EmpBooking/EmpBooking';
import EmpCustomer from './EmployeeSide/EmpCustomer/EmpCustomer';
import EmpVehicles from './EmployeeSide/EmpVehicles/EmpVehicles';
import Employee from './EmployeeSide/Employee/Employee';
import EmpBookServive from './EmployeeSide/EmpBookService/EmpBookServive';
import EmpAccessories from './EmployeeSide/EmpAccessories/EmpAccessories';
import { Route, Routes } from 'react-router-dom';
import Modal from './Modal/Modal';

const Router = () => {
  return (
    <Routes>
      <Route path='/cart' element={<Cart />} />
      <Route path='/vehicles' element={<Vehicles />} />
      <Route path='/accessories' element={<Accessories />} />
      <Route path='/bookService' element={<BookService />} />
      <Route path='/bookings' element={<Booking />} />
      <Route path='/home' element={<Head />} />
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/emplogin' element={<EmpLogin />} />
      <Route path='/empHome' element={<EmpHomePage />} />
      <Route path='/empHome/vehiclesBooking' element={<EmpBooking />} />
      <Route path='/empHome/accessories' element={<EmpAccessories />} />
      <Route path='/empHome/serviceBooking' element={<EmpBookServive />} />
      <Route path='/empHome/vehicles' element={<EmpVehicles />} />
      <Route path='/empHome/customer' element={<EmpCustomer />} />
      <Route path='/empHome/employee' element={<Employee />} />
      <Route path='/modal' element={<Modal />} />
    </Routes>
  )
}

export default Router