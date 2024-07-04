import './App.css';
import SidePanel from "./SidePanel.js"
import Display from "./Display.js"

import { useState, useEffect } from "react"

function App() {


    const [circleCount, setCircleCount] = useState(0);
    const updateInterval = 1000;

    function startButtonClick() { 
        setCircleCount(circleCount + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCircleCount(circleCount + 1);
        }, updateInterval);

        return () => clearInterval(interval);
    })

    return (
        <div className="App">
        <header className="App-header">
        <h1>Algo Art Generator</h1>
        </header>

        <div className="PanelAndDisplay">
            <div className="Panel">
                <SidePanel startButtonFunction={startButtonClick}/>
            </div>
            <div className="Display">
                <Display circleCount={circleCount}/>
            </div>
        </div>
        
        </div>

    );
}

export default App;
