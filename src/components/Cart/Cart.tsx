import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import './Cart.css'
import { RootState } from '../../Redux/Store';
import { showCartAPI } from '../../API/UserSide';
import Modal from '../Modal/Modal';

const Cart = () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { id } = useSelector((state: RootState) => state.user);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await showCartAPI({ id });
        const data = res.data.data;
        setCartData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false)
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleLogout() {
    localStorage.removeItem('token');
    Navigate('/')
  }

  function handleNavigate(path: string) {
    Navigate(path)
  }

  return (
    <>
      <Header />
      {error && (
        <Modal />
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
                      <button> + </button>
                      <p> Qty:- {data.quantity}</p>
                      <button> - </button>
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
