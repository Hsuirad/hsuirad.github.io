canvas.width = document.querySelector('nav').clientWidth;

let offset = document.querySelector('nav').clientHeight;
canvas.height = document.getElementById("codething").clientHeight+offset

let mx = 0;
let my = 0;

let scaleX = canvas.width/100;
let scaleY = scaleX
let pause = false;

document.addEventListener("click", event => {
    mx = event.clientX;
    my = event.clientY-offset;
    mx = Math.floor(mx/scaleX);
    my = Math.floor(my/scaleY);
    cubes[my][mx].filled = !cubes[my][mx].filled;
})

window.addEventListener("resize", () => {
    canvas.height = document.getElementById("codething").clientHeight
    canvas.width = window.innerWidth
    offset = document.querySelector('nav').clientHeight;
    scaleY = scaleX = canvas.width/100;
})

document.onkeydown = e => {
    e.key == 'p'?pause = true:pause=false;
}

class Cube{
    constructor(x, y, filled){
        this.x = x;
        this.y = y;
        this.filled =(filled>0.5?true:false);
        this.neighbors = 0;
    }

    draw = () => {
        c.fillStyle = 'rgba(0, 0, 0, 0.5)'
        this.filled?c.fillRect(this.x*scaleX, this.y*scaleY+offset, scaleX, scaleY):null;
    }

    update = () => {
        if(this.neighbors > 3 || this.neighbors < 2){
            this.filled = false;
        }
        else if(this.neighbors == 3){
            this.filled = true;
        }

        this.draw();
    }

    getNeighbors = () => {
        this.neighbors = 0;
        for(let z = (this.y!=0?-1:0); z <= (this.y!=cubes.length-1?1:0); z++){
            for(let m = (this.x!=0?-1:0); m <= (this.x!=cubes[0].length-1?1:0); m++){
                if(cubes[this.y+z][this.x+m].filled == true){
                    this.neighbors++;
                }
            }
        }
        if(cubes[this.y][this.x].filled) this.neighbors--;
    }
}

c.clearRect(0, 0, canvas.width, canvas.height);

let numOfBlocks = Math.floor(canvas.width/scaleX*canvas.height/scaleY)

let cubes = new Array(Math.floor(canvas.height/scaleY));

for(let i =0; i < cubes.length;i++){
    cubes[i]=new Array(Math.floor(canvas.width/scaleX))
}

for(let i = 0; i < Math.floor(canvas.height/scaleY); i++){
    for(let j = 0; j < Math.floor(canvas.width/scaleX); j++){
        cubes[i][j]=(new Cube(j, i, (Math.round(Math.random()*0.7))))
    }
}


cubes.forEach(e => e.forEach(i => i.draw()));

let animate = () => {
    offset = document.querySelector('nav').clientHeight;
    canvas.height = document.getElementById("codething").clientHeight+offset
    c.clearRect(0, 0, canvas.width, canvas.height)
    if(!pause){
        cubes.forEach(e => e.forEach(i => i.getNeighbors()));
        cubes.forEach(e => e.forEach(i => i.update()));
    }
    else{
        cubes.forEach(e => e.forEach(i => i.draw()));
    }
}

let interval = setInterval(animate, 70);
