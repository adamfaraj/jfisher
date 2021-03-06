import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import jf1 from '../../assets/images/jf-1.jpg';
import jf2 from '../../assets/images/jf-2.jpg';
import jf3 from '../../assets/images/jf-3.jpg';
import jf4 from '../../assets/images/jf-4.jpg';

import './Photos.css';

class Photos extends React.Component {

    render() {
        return (
            <div className="photo__wrapper" id="photos">
                <h1 className="photo__title">
                    Photos
                </h1>
                <div className="photo__item">
                    <Carousel showThumbs={false} dynamicHeight={true} infiniteLoop={true} autoPlay={true}>
                        <div>
                            <img src={jf1} alt="Jourdain Fisher"/>
                        </div>
                        <div>
                            <img src={jf2} alt="Jourdain Fisher"/>
                        </div>
                        <div>
                            <img src={jf3} alt="Jourdain Fisher"/>
                        </div>
                        <div>
                            <img src={jf4} alt="Jourdain Fisher"/>
                        </div>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Photos;