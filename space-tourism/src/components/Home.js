import { Link } from 'react-router-dom';
import '../assets/sass/Home.scss';

function Home() {
    return (
        <div className='home content'>
            <div className='home-description'>
                <h5 className='title-page'>So, you want to travel to</h5>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!</p>
            </div>
            <Link to='/destination'>
                <div className='home-explore'>
                    <h4 className='Explore'>EXPLORE</h4>

                </div>
            </Link>
        </div>
    )
}

export default Home;
