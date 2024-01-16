import React, { useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import { apiRequest } from '../../../HelperFunction/helperFunction';
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

  async function handleAdd() {
    try {
      const res = await apiRequest(`${process.env.REACT_APP_URL}/vehicle/addVehicle`,'post', details);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <EmpHeader />
      <div className='emp-vehicle-container background-image-style'>
        <div className='add-vehicle-container'>
          <form>
            <label htmlFor="typeId">Type id</label>
            <input type="text" name='typeId' placeholder='Type id' onChange={handleChange} required/>

            <label htmlFor="modelName">Model name</label>
            <input type="text" name='modelName' placeholder='Model name' onChange={handleChange} required/>

            <label htmlFor="cc">CC</label>
            <input type="text" name='cc' placeholder='cc' onChange={handleChange} required/>

            <label htmlFor="price">Price</label>
            <input type="text" name="price" placeholder='Price' onChange={handleChange} required/>

            <label htmlFor="colorId">Color Id</label>
            <input type="text" name="colorId" placeholder='Color Id' onChange={handleChange} required/>

          </form>
          <button onClick={handleAdd}>Add a vehicle</button>
        </div>

      </div><Footer></Footer></>
  )
}

export default EmpVehicles