/* * * * * * * * * * *
 *                   *
 *   AUTH: hsuirad   *
 *   DATE: 05-19-20  *
 *                   *
 * * * * * * * * * * */

// LOBOFEROZ

let canvas = document.getElementById('board')
let c = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width= window.innerWidth;

document.addEventListener('keydown', function(e){
    if(e.key == " " && playing){
        dog.jump = true;
    }
})

document.addEventListener('keyup', function(e){
    if(e.key == " "){
        dog.jump = false;
    }
})


// play button
//backgroundFront.width*backScale*0.6, backgroundFront.height*backScale*0.3, playButt.width*backScale, playButt.height*backScale)

// how to play
//backgroundFront.width*backScale*0.6, backgroundFront.height*backScale*0.5, howToPlay.width*backScale, howToPlay.height*backScale)

// mute
//backgroundFront.width*backScale*0.93, backgroundFront.height*backScale*0.05, (mute?muteButt2:muteButt).width*backScale, (mute?muteButt2:muteButt).height*backScale)

document.addEventListener('click', function(e){
    if(e.clientX < backgroundFront.width*backScale*0.6+playButt.width*backScale
        && e.clientX > backgroundFront.width*backScale*0.6
        && e.clientY > backgroundFront.height*backScale*0.3
        && e.clientY < backgroundFront.height*backScale*0.3 + playButt.height*backScale){
            playing = true;
            gameSpeed = 5;
    }
    if(e.clientX < backgroundFront.width*backScale*0.6+howToPlay.width*backScale
        && e.clientX > backgroundFront.width*backScale*0.6
        && e.clientY > backgroundFront.height*backScale*0.5
        && e.clientY < backgroundFront.height*backScale*0.5 + howToPlay.height*backScale){
            alert('Press spacebar to jump, don\'t run into any obstacles or else the games over!!')
    }
    if(e.clientX < backgroundFront.width*backScale*0.93+muteButt.width*backScale
        && e.clientX > backgroundFront.width*backScale*0.93
        && e.clientY > backgroundFront.height*backScale*0.05
        && e.clientY < backgroundFront.height*backScale*0.05 + muteButt.height*backScale){
            mute = !mute;
    }
    console.log(e)
})


let backgroundFront = new Image();
let backgroundMid = new Image();
let backgroundBack = new Image();
let dogArr = new Array(5).fill(0);
let obstacle = new Image();
let playButt = new Image();
let muteButt = new Image();
let muteButtTwo = new Image();
let howToPlay = new Image();
let logo = new Image();

backgroundBack.src = 'resources/backlayerback.png';
backgroundMid.src = 'resources/middlelayerback.png';
backgroundFront.src = 'resources/frontlayerback.png';
obstacle.src = 'resources/obstacle.png';
muteButt.src = 'resources/mutebtn.png';
howToPlay.src = 'resources/howtoplay.png';
playButt.src = 'resources/playbtn.png'
logo.src = 'resources/logo.png';
muteButtTwo.src = 'resources/mutebtn2.png'

//c.drawImage(image, x, y);
//no scaling, just gonna have to choose the width size, if the height looks too ugly for it maybe add controls add the bottom or something

for(let i = 1; i < 6; i++){
    dogArr[i-1] = new Image();
    dogArr[i-1].src = `resources/dog${i}.png`
}

class Dog{
    constructor(x, y, num){
        this.x = x;
        this.y = y;
        this.dogNum = num;
        this.isMoving = true;
        this.dogForward = true;
        this.gameSpeedX = 5;
        this.jump= false;
        this.dy = 0;
        this.ascend = false;
        this.descend = false;
        this.vel = (-1 + Math.sqrt(1+4*obstacle.height*dogScale))/2;
    }

    draw(){
        c.beginPath();
        c.drawImage(dogArr[this.dogNum], this.x, this.y, dogArr[this.dogNum].width*dogScale, dogArr[this.dogNum].height*dogScale);
    }

    update(){
        if(this.isMoving){
            this.x+=gameSpeed;
        }

        if(this.x>canvas.width/3){
            this.isMoving = false;
        }

        if(this.dogForward){
            if(this.dogNum == 4){
                this.dogForward = false;
                this.dogNum--
            }
            else{
                this.dogNum++
            }
        }
        else{
            if(this.dogNum == 0){
                this.dogForward = true;
                this.dogNum++
            }
            else{
                this.dogNum--;
            }
        }

        // (x * (x + 1)) / 2 = 5
        // x^2 + x = 10
        // (-1 + sqrt(4*obstacle.height))/2


        if(this.dy <=0 &&this.jump && this.y >= (backScale*0.5)*backgroundFront.height-dogArr[0].height*dogScale-(this.vel*(this.vel+1)/2)){
            this.dy = -this.vel;
        }
        else if(this.y < (backScale*0.96)*backgroundFront.height-dogArr[0].height*dogScale && this.dy < Math.abs(this.vel)){
            this.dy++;
        }
        else if(this.dy == Math.abs(this.vel) || this.y >= (backScale*0.96)*backgroundFront.height-dogArr[0].height*dogScale){
            this.dy = 0;
            this.y = (backScale*0.96)*backgroundFront.height-dogArr[0].height*dogScale
        }

        if(this.y != (backScale*0.96)*backgroundFront.height-dogArr[0].height*dogScale){
            this.dogNum = 0;
        }

        obs.forEach(elem => {
            //console.log(dog.x + (dogScale*dogArr[0].width*(100/680)) + ":" + elem.x + (obstacle.width*dogScale*(85/255)) + "\n" + dog.x + "-" +elem.x)
            if(dog.x + (dogScale*dogArr[0].width*(100/680)) >= elem.x + (obstacle.width*dogScale*(85/255))
               && dog.x + (dogScale*dogArr[0].width*(100/680)) < elem.x + obstacle.width*dogScale-(obstacle.width*dogScale*((255-85-137)/255))
               && dog.y+((430/603)*dogScale*dogArr[0].height) > elem.y+(obstacle.height*dogScale*(242/392))){
                death();
            }
            if(dog.x + (dogScale*dogArr[0].width*((100+210)/688)) >= elem.x + (obstacle.width*dogScale*(85/255))
               && dog.x + (dogScale*dogArr[0].width*((100+210)/688)) < elem.x + obstacle.width*dogScale-(obstacle.width*dogScale*((255-85-137)/255))
               && dog.y+((430/603)*dogScale*dogArr[0].height) > elem.y+(obstacle.height*dogScale*(242/392))){
                death();
            }
        })

//width is 210 of the part that matters and whole is 688 wide and 100 forward
// 137 width whole is 255 and 85 forward, the base is 242 high and whole is 392

        this.y += this.dy;
        //this.gameSpeedX++;
        this.draw();
    }
}

class Obstacle{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    draw(){
        this.x-=gameSpeed;
        c.drawImage(obstacle, this.x, this.y+obstacle.height*dogScale/2, obstacle.width*dogScale, obstacle.height*dogScale)
    }
}

let pause = false;

let death = () => {
    pause = true;
    gameSpeed = 0;
    setTimeout(function(){
        distance = 0;
        dog = new Dog(backgroundFront.width*backScale*0.2, (backScale*0.96)*backgroundFront.height-dogArr[0].height*dogScale, 0)
        obs = []
        pause = false;
        gameSpeed = 5
        playing = false;
    }, 5000)
    
}

let backOneX = midOneX = frontOneX = 0;

let backScale = 5;
let dogScale = 0;

let dog;
let distance = 0;

let gameSpeed = 0;

let drawBack = () => {
    c.drawImage(backgroundBack, backOneX, 0, backgroundFront.width*backScale, backgroundFront.height*backScale)
    c.drawImage(backgroundBack, backOneX+backgroundFront.width*backScale, 0, backgroundFront.width*backScale, backgroundFront.height*backScale)
    c.drawImage(backgroundMid, midOneX, 0, backgroundFront.width*backScale, backgroundFront.height*backScale)
    c.drawImage(backgroundMid, midOneX+backgroundFront.width*backScale, 0, backgroundFront.width*backScale, backgroundFront.height*backScale)
    c.drawImage(backgroundFront, frontOneX, 0, backgroundFront.width*backScale, backgroundFront.height*backScale)
    c.drawImage(backgroundFront, frontOneX+backgroundFront.width*backScale, 0, backgroundFront.width*backScale, backgroundFront.height*backScale)
}


let toScore = val => {
    //00043
    return ("0" + (Math.round(val/20)+10000).toString().substring(1, 5));
}

let obs=[];

let highScore = 0;

let playing = false;
let mute = false;


let animate = () => {
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    if(playing){
        drawBack();
        for(let i = obs.length-1; i>=0; i--){
            if(obs[i].x < 0-obstacle.width){
                obs.shift();
            }
            else{
                obs[i].draw();
            }
        }

        pause?dog.draw():dog.update();
        pause?distance+=0:distance++;
        pause?gameSpeed=gameSpeed:gameSpeed+=0.001;

        if(distance > highScore){
            highScore = distance;
        }

        c.font = `${65*backScale}px Verdana`
        c.beginPath();
        c.fillStyle = 'white'
        c.fillText(`HI   ${toScore(highScore)}              ${toScore(distance)}`, backgroundFront.width*backScale*0.7, backgroundFront.height*backScale*(0.1))
        

        if(pause){
            c.font = `${150*backScale}px Verdana`
            c.beginPath();
            c.fillStyle = 'white'
            c.fillText(`Score: ${toScore(distance)}`, backgroundFront.width*backScale*0.35, backgroundFront.height*backScale*0.5)
        }

        if(obs.length < 3){
            obs.push(new Obstacle((backgroundFront.width*backScale*Math.random()+400)+backgroundFront.width*backScale*(obs.length+1), (backScale*0.96)*backgroundFront.height-dogArr[0].height*dogScale));
            
        }
        
        if(dog.x > canvas.width/3){
            backOneX-=gameSpeed/3;
            midOneX-=gameSpeed/2;
            frontOneX-=gameSpeed/1;
            if(Math.abs(backOneX) > (backgroundFront.width*backScale)){
                backOneX = 0;
            }
            if(Math.abs(midOneX) > (backgroundFront.width*backScale)){
                midOneX = 0;
            }
            if(Math.abs(frontOneX) > (backgroundFront.width*backScale)){
                frontOneX = 0;
            }
        }
    }
    else{
        drawBack();
        dog.draw();
        c.drawImage(logo, backgroundFront.width*backScale*0.1, backgroundFront.height*backScale*0.1, logo.width*backScale, logo.height*backScale)
        c.drawImage(playButt, backgroundFront.width*backScale*0.6, backgroundFront.height*backScale*0.3, playButt.width*backScale, playButt.height*backScale)
        c.drawImage(howToPlay, backgroundFront.width*backScale*0.6, backgroundFront.height*backScale*0.5, howToPlay.width*backScale, howToPlay.height*backScale)
        c.drawImage((mute?muteButtTwo:muteButt), backgroundFront.width*backScale*0.93, backgroundFront.height*backScale*0.05, (mute?muteButtTwo:muteButt).width*backScale, (mute?muteButtTwo:muteButt).height*backScale)
    }
}

let gameLoop;

window.onload = function(){
    backScale = canvas.width/backgroundFront.width;
    dogScale = backScale
    dog = new Dog(backgroundFront.width*backScale*0.2, (backScale*0.96)*backgroundFront.height-dogArr[0].height*dogScale, 0)
    gameLoop = setInterval(animate, 10);
}