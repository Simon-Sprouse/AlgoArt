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

function hsvToRgb(h, s, v) {

    let r, g, b;

    s /= 100;
    v /= 100;

    let c = v * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = v - c;

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    } else {
        r = 0; g = 0; b = 0;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return [ r, g, b ];
}

export class Path {
    constructor(canvasHeight, canvasWidth) { 


        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;

        this.centerX = canvasWidth / 2;
        this.centerY = canvasHeight / 2;

        this.ctx = null;

        // I should un-hardcode this at some point
        // colors now stored in hsv
        this.circleColor = [10, 100, 100];
        this.borderColor = [0, 0, 100];

        this.colorShiftUp = false;
    }

    setColor(circleColor, borderColor) { 
        this.circleColor = circleColor;
        this.borderColor = borderColor; 
    }

    setSize(radiusSize, borderSize) { 
        this.radiusSize = radiusSize;
        this.borderSize = borderSize; 
    }

    setContext(context) { 
        this.ctx = context;
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

    stepClose() { 
        const magnitude = 20;
        const direction = Math.random() * 2 * Math.PI;

        const dX = magnitude * Math.cos(direction);
        const dY = magnitude * Math.sin(direction);

        const newX = this.centerX + dX;
        const newY = this.centerY + dY;

        if (newX > 0 && newX < canvasWidth) { 
            this.centerX = newX;
        }

        if (newY > 0 && newY < canvasHeight) { 
            this.centerY = newY;
        }
    }

    shiftColor() { 

        if (this.colorShiftUp == true) { 
            if (this.circleColor[0] == 359) { 
                this.colorShiftUp = false;
                this.circleColor[0] -= 1;
            }
            else { 
                this.circleColor[0] += 1;
            }
            
        }
        else { 
            if (this.circleColor[0] == 0) { 
                this.colorShiftUp = true;
                this.circleColor[0] += 1;
            }
            else { 
                this.circleColor[0] -= 1;
            }
        }

    }

   
    // still takes rgb color
    drawCircleHelper(radius, color) { 
        this.ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    drawCircle() { 

        this.drawCircleHelper(this.radiusSize + this.borderSize, hsvToRgb(...this.borderColor));
        this.drawCircleHelper(this.radiusSize, hsvToRgb(...this.circleColor));
    }






}