import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function MovieDetails() {
    const history = useHistory();

    //store.details = array w/ single object containing selected movie details
    const details = useSelector(store => store.details)
    const genres = useSelector(store => store.genres)

    const handleBack = () => {
        history.push('/')
    }

    console.log('movie details', details);
    console.log('movie genres', genres);
    return (
        <div className="detailsContainer">
            <button className="detailsBtn" onClick={handleBack}>
                <span className="back">🔙</span><br></br>MOVIE<br></br>LIST</button>
            
            <div className="detailsCard">
            <h1 className="detailsText">{details[0]?.title}</h1>
            <img className="detailsImg" src={details[0]?.poster} />
                <h3 className="detailsText">Genre(s):</h3>
                {genres.map(genre => {
                    console.log(genre);
                    return (
                        <div key={genre.id} >
                            <h4 className="detailsText">{genre.name}</h4>
                        </div>
                    )
                })}
                <p className="detailsText">Synopsis: {details[0]?.description}</p>
            </div>
            
        </div>
    )
}

export default MovieDetails;