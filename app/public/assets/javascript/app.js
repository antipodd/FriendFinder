$(document).ready(function() {

	$("#submit").on("click", function(){
		event.preventDefault();
		var newFriend = {
		    name: $("#name").val().trim(),
		    photo: $("#photo").val().trim(),
		    scores: [$("#q1").val().trim(), $("#q2").val().trim(), $("#q3").val().trim(), $("#q4").val().trim(), $("#q5").val().trim(), $("#q6").val().trim(), $("#q7").val().trim(), $("#q8").val().trim(), $("#q9").val().trim(), $("#q10").val().trim()]
		}

		
		var currentURL = window.location.origin;

		//post the newFriend information
		$.post(currentURL + "/api/new", newFriend) //why doesn't "/survey" work?
		.done(function(data) {
			
			console.log(data)
			// Get the match from the AJAX post (data) and add to the modal
			if (data.length === 1) {
	    		$("#matchName").text(data[0].name);
	    		$("#matchImg").attr("src", data[0].photo);

		    	// Toggle the modal to appear
		    	$("#resultsModal").modal("toggle");
		    } else if (data.length > 1) {
		    	$("#matchName").text(data[0].name);
	    		$("#matchImg").attr("src", data[0].photo);
	    		for (var i = 1; i < data.length; i++) {
	    			var matchName = $("<h2>");
	    			matchName.text(data[i].name);
	    			$(".modal-body").append(matchName);
	    			var matchImg = $("<img>");
	    			matchImg.attr("src", data[i].photo);
	    			$(".modal-body").append(matchImg);
	     		}
	     		$("#resultsModal").modal("toggle");
		    }
		})

	});
});