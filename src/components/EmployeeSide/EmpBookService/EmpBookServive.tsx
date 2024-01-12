import React, { useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import axios from 'axios';
import './EmpBookService.css'

const EmpBookServive = () => {

  const [bookingId, setBookingId] = useState({
    id: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingId({ ...bookingId, [e.target.name]: e.target.value })
  }

  const [bookingData, setBookingData] = useState([])

  function handleShowBookings() {
    axios.get(`${process.env.REACT_APP_URL}/bookService/showBookings`, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      setBookingData(res.data.data);
    })
      .catch(error => console.log(error));
  }

  function handleEditBooking() {
    axios.put(`${process.env.REACT_APP_URL}/bookService/update`, bookingId, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch(error => console.log(error));
    console.log(bookingId);
  }

  return (
    <>
      <EmpHeader />
      <div className='service-booking-container background-image-style'>
        <div className='booking-details-container'>
        <p className='headings'>Show all bookings</p>

          <button onClick={handleShowBookings}>Show all Bookings</button>
          <div id='show-service-bookings'>
            {bookingData.map((data: any) => (
              <div key={data.id} className='booking-data'>
                <p>{data.id}</p>
                <p>{data.cust_id}</p>
                <p>{data.vehicle_id}</p>
                <p>{data.date}</p>
                <p>{data.issue_faced}</p>
                <p>{data.booking_status}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='edit-booking-container'>
          <p>Edit Booking Status</p>
          <div>
          <label htmlFor="id">ID</label>
          <input type="text" name='id' onChange={handleChange} />
          </div>
          <button onClick={handleEditBooking}>Edit a Booking</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EmpBookServive