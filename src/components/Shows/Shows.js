import React, { useEffect, useState } from 'react';
// import gapi from 'gapi-client';
// import { GoogleApis } from 'googleapis';

import './Shows.css';

export default function Shows() {
    // constructor(props) {
    //     super(props);
    //     this.myRef = React.createRef();
    // }

    const [shows, setShows] = useState([])

    // const authenticate = () => {
    //     return GoogleApis.auth2.getAuthInstance()
    //         .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.readonly"})
    //         .then(function() { console.log("Sign-in successful"); },
    //               function(err) { console.error("Error signing in", err); });
    // }

    // authenticate();
    // fetch("https://spreadsheets.google.com/feeds/list/1kNF0lD0eD-p_vAyYBIt5cK14OXpP6ALRz4w4LUfuYiw/od6/public/values?alt=json")
    // https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}
    // AIzaSyAm3ri8NAU3Qb6PceLTydLIY4j1ZQmmuhE
    // https://sheets.googleapis.com/v4/spreadsheets/1kNF0lD0eD-p_vAyYBIt5cK14OXpP6ALRz4w4LUfuYiw/values/{sheetName}?alt=json&key=AIzaSyAm3ri8NAU3Qb6PceLTydLIY4j1ZQmmuhE
    useEffect(() => {
        fetch("https://sheets.googleapis.com/v4/spreadsheets/1kNF0lD0eD-p_vAyYBIt5cK14OXpP6ALRz4w4LUfuYiw/values/Sheet1/?alt=json&key=AIzaSyDOmf2aRcIloaPx7qse34mRhN8Q9E7E7bE")
            .then(res => res.json())
            .then(data => setShows(data.values))
    }, []);
        // .then(res => res.body)
        // .then(data => data.json())
        // .then(data => console.log({data}))
            // setShows(data.feed.entry)

    // scrollToMyRef = () => {
    //     window.scrollTo({
    //         top:this.myRef.current.offsetTop, 
    //         behavior: "smooth"
    //     })
    // }
    // console.log(window)
    // // console.log({ gapi })
    // gapi.client.sheets.spreadsheets.values.get({
    //     spreadsheetId: '1kNF0lD0eD-p_vAyYBIt5cK14OXpP6ALRz4w4LUfuYiw',
    //     range: 'A1:C5'
    //   }).then((response) => {
    //     var result = response.result;
    //     var numRows = result.values ? result.values.length : 0;
    //     console.log(`${numRows} rows retrieved.`);
    //   });

        return (
            <div
                className="shows__wrapper"
                id="shows"
            >
                <h1>Upcoming Shows</h1>
                <div className="shows__list">
                    <div className="shows__header">
                        <span>Date</span>
                        <span>Venue</span>
                        <span>City</span>
                    </div>
                    <div>
                        <div>
                            {shows.map((show,i) => {
                                return (
                                    <div key={i} className="shows__details">
                                        <span>{show[0]}</span>
                                        <span>{show[1]}</span>
                                        <span>{show[2]}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    };