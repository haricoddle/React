import React, { FormEvent, useState } from 'react'
import img from '../../images/book-bike.jpg'
import Header from '../Header'
import Footer from '../Footer'
import './Booking.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/Store'
import { newBookingAPI } from '../../API/UserSide'
import Modal from '../Modal/Modal'

type BookingDetails = {
    customerName: string,
    phoneNo: string,
    location: string,
    vehicle: string,
}

const Booking = () => {
    const vehicleData = useSelector((state: RootState) => state.vehicles);

    const [error, setError] = useState<boolean>(false);


    const [details, setDetails] = useState<BookingDetails>({
        customerName: '',
        phoneNo: '',
        location: '',
        vehicle: '',
    });

    const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const handleSelectDataChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    async function handleBoking(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(details);
        try {
            const res = await newBookingAPI(details);
            if (res) {
                alert('booking added successfully');
            }
        } catch (error) {
            setError(true);
        }
    }

    return (
        <>
            <Header />
            {error && (
                <Modal />
            )}
            <div className="main-booking-div ">
                <figure className='booking-div-bg-img'>
                    <img src={img} alt="Background" />
                </figure>
                <div className='vehicle-booking-div'>
                    <form className='booking-form' onSubmit={handleBoking}>

                        <label htmlFor="customerName">Customer Name:-</label>
                        <input type="text" name='customerName' placeholder='Name' onChange={handleDataChange} required />

                        <label htmlFor="phoneNo">Phone no:-</label>
                        <input type="tel" name='phoneNo' placeholder='Phone No.' onChange={handleDataChange} required />

                        <label htmlFor="location">Enter your location</label>
                        <input type="text" name='location' placeholder='Current location' onChange={handleDataChange} required />

                        <label htmlFor="vehicle">Choose the vehicle</label>
                        <select name="vehicle" id="vehicle" onChange={handleSelectDataChange} required>
                            <option value="">Select a option</option>
                            {vehicleData.map((data: any) => (
                                <option key={data.id} value={data.model_name}>{data.model_name}</option>
                            ))}
                        </select>
                        <button className='booking-submit-btn'>Sumbit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Booking