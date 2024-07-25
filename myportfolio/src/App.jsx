import React from 'react';
import EarthCanvas from './Components/Earth.jsx';
import Atmosphere from './Components/Atmosphere';
import Clouds from './Components/Clouds';
import CityScape from './Components/CityScape';
import Ground from './Components/Ground';
import './App.css';
import './index.css';

function App() {
    return (
        <div className="App">
            <div className="h-screen w-full bg-black">
                <EarthCanvas/>
            </div>
            <Atmosphere/>
            <Clouds/>
            <CityScape/>
            <Ground/>
        </div>
    );
}

export default App;
