$("#submit-fighting-style").on("click", function() {
  // grab text from input

  var fightingStyle = $("#fighting-style").val();
  console.log(fightingStyle);

  // create new button w text

  var btn = $("<button></button>");

  // add text from input to new button

  btn.html("Click for " + fightingStyle + "!");

  // add AJAX event listener to new button

  btn.on("click", function() {
    var queryURL =
      "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" +
      fightingStyle;

    //
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(res) {
      //
      var imageUrl = res.data.image_original_url;

      //
      var kung_fuImage = $("<img>");

      //
      kung_fuImage.attr("src", imageUrl);
      kung_fuImage.attr("alt", "kung fu image");

      //
      $("#images").prepend(kung_fuImage);
    });
  });

  // append button to button container div

  $("#button-container").append(btn);
});

$("#kung_fu-button").on("click", function() {
  var queryURL =
    "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kung_fu";

  //
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    //
    .then(function(res) {
      //
      var imageUrl = res.data.image_original_url;

      //
      var kung_fuImage = $("<img>");

      //
      kung_fuImage.attr("src", imageUrl);
      kung_fuImage.attr("alt", "kung fu image");

      //
      $("#images").prepend(kung_fuImage);
    });
});

//
$("#judo-button").on("click", function() {
  console.log("JudoFlip!");
  //
  var queryURL =
    "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=judo";

  //
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    //
    .then(function(res) {
      //
      var imageUrl = res.data.image_original_url;

      //
      var judoImage = $("<img>");

      //
      judoImage.attr("src", imageUrl);
      judoImage.attr("alt", "judo image");

      //
      $("#images").prepend(judoImage);
    });
});
