function Aliens(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 60;

    this.show = function () {
        fill(255, 200, 100);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}