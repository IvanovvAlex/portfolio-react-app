import Navbar from '../../components/Navbar/Navbar';
import logo from '../../assets/logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
    </header>
    )
}

export default Header;
