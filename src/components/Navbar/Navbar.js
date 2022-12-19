import './Navbar.css';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar">
            <a href="https://www.linkedin.com/in/alex-ivanov-260766202/" target="_blank">Education</a>
            <Link to="/Experience">Experience</Link>
            <a href="https://www.linkedin.com/in/alex-ivanov-260766202/" target="_blank">Projects</a>
        </nav>
    );
}

export default Navbar;