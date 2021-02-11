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
	let name = (params === 1) ? 'You' : 'Dump Computer';
	let resultString = `this round resoult: YAAY ${name} Won.`;
	let div = document.querySelector('.round-result-div');
	div.textContent = resultString;	

}

/* ----------------------------------------------------------------- */

function showFinaleResult(params) {
	// some magic animation here.
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
		showFinaleResult(myScore, computerScore);
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