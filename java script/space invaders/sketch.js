var ship;
var aliens = [];
var drops = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();

    for (var i = 0; i < 6; i++) {
        aliens[i] = new Aliens(i * 80 + 80, 60);
    }
}

function draw() {
    background(2);
    ship.show();

    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
    }

    for (var i = 0; i < aliens.length; i++) {
        aliens[i].show();
    }
    for (var i = 0; i < aliens.length; i++) {
        if (dis(drops[i], aliens[i]) < 68) {
            console.log("strikes");
        }
    }
}

function keyPressed() {
    if (key === ' ') {
        var drop = new Drop(ship.x, height);
        drops.push(drop);
    }
    if (keyCode === RIGHT_ARROW) {
        ship.move(1);
    }
    if (keyCode === LEFT_ARROW) {
        ship.move(-1);
    }
}