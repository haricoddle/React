import React, { useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import './EmpAccessories.css'
import { addPartsAPI, updatePartsAPI } from '../../../API/EmpSide';
import Modal from '../../Modal/Modal';

type Items = {
  id: string,
  stock: string
}

type NewItems = {
  accessoryId: string,
  name: string,
  price: string,
  stock: string
}

const EmpAccessories = () => {

  const [apiError, setApiError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [details, setDetails] = useState<NewItems>({
    accessoryId: '',
    name: '',
    price: '',
    stock: '',
  })

  const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value.trim() })
  }

  const [itemDetails, setItemDetails] = useState<Items>({
    id: '',
    stock: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemDetails({ ...itemDetails, [e.target.name]: e.target.value.trim() })
  }

  async function handleAddAccessory() {
    try {
      const res = await addPartsAPI(details);
      if (res) {
        alert('Accessory added successfully');
      }
    } catch (error: any) {
      setErrorMessage(error.response.data.error);
      setApiError(true);
    }
  }


  async function handleEditAccessory() {
    try {
      const res = await updatePartsAPI(itemDetails);
      if (res) {
        alert('Accessory added successfully');
      }
    } catch (error: any) {
      setErrorMessage(error.response.data.error);
      setApiError(true);
    }
    console.log(itemDetails);
  }

  return (
    <>
      <EmpHeader />
      {apiError && (
        <Modal onClose={() => setApiError(false)} errorMessage={errorMessage} />
      )}
      <div className='emp-accessory accessories-container'>

        <div>
          <div className='add-content-area'>
            <p>Add Accessory</p>
            <form className='add-accessory-form'>
              <label htmlFor="accessoryId">Accessory id</label>
              <input type="text" name="accessoryId" placeholder='Accessory Id' onChange={handleItemChange} />

              <label htmlFor="name">Accessory Name*</label>
              <input type="text" name='name' placeholder='Accessory Name' onChange={handleItemChange} required />

              <label htmlFor="price">Price*</label>
              <input type="text" name='price' placeholder='Price' onChange={handleItemChange} required />

              <label htmlFor="stock">Stock Availabele*</label>
              <input type="text" name='stock' placeholder='Stock' onChange={handleItemChange} required />

            </form>
            <button onClick={handleAddAccessory}>Add a Accessory</button>
          </div>
        </div>

        <div>
          <div className='add-content-area'>
            <p>Edit Accessory details</p>
            <form >
              <label htmlFor="id">Id</label>
              <input type="text" name="id" placeholder='ID' onChange={handleChange} />

              <label htmlFor="stock">Stock</label>
              <input type="text" name='stock' placeholder='stock' onChange={handleChange} />
            </form>
            <button onClick={handleEditAccessory}>Edit a Accessory</button>
          </div>
        </div>
      </div><Footer></Footer></>
  )
}

export default EmpAccessories