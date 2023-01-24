import React from "react";
import ReactDOM from 'react-dom/client';
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

export const Home = () => {
    return(
        <div>
            <Navbar />
            <Jumbotron />
        </div>
    )
};
export default Home;