var firstnames = [
    "Walker",
    "Tristan",
    "Aubrey",
    "Liam",
    "Hayden",
    "Dansby",
    "Zander",
    "Rhett",
    "Buford",
    "Deacon",
    "Duke",
    "Sonny",
    "Garland",
    "Earle",
    "Jefferson",
    "Judson",
    "Macon",
    "Mason",
    "Rufus",
    "Sterling",
    "Dallas",
    "Harper",
    "Hollis",
    "Landry",
    "Lee",
    "Memphis",
    "Raleigh",
    "Sawyer",
    "Tennessee",
    "Shelby",
    "Joey",
    "Ben",
    "Tyler",
    "Tristan",
    "Ro",
    "Jason",
    "Karl",
    "Ryan",
    "Jeren",
    "John",
    "Penn",
    "Drake",
    "Philip",
    "Bryan",
    "Nolan",
    "Matt",
    "Jordan",
    "Kyle",
    "Collin",
    "Brendan",
    "Will"];


var lastnames = [
    "Wilkes",
    "Montgomery",
    "Harper",
    "Anderson",
    "Alston",
    "Cash",
    "Butler",
    "McBride",
    "Jackson",
    "Carter",
    "Walker",
    "Reeves",
    "McGraw",
    "Ford",
    "Koch",
    "Colt",
    "Mellon",
    "Burnside",
    "Fairbanks",
    "Vanderbilt",
    "Stanford",
    "Bragg",
    "Pickett",
    "Ewell",
    "Armistead",
    "Abraham",
    "Bowden",
    "Buehler",
    "Chari",
    "Campbell",
    "Coleman",
    "Ellison",
    "Delay",
    "Ferguson",
    "Green",
    "Kendall",
    "Kilichowski",
    "McCarty",
    "Mundy",
    "Murfee",
    "Parker",
    "Pfeifer",
    "Reynolds",
    "Rogers",
    "Ruppenthal",
    "Sabino",
    "Sheffield",
    "Smith",
    "Spagnuolo",
    "Stone",
    "Toffey",
    "Wiel",
    "Wiseman",
    "Wright"

];




function playerName() {
    var fname = firstnames[Math.floor(Math.random() * firstnames.length)];
    var lname = lastnames[Math.floor(Math.random() * lastnames.length)];
    
    return fname + " " + lname;
}



function changePlayerName(){
	var testString = playerName();
	console.log(testString);
	document.getElementById('yourPlayerName').innerHTML = testString;
}