import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home'
import Navbar from './components/navbar'
import About from './pages/AboutPage/About'
import Service from './pages/ServicePage/service'
import Project from './pages/ProjectPage/project'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />



      </Routes>
    </Router>
  );
};

export default App;
