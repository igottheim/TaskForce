import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SignUp from "./Signup";
import { useSelector, useDispatch } from "react-redux";
import { addUsers } from "./userSlice";
import { addRooms } from "./roomSlice";



function App() {
  const [count, setCount] = useState(0);
  const [currentUser, setcurrentUser] = useState(null)
  const [rooms, setRooms] = useState([])
  const [users, setUsers] = useState([])

 

  const dispatch = useDispatch();


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setcurrentUser(user));
      }
    });
  }, []);




  useEffect(()=>{
    fetch('/rooms')
    .then(r=> r.json())
    .then((data) => dispatch(addRooms(data)))
    }
    ,[])


  useEffect(()=>{
    fetch('/users')
    .then(r=> r.json())
    .then((data) => dispatch(addUsers(data)))
    }
    ,[])


  

  function setUser(user)
  {

    setcurrentUser(user)

  }


  function setcurrentUser1(e)
  {
    setcurrentUser(null)
  
  }

  function setUser1(e)
  {
    setcurrentUser(e)
  }

  return (
    <BrowserRouter>
      <div className="App">
      <NavBar user={currentUser} setUser={setUser} />
      
      <main>
        {currentUser ? (
          <Switch>
            <Route exact path="/me">
              <h1 user = {currentUser} ></h1>
            </Route>
            <Route path="/rooms">
            <Home user = {currentUser} rooms = {rooms} users = {users}></Home>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <LoginForm setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    
      </div>
    </BrowserRouter>
  );
}

export default App;