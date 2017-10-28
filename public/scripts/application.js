var app = (function() {
    var counter = 0;
    var countContainer = document.querySelector('.count');
    countContainer.textContent = counter;

    getListingClick();

    function increaseCounter() {
      counter++;
    }

    function getListingClick() {
      var btnClicked;

      var listingButtons = document.querySelectorAll('.listing button');
      for(var i = 0; i < listingButtons.length; i++) {
        listingButtons[i].onclick = function( event ) {
          event = event || window.event;
          var target = event.target || event.srcElement;

          if( !isNaN( target.id ) ) {
            increaseCounter();

            countContainer.textContent = counter;
          }
        }
      }
    }
  }
)();
