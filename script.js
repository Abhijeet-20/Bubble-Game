function MakeBubble(){
var clutter = "";
for(var i =0;i<=143;i++){
    var num = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${num}</div>`;
}
document.querySelector('.hero').innerHTML = clutter;
}
MakeBubble();

var timer = 20;
function runTimer(){
    var timerstop =  setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerVal').innerHTML = timer;
        }else{
            clearInterval(timerstop);
            document.querySelector('.hero').innerHTML = `<h1>Game Over<br>Score is ${score}</h1><button id="btn" onclick="reload()">Restart</button>`;
        }
    },1000);
}
runTimer();

var hitnum = 0;
function hitValue(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').innerHTML = hitnum ;
}
hitValue();

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector('#scoreVal').innerHTML = score;
}

document.querySelector('.hero').addEventListener('click',function(dets){
    var ClickNum = Number(dets.target.textContent);
    if(ClickNum === hitnum){
        increaseScore();
        MakeBubble();
        hitValue();
    }
});

function reload(){
    window.location.reload();
}