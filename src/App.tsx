import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <NavBar/>
            <Profile/>
            <Footer/>
        </div>

    );
}

export default App;
