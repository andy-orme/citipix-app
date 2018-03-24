$(function() {
  // event listener on the "update" button
  $("#submit-btn").on("click", function(e) {
    // preventDefault behaviour of the "update" button
    e.preventDefault();
    // store user input to "var = city"
    var city = $("#city-type").val().toLowerCase(); // collect the input value and make is lowercase

    // set up conditional statement
      // if (city "new york" || "new york city" || "nyc")
      if (city === "new york" || "new york city" || "nyc") {
        // use `$.attr();` and change background-img to "../images/nyc.jpg"
        $("body").attr("class", "nyc");
      }
      // else if (city "san francisco" || "sf" || "bay area")
      else if (city === "san francisco" || "sf" || "bay area") {
        // use `$.attr();` and change background-img to "../images/sf.jpg"
        $("body").attr("class", "sf");
      }
      // else if (city "los angeles" || "la" || "lax")
      else if (city === "los angeles" || "la" || "lax") {
        // use `$.attr();` and change background-img to "../images/la.jpg"
        $("body").attr("class", "la");
      }
      // else if (city "austin" || "atx")
      else if (city === "austin" || "atx") {
        // use `$.attr();` and change background-img to "../images/austin.jpg"
        $("body").attr("class", "austin");
      }
      // else if (city "sydney" || "syd")
      else if (city === "sydney" || "syd") {
        // use `$.attr();` and change background-img to "../images/sydney.jpg"
        $("body").attr("class", "sydney");
      }
      // else do nothing (maybe a message?)
      else {
        $("body").attr();
      }

  });    
});