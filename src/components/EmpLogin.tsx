import React, { FormEvent, useState } from 'react';
import img from '../images/bg-image.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

const EmpLogin = () => {
    const Navigate = useNavigate();

    const [details, setDetails] = useState({
        userName:String,
        password:String,
    });

    const handleDataChange = (e: any) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_URL}/employee/empLogin`, details)
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    Navigate('/empHome')
                }
            })
            .catch(error => console.log(error));
    }

    return (

        <>
            <div className='body-div'>
                <figure>
                    <img src={img} alt="background" />
                </figure>

                <div className='emplogin-div'>
                    <form onSubmit={handleLogin}>
                        
                           
                            <label htmlFor="userName">Username</label>
                            <input type="text" name="userName" id="username" placeholder='Username' onChange={handleDataChange} />
                        
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder='Password' onChange={handleDataChange} />
                        

                        <button id='login-btn'>LOGIN</button>
                    </form>
                </div>
            </div><Footer />
        </>
    );
}

export default EmpLogin;