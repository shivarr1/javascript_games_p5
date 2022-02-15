function Drop(x, y) {
    this.x = x;
    this.y = y;

    this.show = function () {
        fill(50, 0, 200);
        noStroke();
        ellipse(this.x, this.y, 8, 8);
    }

    this.move = function () {
        this.y -= 5;
    }
}