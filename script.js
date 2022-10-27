'Use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '😍 Correct number';

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent= 10
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// let guess = document.querySelector('.guess');
// console.log(guess);


let btnCheck = document.querySelector('.check');
// console.log(btnCheck);

let number = Math.trunc(Math.random()* 20 + 1)
console.log(number)

let SecretNumber = document.querySelector('.number').textContent = number
console.log(SecretNumber) 

let Score = 20


btnCheck.addEventListener('click', function () {

  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //When there is no input
    document.querySelector('.message').textContent = '⛔ No number!  ';
  }else if (guess === SecretNumber){
    //When the output is correct
    document.querySelector('.message').textContent = '😍 Correct number';
  }else if (guess > SecretNumber){
    //When the output is graeter
    document.querySelector('.message').textContent = '💹 Too high!';
    Score--;
    document.querySelector('.score').textContent = Score
  }else if (guess < SecretNumber){
    //When the output is lesser
    document.querySelector('.message').textContent = '📉 Too low!';
  }

});
