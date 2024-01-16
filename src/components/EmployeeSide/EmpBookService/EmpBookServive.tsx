import React, { useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import './EmpBookService.css'
import { apiRequest } from '../../../HelperFunction/helperFunction';

const EmpBookServive = () => {

  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleShowBookings() {
    setLoading(true);
    try {
      const res = await apiRequest(`${process.env.REACT_APP_URL}/service/showBookings`, 'get');
      setBookingData(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  async function handleEditBooking(id: React.MouseEventHandler<HTMLButtonElement>) {
    try {
      const res = await apiRequest(`${process.env.REACT_APP_URL}/service/update`,'post', { id });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(id);
  }

  return (
    <>
      <EmpHeader />
      <div className='service-booking-container background-image-style'>
        <div className='booking-details-container'>
          <p className='headings'>Show all bookings</p>

          <button onClick={handleShowBookings}>Show all Bookings</button>
          <div id='show-service-bookings'>
            {loading && <p className='loading-mesg'>Loading....</p>}
            {bookingData.map((data: any) => (
              <div key={data.id} className='booking-data'>
                <p>Service-Id:- {data.id}</p>
                <p>Customer-id:- {data.cust_id}</p>
                <p>Vehicle-id:- {data.vehicle_id}</p>
                <p>Booked date: -{data.date.split('T')[0]}</p>
                <p>Issue faced:- {data.issue_faced}</p>
                <p>Status:- {data.booking_status}</p>
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