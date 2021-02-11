let moves = ['rock', 'scissors', 'paper'];
let myScore = 0;
let computerScore = 0;

/* ----------------------------------------------------------------- */

function computerPlay() {
	// let move = ['rock', 'paper', 'scissors'];
	let i = Math.floor(Math.random() * 10 % 3);

	return (moves[i]);
}

/* ----------------------------------------------------------------- */

function playRound(playerSelection, computerSelection) {
	let winner = 0;
	// let playerSelection = playerSelection1.toLowerCase();
	// let computerSelection = computerSelection1.toLowerCase();
	// console.log(`computer selection is : ${computerSelection}`);
	// console.log(`player selection is : ${playerSelection}`);
	switch (playerSelection) {
		case 'rock': {
			switch (computerSelection) {
				case 'rock':
					winner = 0;
					break;
				case 'paper':
					{
						winner = -1;
						break;
					}
				case 'scissors': {
					winner = 1;
					break;
				}
				default:
					break;
			}
			break;
		}
		case 'paper': {
			switch (computerSelection) {
				case 'rock': {
					winner = 1;
					break;
				}
				case 'paper': {
					winner = 0;
					break;
				}
				case 'scissors': {
					winner = -1;
					break;
				}
				default:
					break;
			}
			break;
		}
		case 'scissors': {
			switch (computerSelection) {
				case 'rock':
					winner = -1;
					break;
				case 'paper':
					winner = 1;
					break;
				case 'scissors':
					winner = 0;
					break;
				default:
					break;
			}
			break;
		}
	}
	// console.log(winner);
	return (winner);
}

/* ----------------------------------------------------------------- */

function getPlayerSelection(btn) {
	return (moves[btn.id - 1])
}

/* ----------------------------------------------------------------- */


function displayWinner(currRoundWinner, myScore, computerScore) {
	let resultDiv = document.querySelector('.final-result-div');
	resultDiv.textContent = `total : ${myScore} - ${computerScore}`;
}

/* ----------------------------------------------------------------- */

function displayCurrRoundWinner(params) {
	let div = document.querySelector('.round-result-div');
	let para1 = document.createElement('p');
	let para2 = document.createElement('p');
	let name = (params === 1) ? 'You' : 'Dump Computer';

	para1.textContent = "Curr Round winner";
	para2.textContent = `${name}`;

	div.innerHTML = '';
	// console.log(div.innerHTML);`
	div.appendChild(para1);
	div.appendChild(para2);

}

/* ----------------------------------------------------------------- */

function showFinaleResult() {

	// clear the bloc
	const blocDiv = document.querySelector('.result-container');
	const namesDiv = document.querySelector('.score-names');
	blocDiv.innerHTML = '';
	namesDiv.innerHTML = '';
	// add win animation
	blocDiv.innerHTML = `
			<div class="gameOver-container">
				<img src="./imgs/tenor.gif" alt="Game Over">
				<button class="retryBtn">retry</button>
				<div class="result-board"></div>
			</div>
	`;
	const win = myScore === 5 ? 'You' : 'Dumb computer';
	const resDiv = document.querySelector('.result-board');
	resDiv.innerHTML = `
		<p> ${win} Won </p>
	`;
	// add retray button
	const retryBtn = document.querySelector('.retryBtn');
	retryBtn.addEventListener('click', () => {
		namesDiv.innerHTML = `
				<spane>You.</spane>
				<span>     VS     </span>
				<span>Dumb computer.</span>
		`;
		blocDiv.innerHTML = `
				<div class="round-result-div">
					Play a Round first!
				</div>
				<div class="final-result-div">
					0 - 0
				</div>
		`;	
		myScore = 0;
		computerScore = 0;
	});
}

/* ----------------------------------------------------------------- */

function game(btn) {
	const computerSelection = computerPlay();
	const playerSelection = getPlayerSelection(btn);
	let currRoundWinner = playRound(playerSelection, computerSelection);

	if (currRoundWinner === 1) {
		myScore++;
	} else if (currRoundWinner === -1) {
		computerScore++;
	}

	if (myScore === 5 || computerScore === 5) {
		showFinaleResult();
	} else {
		displayCurrRoundWinner(currRoundWinner);
		displayWinner(currRoundWinner, myScore, computerScore);
	}
}

/* ----------------------------------------------------------------- */

let btns = document.querySelectorAll('#buttons div');
displayWinner(0, 0, 0); // initialize the board;
btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		game(btn);
	});
});