import React, { FormEvent, useState } from 'react';
import Footer from './Footer';
import img from '../images/bg-image.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const Navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [dob, setDob] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const body = { name, phone, email, dob, username, password };


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
                        <input type="text" name="name" placeholder='Name' onChange={e => setName(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" placeholder='Phone' onChange={e => setPhone(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" placeholder='E-mail' onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="dob">D.O.B</label>
                        <input type="date" name="dob" onChange={e => setDob(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder='username' onChange={e => setUsername(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button> Register </button>

                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Signup