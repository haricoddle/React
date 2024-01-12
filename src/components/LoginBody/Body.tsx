import React, { FormEvent, useState } from 'react';
import img from '../../images/bg-image.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../Redux/UserSlice';
import './Body.css';

type User = {
  userName: string,
  password: string
}

const Body = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [details, setDetails] = useState<User>({
    userName: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  function handleSignup() {
    Navigate('/signup')
  }

  function handleEmployeeLogin() {
    Navigate('/emplogin')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_URL}/customer/login`, details)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          dispatch(setUserDetails({
            id: res.data.data.id,
            name: res.data.data.name,
            roles: res.data.data.roles,
            userName: res.data.data.username
          }))
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

      <div className='user-login-div'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">Username</label>
            <input type="text" name="userName" id="username" placeholder='Username' onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Password' onChange={handleChange} />
          </div>

          <button id='login-btn'>LOGIN</button>
        </form>
        <div className='signup-div'>
          <p>Don't have an account? <span className='span' id="signup-span" onClick={handleSignup} onKeyDown={handleSignup}> Sign up</span></p>
        </div>
        <div>
          <button className='emp-login'>Employee ?<span className='span' onClick={handleEmployeeLogin} onKeyDown={handleEmployeeLogin}> login</span></button>
        </div>
      </div>
    </div>

  );
};

export default Body;