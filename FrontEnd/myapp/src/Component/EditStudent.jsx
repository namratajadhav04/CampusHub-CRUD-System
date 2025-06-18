import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

function EditStudent() {

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

  const {enrollID} = useParams()
  const navigate = useNavigate()
  const apiUrl = `http://localhost:5000/getStudentbyId/${enrollID}`
  const apiUrl1 = `http://localhost:5000/updatestudent/${enrollID}`

  console.log("enrollID from URL:", enrollID);
  function handleChange(e)
  {
      setFormData({...formData,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    fetchStudent()
  },[enrollID])
  
  const fetchStudent = () => {
    if (enrollID) {
      axios.get(apiUrl)

        .then((res) => {
          setFormData(res.data.u); // Auto-fills the form
        })
        .catch((err) => {
          console.log("Error fetching student data:", err);

        });
    } else {
      console.log("enrollID is missing");
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.put(`${apiUrl1}`,formData).then((res)=>{
      alert("Student updated successfully")
      navigate('allstudent')
    }).catch((err)=>{
      console.log(err)
    })
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
            value={formData.enrollID}
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
            value={formData.studname}
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
            value={formData.email}
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
            value={formData.password}
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
            value={formData.mobile}
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
            value={formData.branch}
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
            value={formData.age}
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
            value={formData.gender}
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
            value={formData.address}
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
            value={formData.img}
            className="form-control"
            placeholder='Enter img link'
            rows="1"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Update Student
        </button>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default EditStudent