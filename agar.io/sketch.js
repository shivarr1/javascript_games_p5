var blob;
var blobs = [];
var zoom = 1;

function setup() {
    createCanvas(600, 600);

    blob = new Blob(0, 0, 40);

    for (var i = 0; i <= 200; i++) {
        var x = random(-width * 2, width * 2);
        var y = random(-height * 2, height * 2);
        blobs[i] = new Blob(x, y, random(12, 16));
    }

}

function draw() {
    background(0);

    translate(width / 2, height / 2);
    var newzoom = 40 / blob.r;
    zoom = lerp(zoom, newzoom, 0.1);
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y);

    blob.show();
    blob.update();

    for (var i = blobs.length - 1; i >= 0; i--) {
        blobs[i].show();
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1);
        }
    }

}