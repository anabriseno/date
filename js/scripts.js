$(document).ready(function() {

  $("form#date").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("input#height").val());
    var hair = $("select#hair").val();

    if (height>60) {
      var soulmate = "Brad Pitt";
    } else {
      var soulmate = "Bradley Cooper"
    }

    if (hair === "blonde") {

    } else if (hair === "red") {
    } else  {

    }

    $("#answer").empty().append(soulmate);
    $("#answer").show();
  });
});
