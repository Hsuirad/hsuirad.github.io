let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

jump = false;
unpress = false;

distance = 0

window.addEventListener('keypress', function(event){
    if(event.key = ' ' && unpress == true){
        jump = true;
        unpress = false;
    }
})

window.addEventListener('keyup', function(event){
    if(event.key = " "){
        unpress = true;
    }
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
    var mousePos = getMousePos(canvas, evt);

    if (isInside(mousePos,rect)) {
        jump = true;
    }
    console.log('click')
}, false);

window.addEventListener('touchstart', function(){
    jump = true
})

dx = 3
pdy = 0
let drawsizeup;
let trunk = new Image();
trunk.src = 'treetunk.png'
let treedown = new Image();
treedown.src = 'treecapdown.png';
let treeup = new Image();
treeup.src = 'treecap.png'

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

let death = () => {
    dx = 0
    pdy = 0
}

sources = ['piggy.png', 'piggy2.png', 'piggy3.png', 'dead.png']

images = [];

sources.forEach((element, index) => {
    images.push(new Image());
    images[index].src = sources[index];
});

img = 0;

function Pig(x, y){
    this.x = x;
    this.y = y;

    this.draw = () => {
        c.beginPath();
        c.fillStyle = 'pink';
        //c.fillRect(this.x, this.y, 30, 30);
        c.drawImage(images[img], this.x, this.y);
        //c.fill();
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

        score = Math.floor((distance - 240) / 400)
        if(distance < 840){
            score = 0
        }
        distance += dx;

        c.beginPath();
        c.font = '50px Verdana';
        c.fillStyle = 'white'
        c.fillText(`Score: ${score}`, canvas.width / 2 - 150, 50);

        if(pipes[score].x <= this.x + 96 && this.x <= pipes[score].x + 40){
            if(this.y <= (pipes[score].y - pipes[score].space / 2) || (this.y + 58) >= (pipes[score].y + pipes[score].space)){
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

pipes = []

for(let i = 1; i < 100; i++){
    pipes.push(new Pipe(i * 400 + 200, Math.random() * canvas.height / 3 + canvas.height / 3, Math.random() * 100 + 150));
}


let pig = new Pig(10, canvas.height / 3);

background = new Image();
background.src = 'jungle.png';
hdiff = canvas.height / background.height;
wdiff = canvas.width / background.width;

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate);
    c.drawImage(background, 0, 0, canvas.width, canvas.height);

    pipes.forEach(element => {
        element.update();
    });
    pig.update();
    dx += 0.001;
}

animate();
