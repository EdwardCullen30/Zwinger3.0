import React from "react";

export default (props) => {
    if(props.currentStep !== 3){
        return null;
    }
    return (
        <div className={'fomPage'}>
            <h1>
                Thanks! Now tell us more about {props.states.petName}
            </h1>
            <div className="petDetailContainer">
                <label style={{width: '100%', color: '#424242', fontSize: '0.8em', marginBottom: '20px'}}>Favorite Things</label>
                <label>
                    <input type="checkbox"
                           value="Sleeping"
                           name="favourites"
                           checked={props.states.checkbox.includes("Sleeping")}
                           onChange={props.handleCheckBoxChange}
                    />
                        Sleeping
                </label>
                <label>
                    <input type="checkbox"
                           value="Giving Kisses"
                           name="favourites"
                           checked={props.states.checkbox.includes("Giving Kisses")}
                           onChange={props.handleCheckBoxChange}
                    />
                        Giving Kisses
                </label>
                <label>
                    <input type="checkbox"
                           value="Walks"
                           name="favourites"
                           checked={props.states.checkbox.includes("Walks")}
                           onChange={props.handleCheckBoxChange}
                    />
                        Walks
                </label>
                <label>
                    <input type="checkbox"
                           value="Barking"
                           name="favourites"
                           checked={props.states.checkbox.includes("Barking")}
                           onChange={props.handleCheckBoxChange}
                    />
                        Barking
                </label>
                <label>
                    <input type="checkbox"
                           value="Snuggling"
                           name="favourites"
                           checked={props.states.checkbox.includes("Snuggling")}
                           onChange={props.handleCheckBoxChange}
                    />
                        Snuggling
                </label>
                <label>
                    <input type="checkbox"
                           value="Treats"
                           name="favourites"
                           checked={props.states.checkbox.includes("Treats")}
                           onChange={props.handleCheckBoxChange}
                    />
                        Treats
                </label>
                <label>
                    <input type="checkbox"
                           value="Playing fetch"
                           name="favourites"
                           checked={props.states.checkbox.includes("Playing fetch")}
                           onChange={props.handleCheckBoxChange}
                    />
                        Playing fetch
                </label>
                <label>
                    <input type="checkbox"
                           value="Naps"
                           name="favourites"
                           checked={props.states.checkbox.includes("Naps")}
                           onChange={props.handleCheckBoxChange}
                    />
                        Naps
                </label>
                <label>
                    <input type="checkbox"
                           value="Toys"
                           name="favourites"
                           checked={props.states.checkbox.includes("Toys")}
                           onChange={props.handleCheckBoxChange}
                    />
                        Toys
                </label>
                <label htmlFor="comments" style={{width: '100%', color: '#424242', fontSize: '0.8em', marginTop: '20px'}}>Any Comments(Optional)</label>
                <textarea type="text" name="comments" id="comments" style={{width: '80%'}}>
                    </textarea>
            </div>
        </div>
    )
}