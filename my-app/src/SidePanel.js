import "./SidePanel.css"

function SidePanel({startButtonFunction}) { 


    return (
        <div>
            <p>This is the side panel</p>
            <button onClick={startButtonFunction}>Start</button>
            <button>Stop</button>
        </div>
        
        
    )
}

export default SidePanel