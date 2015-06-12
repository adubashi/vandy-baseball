var images = [
	"armistead.jpg",
	"butler.jpg",
	"capote.jpg",
	"davis.jpg",
	"faulkner.jpg",
	"furness.jpg",
	"jackson.jpg",
	"longstreet.jpg",
	"morgan.jpg",
	"shoeless.jpg",
	"swanson.jpg",
	"frost.jpg"
];


function changeImage(){
	var directory = "Images/";
	var file = images[Math.floor(Math.random() * images.length)];
	
	var netFile = directory + file; 
	console.log(netFile);
	document.getElementById("playerimage").src= netFile;

}