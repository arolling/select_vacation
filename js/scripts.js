$(document).ready(function() {
  var answerArray = [];
  var userInput;
  var userNameInput;

  $('form').submit(function(event) {
    for (var i = 1; i < 6; i++) {
      var userInput = $('select[name=question' + i + ']').val();
      answerArray.push(userInput);
    } //end loop that generates array

    var userNameInput = $('input[id=userName]').val();
    $(".hideme").fadeOut();
    // branching decision tree starts here
    console.log(userNameInput);

    $("div#answer").html('<h1>' + userNameInput + ', the vacation spot that is the best fit for you is:</h1>')

    if ((answerArray[0] === "cheap" || answerArray[0] === "thrifty") && answerArray[2] === "beach" && answerArray[3] === "yes" && answerArray[4] != "summer") {
      $("#haiti").fadeIn();
    } else if (answerArray[0] === "spendy" && answerArray[1] === "long" && answerArray[3] != "no" && answerArray[4] != "summer") {
      $("#australia").fadeIn();
    } else if (answerArray[0] != "cheap" && answerArray[1] != "short" && answerArray[2] === "sights" && answerArray[3] === "no") {
      $("#milan").fadeIn();
    } else if ((answerArray[0] === "cheap" || answerArray[0] === "thrifty") && answerArray[1] != "infinity" && answerArray[2] != "beach") {
      $("#montreal").fadeIn();
    } else if (answerArray[0] === "noBudget" && answerArray[1] === "long" && answerArray[2] === "sights" && answerArray[3] === "no") {
      $("#beijing").fadeIn();
    } else if ((answerArray[0] === "spendy" || answerArray[0] === "noBudget") && answerArray[1] === "infinity" && answerArray[2] != "events" && answerArray[3] != "no" && answerArray[4] != "summer") {
      $("#cairo").fadeIn();
    } else {
      $("#failure").fadeIn();
    }

    //branching decision tree ends here

    //THE BELOW IS BAD AND I SHOULD FEEL BAD
    // if (answerArray[0] === "1a") {
    //   $("#haiti").show();
    //   $("#montreal").show();
    // } else if (answerArray[0] === "1b") {
    //   $("#milan").show();
    // } else if (answerArray[0] === "1c") {
    //   $("#australia").show();
    // } else if (answerArray[0] === "1d") {
    //   if (answerArray[1] === "2a") {
    //     $("#haiti").show();
    //   } else if (answerArray[1] === "2b") {
    //     if (answerArray[2] === "3a") {
    //       if (answerArray[3] === "4a") {
    //         if (answerArray[4] === "5a") {
    //
    //         } else if (answerArray[4] === "5b") {
    //
    //         } else if (answerArray[4] === "5c") {
    //
    //         } else {
    //           alert("Sorry, no destinations found");
    //         }
    //       }
    //     } else if (answerArray[2] === "3b") {
    //       if (answerArray[3] === "4a") {
    //         if (answerArray[4] === "5a") {
    //
    //         } else if (answerArray[4] === "5b") {
    //
    //         } else if (answerArray[4] === "5c") {
    //
    //         } else {
    //           alert("Sorry, no destinations found");
    //         }
    //       }
    //
    //     } else if (answerArray[2] === "3c") {
    //       if (answerArray[3] === "4a") {
    //         if (answerArray[4] === "5a") {
    //
    //         } else if (answerArray[4] === "5b") {
    //
    //         } else if (answerArray[4] === "5c") {
    //
    //         } else {
    //           alert("Sorry, no destinations found");
    //         }
    //       }
    //
    //     } else {
    //       alert("Sorry, no destinations found");
    //     }
    //
    //   } else if (answerArray[1] === "2c") {
    //
    //   } else if (answerArray[1] === "2d") {
    //     $("#cairo").show();
    //   }
    //
    //
    // }

    // $("#beijing").show();
    // $("#cairo").show();
    // $("#haiti").show();
    // $("#montreal").show();
    // $("#australia").show();



    // $("#haiti, #milan").show();


    answerArray.length = 0;
    event.preventDefault();
  }); //end of submit function



  $('.btn-refresh').click(function() {
    window.location.reload();
  }); // end of reload function
}); //end of ready fx
