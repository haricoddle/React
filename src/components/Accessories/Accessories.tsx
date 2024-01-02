import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Accessories.css'
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
const Accessories = () => {
  const Navigate = useNavigate();
  const [accessoriesData, setAccessoriesData] = useState([]);

  function handleLogout() {
    localStorage.removeItem('token');
    if(localStorage.length === 0) {
      Navigate('/');
    }
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/parts/showAll`)
    .then((res) => {
      const data = res.data.data;
      setAccessoriesData(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])
  return (
    <>
    <Header/>
    <button className='logout-btn' onClick={handleLogout}>Log out</button>
    <div className="accessories-container">
      {accessoriesData.map((data:any) => (
        <div key={data?.id} className='accessory-items'>
          <img src={`http://localhost:3001/profile/${data.image_url}`} alt="Accessories" />
          <p> Part name :- {data.name}</p>
          <p> Price :- {data.price}</p>
          <p> Stock :- {data.stock}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Accessories