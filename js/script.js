(function(){

		var initButton = document.querySelector(".btn-succes");
		var optionsField = document.querySelector(".game-options");
		var buttonsOption = optionsField.querySelectorAll("button");
		var textRound = document.querySelector(".game-output h3");
		var player = {
			name: '',
			score: 0,
			pick: ''
		};
		var computer = {
			name: 'Computer',
			score: 0,
			pick: ''
		};
		var round = 0;

		function newGame() {
			console.log('aaa');
			handleButton();
			round += 1;
			textRound.textContent = "Current Round" + " :" + round;
			computer.score = 0;
			computer.pick = "";
			player.score = 0;
			player.pick = "";
			player.name = prompt("Give your name");
			document.getElementById("playerName").textContent = player.name;
			
			for(var i = 0; i < buttonsOption.length; i++) {
				buttonsOption[i].style.opacity = 1;
				buttonsOption[i].removeAttribute("disabled");
			};
		};

		function playerPick(pick) {
			player.pick = pick;
			computerPick();
			compareResults();
		};

		function computerPick() {
			switch (Math.floor(Math.random() * 3)) {
				case 0:
				computer.pick = "rock";
				break;
				case 1:
				computer.pick = "paper";
				break;
				case 2:
				computer.pick = "scissor";
				break;
			};
		};

		function compareResults() {

			var gameResult;
			if(player.pick === computer.pick) {
				gameResult = "Remis!";
			} else if ( player.pick === "scissor" && computer.pick === "rock") {
				gameResult = "Computer wins!";
				computer.score++;
			} else if (player.pick === "rock" && computer.pick === "scissor") {
				gameResult = "Computer wins!";
				player.score++;
			} else if(player.pick === "paper" && computer.pick === "rock") {
				gameResult = "Player wins!";
				player.score++;
			} else if(player.pick === "rock" && computer.pick === "paper") {
				gameResult = "Computer wins!";
				computer.score++;
			} else if(player.pick === "scissor" && computer.pick === "paper") {
				gameResult = "Player wins!";
				player.score++;
			} else if(player.pick === "paper" && computer.pick === "scissor") {
				gameResult = "Computer wins!";
				computer.score++;
			};

			document.getElementById('computerPick').textContent = computer.pick;
			document.querySelector("#playerPick").textContent = player.pick;
			document.querySelector("#gameResult").innerHTML = gameResult;
			document.querySelector("#playerScore").textContent = player.score;
			document.querySelector("#computerScore").textContent = computer.score;

			if(player.score >= 10) {
				alert("Player wins whole round! Clicked 'Start New Game to start again'");
				for(var i = 0; i < buttonsOption.length; i++) {
				buttonsOption[i].setAttribute("disabled" ,true);
				};
			} else if (computer.score >= 10) {
				alert("Computer wins whole round! Click 'Start New Game' button to start again");
				for(var i = 0; i < buttonsOption.length; i++) {
				buttonsOption[i].setAttribute("disabled" ,true);
				};
			};
		};

		initButton.addEventListener('click', newGame, false);

		function handleButton() {
			for(var i = 0; i < buttonsOption.length; i++ ) {
				buttonsOption[i].addEventListener('click', function(e){
					target = e.currentTarget;
					var currentPick;
					if ( target.classList.contains("button-rock")) {
						currentPick = 'rock';
						playerPick(currentPick);
					} else if(target.classList.contains("button-paper")) {
						currentPick = 'paper';
						playerPick(currentPick);
					} else {
						currentPick = 'scissor';
						playerPick(currentPick);
					};
				}, false);
			};
		};
})();