import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SearchProvider } from './contexts/SearchContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import StudentLogin from './components/StudentLogin';
import FacultyLogin from './components/FacultyLogin';
import StaffLogin from './components/StaffLogin';
import CandidateLogin from './components/CandidateLogin';
import Registration from './components/Registration';
import Library from './components/Library';
import SearchResults from './components/SearchResults';
import SearchDemo from './components/SearchDemo';
import Footer from './components/Footer';

function App() {
  return (
    <SearchProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/faculty-login" element={<FacultyLogin />} />
            <Route path="/staff-login" element={<StaffLogin />} />
            <Route path="/candidate-login" element={<CandidateLogin />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/search-demo" element={<SearchDemo />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
