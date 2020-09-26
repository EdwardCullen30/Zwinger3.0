import React from "react";
import Map from "./Map";
import SearchContainer from "./SearchContainer"

const Container = () => {
    return(
        <div className={'Container'}>
            <SearchContainer />
            <Map />
        </div>
    )
}

export default Container