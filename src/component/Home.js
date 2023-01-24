import React from "react";
import ReactDOM from 'react-dom/client';
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

export const Home = () => {
    return(
        <div>
            <Navbar />
            <Jumbotron />
            <Footer />
        </div>
    )
};
export default Home;