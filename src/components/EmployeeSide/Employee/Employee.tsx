import React, { FormEvent, useState } from 'react'
import Footer from '../../Footer'
import EmpHeader from '../EmpHeader/EmpHeader'
import axios from 'axios';
import './Employee.css';

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

function handleAdd (event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
    axios.post(`${process.env.REACT_APP_URL}/employee/register`, details, {
      headers: {
          authorization: `bearer ${localStorage.getItem('token')}`
      }
  })
  .then((res) => {
    console.log(res);
  })
  .catch(error => console.log(error));
  }


  return (
    <>
      <EmpHeader />
      <div className='employee-container background-image-style'>
        <div className='add-employee-container'>
          <form className='add-emp-form' onSubmit={handleAdd}>
            
            <div>
            <label htmlFor="deptId">Department ID</label>
            <input type="text" name="deptId" placeholder='Dept ID' onChange={handleChange}/>
            </div>

           <div>
           <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder='Name' onChange={handleChange}/>
           </div>

            <div>
            <label htmlFor="dob">D.O.B</label>
            <input type="date" name="dob" onChange={handleChange}/>
            </div>


           <div>
           <label htmlFor="phone">Phone No</label>
            <input type="text" name="phone" placeholder='Phone No' onChange={handleChange}/>

           </div>

           <div>
           <label htmlFor="mail">E-mail Id</label>
            <input type="text" name="mail" placeholder='e-mail' onChange={handleChange}/>
           </div>

            <div>
            <label htmlFor="hireDate">Hire date</label>
            <input type="date" name="hireDate" onChange={handleChange}/>
            </div>

            <div>
            <label htmlFor="salary">Salary</label>
            <input type="text" name="salary" placeholder='salary' onChange={handleChange}/>
            </div>
            <button >Add a employee</button>
          
          </form>
        </div>

      </div><Footer />
      </>
  )
}

export default Employee