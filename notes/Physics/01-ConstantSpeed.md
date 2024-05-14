---
title: "Chapter 1: Constant Speed in 1D and 2D"
---

# Constant Speed in 1D and 2D

## Displacement

Displacement is the distance an object has moved from its initial position.

In a 1D plane, the object can only move forward or backward depending on the direction it is facing to. Assuming that the object is moving straight along the x-axis. The equation in getting the displacement will be the final position minus the initial position.

displacement = x-final - x-initial

In a 2D plane, the object can move in any direction. Meaning it will have a displacement in multiple directions. To simplify this, we can split the displacement into two components, the x-component and the y-component. The x-component is the displacement in the x-axis and the y-component is the displacement in the y-axis. The equation for the displacement in a 2D plane is:

x-displacement = x-final - x-initial

y-displacement = y-final - y-initial

In this case, if the object is 0 in either x or y, that means that the object has not moved the direction it is 0 in.

Assuming that both displacement is non zero, if we make a line using the x-displacement and y-displacement, it will create a triangle shape where the hypotenuse is the total displacement of the object. Using the Pythagorean theorem, we can get the total displacement of the object with the following equation:

total-displacement = sqrt(x-displacement^2 + y-displacement^2)

**Insert Visualizaion Here**

## Velocity

Whenever an object moves from one place to another, it will have a speed. This speed determines the amount of time it takes an object to move from its initial position to its final position. So we can create the equation as follows:

speed = distance / time

Where distance is the total distance the object has moved and time is the amount of time it took for the object to move from its initial position to its final position.

Velocity is the speed of an object in a given direction. Assuming that we place our object in a cartesian plane, we can split Velocity into x and y components. Where the Velocity in the x-component is its speed in the x-axis and the Velocity in the y-component is its speed in the y-axis.

Note that negative velocity does not mean that the object is slowing down. Since velocity has direction, there is a possibility that the object will move to the left. In the cartesian coordinate system, moving to the left means we are moving in the negative x-axis. So if the object is moving to the left, the x-component of the Velocity will be negative.

Below is an interactive example of how velocity works in a 2D plane.

Simulation of constant speed with velocity in X and Y axis

To find the velocity we can use the same equation we used for speed but we have to consider the direction of its displacement

velocity = displacement / time

<iframe src="https://editor.p5js.org/Nikko-Adrian-Pacleb/full/DxfRJgI3y" width="400" height="450"></iframe>

<script src="//toolness.github.io/p5.js-widget/p5-widget.js"></script>

<script type="text/p5">
    /**
  Parameters:
  DOUBLE/INT originX
  DOUBLE/INT originY
  DOUBLE/INT unitScale
  
  Extra Parameters: 
  BOOLEAN reversered
  BOOLEAN horizontalAxis
  BOOLEAN verticalAxis
**/
function coordinateSystem(originX, originY, unitScale, params) {
  const reversed = params.reversed === undefined ? "true" : params.reversed;
  const horizontalAxis =
    params.horizontalAxis === undefined ? "true" : params.horizontalAxis;
  const verticalAxis =
    params.verticalAxis === undefined ? "true" : params.verticalAxis;
  // Change origin position
  translate(originX, originY);

  /** Drawing Start **/
  push();
  strokeWeight(1);
  if (reversed === "true") {
    scale(1, -1);
  }
  /* Horizontal */
  if (horizontalAxis === "true") {
    let counter, posIndex;
    line(-width, 0, width, 0); // X Axis
    line(0, 0, 0, 5); // For position 0
    writeText(0, 0, 12, reversed);
    // To the left
    counter = 0;
    posIndex = 0;
    while (posIndex < width) {
      posIndex += unitScale;
      ++counter;
      line(-posIndex, 0, -posIndex, 5);
      writeText(-counter, -posIndex, 12, reversed);
    }
    // To the right
    counter = 0;
    posIndex = 0;
    while (posIndex < width) {
      posIndex += unitScale;
      ++counter;
      line(posIndex, 0, posIndex, 5);
      writeText(counter, posIndex, 12, reversed);
    }
  }
  /* Vertical */
  if (verticalAxis === "true") {
    let counter, posIndex;
    line(0, -height, 0, height); // X Axis
    line(0, 0, -5, 0); // For position 0
    writeText(0, -12, 0, reversed);

    if (reversed === "true") {
      // To negative
      counter = 0;
      posIndex = 0;
      while (posIndex < height) {
        posIndex += unitScale;
        ++counter;
        line(0, -posIndex, -5, -posIndex);
        writeText(counter, -12, -posIndex, reversed);
      }
      // To positive
      counter = 0;
      posIndex = 0;
      while (posIndex < height) {
        posIndex += unitScale;
        ++counter;
        line(0, posIndex, -5, posIndex);
        writeText(-counter, -12, posIndex, reversed);
      }
    } else {
      // To negative
      counter = 0;
      posIndex = 0;
      while (posIndex < height) {
        posIndex += unitScale;
        ++counter;
        line(0, -posIndex, -5, -posIndex);
        writeText(-counter, -12, -posIndex, reversed);
      }
      // To positive
      counter = 0;
      posIndex = 0;
      while (posIndex < height) {
        posIndex += unitScale;
        ++counter;
        line(0, posIndex, -5, posIndex);
        writeText(counter, -12, posIndex, reversed);
      }
    }
  }

  pop();
}

function writeText(stringText, x, y, reversed, unitScale) {
  push();
  textSize(12)
  textAlign(CENTER, CENTER);
  if (reversed == "true") {
    scale(1, -1);
  }
  text(stringText, x, y);
  pop();
}

let unitScale = 15

let posXi = 3
let posYi = 19.6

let velXi = 0
let velYi = 0

let accX = 0
let accY = -9.8

let totTime = 0
let dt = 0.025
let posX, posY

function setup() {
  frameRate(60)
  createCanvas(400, 400);
}

function draw() {
  background(220);
  coordinateSystem(20, 380, unitScale, {
  })
  scale(unitScale, -unitScale)
  strokeWeight(1 / unitScale)
  
  if(totTime < 10) {
    totTime += dt
    totTime = round(totTime, 3)
    posX = posXi + velXi * totTime + 0.5 * accX * totTime**2
    posX = round(posX, 3)
    posY = posYi + velYi * totTime + 0.5 * accY * totTime**2
    posY = round(posY, 3)
  }
  
  if(posY < 0) {
    totTime = 0
    posYi = posY
    velYi = 19.6
  }
  
  circle(posX, posY, 1)
  
  push()
  scale(1 / unitScale, -1 / unitScale)
  writeText(`Y: ${posY}`, 17 * unitScale, -23 * unitScale, "false")
  writeText(`Time: ${totTime}`, 17 * unitScale, -22 * unitScale, "false")
  pop()
}
</script>
