import React from 'react';

import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="contact__wrapper" id="contact">
                <div className="contact__title">
                    <h1>
                        Contact
                    </h1>
                </div>
                <div className="contact__info">
                    <h3>
                        Manager: David Kimowitz
                        <p><a href="mailto:David@chentertainment.com?cc=jourdainfisher@gmail.com" target="_blank">David@chentertainment.com</a></p>
                    </h3>
                    <h3>
                        PA Agent: Adam Radler Gersh
                        <p><a href="mailto:ARadler@gersh.com?cc=jourdainfisher@gmail.com" target="_blank">ARadler@gersh.com</a></p>
                    </h3>
                    <h3>
                        College Agent: Hayden Spaeth at The College Agency
                        <p><a href="mailto:Hayden@thecollegeagency.com?cc=jourdainfisher@gmail.com" target="_blank">Hayden@thecollegeagency.com</a></p>
                    </h3>
                </div>
            </div>
        )
    }
}

export default Contact;