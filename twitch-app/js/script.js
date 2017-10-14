$("document").ready(function() {
    const users = [
    "freecodecamp", 
    "OgamingSC2", 
    "cretetion", 
    "ESL_SC2", 
    "DreamLeague", 
    "followKudes", 
    "noobs2ninjas"];
    function getIt() {
    users.forEach(function(user) {
        $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + user, function(data) {
            if (data.stream == null) { // IF OFFLINE
                $.getJSON("https://wind-bow.glitch.me/twitch-api/users/" + user, function(users) {
                    $(".container").append('<a class="is-off" target="_blank" href="https://go.twitch.tv/' + user + '">' +'<div class="box">' + '<img class="logo alt="logo" src="' + users.logo + '"' + "/>" + '<div class="offline"></div>' +'<p class="box-title">' + users.display_name + '</p>' + '</div>' + '</a>');
                });
            } else { // IF ONLINE
                $.getJSON("https://wind-bow.glitch.me/twitch-api/users/" + user, function(users) {
                    //console.log(data);
                    $(".container").append('<a class="is-on" target="_blank" href="' + data.stream.channel.url + '">' + '<div class="box">' + '<img class="logo alt="logo" src="' + users.logo + '"' + "/>" + '<div class="online"></div>' +'<p class="box-title">' + users.display_name + '</p>' + '<p class="box-description">' + data.stream.channel.status +'</p>' + '</div>' + '</a>');
                });
            }
        });
    });
}
    getIt();
    $(".al").click(function() {
    setTimeout(
        function() {
            $("a").remove();
            getIt();
            console.log("pressed");
        },
        500);
    });
    $(".on").click(function() {
        setTimeout(
            function() {
                $(".is-on").show();
                $(".is-off").hide();
                console.log("pressed");
            },
            500);
        });
    $(".of").click(function() {
        setTimeout(
            function() {
                $(".is-off").show();
                $(".is-on").hide();
                console.log("pressed");
            },
            500);
        });
});
// FILTER
