// ===============================================================================
// LOAD DATA
// We are linking our routes to our data source.
// This data source hold information on friends.
// ===============================================================================

var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/tables", function(req, res) {
    res.json(friendData);
  });

    // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    
    
      var newFriend = req.body;

      var bestMatches = [];

      var match = {
      	name: "",
      	photo: "",
      	difference: "",
      };

      var newFriendName = newFriend.name;
      var newFriendPhoto = newFriend.photo;
      var newFriendScore = newFriend.scores;
      
      // Add new data to the existing friends data.
      //do this last so don't match with latest user??
      friendData.push(newFriend);
      
    
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the array while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];
    
    console.log(friendData);
  });
};