import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Header() {

  const [search, setsearch] = useState()
  const {enrollID} = useParams()
  const navigate = useNavigate()


  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">CampusHub</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav  ml-auto">
        <li class="nav-item active">
        <Link class="nav-link" to='home'>Home</Link>
        </li>

        <li class="nav-item active">
        <Link class="nav-link" to='addstudent'>Enroll Student</Link>
        </li>

        <li class="nav-item active">
        <Link class="nav-link" to='allstudent'>Student List</Link>
        </li>

        <li class="nav-item active">
        <Link class="nav-link" to='about'>About</Link>
        </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search"  aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=> navigate(`/search/${enrollID}`)}>Search
          
        </button>
        </form>
        </div>
    </nav>
    </>
  )
}

export default Header