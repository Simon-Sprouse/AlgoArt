import { useState, useRef, useEffect } from "react"

function Display({ circleCount }) { 


    const [pixels, setPixels] = useState([]);

    const canvasRef = useRef(null);
    const canvasHeight = 400;
    const canvasWidth = 600;

    useEffect( () => {

        const newPixels = Array.from({ length: canvasHeight }, () => 
            Array.from({ length: canvasWidth}, () => 
                ({color: 'black'})
            )
        )

        // generate circle
        const centerX = Math.floor(Math.random() * canvasWidth);
        const centerY = Math.floor(Math.random() * canvasHeight);
        const radius = 20;

        // can probably make this faster
        for (let y = 0; y < canvasHeight; y++) { 
            for (let x = 0; x < canvasWidth; x++) { 
                const dx = x - centerX;
                const dy = y - centerY;
                if (dx * dx + dy * dy <= radius * radius) { 
                    newPixels[y][x].color = 'white'
                }
            }
        }

        setPixels(newPixels);

        // draw pixels on canvas

        const ctx = canvasRef.current.getContext('2d');
        pixels.forEach((row, y) => {
            row.forEach((pixel, x) => { 
                ctx.fillStyle = pixel.color;
                ctx.fillRect(x, y, 1, 1);
            });
        });

        console.log("End of use effect");
        const now = new Date();
        console.log(now);



    }, [circleCount]) // leave this empty so no re-render happens

    return (
        <div>
            <p>This is the display</p>
            <p>{circleCount}</p>
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