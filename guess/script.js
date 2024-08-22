/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message'.textContent='You guessed correctly!! Congratulations!');

document.querySelector('.number').textContent= 13;
document.querySelector('.score').textContent= 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/let score = 20;
const number = Math.trunc(Math.random()*20)+1;
document.querySelector('.check').addEventListener
document.querySelector('.check').addEvenetListener
('click', function(){
  console.log(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess){
    document.querySelector('.message').textContent = "No Number !!"
  }
  else if(guess=== secretNumber) {
    if(score > 0)
    document.querySelector('.message').textContent = "Correct !! You win !"

  
  else if (guess > secretNumber) {
    document.querySelector('.message').textContent= " Too high ! Try going a little lower..."
  score--;
  }
  else if (guess < secretNumber) {
    document.querySelector('.message').textContent = "Too low ! Try going a little higher..."
    score--;
  }
}
else {document.querySelector('.message').textContent ="You lost the game !!"}
});


