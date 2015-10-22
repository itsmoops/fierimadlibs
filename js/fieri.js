function generate() {
	var restaurant = capitalize(document.getElementById("txtRestaurant").value);
	var cuisine = document.getElementById("txtCuisine").value;
	var city = capitalize(document.getElementById("txtCity").value);
	var state = capitalize(document.getElementById("txtState").value);
	var label = document.getElementById("txtMonologue");
	

	if (restaurant === "") {
		alert("Guy Fieri needs you to enter a restaurant!");
		return false;
	}
	else if (cuisine === "") {
		alert("Guy Fieri needs you to enter a cuisine type!");
		return false;
	}
	else if (city === "") {
		alert("Guy Fieri needs you to enter a city!");
		return false;
	}
	else if (state === "") {
		alert("Guy Fieri needs you to enter a state!");
		return false;
	}
	else {
		var madLib = getMadLib(restaurant, cuisine, city, state);
		label.innerText = madLib;
	}

	var audio = document.getElementById('audio1');
	if (audio.paused) {
        audio.play();
    }
    else{
        audio.currentTime = 0
    }
}

function capitalizeFirst(str) {
	return str.charAt(0).toUpperCase() + str.substr(1);
}

function capitalize(str) {
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
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
		"This is one of my recently deceased aunt's favorite places to chow down in",
		"So here I am, smack dab in the middle of",
		"If you know about this place, you've GOTTA be from",
		"When you think " + state + ", you probably think cajun food. Well here in",
		"If you're lookin' for chowder, you're in the wrong place. We're here in",
		"I'm here in",
		"I'm here with Kid Rock in",
		"Here I am with my main man, Steve from Smashmouth, and we're in",
		"Here on Triple D, we're all about classic American joints, well today I'm in",
		"It's Thanksgiving season here on Triple D, and I know what you're thinkin'. Well I'm here in",
		"When I'm thinkin' great grub, I'm not thinkin " + state + ", but I hear that's gonna change. I'm in"
	];
	var randomNum1 = Math.floor(Math.random() * fieriText1.length);
	
	var fieriText2 = [
		"where there's a",
		"to check out a spot where I hear they've got a",
		"where locals are sayin' there's a",
		"where I hear there's a",
		"where they've got a",
		"where rumor has it they've got a",
		"and then I find this place, where there's a",
		"the worst city in America, where locals tell me there's a",
		"a great family destination, to check out a",
		"right in the middle of nowhere, where I hear there's a"
	];
	var randomNum2 = Math.floor(Math.random() * fieriText2.length);

	var fieriText3 = [
		"funky little joint",
		"mom and pop team",
		"family run spot",
		"hole in the wall joint",
		"pair of Russian immigrants",
		"town favorite",
		"historic little spot with a " + cuisine + " twist",
		"place with tons of character",
		"tiny little dive",
		"joint that's right up my alley,",
		"big time flavor in a small time shack",
		"once homeless cowboy",
		"former hotel manager",
		"reformed drug dealer",
		"not-too-fancy, but definitely funky dive",
		"couple of white guys",
		"couple of children standing on top of each other wearing a trench coat",
		"former President of the United States",
		"funky haunted house with a " + city + " twist",
		"forclosed office building with a twist",
		"old-school lobster shack",
		"50 year old ski lodge",
		"traditional deli"
	];
	var randomNum3 = Math.floor(Math.random() * fieriText3.length);

	var fieriText4 = [
		"that decided to leave the corporate world, and instead cook up",
		"who's scratch makin'",
		"that's been crankin' out",
		"that's, you guessed it, home makin'",
		"doin' things their way, bustin' out",
		"hookin' locals up with",
		"that's not exactly what you'd expect, cookin' up",
		"where people are pilin' in for",
		"giving back to the community by churnin' out",
		"servin' up memories, and fryin' up",
		"pilin' up their plates with",
		"turnin' heads with",
		"puttin' a spin on",
		"scratch cookin'"
	];
	var randomNum4 = Math.floor(Math.random() * fieriText4.length);

	var fieriText5 = [
		"all the classics",
		"old school favorites",
		"comfort cravings",
		"real-deal comfort food",
		"homemade grub",
		"monster flavors",
		"big time portions",
		"huge portions",
		"bowls of steamy chowder",
		"all you can eat wings",
		"super tender bites",
		"out of control potatoes",
		"room temperature corn",
		"sauced up staples",
		"mayo-based pick-me-ups",
		"hand-crafted originals",
		"a mix of old and new",
		"perfectly crafted sliders",
		"stick-to-your-ribs bread",
		"giant turkey legs",
		"too many eggs",
		"money Russian dressing"
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
		"shut-me-up",
		"mouth-watering",
		"killer",
		"over 900 pounds of",
		"even better",
		"super legit",
		"rockstar",
		"super gangster",
		"absolutely money",
		"shut-the-front-door",
		"dynamite"
	];
	var randomNum6 = Math.floor(Math.random() * fieriText6.length);

	var fieriText7 = [
		"and the locals say it's better than ever",
		"that you just can't get anywhere else",
		"that's been done the same way for over 30 years",
		"and I can't wait to get inside",
		"that you can eat straight off a flip-flop",
		"that they've been doin' that way for over 65 years",
		"that comes with an extra side of food-lube",
		"covered in queso",
		"slathered in mayonnaise",
		"that the neighborhood just can't get enough of",
		"and they're open 24 hours a day",
		"that will have you ridin' the bus to Flavortown",
		"gone wild",
		"so fresh it'll slap ya",
		"that you won't soon forget",
		"that'll put you in a food coma"
	];
	var randomNum7 = Math.floor(Math.random() * fieriText7.length);

	var fieriText8 = [
		"welcome to",
		"this is",
		"let's check out",
		"locals know it as",
		"you are so gonna dig this, this is",
		"is your mouth watering yet? This is",
		"my mouth is watering, let's go inside and check it out, this is",
		"oh, and remember, bananas is good. This is",
		"we're gonna go and check out some home made " + cuisine + ". This is",
		"time for a taste of " + city + ". We're here at",
		"it's time to check out"
	];
	var randomNum8 = Math.floor(Math.random() * fieriText8.length);


	var finalText = fieriText1[randomNum1] + " " + city + ", " + state + ", " + 
	fieriText2[randomNum2] + " " + fieriText3[randomNum3] + " " + fieriText4[randomNum4] + " " + fieriText5[randomNum5] + " and " +
	fieriText6[randomNum6] + " " + cuisine + ", " + fieriText7[randomNum7] + ". " + capitalizeFirst(fieriText8[randomNum8]) 
	+ " " + restaurant + ".";
	
	return finalText;
}