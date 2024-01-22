import React, { FormEvent, useState } from 'react';
import img from '../../images/bg-image.jpg';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import './EmpLogin.css'
import { employeeloginAPI } from '../../API/EmpSide';
import Modal from '../Modal/Modal';

type User = {
    userName: string,
    password: string
}

const EmpLogin = () => {
    const Navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');


    const [apiError, setApiError] = useState<boolean>(false);

    const [details, setDetails] = useState<User>({
        userName: '',
        password: '',
    });

    const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const res = await employeeloginAPI(details);
            localStorage.setItem('token', res.data.token);
            Navigate('/empHome')
        } catch (error: any) {
            setErrorMessage(error.response.data.error);
            setApiError(true);
        }
    }

    return (

        <>
            {apiError && (
                <Modal onClose={() => setApiError(false)} errorMessage={errorMessage} />
            )}
            <div className='body-div'>
                <figure>
                    <img src={img} alt="background" />
                </figure>

                <div className='emplogin-div'>
                    <form onSubmit={handleLogin}>


                        <label htmlFor="userName">Username</label>
                        <input type="text" name="userName" id="username" placeholder='Username' onChange={handleDataChange} required />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder='Password' onChange={handleDataChange} required />


                        <button id='login-btn'>LOGIN</button>

                    </form>
                </div>
            </div><Footer />
        </>
    );
}

export default EmpLogin;