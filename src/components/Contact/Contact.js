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
                        <h3>Management</h3>
                        <h4>Allen McRae | Adam Segal</h4>
                        <small>Authentic Talent and Literary Management</small>
                        <p><a href="mailto:allen.mcrae@authenticm.com?cc=jourdainfisher@gmail.com">allen.mcrae@authenticm.com</a></p>
                        <p><a href="mailto:adam.segal@authenticm.com?cc=jourdainfisher@gmail.com">adam.segal@authenticm.com</a></p>
                    </div>

                    <div>
                        <h3>Film/TV</h3>
                        <h4>Katie Edwards</h4>
                        <small>Independent Artist Group</small>
                        <p><a href="mailto:kedwards@independentartistgroup.com?cc=jourdainfisher@gmail.com" target="_blank" rel="noopener noreferrer">kedwards@independentartistgroup.com</a></p>
                    </div>
                    
                    <div>
                        <h3>Touring</h3>
                        <h4>Adam Radler</h4>
                        <small>Independent Artist Group</small>
                        <p><a href="mailto:aradler@independentartistgroup.com?cc=jourdainfisher@gmail.com" target="_blank" rel="noopener noreferrer">aradler@independentartistgroup.com</a></p>
                    </div>
                   
                   <div>
                        <h3>College Agent</h3>
                        <h4>Chris Schuler</h4>
                        <small>Bass-Schuler Entertainment</small>
                        <p><a href="mailto:chris@bass-schuler.com?cc=jourdainfisher@gmail.com" target="_blank" rel="noopener noreferrer">chris@bass-schuler.com</a></p>
                   </div>
                    
                    {/* <div className="social-media__container">
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
                    </div> */}
                </div>
            </div>
        )
}