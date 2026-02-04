import { useState } from 'react';
import MarsImg from '../src/assets/Destination/image-mars.png';
import MoonImg from '../src/assets/Destination/image-moon.png';
import EuropaImg from '../src/assets/Destination/image-europa.png';
import TitanImg from '../src/assets/Destination/image-titan.png';

const DESTINATIONS = [
    {
        name: "MOON",
        image: MoonImg,
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 KM",
        travel: "3 DAYS",
    },
    {
        name: "MARS",
        image: MarsImg,
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 MIL. KM",
        travel: "9 MONTHS",
    },
    {
        name: "EUROPA",
        image: EuropaImg,
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. KM",
        travel: "3 YEARS",
    },
    {
        name: "TITAN",
        image: TitanImg,
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. KM",
        travel: "7 YEARS",
    },
];

function Destination() {
    const [currentIndex, setCurrentIndex] = useState(1); // Default to Mars (index 1)
    const currentData = DESTINATIONS[currentIndex];

    return (
        <div className="destination">
            <div className='image-section'>
                <h1><span>01</span> PICK YOUR DESTINATION</h1>
                <img src={currentData.image} alt={currentData.name} className='planet-img' />
            </div>

            <div className='info-section'>
                <ul>
                    {DESTINATIONS.map((dest, index) => (
                        <li key={dest.name} className='planet'>
                            <div
                                onClick={() => setCurrentIndex(index)}
                                className={currentIndex === index ? "dest active" : "dest"}
                            >
                                {dest.name}
                            </div>
                        </li>
                    ))}
                </ul>

                <h2>{currentData.name}</h2>
                <p>{currentData.description}</p>

                <hr />

                <div className="stats">
                    <div>
                        <h3>AVG. DISTANCE</h3>
                        <h4>{currentData.distance}</h4>
                    </div>
                    <div>
                        <h3>EST. TRAVEL TIME</h3>
                        <h4>{currentData.travel}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Destination;