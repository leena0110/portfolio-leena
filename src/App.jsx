import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Work from './pages/Work';
import Credentials from './pages/Credentials';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/work" element={<Work />} />
            <Route path="/credentials" element={<Credentials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
