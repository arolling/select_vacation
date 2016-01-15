$(document).ready(function() {
  var answerArray = [];
  var userInput;

  $('form').submit(function(event) {
    for (var i = 1; i < 6; i++) {
      var userInput = $('select[name=question' + i + ']').val();
      answerArray.push(userInput);
      alert(userInput);
      alert(answerArray);
    }



    event.preventDefault();
  }); //end of submit function



  $('.btn-refresh').click(function() {
    window.location.reload();
  }); // end of reload function
}); //end of ready fx
