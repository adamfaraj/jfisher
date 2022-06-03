import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import jf1 from '../../assets/images/jf-5.jpg';
import jf2 from '../../assets/images/jf-6.jpg';
import jf3 from '../../assets/images/jf-7.jpeg';
import jf4 from '../../assets/images/jf-4.jpg';

import './Photos.css';

export default function Photos() {

    return (
            <div className="photo__wrapper" id="photos">
                <h1 className="text-center">
                    Photos
                </h1>
                <div>
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
