'use strict'
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('scrore--1');
constdiceEl = document.querySelector('dice');
 
score0El.TextContent = 0;
score1El.textVpntent = 0;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

diceEl.classList.add('hidden');
btnRoll;addEventListener('click',function (){
    const dice = Math.trunc(Math.random()*6) + 1
    console.log(dice);
    diceEl.classlist.remove('hidden');
    diceEl.src = 'dice-${dice}.png';
    if(dice !== 1){
        currentScore += dice;
        document.getElementById(
            'current--${activeplayer}'
        ).textContent = currentScore;

    } else {
       document.getElementById('current--${activePlayer').textContent =0;
       currentScore =0;
       activePlayer = activePlayer === 0? 1 : 0;
    }
});