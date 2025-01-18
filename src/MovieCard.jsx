import PropTypes from 'prop-types'; // Import PropTypes for validation
import { Link } from 'react-router-dom';
const MovieCard = ({ id, title, description, imageUrl }) => {
    return (
      <div className="card h-100" style={{ width: '18rem' }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="Movie Poster"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {/* Link to movie details page */}
          <Link to={`/movie/${id}`} className="btn btn-primary mt-auto">
            View Details
          </Link>
        </div>
      </div>
    );
  };
  
  MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };
  
  export default MovieCard;
  