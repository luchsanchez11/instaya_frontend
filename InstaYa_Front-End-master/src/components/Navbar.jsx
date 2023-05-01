import '../css/Navbar.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">InstaYA</a>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink style={({isActive}) => ({border: isActive ? '1px solid white' : 'none'})} className="nav-link" to="/">Inicio</NavLink>              
            </li>
            <li className="nav-item">
              <NavLink style={({isActive}) => ({color: isActive ? '1px solid white' : 'none'})} className="nav-link" to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
