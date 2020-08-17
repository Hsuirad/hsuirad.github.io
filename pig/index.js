let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let jump = false;
let unpress = false;
let pause = false;

let distance = 0


window.addEventListener('keypress', function(event){
    if(event.key == ' ' && unpress == true){
        jump = true;
        unpress = false;
    }
    if(event.key == 'p') pause = true;
})

window.addEventListener('keyup', function(event){
    if(event.key == " "){
        unpress = true;
    }
    if(event.key == 'u') pause = false;
})

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

//The rectangle should have x,y,width,height properties
var rect = {
    x:0,
    y:0,
    width:window.innerWidth,
    height:window.innerHeight
};
//Binding the click event on the canvas
window.addEventListener('onclick', function(evt) {
    jump = true;
});

window.addEventListener('touchstart', function(){
    jump = true
})

dx = 3
pdy = 0
let drawsizeup;
let trunk = new Image();
trunk.src = './pics/treetunk.png'
let treedown = new Image();
treedown.src = './pics/treecapdown.png';
let treeup = new Image();
treeup.src = './pics/treecap.png'

function Pipe(x, y, space){
    this.x = x;
    this.y = y;
    this.space = space;

    this.draw = () => {
        c.beginPath();
        c.fillStyle = "green";
        //c.fillRect(this.x, 0, canvas.width / 27, canvas.height);
        //c.fill();
        c.beginPath();
        c.fillStyle = "white";
        //c.fillRect(this.x - 5, this.y - this.space / 2, canvas.width / 26 + 10, this.space);
        drawsizeup = Math.round((this.y - this.space / 2 - 120) / 19);
        drawsizedown = Math.round((canvas.height + 19 - this.y - this.space) / 19);
        for(let i = 0; i < drawsizeup; i++){
            c.drawImage(trunk, this.x, i * 19);
        }
        for(let i = 0; i < drawsizedown; i++){
            c.drawImage(trunk, this.x, i * 19 + this.y + this.space);
        }
        c.drawImage(treedown, this.x - treedown.width / 2.5, (drawsizeup) * 19);
        c.drawImage(treeup, this.x - treedown.width / 2.5, this.y + this.space - drawsizedown - 50);
        c.fill();
    }

    this.update = () => {
        this.draw();

        if(pig.x >= 2 * canvas.width / 3){
            this.x -= dx;
        }
        else{
            this.x += 0;
        }
    }
}

gravity = .005;

let fps = 18;

let death = () => {
    dx = 0
    pdy = 0
    for(let i = 1; i < 100; i++){
        pipes[i - 1] = new Pipe(i * 400 + 200, Math.random() * canvas.height / 3 + canvas.height / 3, Math.random() * 100 + 150)
    }
	clearInterval(test)
	c.fillText(`You Scored: ${pig.score}`, canvas.width/2 - c.measureText(`You Scored: ${pig.score}`).width/2, canvas.height / 2);
setTimeout(function(){
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)
    pig.x = 10
    pig.y = canvas.height / 3
    jump = false;
    unpress = false;

    distance = 0
    dx = 3
    pdy = 0
    gravity = .005;
img = 0;
test = setInterval(animate, fps);}, 2000);
}

sources = ['./pics/piggy.png', './pics/piggy2.png', './pics/piggy3.png', './pics/dead.png']

images = [];

sources.forEach((element, index) => {
    images.push(new Image());
    images[index].src = sources[index];
});

img = 0;

function Pig(x, y){
    this.x = x;
    this.y = y;
    this.score = 0;

    this.draw = () => {
        c.beginPath();
        c.fillStyle = 'pink';
        //c.fillRect(this.x, this.y, 30, 30);
        c.drawImage(images[img], this.x, this.y);
        //c.fill();
	c.beginPath();
        c.font = '50px Verdana';
        c.fillStyle = 'white'
        c.fillText(`Score: ${this.score}`, canvas.width/2 - c.measureText(`Score: ${this.score}`).width/2, 50);


    }

    this.update = () => {
        this.draw();
        if(jump){
            pdy = -3;
            gravity = -2;
            jump = false
            img = 1
        }
        else if(!(gravity >= 0.002)){
            gravity += 0.5;
        }
        else{
            gravity += 0.005;
            img = 0;
        }

        if(pdy > 0){
            img = 0;
        }
        else if (-5 < pdy && pdy < 0){
            img = 1;
        }
        else if (pdy != 0){
            img = 2;
        }
        else{
            img = 3;
        }

        pdy += gravity;

        this.score = Math.floor((distance - 240) / 400)
        if(distance < 840){
            this.score = 0
        }
        distance += dx;

        if(pipes[this.score].x <= this.x + 96 && this.x <= pipes[this.score].x + 40){
            if(this.y <= (pipes[this.score].y - pipes[this.score].space / 2) || (this.y + 58) >= (pipes[this.score].y + pipes[this.score].space)){
                death();
            }
        }

        if(this.x < 2 * canvas.width / 3){
            this.x += dx
        }
        else{
            this.x += 0
        }
        this.y += pdy;
    }
}

let pig;
pipes = [];

let newgame = () => {
    for(let i = 1; i < 100; i++){
        pipes.push(new Pipe(i * 400 + 200, Math.random() * canvas.height / 3 + canvas.height / 3, Math.random() * 100 + 150));
    }


    pig = new Pig(10, canvas.height / 3);
}

newgame();

background = new Image();
background.src = './pics/jungle.png';
hdiff = canvas.height / background.height;
wdiff = canvas.width / background.width;

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.drawImage(background, 0, 0, canvas.width, canvas.height);

    !pause?pipes.forEach(element => {
        element.update();
    }):pipes.forEach(element => element.draw());
    pause?pig.draw():pig.update();
    dx += 0.001;
}
let test = setInterval(animate, fps);
