import { useRef, useEffect } from "react"

function Display({ circleCount, setCircleCount, toggleReset, setToggleReset, radiusSize, borderSize }) { 

    const canvasRef = useRef(null);
    const canvasHeight = 400;
    const canvasWidth = 600;

    /*
    Todo list: 
    - depreciate bitmap circle function DONE
    - more efficient background fill DONE
    - add option for background reset DONE
    - fix slider initial position DONE
    - add slider for border size DONE
    - add slider for radius size DONE
    - add function to save canvas to file
    - add motion options
    - add color morph
    - add color picker wheel
    - circleCount vs circlesOnCanvas
    - fix speedSlider direction
    - make sliders non-linear (quadratic maybe), 
    - add hot key options
    - have canvas take up more of the display, add stats panel elsewhere
    - combine start/stop buttons
    */

    function resetBackground(ctx, color) { 
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    function drawCircleByContext(ctx, centerX, centerY, radius, color) { 
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fill();
    }


    // Initialize background
    useEffect(() => { 
        
        const ctx = canvasRef.current.getContext("2d");
        resetBackground(ctx, "black");
        // setCircleCount(0);
        setToggleReset(false);
        

    }, [toggleReset]);
    

    // Re-render on circleCount update
    useEffect( () => {


        // generate circle
        const centerX = Math.floor(Math.random() * canvasWidth);
        const centerY = Math.floor(Math.random() * canvasHeight);


        
        const ctx = canvasRef.current.getContext('2d');
        drawCircleByContext(ctx, centerX, centerY, radiusSize + borderSize, "white")
        drawCircleByContext(ctx, centerX, centerY, radiusSize, "purple");


    }, [circleCount]) 

    return (
        <div>
            <p>This is the display</p>
            <p>Number of circles: {circleCount}</p>
            <canvas
                id="canvas"
                width={canvasWidth}
                height={canvasHeight}
                ref={canvasRef}
            ></canvas>
        </div>
    )
}

export default Display