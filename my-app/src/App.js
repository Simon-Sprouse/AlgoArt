import './App.css';
import SidePanel from "./SidePanel.js"
import Display from "./Display.js"

import { useState } from "react"

function App() {


    const [circleCount, setCircleCount] = useState(0);

    function startButtonClick() { 
        setCircleCount(circleCount + 1);
    }


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
