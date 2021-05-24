import './../App.css';
import React from 'react';

const divStyle = {
    color:'black'
};

class Contact extends React.Component {
    
    render() {
        return (
            <div style={divStyle}>
                <h1>Contact Page</h1>
                <main>
                    <p>This section contains contact information...</p>
                </main>
            </div>
        )
    }
}

export default Contact;