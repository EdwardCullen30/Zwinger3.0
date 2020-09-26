import React from "react";

export default (props) => {
    if (props.currentStep !== 4) {
        return null;
    }
    return (
        <div className={'fomPage'}>
            <h1 style={{textAlign: 'center', fontSize: '1.5em'}}>
                Okay, {props.states.petname}'s all set!<br />
                We can't wait to meet him/her.
            </h1>
            <div className="reviewContainer">
                <div className="outputImageContainer" style={{width: '40px', height: '40px'}}>
                    <img src={props.states.photoURL} id="reviewOutput"/>
                </div>
                <div className="reviewTextContainer">
                    <div className="reviewHeader">
                        <h2>{props.states.petname}</h2>
                        <p>Breed</p>
                    </div>
                    <span>FAVOURITE THINGS</span>
                    {
                        props.states.checkbox.map((favourite, index) => {
                            return(
                            <div className={'favouriteThings'} key={favourite}>
                                {favourite}
                            </div>
                        )})
                    }
                    <div className="infoContainer">
                        <div className="infoElements">
                            <div className="infoElementsHead">
                                <img src={`/images/logos/${props.states.petGender}.png`} />
                            </div>
                            {props.states.petGender}
                        </div>
                        <div className="infoElements">
                            <div className="infoElementsHead">
                                {Math.floor(((new Date()).getTime() - props.states.petBirth) / (1000 * 60 * 60 * 24 * 365))}
                            </div>
                            Years Old
                        </div>
                        <div className="infoElements">
                            <div className="infoElementsHead">
                                {props.states.petWeight}
                            </div>
                            Pounds
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}