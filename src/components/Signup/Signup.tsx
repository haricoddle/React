import React, { FormEvent, useState } from 'react';
import Footer from '../Footer';
import img from '../../images/bg-image.jpg';
import './Signup.css'
import { createUserAPI } from '../../API/UserSide';
import Modal from '../Modal/Modal';

type User = {
    name: string,
    dob: string,
    phone: number,
    email: string,
    userName: string,
    password: string
}

const Signup = () => {

    const [apiError, setApiError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [details, setDetails] = useState<User>({
        name: '',
        dob: '',
        phone: 0,
        email: '',
        userName: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails({ ...details, [e.target.name]: e.target.value.trim() })
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        console.log(details);
        event.preventDefault();
        try {
            const res = await createUserAPI(details);
            if (res) {
                alert('new user created');
            }
        } catch (error: any) {
            setErrorMessage(error.response.data.error);
            setApiError(true);
        }
    }
    return (
        <div className='signup-div'>
            {apiError && (
                <Modal onClose={() => setApiError(false)} errorMessage={errorMessage} />
            )}
            <figure>
                <img src={img} alt="background" />
                <p className='caption-p'>START YOUR <br /> RIDE WITH US....</p>
            </figure>
            <div className='signup-form'>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder='Name' onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" placeholder='Phone' onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" placeholder='E-mail' onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="dob">D.O.B</label>
                        <input type="date" name="dob" onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="userName">Username</label>
                        <input type="text" name="userName" placeholder='username' onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder='Password' onChange={handleChange} required />
                    </div>

                    <button> Register </button>

                    <div id='signup-err-mesg' className='err-mesg-style'></div>

                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Signup