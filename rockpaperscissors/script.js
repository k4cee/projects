const resultDiv = document.getElementById('result');
const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = '';

        if (playerChoice === computerChoice) {
            result = 'It\'s a tie!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'You win!';
        } else {
            result = 'You lose!';
        }

        resultDiv.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    });
});
