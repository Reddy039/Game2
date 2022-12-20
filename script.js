'use strict'
// Selecting DOM elements
const checkBtn=document.querySelector('.check')
const againBtn=document.querySelector('.again')
const guessEle=document.querySelector('.guess')
const messageEle=document.querySelector('.message')
const scoreEle=document.querySelector('.score')
const highScoreEle=document.querySelector('.highscore')
const numberEle=document.querySelector('.number')
// Global required variables
let score = 20;
let highscore = 0;
// 1.Generate a secrete number
let secreteNumber=Math.trunc(Math.random()*20)+1
// numberEle.textContent=secreteNumber;
// 2.check btn functionalities (As it is the origin of the game)

checkBtn.addEventListener("click",function(){
// 2.1 Collect value from input ele
   const guessValue=Number(guessEle.value)
//  check if guess value is empty  
if(!guessValue) {
    messageEle.textContent="Guess the value";
    return;
}
// 2.2 Compare the secrete number and Guess value
if(guessValue===secreteNumber) {
    messageEle.textContent="Correct Guess 🎉"
    document.querySelector('body').style.backgroundColor="green"
    
    if(score>highscore){
        highscore=score
        document.querySelector('.highscore').textContent=highscore
    }
}
else if(guessValue < secreteNumber){
    messageEle.textContent="Too Low 📉"
    console.log(score);
    score=score-1
    document.querySelector('.score').textContent=score
}
else{
    messageEle.textContent="Too High 📈"
    score=score-1
    document.querySelector('.score').textContent=score
}
})
// again button functionalities
    againBtn.addEventListener('click',function(){
    score=20
    scoreEle.textContent=score
    document.querySelector('body').style.backgroundColor='black'
    messageEle.textContent="Start Guessing"
    secreteNumber=Math.trunc(Math.random()*20)+1
// numberEle.textContent=secreteNumber;   
guessEle=document.querySelector('.guess').value=''
})