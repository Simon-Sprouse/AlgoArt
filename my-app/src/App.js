import './App.css';
import SidePanel from "./SidePanel.js"
import Display from "./Display.js"

import { useState, useEffect } from "react"

function App() {


    // variables passed to display component
    const [circleCount, setCircleCount] = useState(0);
    const [toggleReset, setToggleReset] = useState(true); // should the canvas be nuked?

    // variables to track interval id / update frequency
    const [intervalId, setIntervalId] = useState(null);  
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

    function resetButtonClick() { 
        setToggleReset(true);
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
                    resetButtonFunction={resetButtonClick}
                    sliderFunction={sliderToggle}
                />
            </div>
            <div className="Display">
                <Display 
                    circleCount={circleCount} 
                    setCircleCount={setCircleCount}
                    toggleReset={toggleReset}
                    setToggleReset={setToggleReset}
                />
            </div>
        </div>
        
        </div>

    );
}

export default App;
