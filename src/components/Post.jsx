import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import "../App.css";
import {Link} from "react-router-dom";


class Post extends React.Component{
    constructor(){
        super()
        this.state = {
            post : null
        }
    }
    componentDidMount(){
        fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0").then(res=>res.json()).then(({articles})=>this.setState({
            post : articles
        }));
    }
    render(){

        return (
            <div className="main-container">
                <div className="main-flex-parent">
                    <div className="main-item-global">
                        <p>Global</p>
                    </div>
                    <div className="main-item-posts">
                        {
                            this.state.post && this.state.post.map(article=>{
                                return <div className="single_article">
                                <div className="article_author">
                                    <div className="thumbnail">
                                        <img
                                            width="40"
                                            height="40"
                                            src={article.author.image}
                                            alt={article.author.username}
                                        />
                                    </div>
                                    <h4>{article.author.username}</h4>
                                </div>
                               <Link to={`/article/${article.slug}`}> <h3>{article.title}</h3></Link>
                                <p>{article.body}</p>
                                
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
            )
    }
}

export default Post;