import { Link } from "react-router-dom";
import '../styles/Header.scss';

function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cities">Choose city</Link></li>
            </ul>
        </header>
    )
}

export default Header;