import React, { FormEvent, useState } from 'react';
import img from './bg-image.jpg'
import { useNavigate } from 'react-router-dom';
import HomePage from './homepage';

const Header = () => {
  return (
    <div>
      <header>
        <div className='header-div'>
          <div className='title-div'>
            <p>THE MOTOR CORP</p>
          </div>
          <div className='services-div p-style'>
            <p>MOTORCYCLES</p>
            <p>ACCESSORIES</p>
          </div>
          <div className='users-div p-style'>
            <p>BOOK NOW</p>
            <p>SIGNUP</p>
          </div>
        </div>
      </header>
    </div>
  )
}

const Body = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // eslint-disable-next-line react/destructuring-assignment
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const body = { username, password };
  const navigate = useNavigate(); // Use useNavigate hook to handle navigation

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch('http://localhost:3001/employee/empLogin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 200) {
          setLoggedIn(true);
          navigate('/Homepage');
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className='body-div'>
        {isLoggedIn ? (
          <HomePage />
        ) : (
          <>
            <figure>
              <img src={img} alt="background" />
              <p className='caption-p'>START YOUR <br /> RIDE WITH US....</p>
            </figure>

            <div className='login-div'>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" id="username" placeholder='Username' onChange={e => setUsername(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                </div>

                <button id='login-btn'>LOGIN</button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};


const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-div'>
          <div className='logo-div'>
            <p>THE MOTOR CORP</p>
          </div>
          <div className='social-div'>
            <p>Contact Us</p>
            <p>© 2023 The Motor Corp</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export { Header, Body, Footer }