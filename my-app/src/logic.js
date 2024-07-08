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

export class Path {
    constructor(canvasHeight, canvasWidth) { 


        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;

        this.centerX = canvasWidth / 2;
        this.centerY = canvasHeight / 2;

        this.ctx = null;
    }

    getX() { 
        return this.centerX;
    }

    getY() { 
        return this.centerY;
    }

    step() { 
        this.centerX = Math.floor(Math.random() * this.canvasWidth);
        this.centerY = Math.floor(Math.random() * this.canvasHeight);
    }

    setContext(context) { 
        this.ctx = context;
    }

    drawCircleHelper(radius, color) { 
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    drawCircle(radiusSize, borderSize, circleColor, borderColor) { 
        this.drawCircleHelper(radiusSize + borderSize, borderColor);
        this.drawCircleHelper(radiusSize, circleColor);
    }






}