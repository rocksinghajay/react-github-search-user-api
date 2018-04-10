import React from 'react';
import {Link} from "react-router";
class Followers extends React.Component{
    constructor() {
        super();
        this.state = {};
        
    }
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
        .then(response => response.json())
        .then(
            followers => {
                this.setState({
                   followers : followers
                });
            }
        );
    }
    render(){
        if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>
            }
        return(
            <div className="followers-page">
            <h2>Followers of {this.props.params.username}</h2>
    <ul>
        {this.state.followers.map(
             (user, index) => {
                return (
                    <div className="user-info" key={index}>
               <span> <Link to="/" style={{fontWeight:"bold",padding:"10px",fontSize:"20px"}}>Home</Link></span><br /><br/>
                    
                <Link className="user-info__text" to={`/newUser/${user.login}`} ><br />
                    <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                    <h2 className="user-info__title">{user.login} </h2><br /> <br /> <br />
                </Link>
               <span> <Link onClick={() => window.open(user.html_url)} style={{fontWeight:"bold",padding:"10px",fontSize:"20px",cursor:"pointer"}}>Go to github</Link></span><br /><br/>
                
            </div>
                )
            }
        )}
    </ul>
          </div>
        ) 
    }
} 
export default Followers;