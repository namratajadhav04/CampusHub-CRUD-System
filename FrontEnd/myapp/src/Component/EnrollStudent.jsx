import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function EnrollStudent() {

  const [formData, setFormData] = useState({
    enrollID:'',
    studname : '',
    email : '',
    password : '',
    mobile : '',
    branch : '',
    age : '',
    gender : '',
    address : '',
    img : ''
  })

  const navigate = useNavigate()
  const apiUrl = "http://localhost:5000/addstudent"

  function handleChange(e)
  {
      setFormData({...formData,[e.target.name]:e.target.value})
  }
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    try{
      axios.post(apiUrl,formData).then((res)=>{
      console.log(res.data)
      setFormData(res.data)
      alert("Student added successfully....")
      navigate('/allstudent')
      })
    }
    catch(error)
      {
        console.log(error)
      }
  }

  return (
    <>
     <div className="container mt-5">
  <h2 className="text-center mb-4">Student Registration Form</h2>
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-5">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Enrollment ID</label>
          <input
            type="text"
            name="enrollID"
            className="form-control"
            placeholder='Enter Enrollment ID'
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="studname"
            className="form-control"
            placeholder='Enter name'
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder='Enter email'
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder='Enter password'
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input
            type="number"
            name="mobile"
            className="form-control"
            placeholder='Enter mobile no'
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Branch</label>
          <input
            type="text"
            name="branch"
            className="form-control"
            placeholder='Enter branch'
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            placeholder='Enter age'
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            name="gender"
            className="form-select"
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            name="address"
            className="form-control"
            placeholder='Enter address'
            rows="3"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Photo</label>
          <textarea
            name="img"
            className="form-control"
            placeholder='Enter img link'
            rows="1"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default EnrollStudent