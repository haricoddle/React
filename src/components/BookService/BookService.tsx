import React, { useState } from 'react'
import Footer from '../Footer';
import Header from '../Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './BookService.css';

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(details);
    axios.post(`${process.env.REACT_APP_URL}/service/booking`, details, {
      headers: {
          authorization: `bearer ${localStorage.getItem('token')}`
      }
  })
      .then((res: any) => {
        console.log(res)
        if (res.status === 200) {
          if (messageArea) {
            messageArea.innerHTML = '';
            messageArea.insertAdjacentHTML('afterbegin', 'Booking is successful')
          }
        } else if (messageArea) {
            messageArea.innerHTML = '';
            messageArea.insertAdjacentHTML('afterbegin', 'Booking was un-successful')
          }
      })
      .catch(error => console.log(error));
  }

  const messageArea = document.getElementById('message-area');

  return (
    <>
      <Header />
      <i className="fa-solid fa-cart-shopping" onClick={handleCart} onKeyDown={handleCart}></i>
      <button className='logout-btn' onClick={handleLogout}>Logout</button>
      <div className='booking-div'>
        <form className='service-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date">Choose a date :- </label>
            <input type="date" name='date' id='date' onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="modelName">Vehicle Model :- </label>
            <input type="text" name='modelName' id='modelName' onChange={handleChange} />
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