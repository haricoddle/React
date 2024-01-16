import React, { FormEvent, useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import './Employee.css';
import { apiRequest } from '../../../HelperFunction/helperFunction';

type User = {
  deptId: string,
  name: string,
  dob: string,
  phone: string,
  mail: string,
  hireDate: string,
  salary: string
}

const Employee = () => {

  const [details, setDetails] = useState<User>({
    deptId: '',
    name: '',
    dob: '',
    phone: '',
    mail: '',
    hireDate: '',
    salary: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  async function handleAdd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const res = await apiRequest(`${process.env.REACT_APP_URL}/employee/register`,'post', details);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <EmpHeader />
      <div className='employee-container background-image-style'>
        <div className='add-employee-container'>
          <form className='add-emp-form' onSubmit={handleAdd}>

            <div>
              <label htmlFor="deptId">Department ID</label>
              <input type="text" name="deptId" placeholder='Dept ID' onChange={handleChange} required/>
            </div>

            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder='Name' onChange={handleChange} required/>
            </div>

            <div>
              <label htmlFor="dob">D.O.B</label>
              <input type="date" name="dob" onChange={handleChange} required/>
            </div>


            <div>
              <label htmlFor="phone">Phone No</label>
              <input type="text" name="phone" placeholder='Phone No' onChange={handleChange} required/>

            </div>

            <div>
              <label htmlFor="mail">E-mail Id</label>
              <input type="text" name="mail" placeholder='e-mail' onChange={handleChange} required/>
            </div>

            <div>
              <label htmlFor="hireDate">Hire date</label>
              <input type="date" name="hireDate" onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="salary">Salary</label>
              <input type="text" name="salary" placeholder='salary' onChange={handleChange} required/>
            </div>
            <button >Add a employee</button>

          </form>
        </div>

      </div><Footer />
    </>
  )
}

export default Employee