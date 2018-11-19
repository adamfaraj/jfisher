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
            <div className="videos__wrapper" id="videos">
                <h1 className="videos__title">
                    Videos
                </h1>
                <div className="videos__video">
                <iframe title="Jourdain Fisher 2017 Finalist StandUp NBC" width="auto" height="auto" src="https://www.youtube.com/embed/cefXlJrz7c4" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
        )
    }
}

export default Videos;