var fb = document.getElementById("fb"),
	twitter = document.getElementById("twitter"),
	linkedin = document.getElementById("linkedin"),
	google = document.getElementById("google");

fb.addEventListener("click", function() {
	window.location = "https://www.facebook.com/";
});

twitter.addEventListener("click", function() {
	window.location = "https://twitter.com/";
});

linkedin.addEventListener("click", function() {
	window.location = "https://www.linkedin.com/feed/";
});

google.addEventListener("click", function() {
	window.location = "https://plus.google.com/";
});