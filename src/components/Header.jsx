import React from "react";
import {Link} from "react-router-dom";



class Header extends React.Component{
    render(){
        return (
             
                <nav class="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <Link to="/" className="navbar-item" href="https://bulma.io"> InstaPost </Link>
                

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" />
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
        <Link to="/" className="button" >
            <strong>Home</strong>
          </Link>
          <Link to="/Signup" className="button is-primary" >
            <strong>Sign up</strong>
          </Link>
          <Link to="/Signin" className="button is-light" >
            Log in
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
             
            )
    }
}

export default Header;