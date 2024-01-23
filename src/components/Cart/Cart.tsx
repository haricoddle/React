import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import './Cart.css'
import { decrementCartAPI, incrementCartAPI, showCartAPI } from '../../API/UserSide';
import Modal from '../Modal/Modal';

const Cart = () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState<boolean>(false);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await showCartAPI();
        const data = res.data.data;
        setCartData(data);
      } catch (error: any) {
        setErrorMessage(error.response.data.error);
        setApiError(true);
      } finally {
        setLoading(false)
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  function handleLogout() {
    localStorage.removeItem('token');
    Navigate('/')
  }

  function handleNavigate(path: string) {
    Navigate(path)
  }

  async function handleCartDecrement(cartId: string) {
    try {
      const res = await decrementCartAPI({ cartId });
      if (res) {
        setStatus(!status);
      }
    } catch (error: any) {
      setErrorMessage(error.response.data.error);
      setApiError(true);
    }
  }

  async function handleCartIncrement(cartId: string) {
    try {
      const res = await incrementCartAPI({ cartId });
      if (res) {
        setStatus(!status);
      }
    } catch (error: any) {
      setErrorMessage(error.response.data.error);
      setApiError(true);
    }
  }

  return (
    <>
      <Header />
      {apiError && (
        <Modal onClose={() => setApiError(false)} errorMessage={errorMessage} />
      )}
      <button className='logout-btn' onClick={handleLogout}>Logout</button>
      <h2 className='heading'>--Cart--</h2>
      <div className='cart-container'>
        {cartData.length === 0 ?
          (
            <>
              <div className='cart-empty-mesg'>No Items in the cart</div>
              <button className='add-items-button' onClick={() => handleNavigate('/accessories')}>Add items to the Cart</button>
            </>
          ) : (
            <div className='cart-items-div'>
              {loading && <p className='loading-mesg'>Loading....</p>}
              {cartData.map((data: any) => (
                <div key={data?.index}>
                  <div key={data.name} className='cart'>
                    <img src={`http://localhost:3001/profile/${data.image_url}`} alt='product' />
                    <p>{data.name}</p>
                    <p>Price:- {data.price}</p>
                    <div className='qty-div'>
                      <button onClick={() => handleCartDecrement(data.id)}> - </button>
                      <p> Qty:- {data.quantity}</p>
                      <button onClick={() => handleCartIncrement(data.id)}> + </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
      <Footer />
    </>
  )
}

export default Cart
