import { NavLink } from 'react-router-dom';
import '../assets/sass/Header.scss'
import hamburger from '../assets/img/shared/icon-hamburger.svg';
import closeHamburger from '../assets/img/shared/icon-close.svg';
import logo from '../assets/img/shared/logo.svg';
import { useEffect, useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className="App-header">
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className="hamburger">
                    <img src={open? closeHamburger : hamburger} alt='hamburguer button' onClick={()=>{setOpen(!open)}}/>
                </div>
                <nav className={`nav ${open? "show": ""}`}>
                    <ul>
                        <li className='active'>
                            <NavLink to={'/'}><b>00</b>  Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Destination'}><b>01</b> Destination </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Crew'}><b>02</b> Crew </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Technology'}><b>03</b> Technology </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;