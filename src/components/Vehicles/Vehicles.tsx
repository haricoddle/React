import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Vehicles.css'
import Header from '../Header';
import Footer from '../Footer';

const Vehicles = () => {
    const [vehicleData, setVehicleData] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/vehicle/allVehicles`)
            .then((res) => {
                const data = res.data.data;
                console.log(res.data.data)
                setVehicleData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    function handleLogout() {
        localStorage.removeItem('token')
    }

    return (
        <>
        <Header />
        <button className='logout-btn' onClick={handleLogout}>Logout</button>
        <div className='vehicle-container'>
            {vehicleData.map((data: any) => (
                <div key={data?.index}>
                    <div key={data.id} className='vehicle-div'>
                        <p>Model : - {data.model_name}</p>
                        <p>CC : -{data.cc}</p>
                        <p>Price (Ex-Showroom) : - {data.price}</p>
                        <img src={`http://localhost:3001/profile/${data.image_url}`} alt="vehicles" className='vehicle-img' />
                        <button> Show more</button>
                    </div>
                </div>
            ))}
        </div>
        <Footer />
        </>
    );
};

export default Vehicles;
