import React from 'react';
import { Link} from 'react-router';
class User extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        const api = 'https://api.github.com/search/users';
        fetch(`${api}?q=${this.props.params.username}`)
        .then(response => response.json())
        .then(
            result => {
                this.setState({
                    users: result.items
                })
            }
        );
    } 
    render() {
        if (!this.state.users.length) {
            return (<div className="user-page">LOADING...</div>);
        }
        return (
            <div className="user-page">
               { this.state.users.map(
                (user, index) => {
                    return (
                        <div className="user-info" key={index}>
               <span> <Link to="/" style={{fontWeight:"bold",padding:"10px",fontSize:"20px"}}>Home</Link></span><br /><br/>
                    <Link className="user-info__text" to={`/newUser/${user.login}`} ><br />
                        <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h2 className="user-info__title">{user.login}</h2><br /> <br /> <br />
                    </Link>
               <span> <Link onClick={() => window.open(user.html_url)} style={{fontWeight:"bold",padding:"10px",fontSize:"20px",cursor:"pointer"}}>Go to github</Link></span><br /><br/>
                </div>
                    )
                }
            )}
            </div>
        );
    } 
};
export default User;
