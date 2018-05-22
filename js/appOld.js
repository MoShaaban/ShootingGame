var zone2 = document.getElementById('zone2');
var zone1 = document.getElementById('zone1');
var gameOver = false;

if (zone2.addEventListener('click',function(e){
	if(!gameOver){
	var isRed = false;
	setInterval(function(){
		if(isRed){
			zone2.style.backgroundColor = "white";
			zone2.innerHTML = "<br><br>Winner";
			zone1.innerHTML = "<br><br>You Lose";
			zone1.style.backgroundColor = "gray";
		}else{
			zone2.style.backgroundColor = "red";
			zone2.innerHTML = "<br><br>Winner";
			zone1.innerHTML = "<br><br>You Lose";
			zone1.style.backgroundColor = "gray";
		}
		isRed = !isRed;
		gameOver = true;
		
	}, 500)

}})) {
}else if (zone1.addEventListener('click',function(e){
	if(!gameOver){
	var isRed = false;
	setInterval(function(){
		if(isRed){
			zone1.style.backgroundColor = "white";
			zone1.innerHTML = "<br><br>Winner";
			zone2.innerHTML = "<br><br>You Lose";
			zone2.style.backgroundColor = "gray";
		}else{
			zone1.style.backgroundColor = "red";
			zone1.innerHTML = "<br><br>Winner";
			zone2.innerHTML = "<br><br>You Lose";
			zone2.style.backgroundColor = "gray";
		}
		isRed = !isRed;
		gameOver = true;
	}, 500)
}})) {

}

