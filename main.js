var canvas = new fabric.Canvas('myCanvas')
height = 30;
width = 30;
x = 210;
y = 301;
player_object = "";
block_object = "";



function playyerimg() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: y,
            left: x
        });
        canvas.add(player_object);
    });



}
function getimage(getimg) {
    fabric.Image.fromURL(getimg, function (img) {
        block_object = img;
        block_object.scaleToWidth(width);
        block_object.scaleToHeight(height);
        block_object.set({
            top: y,
            left: x
        });
        canvas.add(block_object);
    });



}

window.addEventListener("keydown", mykeypressed)

function mykeypressed(e) {
    keypressed = e.keyCode
    console.log(keypressed)

    if (e.shiftKey == true && keypressed == "80") {
        console.log("p & shift")
        height = height + 10;
        width = width + 10;
        document.getElementById("Width").innerHTML = width;
        document.getElementById("height").innerHTML = height;
    }

    if (e.shiftKey == true && keypressed == "77") {
        console.log("m & shift")
        height = height - 10;
        width = width - 10;
        document.getElementById("Width").innerHTML = width;
        document.getElementById("height").innerHTML = height;
    }

    if (keypressed == '37') {
        left()
        console.log("left")
    }

    if (keypressed == '39') {
        right()
        console.log("right")
    }

    if (keypressed == '38') {
        up()
        console.log("up")
    }

    if (keypressed == '40') {
        down()
        console.log("down")
    }

    if (keypressed == '67') {
        getimage("cloud.jpg")
        console.log("c")
    }
    if (keypressed == '87') {
        getimage("wall.jpg")
        console.log("w")
    }
    if (keypressed == '89') {
        getimage("yellow_wall.png")
        console.log("yw")
    }
    if (keypressed == '85') {
        getimage("unique.png")
        console.log("u")
    }
    if (keypressed == '83') {
        getimage("trunk.jpg")
        console.log("t")
    }
    if (keypressed == '82') {
        getimage("roof.jpg")
        console.log("r")
    }
    if (keypressed == '76') {
        getimage("light_green.png")
        console.log("l")
    }
    if (keypressed == '68') {
        getimage("dark_green.png")
        console.log("d")
    }
    if (keypressed == '71') {
        getimage("ground.png")
        console.log("g")
    }
}
function left() {
    if (x >= 0) {
        x = x - width
        console.log("X=" + x + "," + "Y=" + y)
        console.log("width=" + width)
        canvas.remove(player_object)
        playyerimg()
    }
}

function right() {
    if (x <= 900) {
        x = x + width
        console.log("X=" + x + "," + "Y=" + y)
        console.log("width=" + width)
        canvas.remove(player_object)
        playyerimg()
    }
}

function up() {
    if (y >= 0) {
        y = y - height
        console.log("X=" + x + "," + "Y=" + y)
        console.log("width=" + width)
        canvas.remove(player_object)
        playyerimg()
    }
}

function down() {
    if (y <= 500) {
        y= y + height
        console.log("X=" + x + "," + "Y=" + y)
        console.log("width=" + width)
        canvas.remove(player_object)
        playyerimg()
    }
}
