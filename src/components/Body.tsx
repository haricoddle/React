import React, { FormEvent, useState } from 'react';
import img from '../images/bg-image.jpg';
import { useNavigate } from 'react-router-dom';


const Body = () => {
  const Navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const body = { username, password };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/employee/empLogin`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data.token)
        if (res.status === 200) {
          localStorage.setItem('token', data.token);
          Navigate('/home')
        }
      })
      .catch((err) => console.log(err));
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
            <input type="text" name="username" id="username" placeholder='Username' onChange={e => setUsername(e.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
          </div>

          <button id='login-btn'>LOGIN</button>
        </form>
      </div>
    </div>

  );
};

export default Body;