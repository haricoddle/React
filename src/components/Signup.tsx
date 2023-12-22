import React, { FormEvent, useState } from 'react';
import Footer from './Footer';
import img from '../images/bg-image.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const Navigate = useNavigate();

    const [details, setDetails] = useState({
        name: '',
        dob: '',
        phone: '',
        email: '',
        userName: '',
        password: '',
    });

    const body = {
        name: details.name,
        dob: details.dob,
        phone: details.phone,
        email: details.email,
        userName: details.userName,
        password: details.password,
    }

    const handleChange = (e: any) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        console.log(body);
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_URL}/customer/register`, body)
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    alert('New user Created');
                    Navigate('/')
                }
            })
            .catch(error => console.log(error));
    }
    return (
        <div className='signup-div'>
            <figure>
                <img src={img} alt="background" />
                <p className='caption-p'>START YOUR <br /> RIDE WITH US....</p>
            </figure>
            <div className='signup-form'>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder='Name' onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" placeholder='Phone' onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" placeholder='E-mail' onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="dob">D.O.B</label>
                        <input type="date" name="dob" onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="userName">Username</label>
                        <input type="text" name="userName" placeholder='username' onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder='Password' onChange={handleChange} />
                    </div>

                    <button> Register </button>

                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Signup