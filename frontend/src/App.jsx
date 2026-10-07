import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Feedback from './pages/feedback.jsx';
import './App.css';
import Login from './pages/login.jsx';
import Story from './pages/story.jsx';
import Footer from './footer.jsx';
import { useState } from 'react';
import Releasecomments from './pages/commentsview.jsx';
function App() {
  const [logined, setLogin] = useState(null);
  return (
    <>
    <BrowserRouter>
    <div className="account-login">
      <h3>Học bổng thích sống</h3>
    <p> Have a student account?</p>
    <Link to="/login">
      <button className="login-button">Login</button>
    </Link>
    </div>
    
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link> 
        <Link to="/feedback" className="nav-link">Feedback</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback logined={logined} />} />
         <Route path="/login" element={<Login setLogin={setLogin} logined={logined} />} />
         <Route path="/story" element={<Story />} /> 
         <Route path="/viewcomments" element={<Releasecomments />} />
      </Routes>
      <Footer />
      <Outlet />
    </BrowserRouter>
    
    </>
  );
}
export default App;