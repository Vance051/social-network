import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import Musics from "./Components/Musics/Musics";
import News from "./Components/News/News";

function App() {
    return (<BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route
                        path={'/profile'}
                        render={() => <Profile/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs/>}/>
                    <Route path={'/news'}
                           render={() => <News/>}/>
                    <Route path={'/musics'}
                           render={() => <Musics/>}/>

                </div>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
