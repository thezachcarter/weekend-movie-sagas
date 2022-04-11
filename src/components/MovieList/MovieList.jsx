import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    const handleClick = (movieId) => {
        console.log('clicked poster in list', movieId);
        dispatch({ type: 'GET_DETAILS', payload: movieId })
        history.push(`/details/${movieId}`)
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <div className="grid">
            {/* loop through movies and display to DOM */}
                {movies.map(movie => {
                    return (
                        <div className="card" key={movie.id} >
                            <img
                                className="poster"
                                src={movie.poster}
                                alt={movie.title}
                                onClick={((event) => handleClick(movie.id))}
                            />
                            {/* <div className="titleContainer">
                                <h3 className="title">{movie.title}</h3>
                            </div> */}
                        </div>
                    );
                })}
            </div>
        </main>

    );
}

export default MovieList;