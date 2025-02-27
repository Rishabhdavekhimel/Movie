import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Movie from './Movie';  // Ensure this path is correct
import MovieDetail from './MovieDetail'; 

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'Poppins, sans-serif' }}> 
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;