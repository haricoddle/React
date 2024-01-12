import React, { useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import axios from 'axios';
import './EmpBooking.css'

const EmpBooking = () => {

  const [bookings, setBookings] = useState([])
  const [id, setId] = useState({
    id: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId({ ...id, [e.target.name]: e.target.value })
  }

  function handleShowBookings() {
    axios.get(`${process.env.REACT_APP_URL}/bookings/showBookings`, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        console.log(res);
        setBookings(res.data.data);
      })
      .catch(error => console.log(error));
  }

  function handleDeleteBookings() {
    axios.put(`${process.env.REACT_APP_URL}/bookings/removeBooking`, id, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        console.log(res)
      })
      .catch(error => console.log(error));
    console.log(id);
  }

  return (
    <>
      <EmpHeader />
      <div className='vehicle-booking-container background-image-style'>
        <div className='booking-details'>
          <p className='headings'>Show all Bookings</p>
          <button onClick={handleShowBookings}>Show vehicle bookings</button>
          <div id='show-bookings'>
            {bookings.map((data: any) => (
              <div key={data.name} className='booking-details booking-details-div'>
                <p>Id : {data.id}</p>
                <p>Customer Name: - {data.customer_name}</p>
                <p>customer location :- {data.location}</p>
                <p>Phone-no :- {data.phone_no}</p>
                <p>Vehicle :- {data.vehicle}</p>
                <p>Booking made on :- {data.created_date}</p>
                <p>Status: {data.status}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div className='delete-bookings'>
          <p>Delete Booking</p>
          <div>
            <label htmlFor="id">ID</label>
            <input type="text" name='id' onChange={handleChange} />
          </div>
          <button onClick={handleDeleteBookings}>Delete Bookings</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EmpBooking