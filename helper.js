var displayTweet = function(collection, index, $destination) {
    var tweet = collection[index];
    var tweetJPG = '<img src="head-s.jpg" alt="bird">';
    var user = '<a href="timeline.html?name=' + tweet.user + '"><div class="user"><span>' + tweet.user + '</span> @' + tweet.user + '</div></a>';
    var time = '<div class="time">' + tweet.created_at + '</div>';
    var tweet = '<div class="tweet">' + tweet.message + '</div>';
    var tweetBlock = '<div class="tweet-block">' + tweetJPG + user + time + tweet + '</div>';
    $destination.prepend(tweetBlock);
};

var updateTweet = function(collection, index, $destination) {
    while(index < collection.length) {
        displayTweet(collection, index, $destination);
        index++;
    }
};

//http://stackoverflow.com/questions/19491336/get-url-parameter-jquery
var getUrlParameter = function(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
};