import React from "react";
import ReactDOM from 'react-dom';
import Header from "./Search/Components/Header";
import Container from "./Search/Components/Container"

const Search = () => {
    return (
        <div>
            {console.log(hostelData)}
            <Header />
            <Container />
        </div>
    )
}

ReactDOM.render(<Search /> ,document.getElementById('app'))