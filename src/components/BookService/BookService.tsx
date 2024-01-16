import React, { useState } from 'react'
import Footer from '../Footer';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import './BookService.css';
import { apiRequest } from '../../HelperFunction/helperFunction';

type Details = {
  modelName: string,
  date: string,
  issueFaced: string,
}

const BookService = () => {
  const Navigate = useNavigate();
  const [details, setDetails] = useState<Details>({
    modelName: '',
    date: '',
    issueFaced: '',
  })

  function handleLogout() {
    localStorage.removeItem('token');
    Navigate('/');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function handleCart() {
    Navigate('/cart');
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(details);
    try {
      const res = await apiRequest(`${process.env.REACT_APP_URL}/service/booking`,'post', details);
      console.log(res);
      alert('Booking is successful');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <i className="fa-solid fa-cart-shopping" onClick={handleCart} onKeyDown={handleCart}></i>
      <button className='logout-btn' onClick={handleLogout}>Logout</button>
      <div className='booking-div'>
        <form className='service-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date">Choose a date :- </label>
            <input type="date" name='date' id='date' onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="modelName">Vehicle Model :- </label>
            <input type="text" name='modelName' id='modelName' onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="issueFaced">Enter the issue Faced :- </label>
            <input type="text" name='issueFaced' id='issueFaced' placeholder='Enter the Issue faced' onChange={handleChange} />
          </div>
          <button>Submit</button>
          <div id='message-area' className='message-area'></div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default BookService