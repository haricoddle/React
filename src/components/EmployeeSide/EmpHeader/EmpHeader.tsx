import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmpHeader = () => {
const Navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem('token');
        Navigate('/');
    }

  return (
    <header className="emp-header">
        <p>THE MOTOR CORP</p>
        <button className='logout-btn' onClick={handleLogout}>Logout</button>
    </header>
  )
}

export default EmpHeader