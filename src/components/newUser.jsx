import React from 'react';
import { Link } from 'react-router';
import Followers from './Followers';
class newUser extends React.Component {
    constructor() {
        super();
        this.state = {};
        
    }
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
    }
    renderStat(stat) {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                </Link>
            </li>
        );
    }
   
    render() {
        if (!this.state.user) {
            return (<div className="user-page">LOADING...</div>);
        }
        const user = this.state.user;
        const stats = [
            {
                name: 'Public Repos',
                value: user.public_repos,
                url: `/newUser/${this.props.params.username}/repos`
            },
            {
                name: 'Followers',
                value: user.followers,
                url: `/newUser/${this.props.params.username}/followers`
            },
            {
                name: 'Following',
                value: user.following,
                url: `/newUser/${this.props.params.username}/following`
            }
           
        ];
        return (
            <div className="user-page">
                <div className="user-info">
               <span> <Link to="/" style={{fontWeight:"bold",padding:"10px",fontSize:"20px"}}>Home</Link></span><br /><br/>
               <br /><br/>
                    <Link className="user-info__text" to={`/user/${user.login}`}>
                        <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h1 className="user-info__title">{user.login} @{user.name}</h1>
                        <h4 className="user-info__bio">{user.bio}</h4>
                        <h4 className="user-info__bio">LOCATION: {user.location}</h4>
                        <p className="user-info__bio">BLOG: {user.blog}</p>
                    </Link>
               <span> <Link onClick={() => window.open(user.html_url)} style={{fontWeight:"bold",padding:"10px",fontSize:"20px",cursor:"pointer"}}>Go to github</Link></span><br /><br/>
                    <ul className="user-info__stats">
                        {stats.map(this.renderStat)}
                    </ul>
                </div>
                <hr />
                {this.props.children}

            </div>
        );
    }
};
export default newUser;
