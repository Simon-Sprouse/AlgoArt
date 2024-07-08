import "./SidePanel.css"

function SidePanel({startButtonFunction, stopButtonFunction, resetButtonFunction, sliderFunction}) { 

    function handleSliderChange(event) { 
        sliderFunction(Number(event.target.value));
    }

    return (
        <div>
            <p>This is the side panel</p>

            <div className="StartAndStop">
                <button onClick={startButtonFunction}>Start</button>
                <button onClick={stopButtonFunction}>Stop</button>
                <button onClick={resetButtonFunction}>Reset</button>
            </div>

            <div className="Slider">
                <p>Some Text</p>
                <input 
                    type="range" 
                    min="0"
                    max="1000"
                    onChange={handleSliderChange}
                ></input>
            </div>
            

        </div>
        
        
    )
}

export default SidePanel