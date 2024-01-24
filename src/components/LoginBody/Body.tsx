import React, { FormEvent, useEffect, useState } from 'react';
import img from '../../images/bg-image.jpg';
import { useNavigate } from 'react-router-dom';
import './Body.css';
import { loginAPI } from '../../API/UserSide';
import Modal from '../Modal/Modal';

type User = {
  userName: string,
  password: string
}

const Body = () => {
  const Navigate = useNavigate();
  const [apiError, setApiError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [details, setDetails] = useState<User>({
    userName: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value.trim() })
  }

  function handleNavigate(path: string) {
    Navigate(path)
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      Navigate('/home');
    }
  })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const res = await loginAPI(details);
      localStorage.setItem('token', res.data.token);
      Navigate('/home');
    } catch (err: any) {
      setErrorMessage(err.response.data.error);
      setApiError(true);
    }
  }

  return (

    <div className='body-div'>
      {apiError && (
        <Modal onClose={() => setApiError(false)} errorMessage={errorMessage} />
      )}
      <figure>
        <img src={img} alt="background" />
        <p className='caption-p'>START YOUR <br /> RIDE WITH US....</p>
      </figure>

      <div className='user-login-div'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">Username</label>
            <input type="text" name="userName" id="username" placeholder='Username' onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Password' onChange={handleChange} required />
          </div>

          <button id='login-btn'>LOGIN</button>

          <div id='login-err-mesg' className='err-mesg-style'></div>
        </form>
        <div className='signup-div'>
          <p>Don't have an account? <span className='span' id="signup-span" onClick={() => handleNavigate('/signup')} onKeyDown={() => handleNavigate('/signup')}> Sign up</span></p>
        </div>
        <div>
          <button className='emp-login'>Employee ?<span className='span' onClick={() => handleNavigate('/emplogin')} onKeyDown={() => handleNavigate('/emplogin')}> login</span></button>
        </div>
      </div>
    </div>

  );
};

export default Body;