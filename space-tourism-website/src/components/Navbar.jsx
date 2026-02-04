import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from "../assets/shared/logo.svg";
import Open from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";

function Navbar() {
    const navLinkStyles = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);

    };
    return (
        <div>
            <nav role="navigation">
                <img src={Logo} alt="Space Tourism Logo" className='logo' />
                <div className="mobile-toggle" onClick={toggleNav}>
                    {isNavOpen ? (
                        <img id='close' src={Close} alt="Close" className='toggle' />
                    ) : (
                        <img id='hamburger' src={Open} alt="Menu" className='toggle' />
                    )}
                </div>
                <div className={`nav-list ${isNavOpen ? "show" : ""}`}>
                    <ul>
                        <li>
                            <NavLink to="/" className={navLinkStyles}>
                                <span>00</span> HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/destination" className={navLinkStyles}>
                                <span>01</span> DESTINATION
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/crew" className={navLinkStyles}>
                                <span>02</span> CREW
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/technology" className={navLinkStyles}>
                                <span>03</span> TECHNOLOGY
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;