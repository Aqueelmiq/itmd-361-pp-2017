(function($) {
  var bellSound = new Audio('media/doorbell.mp3');

  $('article').remove();
  $('main').append('<button id="bell"> Ring </button>');


})($);
