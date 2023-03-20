import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';


function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=53de358e18cd034ef56fff2d27748111&language=ko&page=1&region=KR";
  const [movies, setMovies] = useState([])
  const [term, setTerm] = useState('')
  useEffect(()=>{
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  })

  return (
    <div className="App">
      <div>
        <div className='title'>
          <h1>개봉 영화</h1>
        </div>


      </div>

      <div className="movies">
        {movies.map((movie)=> {
          return(
            <MovieCard{...movie}/>
           )})}
      </div>

    </div>
  );
}


export default App;