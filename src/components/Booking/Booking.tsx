import React, { FormEvent, useState } from 'react'
import img from '../../images/book-bike.jpg'
import Header from '../Header'
import Footer from '../Footer'
import './Booking.css'
import axios from 'axios'

type BookingDetails = {
    customerName: string,
    phoneNo: string,
    location: string,
    vehicle: string,
}

const Booking = () => {
    const errorMessageArea = document.getElementById('error-mesg-area');
    const successMessageArea = document.getElementById('success-mesg-area');

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

    function handleBoking(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(details);
        axios.post(`${process.env.REACT_APP_URL}/bookings/newBookings`, details, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    if (successMessageArea) {
                        successMessageArea.innerHTML = '';
                        successMessageArea.innerHTML = '** Booking Added Successfully. We will reach out to you soon'
                    }
                }
            })
            .catch((error) => {
                console.log(error);
                const status = error.response.status;
                if (status === 409 || status === 400 || status === 500) {
                    if (errorMessageArea) {
                        errorMessageArea.innerHTML = '';
                        errorMessageArea.innerHTML = error.response.data.error;
                    }
                }
            });
    }

    return (
        <>
            <Header />
            <div className="main-booking-div ">
                <figure className='booking-div-bg-img'>
                    <img src={img} alt="Background" />
                </figure>
                <div className='vehicle-booking-div'>
                    <form className='booking-form' onSubmit={handleBoking}>

                        <label htmlFor="customerName">Customer Name:-</label>
                        <input type="text" name='customerName' placeholder='Name' onChange={handleDataChange} />

                        <label htmlFor="phoneNo">Phone no:-</label>
                        <input type="tel" name='phoneNo' placeholder='Phone No.' onChange={handleDataChange} />

                        <label htmlFor="location">Enter your location</label>
                        <input type="text" name='location' placeholder='Current location' onChange={handleDataChange} />

                        <label htmlFor="vehicle">Choose the vehicle</label>
                        <select name="vehicle" id="vehicle" onChange={handleSelectDataChange}>
                            <option value="">Select a option</option>
                            <optgroup label='Bikes'>
                                <option value="fz_s(blue)">fz_s(blue)</option>
                                <option value="fz_s(silver)">fz_s(silver)</option>
                                <option value="fz_s(black)">fz_s(black)</option>
                                <option value="r15(blue)">r15(blue)</option>
                                <option value="r15(black)">r15(black)</option>
                                <option value="r15(moster edition)">r15(moster edition)</option>
                                <option value="niken(black)">niken(black)</option>
                                <option value="niken(blue)">niken(blue)</option>
                                <option value="R1">R1</option>
                                <option value="R6">R6</option>
                            </optgroup>
                            <optgroup label='Scooter'>
                                <option value="fasino(red)">fasino(red)</option>
                                <option value="fasino(black)">fasino(black)</option>
                                <option value="fasino(blue)">fasino(blue)</option>
                            </optgroup>
                            <optgroup label='Electric'>
                                <option value="yola(black)">yola(black)</option>
                                <option value="yola(blue)">yola(blue)</option>
                            </optgroup>
                        </select>
                        <button className='booking-submit-btn'>Sumbit</button>
                        <p id='error-mesg-area'></p>
                        <p id='success-mesg-area'></p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Booking