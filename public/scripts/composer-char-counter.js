$(document).ready(function() {
  // look into "input" event
  $( ".text-area" ).on("input", function() {
    event.preventDefault();
    let charLength = 140 - ($(this).val().length);
    let overCharacterCount = ($(".text-area").val() > 140);
    $(".counter").text(charLength);
    if (charLength < 0) {
      $(".counter").addClass("counter-negative"); // turns counter red if over character count | don't need . if not a selector
      $("#tweet-button").attr("disabled", true);
    } else {
      $(".counter").removeClass("counter-negative");
      $("#error, #errormessage").slideUp()
      $("#tweet-button").attr("disabled", false);
    }
    if (overCharacterCount) {
      $("#error, #errormessage").slideDown(400, function() {
        $("#errormessage").text("too many characters!");
      })
    }
  })
});

// } else if($(".text-area").val().length > 140){
//   $('#error').show({complete: function() {
//     $('#errormessage').text("You're over character limit")
//     }
//   });

// } else if (!empty) {
//   $("#error, #errormessage").slideUp(400, function(){
//     $("#errormessage")
//   });
    
    // if (overCharCount) {
    //   $("#error, #errormessage").slideDown(400, function() {
    //     $("#errormessage").text("Exceed character limit: Ain't nobody got time for that!");
    //   })
    // }
      

