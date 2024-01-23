import React, { useEffect, useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import './EmpCustomer.css';
import { deleteCustomerAPI, showCustomerAPI } from '../../../API/EmpSide';
import Modal from '../../Modal/Modal';

const EmpCustomer = () => {

  const [customerData, setCustomerData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await showCustomerAPI();
        setCustomerData(res.data.data);
      } catch (error: any) {
        setErrorMessage(error.response.data.error);
        setApiError(true);
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [])

  async function handleDeleteCustomer(id: React.MouseEventHandler<HTMLButtonElement>) {
    try {
      const res = await deleteCustomerAPI({ id });
      if (res) {
        setStatus(!status);
        alert('Customer is deleted');
      }
    } catch (error: any) {
      setErrorMessage(error.response.data.error);
      setApiError(true);
    }
  }

  return (
    <>
      <EmpHeader />
      {apiError && (
        <Modal onClose={() => setApiError(false)} errorMessage={errorMessage} />
      )}
      <div className='customer-container background-image-style'>
        <div className='show-customer-container'>
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