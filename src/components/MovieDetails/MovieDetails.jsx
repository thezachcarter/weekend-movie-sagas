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
        <div>
            <button onClick={handleBack}>Back To Movies</button>
            <h1>{details[0]?.title}</h1>
            <img src={details[0]?.poster} />
            <div>
                <h3>Genre:</h3>
                {genres.map(genre => {
                    console.log(genre);
                    return (
                        <div key={genre.id} >
                            <h3>{genre.name}</h3>
                        </div>
                    )
                })}
            </div>
            <p>Synopsis: {details[0]?.description}</p>
        </div>
    )
}

export default MovieDetails;