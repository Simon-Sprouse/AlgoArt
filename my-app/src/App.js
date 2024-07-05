import './App.css';
import SidePanel from "./SidePanel.js"
import Display from "./Display.js"

import { useState, useEffect } from "react"

function App() {


    const [circleCount, setCircleCount] = useState(1);

    const [intervalId, setIntervalId] = useState(null);  // store id of interval generating function
    const [updateInterval, setUpdateInterval] = useState(500);

    function startButtonClick() { 
        if (!intervalId) { 
            const id = setInterval(() => {
                setCircleCount(prevCircleCount => prevCircleCount + 1);
            }, updateInterval);
            setIntervalId(id);
        }
    }

    function stopButtonClick() { 
        if (intervalId) { 
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    function sliderToggle(value) {
        setUpdateInterval(value);
    }

    // update setInterval, if running, when updateInterval is changed
    useEffect(() => { 
        if (intervalId) { 
            clearInterval(intervalId);
            const id = setInterval(() => {
                setCircleCount(prevCircleCount => prevCircleCount + 1)
            }, updateInterval)
            setIntervalId(id);
        } 

        return () => {
            if (intervalId) { 
                clearInterval(intervalId);
            }
        }
    }, [updateInterval]);

    // remove setInterval if intervalId changes. 
    useEffect(() => {
        return () => { 
            if (intervalId) { 
                clearInterval(intervalId);
            }
        }
    }, [intervalId]);

    

    return (
        <div className="App">
        <header className="App-header">
        <h1>Algo Art Generator</h1>
        </header>

        <div className="PanelAndDisplay">
            <div className="Panel">
                <SidePanel 
                    startButtonFunction={startButtonClick}
                    stopButtonFunction={stopButtonClick}
                    sliderFunction={sliderToggle}
                />
            </div>
            <div className="Display">
                <Display circleCount={circleCount}/>
            </div>
        </div>
        
        </div>

    );
}

export default App;
