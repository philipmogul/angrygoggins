import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul style={{display: 'inline', listStyleType: 'circle'}}>
        <li style={{display: 'inline', margin: '10px'}}><Link to="/">Home</Link></li>
        <li style={{display: 'inline', margin: '10px'}}><Link to="/about">About</Link></li>
        <li style={{display: 'inline', margin: '10px'}}><Link to="/profile">Profile</Link></li>
        <li style={{display: 'inline', margin: '10px'}}><Link to="/angry-prompts">Angry Goggins</Link></li>
        <li style={{display: 'inline', margin: '10px'}}><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;