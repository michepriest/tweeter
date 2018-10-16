"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {  // a "factory function", a function that creates an object and returns it
  return {
    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insert(newTweet, callback); // replaced line above with this line
    },

    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback) 
    }
  }
};



