'Use strict';


let btnCheck = document.querySelector('.check');
// console.log(btnCheck);

let SecretNumber = Math.trunc(Math.random()* 20 + 1)
console.log(SecretNumber)

// document.querySelector('.number').textContent = SecretNumber
 

let Score = 20


btnCheck.addEventListener('click', function () {

  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

    //When there is no input
if (!guess) {

    document.querySelector('.message').textContent = '⛔ No number!  ';


    //When the output is correct
}else if (guess === SecretNumber){

    document.querySelector('.message').textContent = '😍 Correct number';

    document.querySelector('body').style.backgroundColor = 'Green'

    document.querySelector('.number').style.width = '30rem'

    document.querySelector('.number').textContent = SecretNumber


    //When the output is graeter
}else if (guess > SecretNumber){

    if (Score > 1){
        document.querySelector('.message').textContent = '💹 Too high!';
        Score--;
        document.querySelector('.score').textContent = Score
    }else{
        document.querySelector('.message').textContent = '😥 You lost the game';
        document.querySelector('.score').textContent = 0
    }


    //When the output is too low
}else if (guess < SecretNumber){

    if(Score > 1){
        document.querySelector('.message').textContent = '📉 Too low!';
        Score--;
        document.querySelector('.score').textContent = Score
    }else {
        document.querySelector('.message').textContent = '😥 You lost the game';
        document.querySelector('.score').textContent = 0
    }

  }

});


let again = document.querySelector('.again')

again.addEventListener('click', function(){

    document.querySelector('body').style.backgroundColor = 'black'

    document.querySelector('.message').textContent = 'Start Guessing😋!  ';

    document.querySelector('.number').style.width = '15rem'

    document.querySelector('.score').textContent = 20

    document.querySelector('.guess').value = ''


})