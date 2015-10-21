function generate() {
	var restaurant = capitalize(document.getElementById("txtRestaurant").value);
	var cuisine = capitalize(document.getElementById("txtCuisine").value);
	var city = capitalize(document.getElementById("txtCity").value);
	var state = capitalize(document.getElementById("txtState").value);
	var label = document.getElementById("txtMonologue");
	

	if (restaurant === "") {
		alert("Guy Fieri needs you to enter a restaurant");
		return false;
	}
	else if (cuisine === "") {
		alert("Guy Fieri needs you to enter a cuisine type");
		return false;
	}
	else if (city === "") {
		alert("Guy Fieri needs you to enter a city");
		return false;
	}
	else if (state === "") {
		alert("Guy Fieri needs you to enter a state");
		return false;
	}
	else {
		var madLib = getMadLib(restaurant, cuisine, city, state);
		label.innerText = madLib;
	}
}

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.substr(1);
}

function getMadLib(restaurant, cuisine, city, state) {
	var fieriText1 = [
		"So I'm here in",
		"So I just rolled up in",
		"Here I am in",
		"I just pulled up to",
		"Here's one for ya, I'm in",
		"Stop me if you've heard this one before. I'm here in",
		"So here I am, just outside of",
		"So here we are in",
		"It's great rollin' the 67' around here, I'm south of",
		"I almost ran out of gas, and wound up here, in a funky little town called",
		"How cool is this story? Here I am, just west of",
		"This is one of my aunt's favorite places to chow down in",
		"So here I am, smack dab in the middle of",
		"If you know about this place, you've GOTTA be from",
		"When you think " + state + ", you probably think cajun food. Well here in",
		"If you're lookin' for chowder, you're in the wrong place. We're here in"
	];
	var randomNum1 = Math.floor(Math.random() * fieriText1.length);
	
	var fieriText2 = [
		"where there's a",
		"to check out a spot where I hear they've got a",
		"where locals are sayin' there's a",
		"where I hear there's a",
		"where they've got a",
		"where rumor has it they've got a",
		"and then I find this place, where a"
	];
	var randomNum2 = Math.floor(Math.random() * fieriText2.length);

	var fieriText3 = [
		"funky little joint",
		"mom and pop team",
		"family run spot",
		"hole in the wall joint",
		"pair of Russian immigrants",
		"town favorite",
		"historic little spot",
		"place with tons of character",
		"tiny little dive",
		"joint that's right up my alley,",
		"big time flavor in a small time shack",
		"once homeless cowboy",
		"former hotel manager",
		"reformed drug dealer",
		"not-too-fancy, but definitely funky dive"
	];
	var randomNum3 = Math.floor(Math.random() * fieriText3.length);

	var fieriText4 = [
		"that decided to give up the corporate life to cook up",
		"who's scratch makin'",
		"that's been crankin' out",
		"that's, you guessed it, home makin'",
		"doin' things their way, bustin' out",
		"hookin' locals up with",
		"that's not exactly what you'd expect, cookin' up"
	];
	var randomNum4 = Math.floor(Math.random() * fieriText4.length);

	var fieriText5 = [
		"all the classics",
		"old school favorites",
		"comfort cravings",
		"real deal comfort food",
		"homemade grub",
		"monster flavors",
		"big time portions",
		"huge portions"
	];
	var randomNum5 = Math.floor(Math.random() * fieriText5.length);

	var fieriText6 = [
		"real deal",
		"off the hook",
		"outta bounds",
		"absolutely bananas",
		"super old school",
		"done from scratch",
		"by the book",
		"unique",
		"hand-made",
		"bomb-dot-com",
		"beyond flakey",
		"melt in your mouth",
		"shut me up",
		"mouth-watering",
		"killer",
		"over 900 pounds of"
	];
	var randomNum6 = Math.floor(Math.random() * fieriText6.length);

	var fieriText7 = [
		"and the locals say it's better than ever",
		"that you just can't get anywhere else",
		"that's been done the same way for over 30 years",
		"and I can't wait to get inside"
	];
	var randomNum7 = Math.floor(Math.random() * fieriText7.length);


	var fieriText8 = [
		"welcome to",
		"this is",
		"let's check out",
		"locals know it as",
		"you are so gonna dig this, this is",
		"is your mouth watering yet? This is"
	];
	var randomNum8 = Math.floor(Math.random() * fieriText8.length);


	var finalText = fieriText1[randomNum1] + " " + city + ", " + state + ", " + 
	fieriText2[randomNum2] + " " + fieriText3[randomNum3] + " " + fieriText4[randomNum4] + " " + fieriText5[randomNum5] + " and " +
	fieriText6[randomNum6] + " " + cuisine + ", " + fieriText7[randomNum7] + ". " + capitalize(fieriText8[randomNum8]) 
	+ " " + restaurant + ".";
	
	return finalText;
}