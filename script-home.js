
//put javescript in this file//

	$(document).ready(function(){

		 var button = $("cookedbutton");

		 button.on('click', function(){

			if (button.text() == "Tried this?") {
				button.html("Cooked!");
				alert("Well Done!");
			}
			else {
				button.html("Tried this?");
			}
		});

var audio=$("audiofunction");
	function play() {
		audio.play();
	}
	function pause() {
		audio.pause();
	}

var pausebutton = $("pausebutton");
	pausebutton.on("click", function(){
		pause();
	})

			$('#aisha-pic').mouseover(function() {
				$(this).attr('src', './Pictures/aisha-pic2.jpg');
			});

			$("#aisha-pic").mouseout(function(){
				$(this).attr('src', './Pictures/aisha-pic1.jpg');
			});



			$('#alice-pic').mouseover(function() {
				$(this).attr('src', './Pictures/alice-pic2.jpg');
			});

			$("#alice-pic").mouseout(function(){
				$(this).attr('src', './Pictures/alice-pic1.jpg');
			});

});

window.onscroll = function () {scrollFunction()};

function scrollFunction(){
	if (document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
} else {
	document.getElementById("myBtn").style.display = "none";
	}
}
 function topFunction(){
 	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;
}



