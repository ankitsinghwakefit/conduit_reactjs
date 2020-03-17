import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import "../App.css";

class Tag extends React.Component{
    constructor(){
        super()
        this.state = {
            tag : null
        }
    }
    componentDidMount(){
        fetch("https://conduit.productionready.io/api/tags").then(res=>res.json()).then(({tags})=>this.setState({
            tag : tags
        }));
    }
    render(){

        return (
            <div className="main-container">
                <div className="main-flex-parent">
                   <div className="main-tag-item">
                    <h1>Tags</h1>
                        <div className="main-item-tags">
                            {
                                this.state.tag && this.state.tag.map(tag=>{
                                    return <a> {tag}</a>;
                                    
                                })
                            }
                        </div>
                   </div>
                </div>
            </div>
            )
    }
}

export default Tag;