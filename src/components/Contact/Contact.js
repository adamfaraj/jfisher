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
                    <h3>Film/TV Agent: Kent Ochse</h3>
                    <h4>Gersh</h4>
                    <p><a href="mailto:Kochse@gersh.com?cc=jourdainfisher@gmail.com" target="_blank" rel="noopener noreferrer">Kochse@gersh.com</a></p>
                    
                    <h3>PA Agent: Adam Radler</h3>
                    <h4>Gersh</h4>
                    <p><a href="mailto:ARadler@gersh.com?cc=jourdainfisher@gmail.com" target="_blank" rel="noopener noreferrer">ARadler@gersh.com</a></p>
                   
                    <h3>College Agent: Hayden Spaeth</h3>
                    <h4>The College Agency</h4>
                    <p><a href="mailto:Hayden@thecollegeagency.com?cc=jourdainfisher@gmail.com" target="_blank" rel="noopener noreferrer">Hayden@thecollegeagency.com</a></p>
                    
                    

                    <div className="social-media__container">
                        <a href="https://www.facebook.com/Jfishercomedy/" target="_blank" rel="noopener noreferrer" className="facebook social__desktop"><i className="fab fa-facebook-f"></i></a>
                        <a href="fb://page/81151223691" target="_blank" rel="noopener noreferrer" className="facebook social__mobile"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/jfishercomedy/" target="_blank" rel="noopener noreferrer" className=" social__desktop"><i className="fab fa-instagram"></i></a>
                        <a href="instagram://user?username=jfishercomedy" target="_blank" rel="noopener noreferrer" className="social__mobile"><i className="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/jfishercomedy?lang=en" target="_blank" rel="noopener noreferrer" className=" social__desktop"><i className="fab fa-twitter"></i></a>
                        <a href="twitter://user?screen_name=jfishercomedy" target="_blank" rel="noopener noreferrer" className="social__mobile"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;