import React ,{useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const About = () => {
  
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      
    }
    else{
      history.push('/login')
    }
  
    
  }, [])
  

  return (
    <>
  
     <div className="container">
        <h1>Aboute Us</h1>
        </div> 
    </>
  )
}

export default About
