import React from 'react';

import './Videos.css';

class Videos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="videos__wrapper" id="videos">
                    <div className="videos__video">
                        <iframe title="Jourdain Fisher Standup on Jimmy Fallon" width="100%" height="100%" src="https://www.youtube.com/embed/Anm8cU7ZR8g" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
                <div className="videos__wrapper" id="videos">
                    <div className="videos__video">
                        <iframe title="Jourdain Fisher Standup on Comedy Central Stand Up" width="100%" height="100%" src="https://www.youtube.com/embed/pD57sQ0X6QY" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
                <div className="videos__wrapper" id="videos">
                    <div className="videos__video">
                        <iframe title="Jourdain Fisher 2017 Finalist StandUp NBC" width="100%" height="100%" src="https://www.youtube.com/embed/cefXlJrz7c4" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Videos;