let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function levelUp(){
    userSeq=[];
    level++;
    let h2 = document.querySelector("h2");
    h2.innerText=`Level: ${level}`;
    //random button choose
    let randIdx = Math.floor(Math.random()*3);
    let randCol = btns[randIdx];  
    let randBtn = document.querySelector(`.${randCol}`);
    console.log(level) 
    console.log(randIdx);
    console.log(randCol);
    gameSeq.push(randCol);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length)
            setTimeout(levelUp,1000);
    }
    else{
        let h2 = document.querySelector("h2");
        h2.innerHTML=`Game Over, Press any key key to start
        <br> Your highest score was: ${level-1}`;
        gameOver();
    }
}

function btnPress(){
    // console.log("Button Pressed");
    let btn = this;
    btnFlash(btn);
    let userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function gameOver(){
    level=0;
    started = false;
    gameSeq=[]; 
    userSeq=[];
    let body = document.querySelector('body');
    body.classList.add("bg");
    setTimeout(function(){
        body.classList.remove("bg");
    },500);
}

