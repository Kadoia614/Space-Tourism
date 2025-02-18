import '../assets/sass/Crew.scss'
import data from '../data/data.json';
import { useState } from 'react';


import Douglas from '../assets/img/crew/image-douglas-hurley.png';
import Mark from '../assets/img/crew/image-mark-shuttleworth.png';
import Victor from '../assets/img/crew/image-victor-glover.png';
import Anousheh from '../assets/img/crew/image-anousheh-ansari.png';


const Crew = () => {
    const [crew, setCrew] = useState(0)
    let crewImg = [
        Douglas,
        Mark,
        Victor,
        Anousheh
    ]

    return (
        <div className='crew content'>
            <h5 className='title-page'><b>02</b>meet your crew</h5>

            <section className='image-section'>
                <div className='crew-image'>
                    <div className='destination-image'>
                        <img src={crewImg[crew]} alt={`planeta ${data.crew[crew].name}`}></img>
                    </div>
                </div>
                <div className='crew-selection'>
                    <ul>
                        <li className={crew === 0 ? "active" : ""} onClick={() => setCrew(0)}><span></span></li>
                        <li className={crew === 1 ? "active" : ""} onClick={() => setCrew(1)}><span></span></li>
                        <li className={crew === 2 ? "active" : ""} onClick={() => setCrew(2)}><span></span></li>
                        <li className={crew === 3 ? "active" : ""} onClick={() => setCrew(3)}><span></span></li>
                    </ul>
                </div>
            </section>
            <section className='padding-section'>
                <div className='crew-description'>
                    <h5>{data.crew[crew].role}</h5>
                    <h4>{data.crew[crew].name}</h4>
                    <p>{data.crew[crew].bio}</p>
                </div>
            </section>
        </div>
    );
}

export default Crew;