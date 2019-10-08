let angle = 10

let paint_mode = false

function setup() {


let canvas = createCanvas(700, 600)
canvas.parent("p5")


rect(0, 0, width, height)
angleMode(DEGREES)

//default color and stroke
	// fill(255, 0, 0, 100)
	// noStroke()
	stroke(0, 0, 0, 25)


}

function draw() {

	// ellipse(mouseX, mouseY, mouseX-10, mouseY+10)

	if (paint_mode == true) {
		// arc(mouseX, mouseY, 50, 50, angle, angle-100)
		// angle += 1

		line(0, 0, mouseX, mouseY)
		line(width, 0, mouseX, mouseY)
		line(0, height, mouseX, mouseY)
		line(width, height, mouseX, mouseY)
	}
}

function mousePressed() {

	paint_mode = true

}

function mouseReleased() {

	 paint_mode = false


}

function mouseClicked() {


}

function colorBlue() {

	stroke(0, 0, 255, 25)


}

function colorRed() {

	stroke(255, 0, 0, 25)


}