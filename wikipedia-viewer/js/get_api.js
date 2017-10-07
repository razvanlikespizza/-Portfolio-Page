$("document").ready(function() {
    function getWiki() {
        let theValue = document.getElementsByClassName("input-text")[0].value;
        if (theValue == "") {
            document.getElementsByClassName("error")[0].style.visibility = "initial";
        } else {
            document.getElementsByClassName("error")[0].style.visibility = "hidden";
        }
        $.getJSON("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=" + encodeURIComponent(theValue), function(data) {
        
        // CHECK FOR ERRORS BITCH
        if (data[1][0] == undefined) {
            document.getElementsByClassName("error")[0].style.visibility = "initial";
            document.getElementsByClassName("cases")[0].style.display = "none";
        } else {
            document.getElementsByClassName("cases")[0].style.display = "initial";
            document.getElementsByClassName("error")[0].style.visibility = "hidden";
        }
        for (let x = 0; x < data[1].length; x++) {
            console.log("loop running");
            $(".result" + x).html("<a target='_blank' href='" + data[3][x] + "'>" + "<div class='box'><h1 class='title'>" + data[1][x] + "</h1>" + "<p class='content'>" + data[2][x] + "</p>" + "</div>" + "</a>")
        }
        console.log(data);
        });
    }
    $('input[type=text]').on('keydown', function(e) {
        if (e.which == 13) {
            e.preventDefault();
            getWiki();
        }
    });
});