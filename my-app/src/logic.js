// WHOOP

// These need to be dynamic at some point
const canvasHeight = 400;
const canvasWidth = 600;

export function resetBackground(ctx, color) { 
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

export function drawCircleByContext(ctx, centerX, centerY, radius, color) { 
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
}