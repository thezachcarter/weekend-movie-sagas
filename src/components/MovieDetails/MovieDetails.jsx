import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {
    
    //store.details = array w/ single object containing selected movie
    const details = useSelector(store => store.details)

    console.log(details);
    return(
        <div>
            <h1>{details[0]?.title}</h1>
            <img src={details[0]?.poster}/>
            <h2>Genre:</h2>
            <p>Synopsis: {details[0]?.description}</p>
        </div>
    )
}

export default MovieDetails;