import React, { useEffect, useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import './EmpBooking.css'
import { deleteBookingsAPI, showBookingsAPI } from '../../../API/EmpSide';
import Modal from '../../Modal/Modal';

const EmpBooking = () => {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await showBookingsAPI();
        setBookings(res.data.data);
      } catch (error: any) {
        setErrorMessage(error.response.data.error);
        setApiError(true);
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [status]);

  async function handleDeleteBookings(id: React.MouseEventHandler<HTMLButtonElement>) {
    try {
      const res = await deleteBookingsAPI({ id });
      if (res) {
        console.log(res);
        setStatus(!status);
        alert('Booking deleted successfully');
      }
    } catch (error: any) {
      setErrorMessage(error.response.data.error);
      setApiError(true);
    }
  }

  return (
    <>
      <EmpHeader />
      {apiError && (
        <Modal onClose={() => setApiError(false)} errorMessage={errorMessage} />
      )}
      <div className='vehicle-booking-container background-image-style'>
        <div className='booking-details'>
          <p className='headings'>Vehicle Bookings</p>
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