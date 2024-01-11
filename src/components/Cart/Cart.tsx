import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
  const Navigate = useNavigate();
  const customerId = useSelector((state: any) => state.user.id);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_URL}/cart/showCart`, { customerId })
      .then((res) => {
        const data = res.data.data;
        setCartData(data);
        console.log(cartData);
        console.log(customerId);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleLogout() {
    localStorage.removeItem('token');
    Navigate('/');
  }

  function handleAddItems() {
    Navigate('/accessories')
  }

  return (
    <>
      <Header />
      <button className='logout-btn' onClick={handleLogout}>Logout</button>
      <h2 className='heading'>--Cart--</h2>
      <div className='cart-container'>
        {cartData.length === 0 ?
          (
            <>
              <div className='cart-empty-mesg'>No Items in the cart</div>
              <button className='add-items-button' onClick={handleAddItems}>Add items to the Cart</button>
            </>
          ) : (
            <div className='cart-items-div'>
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