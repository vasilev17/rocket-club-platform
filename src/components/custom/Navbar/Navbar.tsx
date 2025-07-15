import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.slice(1) || 'General';

  const handleNavigation = (path) => {
    navigate(`/${path.toLowerCase()}`);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="feed-nav">
      <div className="nav-container">
        <div className="nav-items">
          <div 
            className={`nav-item ${currentPath.toLowerCase() === 'welcome' ? 'active' : ''}`}
            onClick={() => handleNavigation('Welcome')}
            role="button"
            tabIndex={0}
          >
            Welcome
          </div>
          <div 
            className={`nav-item ${currentPath.toLowerCase() === 'announcements' ? 'active' : ''}`}
            onClick={() => handleNavigation('Announcements')}
            role="button"
            tabIndex={0}
          >
            Announcements
          </div>
          <div 
            className={`nav-item ${currentPath.toLowerCase() === 'events' ? 'active' : ''}`}
            onClick={() => handleNavigation('Events')}
            role="button"
            tabIndex={0}
          >
            Events
          </div>
          <div 
            className={`nav-item ${currentPath.toLowerCase() === 'general' ? 'active' : ''}`}
            onClick={() => handleNavigation('General')}
            role="button"
            tabIndex={0}
          >
            General
          </div>
        </div>
        <button className="logout-btn" onClick={handleLogout} aria-label="Logout">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="logout-icon">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
