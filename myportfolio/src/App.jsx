import React, {useState, useRef} from 'react';
import {Canvas, useFrame} from "@react-three/fiber";
import {Html} from "@react-three/drei"

import {BrowserRouter} from 'react-router-dom';

import Atmosphere from "./Components/Atmosphere.jsx";
//import Earth from "./Components/Earth.jsx";
import Ground from "./Components/Ground.jsx";
import Sky from "./Components/Sky.jsx"; 
import CityScape from "./Components/CityScape.jsx";

import './App.css';
import './index.css';

function App() {
    return (
            <div className="App">
                <div className="flex flex-col">
                    <Atmosphere/>
                    <Sky/>
                    <CityScape/>
                    <Ground/>
                </div>
            </div>
    );
}

export default App;
