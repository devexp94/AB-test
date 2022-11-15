(function () {
  var debug = false;
  try {
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    var leftArrow =
      '<svg class="" viewBox="0 0 100 100"><path d="M54.4 4.2c2.5 2.5 2.5 6.2 0 8.8L23.7 43.6h70c3.7 0 6.2 2.5 6.2 6.2S97.4 56 93.7 56h-70l30.6 30.6c2.5 2.5 2.5 6.2 0 8.8-2.5 2.5-6.2 2.5-8.8 0L0 49.8 45.6 4.2c2.5-1.9 6.3-1.9 8.8 0z" class="arrow"></path></svg>';
    var rightArrow =
      '<svg class="" viewBox="0 0 100 100"><path d="M54.4 4.2c2.5 2.5 2.5 6.2 0 8.8L23.7 43.6h70c3.7 0 6.2 2.5 6.2 6.2S97.4 56 93.7 56h-70l30.6 30.6c2.5 2.5 2.5 6.2 0 8.8-2.5 2.5-6.2 2.5-8.8 0L0 49.8 45.6 4.2c2.5-1.9 6.3-1.9 8.8 0z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>';

    function init() {
      document.querySelectorAll('.carousel--rotator .carousel__tab h4').forEach(function (item, index) {
        item.insertAdjacentHTML('afterend', '<button class="lytx-icon"><span class="open">+</span><span class="close">-</span></button>');
        item.parentElement.insertAdjacentHTML('beforeend', '<a href="#">Learn more</a>');
      });
      document.querySelectorAll('.carousel--rotator .carousel__tab .lytx-icon').forEach(function (item, index) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          this.closest('.carousel__tab').classList.toggle('lytx-acc-open');
        });
      });

      document
        .querySelector('.carousel__tabs.rhythm--extra-large')
        .insertAdjacentHTML(
          'beforeend',
          '<button class="lytx-left-arrow">' + leftArrow + '</button><button class="lytx-right-arrow">' + rightArrow + '</button>'
        );

      document.querySelector('.lytx-left-arrow').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.carousel--rotator.rhythm--small .carousel__container .flickity-prev-next-button.previous').click();
      });

      document.querySelector('.lytx-right-arrow').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.carousel--rotator.rhythm--small .carousel__container .flickity-prev-next-button.next').click();
      });
    }

    waitForElement('.carousel--rotator .carousel__tab h4', init, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, 'error in ' + variation_name);
  }
})();
