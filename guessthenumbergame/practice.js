let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

document.getElementById('submitGuess').addEventListener('click', function(){
    const playerGuess = Number(document.getElementById('guess').value);

    if (playerGuess === randomNumber){
        alert("YOU WON!")
        document.getElementById('guess').disabled = true;
        document.getElementById('submitGuess').disabled = true
    } else if (playerGuess > randomNumber){
        alert("Too high :(")
    } else {
        alert('Too Low D:')
    }
    attempts++;
    if (attempts >= maxAttempts){
        alert('game over... The number was ' + randomNumber);
        document.getElementById('guess').disabled = true;
        document.getElementById('submitGuess').disabled = true
    }
});
