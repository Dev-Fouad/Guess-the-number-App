'Use strict';

let btnCheck = document.querySelector('.check');
console.log(btnCheck);

let SecretNumber = Math.trunc(Math.random()* 20 + 1)
// console.log(SecretNumber)

// document.querySelector('.number').textContent = SecretNumber
 

let Score = 20
let highscore = 0

// document.querySelector('.number').textContent = SecretNumber


document.querySelector('.message').textContent = 'Start Guessing😋!  ';

let displayMessage = function(message){

    document.querySelector('.message').textContent = message;
}

btnCheck.addEventListener('click', function () {

let guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

//When there is no input
if (!guess) {

    document.querySelector('.message').textContent = '⛔ No number!  ';


//When the output is correct
}else if (guess === SecretNumber){

    document.querySelector('.message').textContent = '😍 Correct number';
 
    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'

    document.querySelector('.number').textContent = SecretNumber

    if(Score > highscore){

        highscore = Score
        document.querySelector('.highscore').textContent = highscore

    }

}//When the output is not equal to Secret Number
else if ( guess !== SecretNumber){


    if (Score > 1){

        displayMessage(guess > SecretNumber?  '💹 Too high!':  '📉 Too low!');

        Score--;

        document.querySelector('.score').textContent = Score

}   else{

        document.querySelector('.message').textContent = '😥 You lost the game';

        document.querySelector('.score').textContent = 0}
}


})


let again = document.querySelector('.again')

again.addEventListener('click', function(){

    SecretNumber = Math.trunc(Math.random()* 20 + 1)

    document.querySelector('body').style.backgroundColor = '#222'

    document.querySelector('.message').textContent = 'Start Guessing😋!  ';

    document.querySelector('.number').style.width = '15rem'

    document.querySelector('.score').textContent = 20

    document.querySelector('.guess').value = ''

    document.querySelector('.number').textContent = '?'

})
