
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
		})
	})
