var data = require("../data.json");

exports.addFriend = function(request, response) {   
	// Your code goes here
	// console.log("Here");
	var name = request.query.name;
	var desc = request.query.description;
	// console.log(name + " " + desc);
	var img = "https://thispersondoesnotexist.com/image";
	var newFriend = {
		name : name,
		description: desc,
		imageURL: img
	}
	data.friends.push(newFriend);
	// console.log(data);
	response.redirect('/');
}