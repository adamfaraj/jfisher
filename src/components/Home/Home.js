import React from 'react';

import './Home.css';
import Spotify from '../Spotify/Spotify';

export default function Home() {
        return (
            <div className="align-items-center d-flex home__wrapper justify-content-around" id="home">
                <Spotify />
            </div>
        )
    }
