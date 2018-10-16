/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(()=> {

  function renderTweets(tweets) {
    $("#all-tweets").empty()
    tweets.forEach(function(tweet) {
      $("#all-tweets").prepend(createTweetElement(tweet)) 
    })
  };
  
  function createTweetElement(tweetData) {
    const $profileImg = $("<img>").attr("src", tweetData.user.avatars.regular).addClass("avatar")
    const $fullName = $(`<h3 class="full-name">`).text(tweetData.user.name)
    const $handle = $(`<span class="handle">`).text(tweetData.user.handle)
    const $header = $(`<header class="tweet-header">`).append($profileImg, $fullName, $handle)
  
    const $tweetContent = $(`<p class="tweet-content">`).text(tweetData.content.text)
    const $section = $(`<section class="middle">`).append($tweetContent)
  
    const $dateStamp = $(`<span class="date-stamp">`).text(moment(tweetData.created_at).startOf("hour").fromNow())
    const $footerIconShare = $(`<img class="footer-icons">`).attr("src", "/images/footer-icons/share.svg")
    const $footerIconStar = $(`<img class="footer-icons">`).attr("src", "/images/footer-icons/flag-star.svg")
    const $footerIconHeart = $(`<img class="footer-icons">`).attr("src", "/images/footer-icons/heart.svg")
    const $footer = $(`<footer class="tweet-footer">`).append($dateStamp, $footerIconShare, $footerIconStar, $footerIconHeart)
  
    const $tweet = $(`<article class="tweet-container">`)
    .append($header)
    .append($section)
    .append($footer)
    
    return $tweet;
  };

  // "chat" button in header to make tweet container toggle
  $(".compose-button").on("click", (function() {
    $(".new-tweet").slideToggle()
    $(".text-area").focus() // upon click of chat button, textarea active
  }));

  // AJAX request to submit tweets asynchonously
  $("#tweetform").on("submit", function(event) {
    event.preventDefault()
    const data = $("#tweetform").serialize() // converts object to string
    const currentValue = $(".text-area").val() // current number of characters entered in textarea
    const overCharacterCount = currentValue.length;

    const empty = currentValue === "";
    if (empty) {
      $("#error-empty, .error-empty").slideDown(400)
    } else if (overCharacterCount > 140) {
      $("#error-over-count, .error-over-count").slideDown(400)
    } else {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: data,
        success: function (result) {
          $('#error-empty').slideUp(500)
          loadTweets();
          $(".text-area").val("")
        }
      })
    }
  });

  function loadTweets() {
    $.get("/tweets", function (tweets) {
      renderTweets(tweets)
    })
  }
  loadTweets();
});

