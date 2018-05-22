var model = {
	// array with players names
    players: ['Player 1', 'Player 2'],
	//initial value to start the game 
    gameOver: false,
    //initial score
    score: 0
}

var view = {
	// rendering players
	initRender: function (arr) {
		 playersNames = $('.playerName');
		for (var i = 0; i < playersNames.length; i++) {
			(function (pName) {
			$(pName).text(arr[i]);
			}(playersNames[i]))
			$('.countDown').text('Ready');
		}
	},
	gameStart: function (playersArr) {
		
		view.initRender(playersArr);
		 setTimeout(function() {
	    	$('.countDown').text('');
	    	model.gameOver = false;
	    	controler.shoot2();
	    	controler.shoot1();
	    }, 1000);
	
	},
	winnerRender: function (winnerN) {
		if (winnerN === 1) {
			$('#name1').text('Player 1 wins');
		}else{
			$('#name2').text(winnerN + ' Wins');
		}
	}
}

var controler = {
	// starting the game by rendering players
	init: (function (fun) {
		 fun(model.players); 
	}(view.gameStart)),
	shoot2: function () {
		 $('#zone2').on('click', function (e) {
			e.preventDefault();
			if (model.gameOver === false) {
				model.gameOver = true;
				view.winnerRender(model.players[1]);
				$('#playAgain').toggleClass( "playAgain" );
				$('#score').toggleClass( "playAgain" );
				model.score = ++model.score;
				$('#scoreCount').text(model.score);
			}
		}) 
	},
	shoot1: function () {
	    var rand = Math.round(Math.random() * (500 - 100)) + 100;
	    setTimeout(function() {
	    	if (model.gameOver === false) {
	            model.gameOver = true;
	            view.winnerRender(1);
	            $('#playAgain').toggleClass( "playAgain" );
				$('#score').toggleClass( "playAgain" );
	        }
	    }, rand);
	},
	reinit: 
		$('button').on('click', function (e) {
			$('#playAgain').toggleClass( "playAgain" );
				$('#score').toggleClass( "playAgain" );
			 view.gameStart(model.players);
		})
}

