import { useRef, useEffect } from "react"

import { resetBackground, drawCircleByContext } from "./logic";

function Display({ circleCount, setCircleCount, toggleReset, setToggleReset, radiusSize, borderSize, saveCanvas, setSaveCanvas }) { 

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
    - add function to save canvas to file DONE
    - add motion options
    - add color morph
    - add color picker wheel
    - circleCount vs circlesOnCanvas
    - fix speedSlider direction
    - make sliders non-linear (quadratic maybe), 
    - add hot key options
    - have canvas take up more of the display, add stats panel elsewhere
    - handle canvas resize, fix hardcoded dimensions
    - combine start/stop buttons
    - organize files into directories
    */


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
        drawCircleByContext(ctx, centerX, centerY, radiusSize, "green");


    }, [circleCount]);

    // respond to request for canvas save
    useEffect( () => { 
        if (saveCanvas) { 
            setSaveCanvas(false);
            console.log("save")

            const canvas = canvasRef.current;
            const dataUrl = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = "canvas_" + String(circleCount);
            link.click();
        }
    }, [saveCanvas]);

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