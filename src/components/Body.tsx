import React, { FormEvent, useState } from 'react';
import img from '../images/bg-image.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type User = {
  userName: string,
  password: string
}

const Body = () => {
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
    console.log(details);
    axios.post(`${process.env.REACT_APP_URL}/customer/login`, details)
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