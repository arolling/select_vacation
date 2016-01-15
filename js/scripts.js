$(document).ready(function() {
  var answerArray = [];
  var userInput;

  $('form').submit(function(event) {
    for (var i = 1; i < 6; i++) {
      var userInput = $('select[name=question' + i + ']').val();
      answerArray.push(userInput);

    } //end loop that generates array

    // alert(userInput);
    // alert(answerArray);
    $(".hideme").hide();
    // branching decision tree starts here

    if (answerArray[0] === "1a" && answerArray[1] === "2a" && answerArray[2] === "3b" && answerArray[3] === "4a" && answerArray[4] === "5b") {
      $("#haiti").show();
    } else if (answerArray[0] === "1c" && answerArray[1] === "2c" && answerArray[2] === "3b" && answerArray[3] === "4c" && answerArray[4] === "5b") {
      $("#australia").show();
    } else if (answerArray[0] === "1b" && answerArray[1] === "2b" && answerArray[2] === "3c" && answerArray[3] === "4b" && answerArray[4] === "5c") {
      $("#milan").show();
    } else if (answerArray[0] === "1a" && answerArray[1] === "2b" && answerArray[2] === "3a" && answerArray[3] === "4b" && answerArray[4] === "5a") {
      $("#montreal").show();
    } else if (answerArray[0] === "1d" && answerArray[1] === "2c" && answerArray[2] === "3c" && answerArray[3] === "4b" && answerArray[4] === "5c") {
      $("#beijing").show();
    } else if (answerArray[0] === "1c" && answerArray[1] === "2d" && answerArray[2] === "3c" && answerArray[3] === "4c" && answerArray[4] === "5b") {
      $("#cairo").show();
    } else {
      $("#failure").show();
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
