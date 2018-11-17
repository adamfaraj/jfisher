import React from 'react';

import './About.css';
import logo from '../../assets/images/about.jpg';

const About = () => {
    return (
        <div className="about__wrapper" id="about">
            <img src={logo} alt={logo} />
            <h1>About Jourdain</h1>
            <p>
            Jourdain Fisher has got it all. He is a hilarious comedian, writer, actor and has a beautiful singing voice in the shower. 

Since becoming a comedian at the age of 17, Jourdain has found enough success to keep from working at his family’s funeral home business and his star is only rising. 

He has written for Viceland and was a writer for 50 Central on BET. 

Jourdain was highlighted as one 2018’s New Faces at the prestigious Just For Laughs festival in Montreal, was a finalist in 2017’s Stand Up NBC in Los Angeles, has participated in Atlanta’s Laughing Skull Festival, was a finalist in North Carolina’s Funniest Competition and consistently headlines at clubs and colleges across the country. 

2018 marked Jourdain’s network television debut on The Tonight Show.

            </p>
        </div>
    )
}

export default About;