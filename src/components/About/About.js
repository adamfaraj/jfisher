import React from 'react';

import './About.css';
import logo from '../../assets/images/about.jpg';

class About extends React.Component {

    render() {
        return (
            <div className="about__wrapper" id="about">
                <img src={logo} alt={logo} className=".img-responsive" />
                <div className="about__text">
                    <h1>About Jourdain</h1>
                    <p>Jourdain Fisher has got it all. He is a hilarious comedian, writer, actor and has a beautiful singing voice in the shower. Since becoming a comedian at the age of 17, Jourdain has found enough success to keep from working at his family’s funeral home business and his star is only rising. He has written for Viceland, 50 Central on BET and most recently, The Tonight Show. Jourdain was highlighted as one of 2018’s New Faces at the prestigious Just For Laughs festival in Montreal, was a finalist in 2017’s Stand Up NBC in Los Angeles, has participated in Atlanta’s Laughing Skull Festival, was a finalist in North Carolina’s Funniest Competition and consistently headlines at clubs and colleges across the country. He has also performed on The Tonight Show and Comedy Central.
                </p>
                </div>
            </div>
        )
    }
}

export default About;