import React, {useState, useRef} from 'react';
import {Canvas, useFrame} from "@react-three/fiber";
import {Html} from "@react-three/drei"

import {BrowserRouter} from 'react-router-dom';

import {
    EarthCanvas, Atmosphere, Sky, CityScape, Ground
} from './Components/';

import './App.css';
import './index.css';

function App() {
    return (
        <browserRouter>
            <div className="App">
                <div className="h-screen w-full">
                    {/*<EarthCanvas />*/}
                </div>
                <div>
                    <Atmosphere/>
                    <Sky/>
                    <CityScape/>
                    <Ground/>
                </div>
            </div>
        </browserRouter>
    );
}

export default App;
