import React, { useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import './EmpCustomer.css';
import { apiRequest } from '../../../HelperFunction/helperFunction';

const EmpCustomer = () => {

  const [customerData, setCustomerData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);


  async function handleAddCustomer() {
    setLoading(true);
    try {
      const res = await apiRequest(`${process.env.REACT_APP_URL}/customer/showDetails`,'get');
      setCustomerData(res.data.data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleteCustomer(id:React.MouseEventHandler<HTMLButtonElement> ) {
    try {
      const res = await apiRequest(`${process.env.REACT_APP_URL}/customer/delete`,'post', {id});
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <EmpHeader />
      <div className='customer-container background-image-style'>
        <div className='show-customer-container'>
          <button onClick={handleAddCustomer}>Show all customer</button>
          <div className='cust-details'>
            {loading && <p className='loading-mesg'>Loading....</p>}
            {customerData.map((data: any) => (
              <div key={data.id} className='cust-details-div'>
                <p>Customer id:- {data.id}</p>
                <p>Name:- {data.name}</p>
                <p>Phone no:- {data.phone}</p>
                <p>e-mail:- {data.email}</p>
                <p>D.O.B:- {data.dob.split('T')[0]}</p>
                <p>Created Date:- {data.created_date.split('T')[0]}</p>
                <div>
                  <button onClick={() => handleDeleteCustomer(data.id)} className='delete-customer-btn'>Delete a User</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      </>
  )
}

export default EmpCustomer