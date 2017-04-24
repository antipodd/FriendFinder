//Dependencies

var path = require("path");

module.exports = function(app) {
	//send user to the survey page
	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	//if no existing matching route is found then direct user to homepage
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
}