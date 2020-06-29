

function colorClock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

	if (hours <= 9){
  		hours = '0' + hours;
	}

	if (minutes <= 9){
  		minutes = '0' + minutes;
	}	

	if (seconds <= 9){
 		seconds = '0' + seconds; 
	}

	var hexColor = '#' + '00' + minutes + seconds;

	var clockFace = (hours + ' .° ' + minutes + ' .° ' + seconds);
	

	document.getElementById('clock').innerHTML = clockFace;
	document.body.style.background = hexColor;
	document.getElementById('clock').style.color = 'white';

	setTimeout(function(){
		colorClock();
	}, 1000);
	
	if (minutes === 00){
		document.getElementById('sheep').style.display = 'none';
		document.getElementById('alarm').style.display = 'block';
		document.getElementById('audio').play();
	 }
		
	else if (minutes === 30) {
		document.getElementById('sheep').style.display = 'block';
		document.getElementById('alarm').style.display = 'none';
		document.getElementById('audio').pause();
	}
	else {
		document.getElementById('sheep').style.display = 'none';
		document.getElementById('alarm').style.display = 'none';
		document.getElementById('audio').pause();
	}
}

colorClock();