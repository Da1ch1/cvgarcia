var cvs = document.getElementById('backgroundCanvas'),
context = cvs.getContext("2d");

var numDots = 100,
maxRad = 400,
minRad = 170,
radDiff = maxRad - minRad,
dots = [],
pairs = [],
PI = Math.PI,
centerPt = {x: 0, y: 0};

// Ajusta el tamaño del canvas para que cubra toda la ventana
function resizeHandler() {
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
centerPt.x = Math.round(cvs.width / 2);
centerPt.y = Math.round(cvs.height /2);
}

resizeHandler();
window.onresize = resizeHandler;

// Creación de puntos
for (let n = 0; n < numDots; n++) {
let currDot = {
    x: 0,
    y: 0,
    radius: minRad + Math.random() * radDiff,
    radiusV: 10 + Math.random() * 50,
    radiusVS: (1 - Math.random() * 2) * 0.015,
    radiusVP: Math.random() * PI,
    ang: (1 - Math.random() * 2) * PI,
    speed: (1 - Math.random() * 2),
    intensity: Math.round(Math.random() * 255),
    fillColor: "rgb(" + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ")"
};
dots.push(currDot);
}

// Parejas de puntos para conectar con líneas
for (let n = 0; n < numDots; n++) {
for (let ni = 0; ni < n; ni++) {
    pairs.push([n, ni]);
}
}

// Función para dibujar los puntos y conectarlos
function drawPoints() {
context.clearRect(0, 0, cvs.width, cvs.height);

// Actualización de la posición de los puntos
for (let n = 0; n < numDots; n++) {
    let currDot = dots[n];
    currDot.radiusVP += currDot.radiusVS;
    let radDiff = currDot.radius + Math.sin(currDot.radiusVP) * currDot.radiusV;
    currDot.x = centerPt.x + Math.sin(currDot.ang) * radDiff;
    currDot.y = centerPt.y + Math.cos(currDot.ang) * radDiff;
    currDot.ang += currDot.speed * radDiff / 20000;
}

let maxDist = Math.pow(100, 2);
pairs.forEach(pair => {
    let dot0 = dots[pair[0]];
    let dot1 = dots[pair[1]];
    let dist = Math.pow((dot1.x - dot0.x), 2) + Math.pow((dot1.y - dot0.y), 2);
    if (dist < maxDist) {
        let bright = Math.round(255 * (1 - dist / maxDist));
        let grad = context.createLinearGradient(dot0.x, dot0.y, dot1.x, dot1.y);
        grad.addColorStop(0, dot0.fillColor);
        grad.addColorStop(1, dot1.fillColor);
        context.strokeStyle = grad;
        context.lineWidth = 0.5;
        context.beginPath();
        context.moveTo(dot0.x, dot0.y);
        context.lineTo(dot1.x, dot1.y);
        context.stroke();
    }
});

requestAnimationFrame(drawPoints);
}

drawPoints();