import React from "react";

const Map = () => {
    return (
        <div className={'MapContainer'}>
            <iframe
                width="100%"
                height="100%%"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCHhEpFcs6qtSQUAaeAdIICgrY0DSFGskY
                    &q=Space+Needle,Seattle+WA" allowFullScreen>
            </iframe>
        </div>
    )
}

export default Map