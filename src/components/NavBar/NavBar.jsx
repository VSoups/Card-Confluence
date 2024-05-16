import { Link, useNavigate } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogOut() {
    userService.logOut();
    setUser(null);
    navigate('/');
  }

  return (
    <nav>
      <Link to="/" className="NavLink">Home</Link>
      { user ? 
        <>
          <Link to="/profile" className="NavLink">Profile</Link>
          <span>Welcome, {user.name}</span>
          <Link onClick={handleLogOut} className="NavLink">Log Out</Link>
        </>
        :
        <Link to="/account" className="NavLink">Log In/Sign Up</Link>
      }
    </nav>
  );
}