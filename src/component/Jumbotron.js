import React from "react";
import './Jumbotron.css';

export const Jumbotron = () => {
    return (
    <div className="jumbotron">
        <div className="container">
            <h1 className="display-4 text-white">Welcome Superstar</h1>
            {/* <p className="lead text-white">this is where superstars are made</p> */}
        </div>
    </div>
    );
};

export default Jumbotron;
