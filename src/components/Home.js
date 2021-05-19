import './../App.css';
import React from 'react';

const divStyle = {
    color:'black'
};

class Home extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <h2>Home Page</h2>
                <main>
                    <p>This is the homepage for now</p>
                </main>
            </div>
        )
    }

}

export default Home;