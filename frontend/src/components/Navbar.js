import React   from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import UserDetails from './UserDetails';

const Navbar = (props) => {

let history = useHistory();


  const handallogout =()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    history.push('/login')
  }
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  
    <Link className="navbar-brand" to="/home">Login System </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/home" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/home">Action</Link></li>
            <li><Link className="dropdown-item" to="/home">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/home">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to='/'>{"first"}</Link>
        </li>
      </ul>
      
   
   {!localStorage.getItem('token') ? (
    <form className='d-flex'>
      <Link className='btn btn-primary mx-1' to="/login" role='button' >Login</Link>
      <Link className='btn btn-primary mx-1' to="/signup" role='button' >Signup</Link>
    </form> )
    : (
    <>
    <UserDetails/>
    <button className='btn btn-primary mx-1'  onClick={handallogout}>Log Out</button>
    </>
    )
   }

    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar

