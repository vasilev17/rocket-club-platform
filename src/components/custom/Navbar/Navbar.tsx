import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.slice(1) || 'General';

  const handleNavigation = (path) => {
    navigate(`/${path.toLowerCase()}`);
  };

  return (
    <nav className="feed-nav">
      <div className="nav-items">
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
    </nav>
  );
}

export default Navbar;
