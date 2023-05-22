import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {



  
  return (
    <>
    <Router>
      
      <Switch>
        <Route exact path="/about" >   <><Navbar /> <About />  </></Route>
        <Route exact path="/login" >   <><Navbar /> <Login />  </></Route>
        <Route exact path="/signup" >  <><Navbar /> <Signup /> </></Route>
        <Route exact path="/home" >    <> < Home />  </></Route>
      </Switch>
    </Router>
    {/* <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/about" > <About /></Route>
        <Route exact path="/login" > <Login /></Route>
        <Route exact path="/signup" > <Signup /></Route>
        <Route exact path="/" >  < Home /> </Route>
      </Switch>
    </Router> */}
    </>
  );
}

export default App;
