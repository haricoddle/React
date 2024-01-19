import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import './Cart.css'
import { RootState } from '../../Redux/Store';
import { apiRequest } from '../../HelperFunction/helperFunction';

const Cart = () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);


  const customerId = useSelector((state: RootState) => state.user.id);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
      const res = await apiRequest(`${process.env.REACT_APP_URL}/cart/showCart`,'post', { customerId });
      const data = res.data.data;
      setCartData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleLogout() {
    handleAuth('/')
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

function handleAuth(arg0: string) {
  throw new Error('Function not implemented.');
}
