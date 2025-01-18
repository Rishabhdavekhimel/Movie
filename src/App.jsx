import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MovieComponent from './Movie';  // Importing the renamed Movie component
import MovieDetail from './MovieDetail'; 

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'Poppins, sans-serif' }}> 
        <Routes>
          <Route path="/" element={<MovieComponent />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;