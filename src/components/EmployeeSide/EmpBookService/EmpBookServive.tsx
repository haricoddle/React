import React, { useEffect, useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import './EmpBookService.css'
import { editServiceBookingsAPI, serviceBookingsAPI } from '../../../API/EmpSide';
import Modal from '../../Modal/Modal';

const EmpBookServive = () => {

  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await serviceBookingsAPI();
        setBookingData(res.data.data);
      } catch (error: any) {
        setErrorMessage(error.response.data.error);
        setApiError(true);
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [status])

  async function handleEditBooking(id: React.MouseEventHandler<HTMLButtonElement>) {
    try {
      const res = await editServiceBookingsAPI({ id });
      if (res) {
        setStatus(!status);
        alert('Booking edited successfully');
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
      <div className='service-booking-container background-image-style'>
        <div className='booking-details-container'>
          <p className='headings'>All Service bookings</p>
          <div id='show-service-bookings'>
            {loading && <p className='loading-mesg'>Loading....</p>}
            {bookingData.map((data: any) => (
              <div key={data.id} className='booking-data'>
                <p>Service-Id:- {data.id}</p>
                <p>Customer Name:- {data.name}</p>
                <p>Customer-id:- {data.cust_id}</p>
                <p>Vehicle-Model:- {data.model_name}</p>
                <p>Booked date: -{data.date.split('T')[0]}</p>
                <p>Issue faced:- {data.issue_faced}</p>
                <p>Status:- {data.booking_status === 0 ? 'Unactive' : 'Active'}</p>
                <div>
                  <button className='edit-booking-status' onClick={() => handleEditBooking(data.id)}>Edit booking status</button>
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

export default EmpBookServive