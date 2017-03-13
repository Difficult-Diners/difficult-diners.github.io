
//put javescript in this file//

	$(document).ready(function(){

		 var button = $(".cookedbutton");

		 button.on('click', function(){

			if (button.text() == "Tried this?") {
				button.html("Cooked!");
				alert("Well Done!");
			}
			else {
				button.html("Tried this?");
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

});
