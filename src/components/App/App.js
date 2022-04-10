import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>The Movies Saga!</h1>
      </div>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
