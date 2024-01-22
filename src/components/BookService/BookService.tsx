import React, { useState } from 'react'
import Footer from '../Footer';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import './BookService.css';
import { serviceBookingAPI } from '../../API/UserSide';
import Modal from '../Modal/Modal';

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

  const [apiError, setApiError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function handleNavigate(path: string) {
    Navigate(path)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(details);
    try {
      const res = await serviceBookingAPI(details);
      if (res) {
        alert('Booking is successful');
      }
    } catch (error) {
      setApiError(true);
    }
  }

  return (
    <>
      <Header />
      {apiError && (
        <Modal onClose={() => setApiError(false)} />
      )}
      <i className="fa-solid fa-cart-shopping" onClick={() => handleNavigate('cart')} onKeyDown={() => handleNavigate('cart')}></i>
      <button className='logout-btn' onClick={handleLogout}>Logout</button>
      <div className='booking-div'>
        <form className='service-form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date">Choose a date :- </label>
            <input type="date" name='date' id='date' onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="modelName">Vehicle Model :- </label>
            <input type="text" name='modelName' id='modelName' onChange={handleChange} required />
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