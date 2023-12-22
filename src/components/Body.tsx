import React, { FormEvent, useState } from 'react';
import img from '../images/bg-image.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Body = () => {
  const Navigate = useNavigate();

  const [userName, setUserName]= useState<string>('');
  const [password, setPassword] = useState<string>('');

  const body = { userName, password };

  function handleSignup() {
    console.log('signup');
    Navigate('/signup')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    axios.post(`${process.env.REACT_APP_URL}/employee/empLogin`, body)
    .then((res) => {
      console.log(res.data.token);
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        Navigate('/home')
      }
  })
    .catch(error => console.log(error));
  }

  return (

    <div className='body-div'>
      <figure>
        <img src={img} alt="background" />
        <p className='caption-p'>START YOUR <br /> RIDE WITH US....</p>
      </figure>

      <div className='login-div'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder='Username' onChange={ (e) => setUserName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button id='login-btn'>LOGIN</button>
        </form>
        <div className='signup-div'>
        <p>Don't have an account? <span className='signup-span' id="signup-span" onKeyDown={handleSignup}> Sign up</span></p>
      </div>
      </div>
    </div>

  );
};

export default Body;