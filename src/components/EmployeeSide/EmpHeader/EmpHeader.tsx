import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmpHeader = () => {
  const Navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem('token');
    Navigate('/');
  }

  function handlehome() {
    if(localStorage.getItem('token')){
      Navigate('/empHome')
    }
  }

  return (
    <header className="emp-header">
      <p onClick={handlehome} onKeyDown={handlehome}>THE MOTOR CORP</p>
      <button className='logout-btn' onClick={handleLogout}>Logout</button>
    </header>
  )
}

export default EmpHeader