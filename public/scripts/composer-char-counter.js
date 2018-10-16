$(document).ready(function() {
  // look into "input" event
  $( ".text-area" ).on("input", function() {
    event.preventDefault()
    let charCountdown = 140 - ($(this).val().length)
    $(".counter").text(charCountdown) // displays countdown number

    // if character count over 140...
    if (charCountdown < 0) {
      $(".counter").addClass("counter-negative") // turns counter red if over character count | don't need . if not a selector
    } else {
      $(".counter").removeClass("counter-negative") // once a character is entered into the textarea, counter no longer red
      $("#error-empty, error-empty").slideUp() // once a character is entered into the textarea, error message removed
      $("#error-over-count, error-over-count").slideUp() // once a character is entered into the textarea, error message removed
    }
  })
});


      

