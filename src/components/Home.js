import './../App.css';
import React from 'react';

const divStyle = {
    color:'black'
};

class Home extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <h1>Home Page</h1>
                <main>
                    <p>This is the homepage for now</p>
                </main>
            </div>
        )
    }

}

export default Home;