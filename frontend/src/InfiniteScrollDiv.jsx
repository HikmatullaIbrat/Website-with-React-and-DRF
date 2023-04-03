import React, { Component } from "react"
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircleFadeLoader } from "react-loaders-kit";
import axios from 'axios';

class InfiniteScrollDiv  extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            next_url: `${process.env.REACT_APP_API_URL}/api/blog/`,
            count:null,
            more_exist:true,
            
        }
        
     
    }
   

    componentDidMount(){
        
        axios.get(this.state.next_url).then(res=>{
            var has_more = false
            if(res.data.next){
                has_more=true
            }
          
            this.setState({
                next_url:res.data.next,
                count:res.data.count,
                posts: res.data.results,
                more_exist:has_more
                
            })
           
            
        })
    }
    fetchData= ()=>{
     
         axios.get(this.state.next_url).then(res=>{
            var has_more = false
            if(res.data.next){
                has_more=true
              
            }
            setTimeout (() =>{
                this.setState({
                    next_url:res.data.next,
                    count:res.data.count,
                    // posts: res.data.results,
                    posts: this.state.posts.concat(res.data.results),
                    more_exist:has_more
                })
            },500);
        })
       
    }
   
    render(){
        let loaderProps = {
            loading: true,
            size: 150,
            duration: 2,
            Text:"Loading",
            colors: ["#99fffe", "#f42e00", "#042549"],
          };
      
     
        return ( 
                
                <InfiniteScroll
                
                dataLength = {this.state.posts.length}
                
                hasMore = {this.state.more_exist}
                loader = {<CircleFadeLoader {...loaderProps} />}
               
                next = {this.fetchData}
               
                
                endMessage ={
                    <p style={{textAlign:'center'}}>
                    <b>You Have seen it all</b>
                    </p>
                }
                refreshFunction={this.fetchData}
                
                >
                    
                    <ul className="list-group">
                        {
                            this.state.posts.map(post=>
                                <li className="list-group-item" key={post.id}>
                                   
                                    
                                    <div className="panel">
                                        <div className="panel-header">
                                            <h3>{post.title}</h3>
                                        </div>
                                        <div className="panel">
                                            <p>{post.month} {post.day}</p>
                                        </div>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                     <img src={post.thumbnail} alt="thumbnail" width='200' height="250" />
                                     </div>

                                </li>
                            )
                        }
                    </ul>
                    
                </InfiniteScroll>
           
        )
    }
}

export default InfiniteScrollDiv;