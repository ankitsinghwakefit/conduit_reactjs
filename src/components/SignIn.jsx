import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import "../App.css";

class Signin extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Hero />
                <div className="form-container">
                <input className="input" type="email" placeholder="Email" />
                <input className="input" type="password" placeholder="Password" />
                <button type="submit" className="button is-success">Log In</button>
                </div>
            </div>
            )
    }
}

export default Signin;