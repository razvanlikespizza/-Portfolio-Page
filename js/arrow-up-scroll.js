$(document).ready(function(){
    var btt = $("#arrow");

    $(window).on("scroll", function() {
      var self = $(this),
          height = self.height(),
          top = self.scrollTop();

          if (top > height - 500) {
            if (!btt.is(":visible")) {
              btt.show();
            }
          } else {
              btt.hide();
          }
    });
});
