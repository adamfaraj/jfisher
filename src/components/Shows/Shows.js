import React from 'react';

import './Shows.css';

class Shows extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: [],
        };
    }

    // const Shows = () => {


    componentDidMount() {
        fetch("https://spreadsheets.google.com/feeds/list/1kNF0lD0eD-p_vAyYBIt5cK14OXpP6ALRz4w4LUfuYiw/od6/public/values?alt=json")
            .then(res => res.json())
            .then(data => this.setState({ shows: data.feed.entry }));
    };


    render() {

        const { shows } = this.state;
        console.log(shows);

        return (
            <div className="shows__wrapper" id="shows">
                <div className="shows__title">
                    <h1>Upcoming Shows</h1>
                </div>
                <div className="shows__header">
                    <span>Date</span>
                    <span>Venue</span>
                    <span>City</span>
                </div>
                <div className="shows__data-wrapper">
                    <div className="shows__dates">
                        {shows.map(item => (
                            <span key={item.id.$t}>
                                {item.gsx$date.$t}
                            </span>
                        ))}
                    </div>
                    <div className="shows__venue">
                        {shows.map(item => (
                            <span key={item.id.$t}>
                                {item.gsx$venue.$t}
                            </span>
                        ))}
                    </div>
                    <div className="shows__city">
                        {shows.map(item => (
                            <span key={item.id.$t}>
                                {item.gsx$city.$t}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        )
    };
}

export default Shows;