import { useState, useRef, useEffect } from "react"

function Display({ circleCount }) { 

    const canvasRef = useRef(null);
    const canvasHeight = 400;
    const canvasWidth = 600;

    
    function drawCircle(array, centerX, centerY, radius, color) { 
        // Only look to change color within the square that the circle might exist in. 
        const lowerBoundX = Math.max(0, centerX - radius);
        const lowerBoundY = Math.max(0, centerY - radius);
        const upperBoundX = Math.min(canvasWidth, centerX + radius);
        const upperBoundY = Math.min(canvasHeight, centerY + radius);

        // can probably make this faster
        for (let y = lowerBoundY; y < upperBoundY; y++) { 
            for (let x = lowerBoundX; x < upperBoundX; x++) { 
                const dx = x - centerX;
                const dy = y - centerY;
                if (dx * dx + dy * dy <= radius * radius) { 
                    array[y][x].color = color
                }
            }
        }
    }

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

        
        drawCircle(newPixels, centerX, centerY, radius + 2, "white");
        drawCircle(newPixels, centerX, centerY, radius, "magenta");


        // draw pixels on canvas

        const ctx = canvasRef.current.getContext('2d');
        newPixels.forEach((row, y) => { // fixed an issue where the old program depended on state and was late on render
            row.forEach((pixel, x) => { 
                ctx.fillStyle = pixel.color;
                ctx.fillRect(x, y, 1, 1);
            });
        });



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