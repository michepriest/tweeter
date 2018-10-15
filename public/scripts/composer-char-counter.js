$(document).ready(function() {
  // look into "input" event
  $( ".text-area" ).on("input", function() {
    event.preventDefault();
    let charCountdown = 140 - ($(this).val().length);
    // let overCharacterCount = ($(".text-area").val() > 140);
    $(".counter").text(charCountdown); // displays countdown number

    // if character count over 140...
    if (charCountdown < 0) {
      $(".counter").addClass("counter-negative"); // turns counter red if over character count | don't need . if not a selector
        } else {
      $(".counter").removeClass("counter-negative"); // once a character is entered into the textarea, counter no longer red
      $("#error-empty, error-empty").slideUp() // once a character is entered into the textarea, error message removed
      $("#error-over-count, error-over-count").slideUp()
    };
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
      

