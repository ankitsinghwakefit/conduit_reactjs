import React from "react";
import "../../App.css";
import {Link} from "react-router-dom";

class Articles extends React.Component{
    state = {
        articleinfo : null
    }

    componentDidMount(){
        let {slug} = this.props.match.params || "";
        fetch(`https://conduit.productionready.io/api/articles/${slug}`).then(res=>res.json()).then(({article})=>{
            this.setState({
                articleinfo : article
            })
        });
    }
    render(){
        return (
            <div>
                
    <h3>{this.state.articleinfo && <div className="single_article">
                                <div className="article_author">
                                    <div className="thumbnail">
                                        <img
                                            width="40"
                                            height="40"
                                            src={this.state.articleinfo.author.image}
                                            alt={this.state.articleinfo.author.username}
                                        />
                                    </div>
                                    <h4>{this.state.articleinfo.author.username}</h4>
                                </div>
                               <h3>{this.state.articleinfo.title}</h3>
                                <p>{this.state.articleinfo.body}</p>
                                
                            </div>}</h3>
            </div>
        )
    }
}

export default Articles;