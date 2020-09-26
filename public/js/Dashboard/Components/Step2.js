import React from "react";

export default (props) => {
    if(props.currentStep !== 2){
        return null;
    }
    return (
        <div className="formPage">
            <h1>
                Yay, We love {`${props.states.petType}s`} {} !
            </h1>
            <div className="petInfoContainer">

                <div className="petInfoInput">
                    <label htmlFor="petname">Name</label>
                    <input type="text"
                           placeholder="Pet's Name"
                           name="petname"
                           id="petname"
                           value={props.states.petname}
                           onChange={props.handleInputChange}
                    />
                </div>
                <div className="petInfoInput">
                    <label htmlFor="image"
                           style={{display: 'flex', alignItems: 'center', padding: '0 20px 0 10px', justifyContent: 'space-between'}}>
                        <div className="outputImageContainer">
                            <img src={props.states.photoURL} id="output" />
                        </div>
                        Upload Photo
                    </label>
                    <input type="file" accept="image/*" id="image" onChange={props.handlePhotoUpload} style={{display: 'none'}} />
                </div>
                <div className="petInfoInput">
                    <label htmlFor="name">Breed</label>
                    <input type="text"
                           placeholder="Pet's Breed"
                           name={'petBreed'}
                           value={props.states.petBreed}
                           onChange={props.handleInputChange}
                    />
                </div>
                <div className="petInfoInput">
                    <label htmlFor="name">Birthday</label>
                    <input type="date"
                           name={'petBirth'}
                           onChange={props.handleInputChange}
                    />
                </div>
                <div className="petInfoInput">
                    <label>Gender</label>
                    <div className="petInfoCheckbox">
                        <input type="radio"
                               value="male"
                               id="male"
                               name="petGender"
                               onChange={props.handleInputChange}
                               checked={props.states.petGender === "male"}
                        />
                            <label htmlFor="male">Male</label>
                    </div>
                    <div className="petInfoCheckbox">
                        <input type="radio"
                               value="female"
                               id="female"
                               name="petGender"
                               onChange={props.handleInputChange}
                               checked={props.states.petGender === "female"}
                        />
                            <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="petInfoInput">
                    <label htmlFor="weight">Weight</label>
                    <input type="number"
                           placeholder="Weight (in Pounds)"
                           id="weight"
                           name={'petWeight'}
                           value={props.states.petWeight}
                           onChange={props.handleInputChange}
                    />
                </div>
                <div className="petInfoInput" style={{width: '100%'}}>
                    <label>Pet's Behaviour</label>
                    <div className="petInfoCheckbox">
                        <input type="radio" value="rude" id="rude" name="behaviour" />
                            <label htmlFor="rude">Rude</label>
                    </div>
                    <div className="petInfoCheckbox">
                        <input type="radio" value="op2" id="op2" name="behaviour" />
                            <label htmlFor="op2">Female</label>
                    </div>
                    <div className="petInfoCheckbox">
                        <input type="radio" value="op3" id="op3" name="behaviour" />
                            <label htmlFor="op3">Male</label>
                    </div>
                    <div className="petInfoCheckbox">
                        <input type="radio" value="op4" id="op4" name="behaviour" />
                            <label htmlFor="op4">Female</label>
                    </div>
                </div>
            </div>
        </div>
    )}