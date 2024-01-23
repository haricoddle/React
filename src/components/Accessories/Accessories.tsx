import React, { useEffect, useState } from 'react'
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import './Accessories.css'
import Footer from '../Footer';
import { addToCartAPI, showVehicleAPI } from '../../API/UserSide';
import Modal from '../Modal/Modal';

const Accessories = () => {
  const Navigate = useNavigate();

  const [accessoriesData, setAccessoriesData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');


  function handleLogout() {
    localStorage.removeItem('token');
    if (localStorage.length === 0) {
      Navigate('/');
    }
  }

  function handleNavigate(path: string) {
    Navigate(path)
  }

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await showVehicleAPI();
        setAccessoriesData(res.data.data);
      } catch (error: any) {
        setErrorMessage(error.response.data.error);
        setApiError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  async function handleAddToCart(productId: string) {
    try {
      const res = await addToCartAPI({ productId });
      alert(res.data.message)
    } catch (error: any) {
      setErrorMessage(error.response.data.error);
      console.log(error);
      setApiError(true)
    }
  }
  return (
    <>
      <Header />
      {apiError && (
        <Modal onClose={() => setApiError(false)} errorMessage={errorMessage} />
      )}
      <i className="fa-solid fa-cart-shopping" onClick={() => handleNavigate('/cart')} onKeyDown={() => handleNavigate('/cart')}></i>
      <button className='logout-btn' onClick={handleLogout}>Log out</button>
      <div className="accessories-container" id='container'>
        {loading && <p className='loading-mesg'>Loading....</p>}
        {accessoriesData.map((data: any) => (
          <div key={data?.id} className='accessory-items'>
            <img src={`http://localhost:3001/profile/${data.image_url}`} alt="Accessories" />
            <p> Part name :- {data.name}</p>
            <p> Price :- {data.price}</p>
            <p> Stock :- {data.stock}</p>
            <button onClick={() => handleAddToCart(data.id)}>Add to cart</button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Accessories