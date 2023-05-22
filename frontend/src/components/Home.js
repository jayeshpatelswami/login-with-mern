import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'



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
    

     <div className="container">
        <h1>Welcome Home </h1>
        </div> 
    </>
  )
}

export default Home
