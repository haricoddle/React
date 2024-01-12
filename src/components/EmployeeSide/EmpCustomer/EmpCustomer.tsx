import React, { useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import axios from 'axios';
import './EmpCustomer.css';

const EmpCustomer = () => {

  const [customerData, setCustomerData] = useState([])

  const [custId, setCustId] = useState({
    id: ''
  })

  function handleAddCustomer() {
    axios.get(`${process.env.REACT_APP_URL}/customer/showDetails`, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        console.log(res);
        setCustomerData(res.data.data);
      })
      .catch(error => console.log(error));
  }

  function handleDeleteCustomer() {
    axios.post(`${process.env.REACT_APP_URL}/customer/delete`, custId, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch(error => console.log(error));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustId({ ...custId, [e.target.name]: e.target.value })
  }


  return (
    <>
      <EmpHeader />
      <div className='customer-container background-image-style'>
        <div className='show-customer-container'>
          <button onClick={handleAddCustomer}>Show all customer</button>
          <div className='cust-details'>
            {customerData.map((data: any) => (
              <div key={data.id} className='cust-details-div'>
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.phone}</p>
                <p>{data.email}</p>
                <p>{data.dob}</p>
                <p>{data.created_date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='delete-customer-container'>
          <div>
          <p className='headings'>Delete a Vehicle</p>
          <label htmlFor="id">Id</label>
          <input type="text" name="id" placeholder='Id' onChange={handleChange}/>
          <button onClick={handleDeleteCustomer}>Delete a customer</button>
          </div>
        </div>
      </div><Footer /></>
  )
}

export default EmpCustomer