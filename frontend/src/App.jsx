import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExploreStartups from './pages/ExploreStartups';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreStartups />} />
      </Routes>
    </Router>
  );
}
