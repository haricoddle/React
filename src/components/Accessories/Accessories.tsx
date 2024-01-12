import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Accessories.css'

const Accessories = () => {
  const Navigate = useNavigate();

  const customerId = useSelector((state: any) => state.user.id);

  const [accessoriesData, setAccessoriesData] = useState([]);

  function handleLogout() {
    localStorage.removeItem('token');
    if (localStorage.length === 0) {
      Navigate('/');
    }
  }

  function handlecart() {
    Navigate('/cart');
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/parts/showAll`,{
      headers: { 
        authorization: `bearer ${localStorage.getItem('token')}` 
      }
    })
      .then((res) => {
        const data = res.data.data;
        setAccessoriesData(data);
      })
      .catch((error) => {
        console.log(error); 
      });
  }, []);

  function handleAddToCart(productId: string) {
    console.log(productId);
    axios.post(`${process.env.REACT_APP_URL}/cart/addToCart`, { customerId, productId }, {
      headers: { 
        authorization: `bearer ${localStorage.getItem('token')}` 
      }
    })
      .then((res) => {
        console.log(res);
        alert('Item has been added to cart');
      })
      .catch(error => console.log(error));
  }
  return (
    <>
      <Header />
      <i className="fa-solid fa-cart-shopping" onClick={handlecart} onKeyDown={handlecart}></i>
      <button className='logout-btn' onClick={handleLogout}>Log out</button>
      <div className="accessories-container" id='container'>
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
    </>
  )
}

export default Accessories