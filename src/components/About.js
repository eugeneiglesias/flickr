import './../App.css';
import React from 'react';

const divStyle = {
    color:'black'
};

class About extends React.Component {
    
    render() {
        return (
            <div style={divStyle}>
                <h1>About Page</h1>
                <main>
                    <p>This section contains information about...</p>
                </main>
            </div>
        )
    }
}

export default About;