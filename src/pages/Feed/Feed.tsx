import './Feed.css';
import Navbar from '../../components/custom/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Feed() {
  return (
    <div className="feed-container">
      <Navbar />
      <div className="feed-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Feed;
