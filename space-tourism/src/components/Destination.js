import '../assets/sass/Destination.scss'
import Moon from '../assets/img/destination/image-moon.png'
import Mars from '../assets/img/destination/image-mars.png'
import Europa from '../assets/img/destination/image-europa.png'
import Titan from '../assets/img/destination/image-titan.png'
import data from '../data/data.json'
import { useState, useEffect } from 'react'

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
            <div className='destination-content'>

                <div className='destination-world'>
                    <h5 className='title-page'><b>01</b>Pick your destination</h5>
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
                <div className='destination-description'>
                    <h2>{data.destinations[planetDestination].name}</h2>
                    <p>{data.destinations[planetDestination].description}</p>
                </div>
                <hr></hr>
                <div className='destination-distance'>
                    <h5>Avg. distance</h5>
                    <h3>{data.destinations[planetDestination].distance}</h3>

                    <h5>Est. travel time</h5>
                    <h3>{data.destinations[planetDestination].travel}</h3>
                </div>
            </div>
        </div>
    )
}

export default Destination;
