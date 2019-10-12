class Wall {
  a: p5.Vector;
  b: p5.Vector;

  constructor(a: p5.Vector, b: p5.Vector) {
    this.a = a.copy();
    this.b = b.copy();
  }
  draw() {
    stroke(243, 134, 48);
    strokeWeight(4);
    line(this.a.x, this.a.y, this.b.x, this.b.y);

    noStroke();
    fill("white");
    [this.a, this.b].forEach(pt => {
      circle(pt.x, pt.y, 3);
    });
  }
  length(): number {
    return dist(this.a.x, this.a.y, this.b.x, this.b.y);
  }

  static createRandom() {
    const p1 = randomScreenPosition();
    const p2 = p1.copy().add(p5.Vector.random2D().mult(random(40, 400)));
    return new Wall(p1, p2);
  }
}
