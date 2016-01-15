$(document).ready(function() {
  var answerArray = [];
  var userInput;

  $('form').submit(function(event) {
    for (var i = 1; i < 6; i++) {
      var userInput = $('select[name=question' + i + ']').val();
      answerArray.push(userInput);

    } //end loop that generates array

    // alert(userInput);
    alert(answerArray);

    // branching decision tree starts here


    //branching decision tree ends here



    $("#haiti").show();



    event.preventDefault();
  }); //end of submit function



  $('.btn-refresh').click(function() {
    window.location.reload();
  }); // end of reload function
}); //end of ready fx
