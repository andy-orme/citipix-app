$(function() {
  // event listener on the "update" button
  $("#submit-btn").on("click", function(e) {
    // preventDefault behaviour of the "update" button
    e.preventDefault();
    // store user input to "var = city"
      // `$.val();`
      // `$.toLowerCase();`
      // `console.log(city);` to test effectiveness
    var city = $("#city-type").val().toLowerCase();
    console.log(city);

    // set up conditional statement

      // if (city "new york"  || "new york city" || "nyc")

        // use `$.attr();` and change background-img to "../images/nyc.jpg"

      // else if (city "san francisco"  || "sf" || "bay area")
      
        // use `$.attr();` and change background-img to "../images/sf.jpg"

      // else if (city "los angeles"  || "la" || "lax")
      
        // use `$.attr();` and change background-img to "../images/la.jpg"

      // else if (city "austin"  || "atx")
      
        // use `$.attr();` and change background-img to "../images/austin.jpg"

      // else if (city "sydney"  || "syd")
      
        // use `$.attr();` and change background-img to "../images/sydney.jpg"

      // else do nothing (maybe a message?)

  });    
});