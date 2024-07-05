import "./SidePanel.css"

function SidePanel({startButtonFunction, stopButtonFunction}) { 


    return (
        <div>
            <p>This is the side panel</p>
            <button onClick={startButtonFunction}>Start</button>
            <button onClick={stopButtonFunction}>Stop</button>
        </div>
        
        
    )
}

export default SidePanel