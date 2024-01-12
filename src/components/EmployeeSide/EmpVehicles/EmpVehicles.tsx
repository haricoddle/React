import React, { useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import axios from 'axios';
import './EmpVehicles.css'

const EmpVehicles = () => {

  const [details, setDetails] = useState({
    typeId: '',
    modelName: '',
    cc: '',
    price: '',
    colorId: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  function handleAdd() {
    axios.post(`${process.env.REACT_APP_URL}/vehicle/addVehicle`, details, {
      headers: {
          authorization: `bearer ${localStorage.getItem('token')}`
      }
  })
  .then((res) => {
    console.log(res);
  })
  .catch(error => console.log(error));
  console.log(details)
  }

  return (
    <>
      <EmpHeader />
      <div className='vehicle-container'>
        <div className='add-vehicle-container'>
          <form>
            <label htmlFor="typeId">Type id</label>
            <input type="text" name='typeId' placeholder='Type id' onChange={handleChange}/>

            <label htmlFor="modelName">Model name</label>
            <input type="text" name='modelName' placeholder='Model name' onChange={handleChange}/>

            <label htmlFor="cc">CC</label>
            <input type="text" name='cc' placeholder='cc' onChange={handleChange}/>

            <label htmlFor="price">Price</label>
            <input type="text" name="price" placeholder='Price' onChange={handleChange}/>

            <label htmlFor="colorId">Color Id</label>
            <input type="text" name="colorId" placeholder='Color Id' onChange={handleChange}/>

          </form>
          <button onClick={handleAdd}>Add a vehicle</button>
        </div>

      </div><Footer></Footer></>
  )
}

export default EmpVehicles