import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Search from './components/Search';
import User from './components/User';
import newUser from './components/newUser';
import Followers from './components/Followers';
import Following from './components/Following';
import Repos from './components/Repos';
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={User}/>
            <Route path="newUser/:username" component={newUser}/>
            <Route path="/" component={newUser}>
            <IndexRoute component={newUser} />
            <Route path="newUser/:username/followers" component={Followers}/>
            <Route path="newUser/:username/following" component={Following}/>
            <Route path="newUser/:username/repos" component={Repos}/>
        </Route>
        </Route>
    </Router>
);
ReactDOM.render(routes, document.getElementById('root'));
