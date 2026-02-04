import { useState } from "react";
import AnoushehImg from "./assets/crew/image-anousheh-ansari.png";
import DouglasImg from "./assets/crew/image-douglas-hurley.png";
import MarkImg from "./assets/crew/image-mark-shuttleworth.png";
import VictorImg from "./assets/crew/image-victor-glover.png";


const CREW = [
    {
        name: "Douglas Hurley",
        image: DouglasImg,
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        name: "Mark Shuttleworth",
        image: MarkImg,
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        name: "Victor Glover",
        image: VictorImg,
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        name: "ANOUSHEH ANSARI",
        image: AnoushehImg,
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }];

function Crew() {
    const [currentIndex, setCurrentIndex] = useState(3);
    const currentData = CREW[currentIndex]
    return (
        <div className="crew">
            <div>
                <h1><span>02</span> MEET YOUR CREW</h1>
                <div className="details">
                    <div className="info-section">
                        <h2>{currentData.role.toUpperCase()}</h2>
                        <h3>{currentData.name.toUpperCase()}</h3>
                        <p>{currentData.bio}</p>
                        <div className="dots">
                            {CREW.map((crew, index) => (
                                <div key={crew.name}>
                                    <div
                                        onClick={() => setCurrentIndex(index)}
                                        className={currentIndex === index ? "crews selected" : "crews"}
                                    >
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="image-section">
                        <img src={currentData.image} alt="Crew Image" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Crew;