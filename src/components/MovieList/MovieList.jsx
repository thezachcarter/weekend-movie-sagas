import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    const handleClick = (movieId) => {
        console.log('clicked poster in list', movieId);
        dispatch({type: 'GET_DETAILS', payload: movieId})
        history.push('/details')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            
                            <img 
                                src={movie.poster} 
                                alt={movie.title}
                                onClick={((event) => handleClick(movie.id))}
                            />
                           
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;