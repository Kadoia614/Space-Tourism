import '../assets/sass/Destination.scss'
import Moon from '../assets/img/destination/image-moon.png'
import Mars from '../assets/img/destination/image-mars.png'
import Europa from '../assets/img/destination/image-europa.png'
import Titan from '../assets/img/destination/image-titan.png'
import data from '../data/data.json'
import { useState } from 'react'

function Destination() {
    const [planetDestination, setPlanetDestination] = useState(0)
    let planetsImg = [
        Moon,
        Mars,
        Europa,
        Titan
    ]

    return (
        <div className='destination content'>
            <h5 className='title-page'><b>01</b>Pick your destination</h5>
            <section className='image-section'>
                <div className='destination-world'>
                    <div className='destination-image'>
                        <img src={planetsImg[planetDestination]} alt={`planeta ${data.destinations[planetDestination].name}`}></img>
                    </div>
                </div>
                <div className='destination-selection'>
                    <ul>
                        <li className={planetDestination === 0 ? "active" : ""} onClick={() => setPlanetDestination(0)}>Moon</li>
                        <li className={planetDestination === 1 ? "active" : ""} onClick={() => setPlanetDestination(1)}>Mars</li>
                        <li className={planetDestination === 2 ? "active" : ""} onClick={() => setPlanetDestination(2)}>Europa</li>
                        <li className={planetDestination === 3 ? "active" : ""} onClick={() => setPlanetDestination(3)}>Titan</li>
                    </ul>
                </div>
            </section>

            <section className='text padding-section'>
                <div className='destination-description'>
                    <h2>{data.destinations[planetDestination].name}</h2>
                    <p>{data.destinations[planetDestination].description}</p>
                </div>
                <hr></hr>
                <div className='destination-distance'>
                    <div>
                        <p>AVG. DISTANCE</p>
                        <h3>{data.destinations[planetDestination].distance}</h3>
                    </div>

                    <div>
                        <p>EST. TRAVEL TIME</p>
                        <h3>{data.destinations[planetDestination].travel}</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Destination;
