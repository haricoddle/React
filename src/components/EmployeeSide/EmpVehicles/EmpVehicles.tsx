import React, { useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import './EmpVehicles.css'
import { addVehicleAPI } from '../../../API/EmpSide';
import Modal from '../../Modal/Modal';

const EmpVehicles = () => {

  const [error, setError] = useState<boolean>(false);

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
      const res = await addVehicleAPI(details);
      if (res) {
        alert('Vehicle added successfully');
      }
    } catch (error) {
      setError(true);
    }
  }

  return (
    <>
      <EmpHeader />
      {error && (
        <Modal />
      )}
      <div className='emp-vehicle-container background-image-style'>
        <div className='add-vehicle-container'>
          <form>
            <label htmlFor="typeId">Type id</label>
            <input type="text" name='typeId' placeholder='Type id' onChange={handleChange} required />

            <label htmlFor="modelName">Model name</label>
            <input type="text" name='modelName' placeholder='Model name' onChange={handleChange} required />

            <label htmlFor="cc">CC</label>
            <input type="text" name='cc' placeholder='cc' onChange={handleChange} required />

            <label htmlFor="price">Price</label>
            <input type="text" name="price" placeholder='Price' onChange={handleChange} required />

            <label htmlFor="colorId">Color Id</label>
            <input type="text" name="colorId" placeholder='Color Id' onChange={handleChange} required />

          </form>
          <button onClick={handleAdd}>Add a vehicle</button>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default EmpVehicles