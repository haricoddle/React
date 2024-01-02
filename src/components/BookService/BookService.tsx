import React, { useState } from 'react'
import './BookService.css';
import Footer from '../Footer';
import Header from '../Header';

type Details = {
  date: string,
  startTime: string,
  issueFaced: string,
}

const BookService = () => {
  const [details, setDetails] = useState<Details>({
    date: '',
    startTime: '',
    issueFaced: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(details);
  }

  return (
    <>
      <Header />
      <div className='booking-div'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date">Choose a date :- </label>
            <input type="date" name='date' id='date' onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="startTime">Choose a time :- </label>
            <input type="time" name='startTime' id = 'startTime' onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="issueFaced">Enter the issue Faced :- </label>
            <input type="text" name='issueFaced' id = 'issueFaced' placeholder='Enter the Issue faced' onChange={handleChange} />
          </div>
          <button>Submit</button>
          <div className='message-area'>{details.date}</div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default BookService