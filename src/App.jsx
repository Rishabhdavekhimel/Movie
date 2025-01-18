import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Movie from './Movie'; 
import MovieDetail from './MovieDetail'; 
import './App.css'; // Assuming the CSS with font-family styles is imported here

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'Poppins, sans-serif' }}> {/* You can also apply fonts inline */}
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
