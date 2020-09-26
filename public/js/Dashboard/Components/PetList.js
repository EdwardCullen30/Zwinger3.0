import React from 'react'

export default (props) => (
    <div className="petList">
        <img src="../../../images/logos/dogPlaceholder.png" style={{width: '40px', height: '40px'}}/>
        <h4>
            {props.petName}
        </h4>
        <img src="../../../images/logos/arrowRight.png" style={{width: 'auto', marginLeft: 'auto' }} className="expand" />
    </div>
)
