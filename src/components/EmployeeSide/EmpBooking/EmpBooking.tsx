import React, { useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import './EmpBooking.css'
import { apiRequest } from '../../../HelperFunction/helperFunction';

const EmpBooking = () => {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleShowBookings() {
    setLoading(true);
    try {
      const res = await apiRequest(`${process.env.REACT_APP_URL}/bookings/showBookings`,'get');
      setBookings(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleteBookings(id: React.MouseEventHandler<HTMLButtonElement>) {
    try {
      const res = await apiRequest(`${process.env.REACT_APP_URL}/bookings/removeBooking`,'put', {id});
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
            {loading && <p className='loading-mesg'>Loading....</p>}
            {bookings.map((data: any) => (
              <div key={data.name} className='booking-details-div'>
                <p>Id : {data.id}</p>
                <p>Customer Name: - {data.customer_name}</p>
                <p>customer location :- {data.location}</p>
                <p>Phone-no :- {data.phone_no}</p>
                <p>Vehicle :- {data.vehicle}</p>
                <p>Booking made on :- {data.created_date.split('T')[0]}</p>
                <p>Status: {data.status === 0 ? 'Unactive' : 'Active'}</p>
                <div className='booking-handler-buttons-div'>
                  <button className='edit-booking-status' onClick={() => handleDeleteBookings(data.id)}>Change Status</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EmpBooking