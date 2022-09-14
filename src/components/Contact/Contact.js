import React from 'react';

import './Contact.css';

export default function Contact() {
        return (
            <div className="contact__wrapper" id="contact">
                <h1>
                    Contact
                </h1>
                <div className="contact__info">
                    <div>
                        <h3>Management: Allen McRae | Adam Segal</h3>
                        <h4>Authentic Talent and Literary Management</h4>
                        <p><a href="mailto:allen.mcrae@authenticm.com?cc=jourdainfisher@gmail.com">allen.mcrae@authenticm.com</a></p>
                        <p><a href="mailto:adam.segal@authenticm.com?cc=jourdainfisher@gmail.com">adam.segal@authenticm.com</a></p>
                    </div>

                    <div>
                        <h3>Film/TV Agent: Kent Ochse</h3>
                        <h4>Gersh</h4>
                        <p><a href="mailto:Kochse@gersh.com?cc=jourdainfisher@gmail.com" target="_blank" rel="noopener noreferrer">Kochse@gersh.com</a></p>
                    </div>
                    
                    <div>
                        <h3>Touring Agent: Joanna Hynes</h3>
                        <h4>Gersh</h4>
                        <p><a href="mailto:jhynes@gersh.com?cc=jourdainfisher@gmail.com" target="_blank" rel="noopener noreferrer">jhynes@gersh.com</a></p>
                    </div>
                   
                   <div>
                        <h3>College Agent: Chris Schuler</h3>
                        <h4>Bass-Schuler Entertainment</h4>
                        <p><a href="mailto:chris@bass-schuler.com?cc=jourdainfisher@gmail.com" target="_blank" rel="noopener noreferrer">chris@bass-schuler.com</a></p>
                   </div>
                    
                    <div className="social-media__container">
                        <a href="https://www.facebook.com/Jfishercomedy/" target="_blank" rel="noopener noreferrer" className="facebook logos d-none d-md-block">
                            <em>Facebook</em>
                        </a>
                        <a href="fb://page/81151223691" target="_blank" rel="noopener noreferrer" className="facebook logos d-md-none">
                            <em>Facebook</em>
                        </a>

                        <a href="https://www.instagram.com/jfishercomedy/" target="_blank" rel="noopener noreferrer" className="instagram logos d-none d-md-block">
                            <em>Instagram</em>    
                        </a>
                        <a href="instagram://user?username=jfishercomedy" target="_blank" rel="noopener noreferrer" className="instagram logos d-md-none">
                            <em>Instagram</em>
                        </a>

                        <a href="https://twitter.com/jfishercomedy?lang=en" target="_blank" rel="noopener noreferrer" className="twitter logos d-none d-md-block">
                            <em>Twitter</em>
                        </a>
                        <a href="twitter://user?screen_name=jfishercomedy" target="_blank" rel="noopener noreferrer" className="twitter logos d-md-none">
                            <em>Twitter</em>
                        </a>
                    </div>
                </div>
            </div>
        )
}