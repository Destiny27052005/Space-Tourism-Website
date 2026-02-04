import { useState } from "react";
import LaunchPortrait from "./assets/technology/image-launch-vehicle-portrait.jpg";
import LaunchLandscape from "./assets/technology/image-launch-vehicle-landscape.jpg";
import SpaceportPortrait from "./assets/technology/image-spaceport-portrait.jpg";
import SpaceportLandscape from "./assets/technology/image-spaceport-landscape.jpg";
import SpacePortrait from "./assets/technology/image-space-capsule-portrait.jpg"
import SpaceLandscape from "./assets/technology/image-space-capsule-landscape.jpg"
const TECHNOLOGY = [
    {
        name: "Launch vehicle",
        num: 1,
        images: {
            portrait: LaunchPortrait,
            landscape: LaunchLandscape
        },
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
        name: "Spaceport",
        images: {
            portrait: SpaceportPortrait,
            landscape: SpaceportLandscape
        },
        num: 2,
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
        name: "Space capsule",
        images: {
            portrait: SpacePortrait,
            landscape: SpaceLandscape
        },
        num: 3,
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    }
];


function Technology() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentData = TECHNOLOGY[currentIndex];


    return (
        <div className="technology">
            <div>
                <h1><span>03</span> SPACE LAUNCH 101</h1>
                <div className="details">
                    <div>
                        <div className="info-section">
                            <div className="select">
                                {TECHNOLOGY.map((tech, index) => (
                                    <div key={tech.name}>
                                        <div
                                            onClick={() => setCurrentIndex(index)}
                                            className={currentIndex === index ? "tech selected" : "tech"}
                                        >
                                            {tech.num}

                                        </div>
                                        <div> </div>
                                    </div>
                                ))}
                            </div>
                            <div className="info">
                                <h2>THE TECHNOLOGY</h2>
                                <h3>{currentData.name.toUpperCase()}</h3>
                                <p>{currentData.description}</p>
                            </div>

                        </div>
                    </div>
                    <div className="image-section">
                        <picture>
                            {/* If the screen is at least 992px, use portrait */}
                            <source media="(min-width: 992px)" srcSet={currentData.images.portrait} />

                            {/* Default image (Mobile/Tablet) is landscape */}
                            <img
                                src={currentData.images.landscape}
                                alt={currentData.name}
                                className="tech-image"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technology;