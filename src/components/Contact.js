import './App.css';
import React from 'react';

const divStyle = {
    color:'white'
};

class Contact extends React.Component {
    
    render() {
        return (
            <div style={divStyle}>
                <h2>About Page</h2>
                <main>
                    <p>This section contains contact information...</p>
                </main>
            </div>
        )
    }
}

export default Contact;