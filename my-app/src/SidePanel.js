import "./SidePanel.css"

function SidePanel(
    {   
        startButtonFunction, 
        stopButtonFunction, 
        resetButtonFunction, 
        speedSliderFunction, 
        radiusSliderFunction,
        borderSliderFunction,
    }
    ) { 

    function handleSpeedSliderChange(event) { 
        speedSliderFunction(Number(event.target.value));
    }

    function handleRadiusSliderChange(event) { 
        radiusSliderFunction(Number(event.target.value));
    }

    function handleBorderSliderChange(event) {
        borderSliderFunction(Number(event.target.value));
    }

    return (
        <div>
            <p>This is the side panel</p>

            <div className="StartAndStop">
                <button onClick={startButtonFunction}>Start</button>
                <button onClick={stopButtonFunction}>Stop</button>
                <button onClick={resetButtonFunction}>Reset</button>
            </div>

            <div className="speedSlider">
                <p>Adjust Speed</p>
                <input 
                    type="range" 
                    min="0"
                    max="1000"
                    defaultValue="500"
                    onChange={handleSpeedSliderChange}
                ></input>
            </div>

            <div className="radiusSlider">
                <p>Adjust Radius</p>
                <input
                    type="range"
                    min="0"
                    max="200"
                    defaultValue="20"
                    onChange={handleRadiusSliderChange}
                ></input>
            </div>

            <div className="borderSlider">
                <p>Adjust Border</p>
                <input
                    type="range"
                    min="0"
                    max="30"
                    defaultValue="2"
                    onChange={handleBorderSliderChange}
                ></input>
            </div>
            

        </div>
        
        
    )
}

export default SidePanel