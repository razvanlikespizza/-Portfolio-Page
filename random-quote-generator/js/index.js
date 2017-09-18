$(document).ready(function(){
  $("#content").click(function(mouse) {
    $.ajaxSetup({ cache: false });
    $.getJSON("https://quotesondesign.com/wp-json/posts?            filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
    json.forEach(function(val) {
      if (val.content.length < 200) {
      $(".twitter").css("visibility", "initial");
      $("#orders").html('<h1 class="quote">❝ </h1>' + val.content + "<h1>❞</h1>");
      var tweetMSG = val.content.replace("<p>", "").replace("</p>", "");
      var tweet = encodeURIComponent(tweetMSG);
    $(".hand a").attr("href", "https://twitter.com/intent/tweet?text=" + tweet);
      } else {
        console.log("quote is too long");
      }
      console.log("button pressed, you should get a new quote");
      });
    });
  });
});