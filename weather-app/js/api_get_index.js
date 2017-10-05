$(document).ready(function(){
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
            $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long, function(data) {
            $.ajaxSetup({
                cache: false 
            });
            let temp = data.main.temp;
            let min_temp = data.main.temp_min;
            let max_temp = data.main.temp_max;
            $(".myInput").on("click", function(){
            $('.myInput').toggleClass('celcius');
            if ($(".myInput").hasClass('celcius')) {
                temp = data.main.temp;
                min_temp = data.main.temp_min;
                max_temp = data.main.temp_max;
                document.getElementsByClassName("info")[0].innerHTML = data.weather[0].main + " " + Math.round(temp) + " &#176;" + "C";
                document.getElementsByClassName("info-more")[0].innerHTML = "Today it's going to be a " + data.weather[0].description + ", with humidity of " + data.main.humidity + " and with a high of " + Math.floor(max_temp) + "&#176;C and a low of " + Math.floor(min_temp) + "&#176;C.";
                return;
            } else {
                temp = data.main.temp * 1.8 + 32;
                min_temp = data.main.temp_min * 1.8 + 32;
                max_temp = data.main.temp_max * 1.8 + 32;
                document.getElementsByClassName("info")[0].innerHTML = data.weather[0].main + " " + Math.round(temp) + " &#176;" + "F";
                document.getElementsByClassName("info-more")[0].innerHTML = "Today it's going to be a " + data.weather[0].description + ", with humidity of " + data.main.humidity + " and with a high of " + Math.floor(max_temp) + "&#176;F and a low of " + Math.floor(min_temp) + "&#176;F.";
                return;
                }
            });
            document.getElementsByClassName("title")[0].innerHTML = data.name + ", " + data.sys.country;
            document.getElementsByClassName("info")[0].innerHTML = data.weather[0].main + " " + Math.round(temp) + " &#176;" + "C";
            document.getElementsByClassName("info-more")[0].innerHTML = "Today it's going to be a " + data.weather[0].description + ", with humidity of " + data.main.humidity + " and with a high of " + Math.floor(max_temp) + "&#176;C and a low of " + Math.floor(min_temp) + "&#176;C.";
            // CHANGE BACKGROUND
            switch(data.weather[0].description) {
                case "few clouds":
                case "scattered clouds":
                case "broken clouds":
                case "overcast clouds":
                    $("body").removeClass().addClass("background-cloudy");
                    $(".icon").attr("src", "img/icons/cloud-edited.png");
                    break;
                case "clear sky":
                    $("body").removeClass().addClass("background-sunny");
                    $(".icon").attr("src", "img/icons/sun-edited.png");
                    $(".icon").attr("height", "151px");
                    $(".icon").attr("width", "151px");
                    break;
                case "rain":
                case "shower rain": 
                case "light intensity drizzle": 
                case "drizzle": 
                case "heavy intensity drizzle": 
                case "light intensity drizzle rain": 
                case "drizzle rain": 
                case "heavy intensity drizzle rain": 
                case "shower rain and drizzle":
                case "heavy shower rain and drizzle": 
                case "shower drizzle": 
                case "light rain": 
                case "moderate rain": 
                case "heavy intensity rain": 
                case "very heavy rain": 
                case "extreme rain": 
                case "freezing rain": 
                case "light intensity shower rain": 
                case "heavy intensity shower rain": 
                case "ragged shower rain": 
                case "storm":
                    $("body").removeClass().addClass("background-rainy");
                    $(".icon").attr("src", "img/icons/rainy-edited.png");
                    $(".icon").attr("height", "100px");
                    $(".icon").attr("width", "100px");
                    break;
                case "snow": 
                case "light snow": 
                case "heavy snow": 
                case "sleet": 
                case "shower sleet": 
                case "light rain and snow": 
                case "rain and snow": 
                case "light shower snow": 
                case "shower snow": 
                case "heavy shower snow":
                    $("body").removeClass().addClass("background-snowy");
                    $(".icon").attr("src", "img/icons/snow-edited.png");
                    $(".icon").attr("height", "100px");
                    $(".icon").attr("width", "113px");
                    break;
                case "windy": 
                case "wind": 
                case "hurricane": 
                case "tropical storm": 
                case "tornado": 
                case "light breeze": 
                case "gentle breeze": 
                case "moderate breeze": 
                case "fresh breeze": 
                case "strong breeze": 
                case "high wind: near gale": 
                case "gale": 
                case "severe gale":
                    $("body").removeClass().addClass("background-windy");
                    $(".icon").attr("src", "img/icons/windy-edited.png"); 
                    break;
                case "thunderstorm": 
                case "thunderstorm with light rain": 
                case "thunderstorm with rain": 
                case "thunderstorm with heavy rain": 
                case "light thunderstorm": 
                case "heavy thunderstorm": 
                case "ragged thunderstorm": 
                case "thunderstorm with light drizzle": 
                case "thunderstorm with drizzle": 
                case "thunderstorm with heavy drizzle":
                    $("body").removeClass().addClass("background-rainy");
                    $(".icon").attr("src", "img/icons/flashstorm-edited.png");
                    $(".icon").attr("height", "100px");
                    $(".icon").attr("width", "100px");
                    break;
                case "mist": 
                case "smoke": 
                case "haze": 
                case "sand: dust whirls": 
                case "fog": 
                case "sand": 
                case "dust": 
                case "volcanic ash": 
                case "squalls":
                    $("body").removeClass().addClass("background-mist");
                    $(".icon").attr("src", "img/icons/mist-edited.png");
                    break;
                default: 
                alert("FAIL. I CANT GET ITTTTTTT FUCK MEH");
            }
        });
    });
});
function searchIt() {
    var theValue = document.getElementsByClassName("enter-location")[0].value;
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + theValue + "&appid=a8e20edc05ac1e913f73595b47302c5c", function(data){
        let temp = Math.floor(data.main.temp - 273);
        let min_temp = data.main.temp_min - 273;
        let max_temp = data.main.temp_max - 273;
        document.getElementsByClassName("title")[0].innerHTML = data.name + ", " + data.sys.country;
        document.getElementsByClassName("info")[0].innerHTML = data.weather[0].main + " " + temp + " &#176;" + "C";
        document.getElementsByClassName("info-more")[0].innerHTML = "Today it's going to be a " + data.weather[0].description + ", with humidity of " + data.main.humidity + " and with a high of " + Math.floor(max_temp) + "&#176;C and a low of " + Math.floor(min_temp) + "&#176;C.";
        // CHANGE BACKGROUND
        switch(data.weather[0].description) {
            case "few clouds":
            case "scattered clouds":
            case "broken clouds":
            case "overcast clouds":
                $("body").removeClass().addClass("background-cloudy");
                $(".icon").attr("src", "img/icons/cloud-edited.png");
                $(".icon").attr("height", "104px");
                $(".icon").attr("width", "151px");
                break;
            case "clear sky":
                $("body").removeClass().addClass("background-sunny");
                $(".icon").attr("src", "img/icons/sun-edited.png");
                $(".icon").attr("height", "151px");
                $(".icon").attr("width", "151px");
                break;
            case "rain":
            case "shower rain": 
            case "light intensity drizzle": 
            case "drizzle": 
            case "heavy intensity drizzle": 
            case "light intensity drizzle rain": 
            case "drizzle rain": 
            case "heavy intensity drizzle rain": 
            case "shower rain and drizzle":
            case "heavy shower rain and drizzle": 
            case "shower drizzle": 
            case "light rain": 
            case "moderate rain": 
            case "heavy intensity rain": 
            case "very heavy rain": 
            case "extreme rain": 
            case "freezing rain": 
            case "light intensity shower rain": 
            case "heavy intensity shower rain": 
            case "ragged shower rain": 
            case "storm":
                $("body").removeClass().addClass("background-rainy");
                $(".icon").attr("src", "img/icons/rainy-edited.png");
                $(".icon").attr("height", "150px");
                $(".icon").attr("width", "150px");
                break;
            case "snow": 
            case "light snow": 
            case "heavy snow": 
            case "sleet": 
            case "shower sleet": 
            case "light rain and snow": 
            case "rain and snow": 
            case "light shower snow": 
            case "shower snow": 
            case "heavy shower snow":
                $("body").removeClass().addClass("background-snowy");
                $(".icon").attr("src", "img/icons/snow-edited.png");
                $(".icon").attr("height", "150px");
                $(".icon").attr("width", "163px");
                break;
            case "windy": 
            case "wind": 
            case "hurricane": 
            case "tropical storm": 
            case "tornado": 
            case "light breeze": 
            case "gentle breeze": 
            case "moderate breeze": 
            case "fresh breeze": 
            case "strong breeze": 
            case "high wind: near gale": 
            case "gale": 
            case "severe gale":
                $("body").removeClass().addClass("background-windy");
                $(".icon").attr("src", "img/icons/windy-edited.png"); 
                break;
            case "thunderstorm": 
            case "thunderstorm with light rain": 
            case "thunderstorm with rain": 
            case "thunderstorm with heavy rain": 
            case "light thunderstorm": 
            case "heavy thunderstorm": 
            case "ragged thunderstorm": 
            case "thunderstorm with light drizzle": 
            case "thunderstorm with drizzle": 
            case "thunderstorm with heavy drizzle":
                $("body").removeClass().addClass("background-rainy");
                $(".icon").attr("src", "img/icons/flash.png");
                $(".icon").attr("height", "120px");
                $(".icon").attr("width", "60px");
                break;
            case "mist": 
            case "smoke": 
            case "haze": 
            case "sand: dust whirls": 
            case "fog": 
            case "sand": 
            case "dust": 
            case "volcanic ash": 
            case "squalls":
                $("body").removeClass().addClass("background-mist");
                $(".icon").attr("src", "img/icons/mist-edited.png");
                $(".icon").attr("height", "100px");
                $(".icon").attr("width", "150px");
                break;
            default: 
            alert("FAIL. I CANT GET ITTTTTTT FUCK MEH");
        }
    });
    // a8e20edc05ac1e913f73595b47302c5c
}
$('input[type=text]').on('keydown', function(e) {
    if (e.which == 13) {
        searchIt();
        e.preventDefault();
    }
});
function getOut() {
    document.getElementsByClassName("alert")[0].style.display = "none";
    document.getElementsByClassName("alert")[0].style.visibility = "hidden";
}