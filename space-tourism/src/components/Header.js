import '../assets/sass/Header.scss'

function Header() {
    return (
        <>
            <header className="App-header">
                <nav>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='menu'>
                        <ul>
                            <li>
                                <span>00 </span> Home
                            </li>
                            <li>
                                <span>01 </span> Destination
                            </li>
                            <li>
                                <span>02 </span> Crew
                            </li>
                            <li>
                                <span>03 </span> Technology
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;