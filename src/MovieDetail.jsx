import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  // Get the movie id from the URL using useParams
  const { id } = useParams();

  // Example movie data (You can replace this with a real API or database)
  const movies = [
    {
      id: '1',
      title: 'Movie 1',
      description: 'Detailed description for Movie 1.',
      imageUrl: 'https://via.placeholder.com/500x300',
      releaseDate: '2023-01-01',
      director: 'Director 1',
      cast: 'Actor 1, Actor 2',
    },
    {
      id: '2',
      title: 'Movie 2',
      description: 'Detailed description for Movie 2.',
      imageUrl: 'https://via.placeholder.com/500x300',
      releaseDate: '2023-02-01',
      director: 'Director 2',
      cast: 'Actor 3, Actor 4',
    },
    {
      id: '3',
      title: 'Movie 3',
      description: 'Detailed description for Movie 3.',
      imageUrl: 'https://via.placeholder.com/500x300',
      releaseDate: '2023-03-01',
      director: 'Director 3',
      cast: 'Actor 5, Actor 6',
    },
    // Add more movies as needed
  ];

  // Find the movie by id
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <h2 className="text-center">Movie not found</h2>; // Handle case where the movie is not found
  }

  return (
    <div className="container my-5">
      <div className="row">
        {/* Movie Image */}
        <div className="col-md-5">
          <img
            src={movie.imageUrl}
            className="img-fluid rounded shadow-lg"
            alt={movie.title}
          />
        </div>

        {/* Movie Details */}
        <div className="col-md-7">
          <h1 className="display-4 mb-4">{movie.title}</h1>
          <p className="lead mb-3">{movie.description}</p>

          <div className="mb-3">
            <strong>Release Date: </strong>
            <span>{movie.releaseDate}</span>
          </div>

          <div className="mb-3">
            <strong>Director: </strong>
            <span>{movie.director}</span>
          </div>

          <div className="mb-4">
            <strong>Cast: </strong>
            <span>{movie.cast}</span>
          </div>

          {/* Action Buttons */}
          <div className="d-flex">
            <button className="btn btn-primary me-2">Watch Trailer</button>
            <button className="btn btn-success">Rent Movie</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
