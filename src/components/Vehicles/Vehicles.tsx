import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Vehicles.css'
import { AppDispatch } from '../../Redux/Store';
import { setVehicleDetails } from '../../Redux/VehicleSlice';
import { showVehiclesAPI } from '../../API/UserSide';
import Modal from '../Modal/Modal';

const Vehicles = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [apiError, setApiError] = useState<boolean>(false);


    const [vehicleData, setVehicleData] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await showVehiclesAPI();
                const data = res.data.data;
                setVehicleData(data);
                dispatch(setVehicleDetails(data));
            } catch (error) {
                setApiError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleLogout() {
        localStorage.removeItem('token');
        Navigate('/');
    }

    function handleCart(path: string) {
        if (localStorage.getItem('token')) {
            Navigate(path);
        }
    }

    return (
        <>
            <Header />
            {apiError && (
                <Modal onClose={() => setApiError(false)} />
            )}
            <i className="fa-solid fa-cart-shopping" onClick={() => handleCart('/cart')} onKeyDown={() => handleCart('/cart')}></i>
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
