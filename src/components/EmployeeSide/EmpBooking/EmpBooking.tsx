import React, { useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import './EmpBooking.css'
import { deleteBookingsAPI, showBookingsAPI } from '../../../API/EmpSide';
import Modal from '../../Modal/Modal';

const EmpBooking = () => {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);


  async function handleShowBookings() {
    setLoading(true);
    try {
      const res = await showBookingsAPI();
      setBookings(res.data.data);
    } catch (error) {
      setApiError(true);
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleteBookings(id: React.MouseEventHandler<HTMLButtonElement>) {
    try {
      const res = await deleteBookingsAPI({ id });
      if (res) {
        alert('Booking deleted successfully');
      }
    } catch (error) {
      setApiError(true);
    }
  }

  return (
    <>
      <EmpHeader />
      {apiError && (
        <Modal onClose={() => setApiError(false)} />
      )}
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