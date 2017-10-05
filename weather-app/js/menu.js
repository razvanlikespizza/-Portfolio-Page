function arrowMoveHome() {
  let arrow = document.getElementById("selector");
  arrow.style.top = "10%";
  arrow.style.transform = "translateY(-10%)";
  document.getElementsByClassName("more-info")[0].style.visibility = "hidden";
  document.getElementsByClassName("settings")[0].style.visibility = "hidden";
  setTimeout(function(){
    document.getElementsByClassName("today-weather")[0].style.visibility = "initial";
    document.getElementsByClassName("more-info")[0].classList.remove("animated");
    document.getElementsByClassName("more-info")[0].classList.remove("fadeIn");
    document.getElementsByClassName("settings")[0].classList.remove("animated");
    document.getElementsByClassName("settings")[0].classList.remove("fadeIn");
    document.getElementsByClassName("today-weather")[0].className += " animated fadeIn";
  },1000);
}

function arrowMoveCalendar() {
  let arrow = document.getElementById("selector");
  arrow.style.top = "50%";
  arrow.style.transform = "translateY(-50%)";
  document.getElementsByClassName("today-weather")[0].style.visibility = "hidden";
  document.getElementsByClassName("settings")[0].style.visibility = "hidden";
  setTimeout(function(){
    document.getElementsByClassName("more-info")[0].style.visibility = "initial";
    document.getElementsByClassName("today-weather")[0].classList.remove("animated");
    document.getElementsByClassName("today-weather")[0].classList.remove("fadeIn");
    document.getElementsByClassName("settings")[0].classList.remove("animated");
    document.getElementsByClassName("settings")[0].classList.remove("fadeIn");
    document.getElementsByClassName("more-info")[0].className += " animated fadeIn";
  },1000);
}

function arrowMoveSettings() {
  let arrow = document.getElementById("selector");
  arrow.style.top = "90%";
  arrow.style.transform = "translateY(-90%)";
  document.getElementsByClassName("today-weather")[0].style.visibility = "hidden";
  document.getElementsByClassName("more-info")[0].style.visibility = "hidden";
  setTimeout(function(){
    document.getElementsByClassName("more-info")[0].classList.remove("animated");
    document.getElementsByClassName("more-info")[0].classList.remove("fadeIn");
    document.getElementsByClassName("today-weather")[0].classList.remove("animated");
    document.getElementsByClassName("today-weather")[0].classList.remove("fadeIn");
    document.getElementsByClassName("more-info")[0].classList.remove("animated");
    document.getElementsByClassName("more-info")[0].classList.remove("fadeIn");
    document.getElementsByClassName("settings")[0].className += " animated fadeIn";
    document.getElementsByClassName("settings")[0].style.visibility = "initial";
  },1000);
}