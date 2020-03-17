import React from "react";
import Header from "./Header";
import Hero from "./Hero";



class Home extends React.Component{
    render(){
        return (
           <div>
               <Header />
               <Hero />
           </div>
        )
    }
}

export default Home;