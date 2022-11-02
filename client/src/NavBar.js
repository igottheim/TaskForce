import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import Navbar from 'react-bootstrap/Navbar'


function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Navbar >
      <div >
        {user ? (
            <>
            <Link className = "div2" to="/me">User Information</Link>
            <Link className = "div5" to="/rooms">Rooms</Link>
          <button className = "div1" onClick={handleLogoutClick}>Logout</button>
          
          </>
        ) : (
          <>
          <Link className = "div5" to="/">Home</Link>
          <Link className = "div5" to="/signup">Signup</Link>
            <Link className = "div5" to="/login">Login</Link>
          </>
        )}
      </div>
    </Navbar>
  );
}

export default NavBar;