/*Lighthouse Labs
* Week 4, Day 2
* tweeter
* Anil Patel*/

//register event handler to textarea element for the form inside of the .new-tweet section
//carefully craft the CSS selector that you will use to target the element with jQuery

$(document).ready(function() { 
  //console.log(); //ensure DOM loaded
  
  $('#tweet-text').on('keyup', function() { //# for id, keypress not backspace, key down
    //console.log(this); //check element being triggered
    const $parentSection = $(this).closest('form'); //.closest to the parent class 
    const $tweetCounter = $parentSection.find('.counter'); //class .counter, $ is for inside JQuery

    //console.log($tweetCounter);  // check 
    const tweetLength = $(this).val().length; //get tweet length # char
    const maxLength = 140;  
    $tweetCounter.html(maxLength - tweetLength); 

      if (tweetLength > maxLength) {
        $tweetCounter.addClass("countdown")
      } else {
        $tweetCounter.removeClass("countdown")
      }

  });

  

});

/* LECTURE

$(document).ready(function() {
  $('.alien-btn').on('click', function(event) {
    const $parentSection = $(event.target).closest('section');
    const $talkP = $parentSection.find('.talk');

    $talkP.append('💬');
  });

}); // document ready

*/
