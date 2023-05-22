import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar';


const Home = () => {

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      
    }
    else{
      history.push("/login")
    }
 
  }, [])
  
  return (
    <>
    
    <Navbar />
     <div className="container">
        <h1>Welcome Home </h1>
        </div> 
    </>
  )
}

export default Home
