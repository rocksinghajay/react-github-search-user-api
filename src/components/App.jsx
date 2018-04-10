import React from 'react';
import { Link } from 'react-router';
class App extends React.Component {
    render() {
        return (
            <div className="main-app">
                <header className="main-header">
                    <h1><Link to="/">Github API</Link></h1>
                </header><br/><br/>
                <main className="main-content">
                    {this.props.children}
                </main>
            </div>
        );
    }
}
export default App;
