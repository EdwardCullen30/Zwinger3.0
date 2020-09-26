import React from "react";

export default (props) => {
    if(props.currentStep !== 1){
        return null;
    }
    return (
    <div className="formPage">
        <h1>
            Nice to meet you, {user.fname}
            <br/>
            Tell us all about your furry,<br/>
            feathery, or scaley friend.
        </h1>
        <div className="petTypeContainer">
            <h2>Which of the following do you have as a pet type</h2>
            <div className="petCheckBox">
                <input type="radio"
                       name="petType"
                       value="Dog"
                       id="petDog"
                       checked={props.petType === 'Dog'}
                       onChange={props.handlePetTypeChange}
                />
                <label htmlFor="petDog">
                    <img src="/images/logos/dogPlaceholder.png"/>
                    Dog
                </label>
            </div>
            <div className="petCheckBox">
                <input type="radio"
                       name="petType"
                       value="Cat"
                       id="petCat"
                       checked={props.petType === 'Cat'}
                       onChange={props.handlePetTypeChange}
                />
                <label htmlFor="petCat">
                    <img src="/images/logos/catPlaceholder.png"/>
                    Cat
                </label>
            </div>
            <div className="petCheckBox">
                <input type="radio"
                       name="petType"
                       value="Bird"
                       id="petBird"
                       checked={props.petType === 'Bird'}
                       onChange={props.handlePetTypeChange}
                />
                <label htmlFor="petBird">
                    <img src="/images/logos/birdPlaceholder.png"/>
                    Bird
                </label>
            </div>
            <div className="petCheckBox">
                <input type="radio"
                       name="petType"
                       value="Other"
                       id="petOther"
                       checked={props.petType === 'Other'}
                       onChange={props.handlePetTypeChange}
                />
                <label htmlFor="petOther">
                    <img src="/images/logos/otherPlaceholder.png"/>
                    Other
                </label>
            </div>
        </div>
    </div>
)}