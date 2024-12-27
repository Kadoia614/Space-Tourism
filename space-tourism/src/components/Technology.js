import '../assets/sass/Technology.scss'
import data from '../data/data.json';
import { useState } from 'react';


import Douglas from '../assets/img/technology/image-launch-vehicle-landscape.jpg';
import Mark from '../assets/img/technology/image-space-capsule-landscape.jpg';
import Anousheh from '../assets/img/technology/image-spaceport-landscape.jpg';


const Crew = () => {
    const [technology, setTechnology] = useState(0)
    let technologyImg = [
        Douglas,
        Mark,
        Anousheh
    ]

    return (
        <div className='technology content'>

            <h5 className='title-page'><b>03</b>SPACE LAUNCH 101</h5>
            <section className='image-section'>
                <div className='crew-image'>
                    <div className='technology-image'>
                        <img src={technologyImg[technology]} alt={`planeta ${data.technology[technology].name}`}></img>
                    </div>
                </div>
                <div className='technology-selection'>
                    <ul>
                        {
                            technologyImg.map((item, index) => {
                                console.log(index + 'teste');
                                return (
                                    <li key={index} className={technology === index ? "active" : ""} onClick={() => setTechnology(index)}>{index + 1}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>

            <section className='padding-section'>
                <div className='technology-description'>
                    <p>THE TERMINOLOGY…</p>
                    <h4>{data.technology[technology].name}</h4>
                    <p>{data.technology[technology].description}</p>
                </div>
            </section>
        </div>
    );
}

export default Crew;