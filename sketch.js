let paint_mode = false
let angle = 10
let ellipse_mode = false
let x_mode = false
let arc_mode = false
let stroke_mode = false
let eraser_mode = false
let flower_mode = false


function setup() {

    // tell p5 to use the <div> tag you made in your html
    let canvas = createCanvas(700, 370)
    canvas.parent("p5")

    // draw frame, but leave room for the buttons on the left
    rect(50, 0, width-50, height)
    angleMode(DEGREES)

   //default color and stroke
    stroke(0, 0, 0, 25)

}



function draw() {


    if (mouseX >50 && mouseX <width-50 && mouseY >0 && mouseY <height && paint_mode == true) {


//xmode
        if (x_mode == true) {
            line(50, 0, mouseX, mouseY)
            line(width-50, 0, mouseX, mouseY)
            line(50, height, mouseX, mouseY)
            line(width-50, height, mouseX, mouseY)
        }

//ellipse
        if (ellipse_mode == true) {
            ellipse(mouseX, mouseY, mouseX-10, mouseY+10)
        }
//arc
        if (arc_mode == true) {
            arc(mouseX, mouseY, 50, 50, angle, angle-100)
            angle += 1
        }
//eraser
        push()
        if (eraser_mode == true) {
            ellipse_mode = false
            x_mode = false
            arc_mode = false
            stroke_mode = false
            fill(255)
            stroke(255)
            ellipse(mouseX, mouseY, 70, 70)
        }
        pop()

//flower
    push()
    if (flower_mode == true) {
        angleMode(RADIANS)
        translate(mouseX, mouseY);
        for (let i = 0; i < 10; i ++) {
        ellipse(0, 7, 8, 20);
        rotate(PI/5);
        }
    }
    pop()
}



    // make a button on the canvas 
    // use push and pop to isolate any changes from the rest of your code
    push()
    stroke(0)

    // make the colorbar area
    fill(246, 247, 241)
    rect(0, 0, 50, height)

    // make the white button
    fill(255)
    rect(10, 10, 30, 30)

    // make the grey button
    fill(171, 171, 171)
    rect(10, 50, 30, 30)

    // make the darkergrey button
    fill(140, 140, 140)
    rect(10, 90, 30, 30)

    // make the black button
    fill(0)
    rect(10, 130, 30, 30)

    // make the blue button
    fill(105, 210, 231)
    rect(10, 170, 30, 30)

    // make the lightblue button
    fill(167, 219, 216)
    rect(10, 210, 30, 30)

    // make the greengrey button
    fill(224, 228, 204)
    rect(10, 250, 30, 30)

    // make the pale orange button
    fill(243, 134, 48)
    rect(10, 290, 30, 30)

    // make the orange button
    fill(250, 105, 0)
    rect(10, 330, 30, 30)

    pop()

//right hand toolbar
    push()
    stroke(0)

    // make the toolbar area
    fill(246, 247, 241)
    rect(width-50, 0, 50, height)

    // make the ellipse
    fill(246, 247, 241)
    ellipse(width-25, 30, 30, 30)

    // make the x
    fill(246, 247, 241)
    line(width-40, 70, width-10, 90)
    line(width-10, 70, width-40, 90)

    //make the arc
    fill(246, 247, 241)
    arc(width-25, 130, 30, 30, angle, angle-100)

    //make a flower
push()
    angleMode(RADIANS)
    translate(674, 180);
    stroke(0);
    for (let i = 0; i < 10; i ++) {
    ellipse(0, 7, 8, 20);
    rotate(PI/5);
  }
pop()


    //eraser button
    stroke(180)
    fill(242, 184, 231)
    beginShape()
    vertex(665, 279)
    vertex(660, 283)
    vertex(667, 291)
    vertex(672, 286)
    vertex(665, 279)
    endShape()
    stroke(50)
    fill(50)
    beginShape()
    vertex(679, 261)
    vertex(690, 275)
    vertex(674, 289)
    vertex(663, 276)
    vertex(679, 261)
    endShape()
    textSize(10);
    textFont('Garamond');
    noStroke();
    fill(255);
    text('E', 674, 278)



    //stroke button
    textSize(18);
    textFont('Garamond');
    noStroke();
    fill(243, 134, 48);
    text('stroke', 652, 320)

    //fill button
    text('fill', 652, 350)

    pop()



}

function mousePressed() {
    paint_mode = true
}

function mouseReleased() {
    paint_mode = false
}

function mouseClicked() {

  print(int(mouseX), int(mouseY))
    // check to see if the mouse click was within the white button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
        if (stroke_mode == true) {
            stroke(255)
        } else {
            fill(255)
        }
    }

    // check to see if the mouse click was within the light grey button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 90) {
        if (stroke_mode == true) {
            stroke(171, 171, 171)
        } else {
            fill(171, 171, 171)
        }        
    }

    // check to see if the mouse click was within the dark grey button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 140) {
        if (stroke_mode == true) {
            stroke(140, 140, 140)
        } else {
            fill(140, 140, 140)
        } 
    }


    // check to see if the mouse click was within the black button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 190) {
         if (stroke_mode == true) {
            stroke(0)
        } else {
            fill(0)
        } 
    }

    // check to see if the mouse click was within the bright blue button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 240) {
         if (stroke_mode == true) {
            stroke(105, 210, 231)
        } else {
            fill(105, 210, 231)
        } 
    }

    // check to see if the mouse click was within the greenblue button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 210 && mouseY < 290) {
        if (stroke_mode == true) {
            stroke(167, 219, 216)
        } else {
            fill(167, 219, 216)
        }
    }

    // check to see if the mouse click was within the light green button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 250 && mouseY < 340) {
        if (stroke_mode == true) {
            stroke(224, 228, 204)
        } else {
            fill(224, 228, 204)
        }
    }

    // check to see if the mouse click was within the light orange button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 290 && mouseY < 390) {
        if (stroke_mode == true) {
            stroke(243, 134, 48)
        } else {
            fill(243, 134, 48)
        }
    }
    // check to see if the mouse click was within the orange button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 330 && mouseY < 440) {
        if (stroke_mode == true) {
            stroke(250, 105, 0)
        } else {
            fill(250, 105, 0)
        }
    }
    
    // ellipse
    if (mouseX > width-40 && mouseX < width-10 && mouseY > 15 && mouseY < 45) {
        if (ellipse_mode == false) {
            ellipse_mode = true
            eraser_mode = false
        } else {
            ellipse_mode = false
        }
    }

    // x
    if (mouseX > width-40 && mouseX < width-10 && mouseY > 65 && mouseY < 90) {
        if (x_mode == false) {
            x_mode = true
            eraser_mode = false
        } else {
            x_mode = false
        }
    }

    // arc
    if (mouseX > width-40 && mouseX < width-10 && mouseY > 113 && mouseY < 145) {
        if (arc_mode == false) {
            arc_mode = true
            eraser_mode = false
        } else {
            arc_mode = false
        }
    }
//stroke button
    if (mouseX > 652 && mouseX < 692 && mouseY > 306 && mouseY < 322) {
       stroke_mode = true
    }
//fill button
    if (mouseX > 652 && mouseX < 680 && mouseY > 335 && mouseY < 356) {
        stroke_mode = false
    }   

//eraser button
    if (mouseX > 656 && mouseX < 692 && mouseY > 255 && mouseY < 292) {
        if (eraser_mode == false) {
            eraser_mode = true
        } else {
            eraser_mode = false
                }  

    }

//flower button
    if (mouseX > width-40 && mouseX < width-10 && mouseY > 159 && mouseY < 198) {
            if (flower_mode == false) {
                flower_mode = true
                eraser_mode = false
            } else {
                flower_mode = false
            }
        }

}

function clearScreen() {
    print("this is a clear screen function")
    fill(255)
    rect(50, 0, width-50, height)

}

// call these functions from HTML 

function colorBlue() {
    stroke(0, 0, 255, 50)
}

function colorRed() {
    stroke(255, 0, 0, 50)
}

