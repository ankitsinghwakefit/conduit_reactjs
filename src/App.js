import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from './components/Home';
import Post from "./components/Post";
import Tag from "./components/Tag";
import Articles from "./components/articles/Articles";


class App extends React.Component{
  render(){
      return (
        <div className="App">
           <Route path="/" exact component={Home} />
           <Route path="/header" component={Header} />
           <Route path="/main" component={Main} />
           <Route path="/footer" component={Footer} />
           <Route path="/signup" component={SignUp} />
           <Route path="/signin" component={SignIn} />
           <Route path="/article/:slug" component={Articles} />
           <div className="main-flex-box">
             <Post />
             <Tag />
           </div>
       </div>
     )
  }
}

export default App;
