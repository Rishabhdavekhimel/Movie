import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard'; 

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/movies') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        return response.json(); 
      })
      .then((data) => {
        setMovies(data); 
      })
      .catch((error) => {
        console.error('There was an error fetching the movies!', error);
      });
  }, []);

  return (
    <div>
      
      <div className="container-fluid bg-dark text-white py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="logo">
            <h3 className="m-0">CreateHub</h3>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="text"
              placeholder="Search..."
              className="form-control me-2"
            />
            <button className="btn btn-outline-light d-flex align-items-center">
              <BsSearch />
            </button>
          </div>
        </div>
      </div>

   
      <div className="container-fluid bg-black text-white py-4">
        <div className="movie">
          <h3 className="m-0">Movies</h3>
          <div className="d-flex flex-wrap">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                description={movie.description}
                imageUrl={movie.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
