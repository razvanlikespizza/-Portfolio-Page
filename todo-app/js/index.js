var inputButton = document.getElementsByClassName("inputButton")[0];
var input = document.getElementsByTagName("input")[0];
var list = document.getElementsByClassName("list")[0];
var removeBtn = document.getElementsByClassName("remove");
var completed = document.getElementsByClassName("completed");
var text = document.getElementsByClassName("text");
inputButton.addEventListener("click", function(){
  input.classList.toggle("opacity");
  setTimeout(function(){
    input.classList.toggle("hide-input");
  }, 300);
});

input.addEventListener("keypress", function(e){
  if (e.which === 13) {
    var box = '<div class="box"><div class="completed"><span class="fa fa-check"></span> Completed</div><div class="text">' + input.value + '</div><div class="remove"><span class="fa fa-times"></span> Remove</div></div>';
    list.insertAdjacentHTML('beforeend', box);
    input.blur();
    input.value = "";
  }
});
$(".list").on("click", ".box .remove", function(){
  $(this).parent().fadeOut(300, function(){
    $(this).remove();
  });
});
$(".list").on("click", ".box .text", function(){
  $(this).toggleClass("text-opacity");
  $(this).parent().children(":first").toggleClass("display-complete");
});
