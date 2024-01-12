import React from "react";
import img from '../../images/book-bike.jpg'
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import './EmpHomepage.css';

const EmpHomePage = () => {
    const Navigate = useNavigate();
    
    function handleLogout() {
        localStorage.removeItem('token');
        if (localStorage.length === 0) {
            Navigate('/');
        }
    }

    function handleVehicleBooking() {
        Navigate('/empHome/vehiclesBooking')
    }

    function handleAccessories() {
        Navigate('/empHome/accessories')
    }

    function handleServiceBookings() {
        Navigate('/empHome/serviceBooking')
    }

    function handleVehicles() {
        Navigate('/empHome/vehicles')
    }
    function handleCustomers() {
        Navigate('/empHome/customer')
    }

    function handleEmployee() {
        Navigate('/empHome/employee')
    }

    return (
        <div>
            <header className="emp-header">
                <p>THE MOTOR CORP</p>
            </header>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
            <div className="homepage-container">
                <figure>
                    <img src={img} alt="" />
                </figure>
                <div className="homepage-div">
                    <div className="booking-options-div grid-style">
                        <p className="option-text-style">Vehicle Bookings</p>
                        <button className="option-btn-style" onClick={handleVehicleBooking}>Go to options</button>
                    </div>
                    <div className="accessories options-div grid-style">
                        <p className="option-text-style">Accessories</p>
                        <button className="option-btn-style" onClick={handleAccessories}>Go to options</button>

                    </div>
                    <div className="service-booking-options-div grid-style">
                        <p className="option-text-style">Service Bookings</p>
                        <button className="option-btn-style" onClick={handleServiceBookings}>Go to options</button>

                    </div>
                    <div className="vehicles-options-div grid-style">
                        <p className="option-text-style">Vehicles</p>
                        <button className="option-btn-style" onClick={handleVehicles}>Go to options</button>

                    </div>
                    <div className="customers-options-div grid-style">
                        <p className="option-text-style">Customers</p>
                        <button className="option-btn-style" onClick={handleCustomers}>Go to options</button>

                    </div>
                    <div className="employee-options-div grid-style">
                        <p className="option-text-style">Employee</p>
                        <button className="option-btn-style" onClick={handleEmployee}>Go to options</button>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EmpHomePage
