(function($) {
  var bellSound = new Audio('media/doorbell.mp3');

  $('article').remove();
  $('main').append('<button id="bell"> Ring </button>');

  function ring() {
    bellSound.play();
  }
  $('#bell').on('click', ring);

  $(document).keypress(function(event) {
    if(event.key === 'd') {
      ring();
    }
  });

})($);
