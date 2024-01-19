import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../../HelperFunction/helperFunction';
import './Vehicles.css'
import { AppDispatch } from '../../Redux/Store';
import { setVehicleDetails } from '../../Redux/VehicleSlice';

const Vehicles = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [vehicleData, setVehicleData] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await apiRequest(`${process.env.REACT_APP_URL}/vehicle/allVehicles`, 'get');
                const data = res.data.data;
                setVehicleData(data);
                dispatch(setVehicleDetails(data));
                console.log(res);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    function handleLogout() {
        localStorage.removeItem('token');
        Navigate('/');
    }

    function handleCart() {
        if (localStorage.getItem('token')) {
            Navigate('/cart');
        }
    }

    return (
        <>
            <Header />
            <i className="fa-solid fa-cart-shopping" onClick={handleCart} onKeyDown={handleCart}></i>
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
            <div className='vehicle-container'>
                {loading && <p className='loading-mesg'>Loading....</p>}
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
