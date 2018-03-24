$(function() {
  // event listener on the "update" button
  $("#submit-btn").on("click", function(e) {
    // preventDefault behaviour of the "update" button
    e.preventDefault();
    // store user input to "var = city"
    var city = $("#city-type").val().toLowerCase(); // collect the input value and makes it lowercase
    
    // set up conditional statement
      // if (city "new york" || "new york city" || "nyc")
      if (city === "new york" || city === "new york city" || city === "nyc") {
        $("body").attr("class", "nyc"); // use `$.attr();` and change background-img to "../images/nyc.jpg"
      }
      // else if (city "san francisco" || "sf" || "bay area")
      else if (city === "san francisco" || city === "sf" || city === "bay area") {
        $("body").attr("class", "sf"); // use `$.attr();` and change background-img to "../images/sf.jpg"
      }
      // else if (city "los angeles" || "la" || "lax")
      else if (city === "los angeles" || city === "la" || city === "lax") {
        $("body").attr("class", "la"); // use `$.attr();` and change background-img to "../images/la.jpg"
      }
      // else if (city "austin" || "atx")
      else if (city === "austin" || city === "atx") {
        $("body").attr("class", "austin"); // use `$.attr();` and change background-img to "../images/austin.jpg"
      }
      // else if (city "sydney" || "syd")
      else if (city === "sydney" || city === "syd") {
        $("body").attr("class", "sydney"); // use `$.attr();` and change background-img to "../images/sydney.jpg"
      }
      else {
        $("body").attr(); // else do nothing (maybe a message?)
      }

  });    
});