
//put javescript in this file//

$(document).ready(function(){

		var button = $('.cookedbutton');

			button.on('click', function(){

			var thisButton = $(this);

  				if (thisButton.text() == "Tried This?") {
    				thisButton.html("Cooked!");
    				thisButton.css('background-color', '#FF3399');
  	}
		else {
    	thisButton.html("Tried This?");
    	thisButton.css('background-color', 'darkseagreen');
  	}
		});


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

			$('#rebecca-pic').mouseover(function() {
				$(this).attr('src', './Pictures/rebecca-pic2.jpg');
			});

			$("#rebecca-pic").mouseout(function(){
				$(this).attr('src', './Pictures/rebecca-pic1.jpg');
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
